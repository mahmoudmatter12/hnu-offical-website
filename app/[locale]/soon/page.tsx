'use client';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import {
  Mail,
  Clock,
  Calendar,
  Send,
  University,
  BookOpen,
  Users,
  Globe,
} from 'lucide-react';

export default function ComingSoon() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Set launch date to 30 days from now
  const calculateTimeLeft = () => {
    const launchDate = new Date();
    launchDate.setDate(launchDate.getDate() + 30);

    const now = new Date();
    const difference = launchDate.getTime() - now.getTime();

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email) {
      // Here you would typically send the email to your backend
      console.log('Email submitted:', email);
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <div className='relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900'>
      {/* Animated Background Elements */}
      <div className='absolute inset-0 bg-grid-pattern opacity-10'></div>

      {/* Floating particles */}
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
        className='absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl opacity-10'
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
        className='absolute bottom-1/4 right-1/4 w-72 h-72 bg-indigo-500 rounded-full filter blur-3xl opacity-10'
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

      {/* Floating Icons */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className='absolute top-32 left-1/4 text-blue-400/40'
      >
        <University size={28} />
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
        <BookOpen size={24} />
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
        <Users size={22} />
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
        <Globe size={26} />
      </motion.div>

      {/* Main Content */}
      <div className='relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12 text-center'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='max-w-4xl mx-auto'
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='inline-flex items-center justify-center px-6 py-2 mb-6 text-sm font-medium text-white bg-blue-600 rounded-full'
          >
            <Clock className='w-4 h-4 mr-2' />
            Coming Soon
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className='text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl mb-6'
          >
            Something{' '}
            <span className='bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent'>
              Amazing
            </span>{' '}
            Is Coming
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className='max-w-2xl mx-auto mb-10 text-lg text-blue-100'
          >
            We&apos;re working hard to bring you an incredible new experience.
            Our team is putting the finishing touches on a revolutionary
            platform that will transform education.
          </motion.p>

          {/* Countdown Timer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className='grid grid-cols-2 gap-4 mb-12 sm:grid-cols-4 sm:gap-6'
          >
            <div className='p-4 bg-blue-800/30 backdrop-blur-sm rounded-xl border border-blue-700/30'>
              <div className='text-3xl font-bold text-white sm:text-4xl'>
                {timeLeft.days}
              </div>
              <div className='text-sm text-blue-200'>Days</div>
            </div>
            <div className='p-4 bg-blue-800/30 backdrop-blur-sm rounded-xl border border-blue-700/30'>
              <div className='text-3xl font-bold text-white sm:text-4xl'>
                {timeLeft.hours}
              </div>
              <div className='text-sm text-blue-200'>Hours</div>
            </div>
            <div className='p-4 bg-blue-800/30 backdrop-blur-sm rounded-xl border border-blue-700/30'>
              <div className='text-3xl font-bold text-white sm:text-4xl'>
                {timeLeft.minutes}
              </div>
              <div className='text-sm text-blue-200'>Minutes</div>
            </div>
            <div className='p-4 bg-blue-800/30 backdrop-blur-sm rounded-xl border border-blue-700/30'>
              <div className='text-3xl font-bold text-white sm:text-4xl'>
                {timeLeft.seconds}
              </div>
              <div className='text-sm text-blue-200'>Seconds</div>
            </div>
          </motion.div>

          {/* Newsletter Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className='max-w-md mx-auto mb-12'
          >
            <h3 className='mb-4 text-xl font-semibold text-white'>
              Get notified when we launch
            </h3>

            {subscribed ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className='px-4 py-3 text-green-100 bg-green-800/30 rounded-lg border border-green-700/30 backdrop-blur-sm'
              >
                <div className='flex items-center justify-center'>
                  <Send className='w-5 h-5 mr-2' />
                  Thank you! We&apos;ll notify you when we launch.
                </div>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className='flex flex-col gap-3 sm:flex-row'
              >
                <div className='flex-1'>
                  <label htmlFor='email' className='sr-only'>
                    Email address
                  </label>
                  <div className='relative'>
                    <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                      <Mail className='w-5 h-5 text-blue-300' />
                    </div>
                    <input
                      type='email'
                      id='email'
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      className='block w-full py-3 pl-10 pr-4 text-white placeholder-blue-300 bg-blue-800/30 border border-blue-700/30 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 backdrop-blur-sm'
                      placeholder='Enter your email'
                      required
                    />
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type='submit'
                  className='px-6 py-3 font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors'
                >
                  Notify Me
                </motion.button>
              </form>
            )}
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className='inline-flex items-center px-4 py-2 text-sm text-blue-200 bg-blue-900/30 rounded-lg border border-blue-800/30 backdrop-blur-sm'
          >
            <Calendar className='w-4 h-4 mr-2' />
            Expected Launch: {new Date().getDate() + 30}/
            {new Date().getMonth() + 1}/{new Date().getFullYear()}
          </motion.div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className='relative z-10 pb-8 text-center'
      >
        <p className='text-sm text-blue-300/70'>
          © {new Date().getFullYear()} Helwan National University. All rights
          reserved.
        </p>
      </motion.div>
    </div>
  );
}
