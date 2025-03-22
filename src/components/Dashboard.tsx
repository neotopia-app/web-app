import { motion } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon, HomeIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';

// Mock data - replace with your actual data source
const notes = [
  { id: 1, title: 'Meeting Notes', content: 'Discussion about project timeline...', date: '2024-03-14' },
  { id: 2, title: 'Ideas', content: 'New feature suggestions...', date: '2024-03-13' },
  { id: 3, title: 'Tasks', content: 'Priority items for next sprint...', date: '2024-03-12' },
  { id: 4, title: 'Research', content: 'Market analysis findings...', date: '2024-03-11' },
  { id: 5, title: 'Meeting Notes', content: 'Discussion about project timeline...', date: '2024-03-14' },
  { id: 6, title: 'Ideas', content: 'New feature suggestions...', date: '2024-03-13' },
  { id: 7, title: 'Tasks', content: 'Priority items for next sprint...', date: '2024-03-12' },
  { id: 8, title: 'Research', content: 'Market analysis findings...', date: '2024-03-11' },
];

const todos = [
  { id: 1, title: 'Complete project documentation', priority: 'high', dueDate: '2024-03-15', completed: false },
  { id: 2, title: 'Review pull requests', priority: 'medium', dueDate: '2024-03-14', completed: true },
  { id: 3, title: 'Update dependencies', priority: 'low', dueDate: '2024-03-16', completed: false },
  { id: 4, title: 'Schedule team meeting', priority: 'high', dueDate: '2024-03-14', completed: false },
];

const Dashboard = () => {
  const navigate = useNavigate();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollAmount = 300; // Adjust this value to control scroll distance
    const newScrollPosition = container.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
    
    container.scrollTo({
      left: newScrollPosition,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen bg-primary">
      {/* Navigation Bar */}
      <div className="bg-secondary/50 backdrop-blur-sm border-b border-gray-800">
        <div className="container-custom py-4">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <HomeIcon className="w-5 h-5" />
            <span>Back to Home</span>
          </button>
        </div>
      </div>

      {/* Notes Section (20%) */}
      <div className="h-[20vh] bg-secondary relative overflow-hidden">
        <div className="container-custom h-full">
          <h2 className="text-2xl font-bold mb-6 pt-6">Recent Notes</h2>
          <div className="relative">
            <div
              ref={scrollContainerRef}
              className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide px-12"
            >
              {notes.map((note) => (
                <motion.div
                  key={note.id}
                  whileHover={{ scale: 1.05 }}
                  className="flex-shrink-0 w-64 bg-primary/50 backdrop-blur-sm rounded-lg p-4 border border-gray-800"
                >
                  <h3 className="font-semibold mb-2">{note.title}</h3>
                  <p className="text-gray-400 text-sm mb-2">{note.content}</p>
                  <span className="text-xs text-gray-500">{note.date}</span>
                </motion.div>
              ))}
            </div>
            <div className="absolute inset-0 pointer-events-none flex items-center justify-between">
              <div className="absolute inset-0 pointer-events-none flex items-center justify-between px-4">
                <motion.button
                  whileHover={{
                    scale: 1.12,
                    backgroundColor: 'rgba(36, 47, 63, 0.9)',
                  }}
                  style={{ transformOrigin: 'center' }}
                  onClick={() => scroll('left')}
                  className="pointer-events-auto bg-transparent backdrop-blur-sm p-3 rounded-full border border-transparent hover:border-gray-700 shadow-lg"
                >
                  <ChevronLeftIcon className="w-6 h-6 text-white/50 hover:text-white transition-colors" />
                </motion.button>
                <motion.button
                  whileHover={{
                    scale: 1.12,
                    backgroundColor: 'rgba(36, 47, 63, 0.9)',
                  }}
                  style={{ transformOrigin: 'center' }}
                  onClick={() => scroll('right')}
                  className="pointer-events-auto bg-transparent backdrop-blur-sm p-3 rounded-full border border-transparent hover:border-gray-700 shadow-lg"
                >
                  <ChevronRightIcon className="w-6 h-6 text-white/50 hover:text-white transition-colors" />
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Todos Section (80%) */}
      <div className="h-[80vh] bg-primary">
        <div className="container-custom h-full py-8">
          <h2 className="text-2xl font-bold mb-6">Todo List</h2>
          <div className="grid gap-4">
            {todos.map((todo) => (
              <motion.div
                key={todo.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-secondary/50 backdrop-blur-sm rounded-lg p-4 border border-gray-800"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <input
                      type="checkbox"
                      checked={todo.completed}
                      className="w-5 h-5 rounded border-gray-600 text-accent focus:ring-accent"
                    />
                    <div>
                      <h3
                        className={`font-medium ${
                          todo.completed ? 'line-through text-gray-500' : ''
                        }`}
                      >
                        {todo.title}
                      </h3>
                      <div className="flex items-center gap-4 mt-1">
                        <span
                          className={`text-sm px-2 py-1 rounded-full ${
                            todo.priority === 'high'
                              ? 'bg-red-500/20 text-red-400'
                              : todo.priority === 'medium'
                              ? 'bg-yellow-500/20 text-yellow-400'
                              : 'bg-green-500/20 text-green-400'
                          }`}
                        >
                          {todo.priority}
                        </span>
                        <span className="text-sm text-gray-400">
                          Due: {todo.dueDate}
                        </span>
                      </div>
                    </div>
                  </div>
                  <button className="text-gray-400 hover:text-blue-400 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                    </svg>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 