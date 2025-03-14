import { motion } from 'framer-motion';
import { CodeBracketIcon, CpuChipIcon, BoltIcon } from '@heroicons/react/24/outline';

const features = [
  {
    title: 'Advanced Development Tools',
    description: 'Powerful tools and features to enhance your development workflow.',
    icon: CodeBracketIcon,
  },
  {
    title: 'AI-Powered Assistance',
    description: 'Intelligent suggestions and automated solutions at your fingertips.',
    icon: CpuChipIcon,
  },
  {
    title: 'Lightning Fast Performance',
    description: 'Optimized for speed and efficiency in every aspect of development.',
    icon: BoltIcon,
  },
];

const Features = () => {
  return (
    <div className="py-24 bg-secondary">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Powerful Features</h2>
          <p className="text-xl text-gray-400">Everything you need to build amazing applications</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl bg-primary/50 backdrop-blur-sm border border-gray-800"
            >
              <feature.icon className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features; 