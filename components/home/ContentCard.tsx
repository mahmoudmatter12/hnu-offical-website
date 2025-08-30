'use client';

import React from 'react';
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
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

export interface ContentItem {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
  category: string;
  featured: boolean;
  [key: string]: any; // For additional properties like time, location, author, etc.
}

interface ContentCardProps {
  item: ContentItem;
  type: 'event' | 'news' | 'activity';
  className?: string;
}

const ContentCard: React.FC<ContentCardProps> = ({
  item,
  type,
  className = '',
}) => {
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

  const renderEventDetails = () => (
    <div className='space-y-2 text-sm text-gray-600'>
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

  const renderNewsDetails = () => (
    <div className='space-y-2 text-sm text-gray-600'>
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

  const renderActivityDetails = () => (
    <div className='space-y-2 text-sm text-gray-600'>
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

  return (
    <Card
      className={`group overflow-hidden bg-white hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${className}`}
    >
      {/* Image Section - Highlighted */}
      <div className='relative overflow-hidden'>
        <div className='aspect-[4/3] relative overflow-hidden'>
          <Image
            src={item.image}
            alt={item.title}
            fill
            className='object-cover group-hover:scale-110 transition-transform duration-700'
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          />
          {/* Overlay with gradient */}
          <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />

          {/* Featured Badge */}
          {item.featured && (
            <div className='absolute top-3 right-3'>
              <Badge className='bg-[#023e8a] text-white border-0 flex items-center gap-1'>
                <Star className='w-3 h-3' />
                Featured
              </Badge>
            </div>
          )}

          {/* Category Badge */}
          <div className='absolute top-3 left-3'>
            <Badge className={`${getCategoryColor(item.category)} border`}>
              {item.category}
            </Badge>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <CardContent className='p-6'>
        {/* Date */}
        <div className='flex items-center gap-2 text-sm text-gray-500 mb-3'>
          <Calendar className='w-4 h-4 text-[#023e8a]' />
          <span>{item.date}</span>
        </div>

        {/* Title */}
        <h3 className='text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-[#023e8a] transition-colors duration-300'>
          {item.title}
        </h3>

        {/* Description */}
        <p className='text-gray-600 leading-relaxed mb-4 line-clamp-3'>
          {item.description}
        </p>

        {/* Type-specific details */}
        <div className='mb-4'>
          {type === 'event' && renderEventDetails()}
          {type === 'news' && renderNewsDetails()}
          {type === 'activity' && renderActivityDetails()}
        </div>
      </CardContent>

      {/* Footer with Action Button */}
      <CardFooter className='p-6 pt-0'>
        <Button
          className='w-full bg-[#023e8a] hover:bg-[#023e8a]/90 text-white group-hover:bg-[#023e8a] transition-all duration-300'
          size='lg'
        >
          {getActionButton()}
          <ArrowRight className='w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300' />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ContentCard;
