'use client';

import React, { RefObject, useEffect, useId, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import Image from 'next/image';
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  User,
  BookOpen,
  Star,
  ArrowRight,
  X,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useOutsideClick } from '@/hooks/useOutsideClick';

export interface ContentItem {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
  category: string;
  featured: boolean;
  [key: string]: any;
}

interface ExpandableContentCardProps {
  items: ContentItem[];
  type: 'event' | 'news' | 'activity';
  className?: string;
}

const ExpandableContentCard: React.FC<ExpandableContentCardProps> = ({
  items,
  type,
  className = '',
}) => {
  const [active, setActive] = useState<ContentItem | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setActive(null);
      }
    }

    if (active) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [active]);

  useOutsideClick(ref as RefObject<HTMLElement>, () => setActive(null));

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      Academic: 'bg-blue-100 text-blue-800 border-blue-200',
      Cultural: 'bg-purple-100 text-purple-800 border-purple-200',
      Career: 'bg-green-100 text-green-800 border-green-200',
      Sports: 'bg-orange-100 text-orange-800 border-orange-200',
      Achievement: 'bg-yellow-100 text-yellow-800 border-yellow-200',
      Innovation: 'bg-indigo-100 text-indigo-800 border-indigo-200',
      'Student Success': 'bg-pink-100 text-pink-800 border-pink-200',
      Collaboration: 'bg-teal-100 text-teal-800 border-teal-200',
      Leadership: 'bg-red-100 text-red-800 border-red-200',
      Arts: 'bg-rose-100 text-rose-800 border-rose-200',
      Community: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    };
    return colors[category] || 'bg-gray-100 text-gray-800 border-gray-200';
  };

  const renderEventDetails = (item: ContentItem) => (
    <div className='space-y-3 text-sm text-gray-600'>
      <div className='flex items-center gap-2'>
        <Clock className='w-4 h-4 text-[#023e8a]' />
        <span>{item.time}</span>
      </div>
      <div className='flex items-center gap-2'>
        <MapPin className='w-4 h-4 text-[#023e8a]' />
        <span>{item.location}</span>
      </div>
      <div className='flex items-center gap-2'>
        <Users className='w-4 h-4 text-[#023e8a]' />
        <span>{item.attendees} attendees</span>
      </div>
    </div>
  );

  const renderNewsDetails = (item: ContentItem) => (
    <div className='space-y-3 text-sm text-gray-600'>
      <div className='flex items-center gap-2'>
        <User className='w-4 h-4 text-[#023e8a]' />
        <span>{item.author}</span>
      </div>
      <div className='flex items-center gap-2'>
        <BookOpen className='w-4 h-4 text-[#023e8a]' />
        <span>{item.readTime}</span>
      </div>
    </div>
  );

  const renderActivityDetails = (item: ContentItem) => (
    <div className='space-y-3 text-sm text-gray-600'>
      <div className='flex items-center gap-2'>
        <Users className='w-4 h-4 text-[#023e8a]' />
        <span>{item.participants} participants</span>
      </div>
      <div className='flex items-center gap-2'>
        <Calendar className='w-4 h-4 text-[#023e8a]' />
        <span>Registration: {item.registration}</span>
      </div>
    </div>
  );

  const getActionButton = () => {
    switch (type) {
      case 'event':
        return 'Register Now';
      case 'news':
        return 'Read More';
      case 'activity':
        return 'Join Now';
      default:
        return 'Learn More';
    }
  };

  const getExpandedContent = (item: ContentItem) => (
    <div className='space-y-4'>
      <div className='flex items-center gap-2 text-sm text-gray-500'>
        <Calendar className='w-4 h-4 text-[#023e8a]' />
        <span>{item.date}</span>
      </div>

      <div className='space-y-3'>
        {type === 'event' && renderEventDetails(item)}
        {type === 'news' && renderNewsDetails(item)}
        {type === 'activity' && renderActivityDetails(item)}
      </div>

      <div className='pt-4'>
        <h4 className='font-semibold text-gray-900 mb-2'>About this {type}</h4>
        <p className='text-gray-600 leading-relaxed'>{item.description}</p>
      </div>

      <div className='pt-4'>
        <Button className='w-full bg-[#023e8a] hover:bg-[#023e8a]/90 text-white'>
          {getActionButton()}
          <ArrowRight className='w-4 h-4 ml-2' />
        </Button>
      </div>
    </div>
  );

  return (
    <>
      {/* Overlay */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='fixed inset-0 bg-black/20 h-full w-full z-10'
          />
        )}
      </AnimatePresence>

      {/* Expanded Card */}
      <AnimatePresence>
        {active ? (
          <div className='fixed inset-0 grid place-items-center z-[100] p-4 sm:p-6'>
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.05 }}
              className='flex absolute top-2 right-2 sm:top-4 sm:right-4 lg:top-8 lg:right-8 items-center justify-center bg-white rounded-full h-8 w-8 sm:h-10 sm:w-10 shadow-lg z-20'
              onClick={() => setActive(null)}
            >
              <X className='h-4 w-4 sm:h-5 sm:w-5 text-gray-700' />
            </motion.button>

            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className='w-full max-w-[95vw] sm:max-w-[600px] max-h-[90vh] flex flex-col bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl'
            >
              {/* Image */}
              <motion.div
                layoutId={`image-${active.title}-${id}`}
                className='relative flex-shrink-0'
              >
                <Image
                  src={active.image}
                  alt={active.title}
                  width={600}
                  height={400}
                  className='w-full h-48 sm:h-64 md:h-80 object-cover'
                />

                {/* Overlay with badges */}
                <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent' />

                {/* Featured Badge */}
                {active.featured && (
                  <div className='absolute top-2 right-2 sm:top-4 sm:right-4'>
                    <Badge className='bg-[#023e8a] text-white border-0 flex items-center gap-1 text-xs sm:text-sm'>
                      <Star className='w-3 h-3 sm:w-4 sm:h-4' />
                      <span className='hidden sm:inline'>Featured</span>
                    </Badge>
                  </div>
                )}

                {/* Category Badge */}
                <div className='absolute top-2 left-2 sm:top-4 sm:left-4'>
                  <Badge
                    className={`${getCategoryColor(active.category)} border text-xs sm:text-sm`}
                  >
                    {active.category}
                  </Badge>
                </div>
              </motion.div>

              {/* Content */}
              <div className='p-4 sm:p-6 flex-1 overflow-y-auto'>
                <div className='flex justify-between items-start mb-4'>
                  <div className='flex-1'>
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className='text-xl sm:text-2xl font-bold text-gray-900 mb-2'
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className='text-gray-600 text-base sm:text-lg'
                    >
                      {active.description}
                    </motion.p>
                  </div>
                </div>

                <div className='pt-4 relative'>
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className='text-gray-600 text-sm md:text-base flex flex-col items-start gap-4'
                  >
                    {getExpandedContent(active)}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>

      {/* Image Grid */}
      <div
        className={`grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 sm:gap-3 md:gap-4 ${className}`}
      >
        {items.map(item => (
          <motion.div
            layoutId={`card-${item.title}-${id}`}
            key={`card-${item.title}-${id}`}
            onClick={() => setActive(item)}
            className='group relative cursor-pointer overflow-hidden rounded-lg sm:rounded-xl aspect-square'
          >
            {/* Image */}
            <motion.div
              layoutId={`image-${item.title}-${id}`}
              className='relative w-full h-full'
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className='object-cover transition-transform duration-500 group-hover:scale-110'
                sizes='(max-width: 480px) 100vw, (max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, (max-width: 1280px) 20vw, 16vw'
              />

              {/* Hover Overlay with Title */}
              <div className='absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end'>
                <div className='p-2 sm:p-3 md:p-4 w-full'>
                  <h3 className='text-white font-semibold text-xs sm:text-sm md:text-base line-clamp-2 leading-tight'>
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Category Badge */}
              <div className='absolute top-1 left-1 sm:top-2 sm:left-2'>
                <Badge
                  className={`${getCategoryColor(item.category)} text-xs border-0`}
                >
                  <span className='hidden xs:inline'>{item.category}</span>
                  <span className='xs:hidden'>{item.category.charAt(0)}</span>
                </Badge>
              </div>

              {/* Featured Badge */}
              {item.featured && (
                <div className='absolute top-1 right-1 sm:top-2 sm:right-2'>
                  <Badge className='bg-[#023e8a] text-white border-0 text-xs'>
                    <Star className='w-3 h-3' />
                  </Badge>
                </div>
              )}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default ExpandableContentCard;
