'use client';
import { motion } from 'framer-motion';

const DecorativeWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='relative w-full overflow-hidden'>
      {/* Main content */}
      {children}

      {/* Enhanced decorative elements */}

      {/* Animated circles with different effects */}
      <div className='absolute top-20 left-10 w-20 h-20 border border-white/20 rounded-full animate-ping'></div>
      <div className='absolute bottom-20 right-10 w-16 h-16 border border-white/20 rounded-full animate-pulse'></div>

      {/* Additional circles with varied sizes and positions */}
      <div className='absolute top-1/4 right-20 w-12 h-12 border border-blue-300/30 rounded-full animate-pulse'></div>
      <div className='absolute bottom-1/3 left-16 w-10 h-10 border border-indigo-300/25 rounded-full animate-ping'></div>
      <div className='absolute top-40 right-1/4 w-14 h-14 border border-purple-300/20 rounded-full animate-pulse'></div>
      <div className='absolute bottom-44 left-1/3 w-8 h-8 border border-cyan-300/30 rounded-full animate-ping'></div>

      {/* Floating geometric shapes */}
      <motion.div
        className='absolute top-28 right-28 w-16 h-16 bg-blue-400/10 rotate-45'
        animate={{
          y: [0, -15, 0],
          rotate: [45, 90, 45],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className='absolute bottom-40 left-40 w-12 h-12 bg-indigo-400/10 rounded-lg'
        animate={{
          y: [0, 20, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Animated lines */}
      <motion.div
        className='absolute top-1/2 left-1/4 w-24 h-1 bg-gradient-to-r from-transparent via-blue-400/20 to-transparent'
        animate={{
          scaleX: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className='absolute bottom-1/4 right-1/3 w-1 h-24 bg-gradient-to-b from-transparent via-indigo-400/20 to-transparent'
        animate={{
          scaleY: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
      />

      {/* Floating dots */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className='absolute w-2 h-2 bg-blue-400/30 rounded-full'
          style={{
            top: `${15 + i * 12}%`,
            left: `${5 + i * 3}%`,
          }}
          animate={{
            y: [0, -10, 0],
            x: [0, 5, 0],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.5,
          }}
        />
      ))}

      {/* Right side dots */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className='absolute w-2 h-2 bg-indigo-400/30 rounded-full'
          style={{
            top: `${15 + i * 12}%`,
            right: `${5 + i * 3}%`,
          }}
          animate={{
            y: [0, 10, 0],
            x: [0, -5, 0],
          }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.7,
          }}
        />
      ))}

      {/* Bottom dots */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className='absolute w-3 h-3 bg-purple-400/20 rounded-full'
          style={{
            bottom: `${10 + i * 5}%`,
            left: `${20 + i * 10}%`,
          }}
          animate={{
            y: [0, 8, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 6 + i,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.4,
          }}
        />
      ))}

      {/* Animated gradients */}
      <motion.div
        className='absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-blue-500/5 to-transparent pointer-events-none'
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <motion.div
        className='absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-l from-indigo-500/5 to-transparent pointer-events-none'
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, delay: 2 }}
      />

      {/* Subtle grid pattern */}
      <div className='absolute inset-0 bg-grid-pattern opacity-[0.03]'></div>
    </div>
  );
};

export default DecorativeWrapper;
