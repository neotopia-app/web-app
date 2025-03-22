import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-primary relative overflow-hidden">
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Welcome to{' '}
            <span
              className={
                'bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text'
              }
            >
              Neotopia
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto">
            Experience the future of web development with our innovative
            platform. Built for developers who demand excellence.
          </p>
          <div className="flex gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
              onClick={() => navigate('/dashboard')}
            >
              Get Started
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 border border-gray-600 rounded-lg font-medium hover:bg-gray-800 transition-colors"
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/30 rounded-full blur-[120px]" />
    </div>
  );
};

export default Hero;
