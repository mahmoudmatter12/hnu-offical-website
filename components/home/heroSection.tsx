'use client';
import Image from 'next/image';
import React, { useState, useRef } from 'react';

export interface HeroSectionProps {
  title: string;
  description: string;
  video: string;
  logo: string;
  image?: string;
}

const HeroSection = ({
  title,
  description,
  video,
  logo,
  image,
}: HeroSectionProps) => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      });
    }
  };

  return (
    <section
      id='home'
      className='relative w-full min-h-screen flex items-center justify-center overflow-hidden'
    >
      {/* Background Video/Image */}
      <div className='absolute inset-0 w-full h-full'>
        {video && (
          <video
            ref={videoRef}
            src={video}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            className='w-full h-full object-cover'
          />
        )}
        {!video && image && (
          <Image
            src={image}
            alt='Hero background'
            fill
            className='object-cover'
            priority
          />
        )}
      </div>

      {/* Mute/Unmute Button */}
      {video && (
        <button
          onClick={toggleMute}
          className='absolute top-6 right-6 z-20 p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300 group'
          aria-label={isMuted ? 'Unmute video' : 'Mute video'}
        >
          {isMuted ? (
            <svg
              className='w-6 h-6 text-white'
              fill='currentColor'
              viewBox='0 0 24 24'
            >
              <path d='M16.5 12c0-1.77-1.02-3.31-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z' />
            </svg>
          ) : (
            <svg
              className='w-6 h-6 text-white'
              fill='currentColor'
              viewBox='0 0 24 24'
            >
              <path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.31-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z' />
            </svg>
          )}
        </button>
      )}

      {/* Overlay */}
      <div className='absolute inset-0 bg-gradient-to-b from-[#023e8a]/80 via-[#023e8a]/60 to-[#023e8a]/80' />

      {/* Content Container */}
      <div className='relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center'>
        {/* Logo */}
        <div className='mb-8 animate-fade-in-down'>
          <Image
            src={logo}
            alt='Company Logo'
            width={0}
            height={0}
            sizes='(max-width: 640px) 240px, (max-width: 768px) 160px, (max-width: 1024px) 200px, 240px'
            className='w-40 h-40 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-60 xl:h-60 mx-auto drop-shadow-2xl'
            priority
          />
        </div>

        {/* Main Title */}
        <h1 className='text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in-up'>
          {title}
        </h1>

        {/* Description */}
        <p className='text-lg sm:text-xl lg:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200'>
          {description}
        </p>

        {/* Call to Action Buttons */}
        <div className='flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-400'>
          <button
            onClick={() => scrollToSection('programs')}
            className='px-8 py-4 bg-white text-[#023e8a] font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl'
          >
            Discover All Programs
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className='px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#023e8a] transition-all duration-300 transform hover:scale-105'
          >
            Learn More
          </button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className='absolute top-20 left-10 w-20 h-20 border border-white/20 rounded-full animate-ping'></div>
      <div className='absolute bottom-20 right-10 w-16 h-16 border border-white/20 rounded-full animate-pulse'></div>
    </section>
  );
};

export default HeroSection;
