'use client';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import {
  Home,
  ArrowLeft,
  Building2,
  Mail,
  Phone,
  HelpCircle,
} from 'lucide-react';
import { FaUniversity, FaGraduationCap, FaBook, FaUsers } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function NotFound() {
  const [showHelpOptions, setShowHelpOptions] = useState(false);
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    const animation = animate(count, 404, { duration: 2 });
    return animation.stop;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='relative flex min-h-screen w-full flex-col items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-4 overflow-hidden'>
      {/* Animated Background with Particles */}
      <div className='absolute inset-0 bg-grid-pattern opacity-10'></div>

      {/* Floating particles background */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className='absolute w-2 h-2 bg-blue-400 rounded-full opacity-20'
          initial={{
            x:
              Math.random() *
              (typeof window !== 'undefined' ? window.innerWidth : 1000),
            y:
              Math.random() *
              (typeof window !== 'undefined' ? window.innerHeight : 1000),
          }}
          animate={{
            x: [
              null,
              Math.random() *
                (typeof window !== 'undefined' ? window.innerWidth : 1000),
            ],
            y: [
              null,
              Math.random() *
                (typeof window !== 'undefined' ? window.innerHeight : 1000),
            ],
          }}
          transition={{
            duration: Math.random() * 20 + 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
      ))}

      {/* Animated gradient orbs */}
      <motion.div
        className='absolute top-1/4 left-1/4 w-64 h-64 bg-blue-300 rounded-full filter blur-3xl opacity-20'
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className='absolute bottom-1/4 right-1/4 w-72 h-72 bg-indigo-300 rounded-full filter blur-3xl opacity-20'
        animate={{
          scale: [1.2, 1, 1.2],
          x: [0, -40, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Floating Icons with varied animations */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className='absolute top-32 left-1/4 text-blue-400/40'
      >
        <FaUniversity size={28} />
      </motion.div>

      <motion.div
        animate={{
          y: [0, 15, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0.5,
        }}
        className='absolute bottom-32 right-1/4 text-blue-500/40'
      >
        <FaGraduationCap size={24} />
      </motion.div>

      <motion.div
        animate={{
          y: [0, -12, 0],
          rotate: [0, 8, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
        className='absolute top-1/2 left-16 text-blue-300/40'
      >
        <FaBook size={22} />
      </motion.div>

      <motion.div
        animate={{
          y: [0, 18, 0],
          rotate: [0, -8, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1.5,
        }}
        className='absolute top-1/3 right-16 text-indigo-400/40'
      >
        <FaUsers size={26} />
      </motion.div>

      <div className='relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto'>
        {/* Logo Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
          className='mb-8'
        >
          <Image
            src='/logo.png'
            alt='Helwan National University Logo'
            width={150}
            height={150}
            className='mx-auto drop-shadow-lg'
          />
        </motion.div>

        {/* Animated 404 Number */}
        <motion.div
          className='mb-4 text-9xl font-bold bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent'
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
        >
          <motion.span>{rounded}</motion.span>
        </motion.div>

        {/* 404 Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className='mb-6 flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-700 px-6 py-3 text-sm font-semibold text-white shadow-lg'
        >
          <Building2 className='h-4 w-4' />
          Page Not Found
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className='text-4xl font-bold tracking-tight text-slate-800 sm:text-5xl md:text-6xl mb-6'
        >
          Oops! Lost in the{' '}
          <motion.span
            className='bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent'
            animate={{ backgroundPosition: ['0%', '100%'] }}
            transition={{
              repeat: Infinity,
              repeatType: 'reverse',
              duration: 3,
            }}
            style={{
              backgroundSize: '200% auto',
            }}
          >
            Digital Campus
          </motion.span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className='text-lg text-slate-600 mb-8 max-w-2xl'
        >
          The page you&apos;re looking for seems to have wandered off. It might
          have been moved, deleted, or perhaps you&apos;ve entered a URL that
          doesn&apos;t exist in our digital university.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className='flex flex-col sm:flex-row gap-4 w-full max-w-md mb-8'
        >
          <Link href='/' className='flex-1'>
            <motion.div
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className='flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-700 px-6 py-3.5 text-white font-medium shadow-lg transition-all hover:shadow-xl'
            >
              <Home className='h-5 w-5' />
              <span>Home Page</span>
            </motion.div>
          </Link>

          <button onClick={() => window.history.back()} className='flex-1'>
            <motion.div
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className='flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-slate-700 font-medium border border-slate-200 shadow-lg transition-all hover:bg-slate-50 hover:border-slate-300 hover:shadow-xl'
            >
              <ArrowLeft className='h-5 w-5' />
              <span>Go Back</span>
            </motion.div>
          </button>
        </motion.div>

        {/* Help Section */}
        <motion.div
          className='w-full max-w-md'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setShowHelpOptions(!showHelpOptions)}
            className='flex items-center justify-center gap-2 mx-auto text-slate-500 hover:text-blue-600 transition-colors mb-4'
          >
            <HelpCircle size={18} />
            <span>Need help?</span>
          </motion.button>

          {showHelpOptions && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className='bg-white rounded-xl p-4 shadow-lg border border-slate-100'
            >
              <p className='text-slate-600 mb-3'>Contact our support team:</p>
              <div className='flex flex-col gap-2'>
                <a
                  href='mailto:support@university.edu'
                  className='flex items-center gap-2 text-blue-600 hover:text-blue-700'
                >
                  <Mail size={16} />
                  <span>support@university.edu</span>
                </a>
                <a
                  href='tel:+1234567890'
                  className='flex items-center gap-2 text-blue-600 hover:text-blue-700'
                >
                  <Phone size={16} />
                  <span>+1 (234) 567-890</span>
                </a>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Search suggestion */}
        <motion.div
          className='mt-6 text-sm text-slate-500 max-w-md'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <p>
            Try using the search function or visit our{' '}
            <Link href='/' className='text-blue-600 hover:underline'>
              site map
            </Link>
          </p>
        </motion.div>
      </div>

      {/* Subtle background animation */}
      <motion.div
        className='absolute inset-0 bg-gradient-to-br from-transparent via-blue-50/30 to-transparent'
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'linear',
        }}
      />
    </div>
  );
}
