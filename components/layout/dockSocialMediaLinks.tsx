'use client';
import { socialMediaLinks } from '@/data';
import React, { useState } from 'react';
import { useLocale } from 'next-intl';
import {
  Facebook,
  Linkedin,
  Instagram,
  Twitter,
  Youtube,
  Share2,
} from 'lucide-react';
import { FaTelegram, FaTiktok } from 'react-icons/fa';

function DockSocialMediaLinks() {
  const [isOpen, setIsOpen] = useState(false);
  const locale = useLocale();
  const isRTL = locale === 'ar';
  const { facebook, linkedin, instagram, twitter, youtube, tiktok, telegram } =
    socialMediaLinks;

  const socialLinks = [
    {
      name: 'Facebook',
      url: facebook,
      icon: Facebook,
      color: 'hover:bg-blue-600',
    },
    {
      name: 'LinkedIn',
      url: linkedin,
      icon: Linkedin,
      color: 'hover:bg-blue-700',
    },
    {
      name: 'Instagram',
      url: instagram,
      icon: Instagram,
      color: 'hover:bg-pink-600',
    },
    {
      name: 'Twitter',
      url: twitter,
      icon: Twitter,
      color: 'hover:bg-blue-400',
    },
    { name: 'YouTube', url: youtube, icon: Youtube, color: 'hover:bg-red-600' },
    { name: 'TikTok', url: tiktok, icon: FaTiktok, color: 'hover:bg-black' },
    {
      name: 'Telegram',
      url: telegram,
      icon: FaTelegram,
      color: 'hover:bg-blue-500',
    },
  ].filter(link => link.url); // Only show links that have URLs

  const toggleDock = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`fixed z-50 flex flex-col gap-3 ${
        isRTL ? 'left-6 bottom-6' : 'right-6 bottom-6'
      }`}
    >
      {/* Social Media Links - shown when dock is open */}
      {isOpen && (
        <div className='flex flex-col gap-3'>
          {socialLinks.map((link, index) => {
            const IconComponent = link.icon;
            return (
              <a
                key={link.name}
                href={link.url}
                target='_blank'
                rel='noopener noreferrer'
                className={`
                                    group relative flex items-center justify-center w-14 h-14 
                                    bg-white/90 backdrop-blur-sm rounded-full shadow-lg 
                                    border border-gray-200/50 transition-all duration-300 
                                    ${link.color} hover:scale-110 hover:shadow-xl
                                    ${isRTL ? 'hover:translate-x-2' : 'hover:-translate-x-2'}
                                `}
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: 'fadeInUp 0.6s ease-out forwards',
                }}
                title={link.name}
              >
                {/* Icon */}
                <IconComponent
                  className='w-6 h-6 text-gray-700 transition-all duration-300 
                                               group-hover:text-white group-hover:scale-125'
                />

                {/* Tooltip */}
                <div
                  className={`absolute px-3 py-2 bg-gray-900 text-white text-sm rounded-lg 
                                              opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none
                                              whitespace-nowrap shadow-lg ${
                                                isRTL
                                                  ? 'left-full ml-3'
                                                  : 'right-full mr-3'
                                              }`}
                >
                  {link.name}
                  <div
                    className={`absolute top-1/2 transform -translate-y-1/2 w-0 h-0 
                                                  border-t-4 border-t-transparent border-b-4 border-b-transparent ${
                                                    isRTL
                                                      ? 'right-full border-r-4 border-r-gray-900'
                                                      : 'left-full border-l-4 border-l-gray-900'
                                                  }`}
                  ></div>
                </div>
              </a>
            );
          })}
        </div>
      )}

      {/* Toggle Button with Icon and Arrow */}
      <button
        onClick={toggleDock}
        className='flex items-center justify-center w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 
                          backdrop-blur-sm rounded-full shadow-lg border border-blue-400/50 text-white
                          hover:from-blue-600 hover:to-blue-700 transition-all duration-300 hover:scale-105 
                          cursor-pointer group shadow-blue-500/25'
        title={isOpen ? 'Hide social media' : 'Show social media'}
      >
        <div className='flex flex-col items-center gap-1'>
          <Share2 className='w-5 h-5' />
        </div>
      </button>
    </div>
  );
}

export default DockSocialMediaLinks;
