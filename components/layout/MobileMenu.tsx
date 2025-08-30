'use client';

import { Link } from '@/i18n/navigation';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { FaTimes, FaGraduationCap, FaGlobe } from 'react-icons/fa';
import Image from 'next/image';

interface NavigationItem {
  href: string;
  label: string;
  submenu?: Array<{ href: string; label: string }>;
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navigationItems: NavigationItem[];
  isActive: (href: string) => boolean;
  pathname: string;
  nextLanguage?: { code: string; name: string; flag: string };
  onLanguageChange: () => void;
  headerT: (key: string) => string;
}

const MobileMenu = ({
  isOpen,
  onClose,
  navigationItems,
  isActive,
  pathname,
  nextLanguage,
  onLanguageChange,
  headerT,
}: MobileMenuProps) => {
  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent
        side='right'
        className='w-full bg-white/95 backdrop-blur-sm sm:w-[450px] p-0'
      >
        <div className='flex flex-col h-full'>
          {/* Header */}
          <SheetHeader className='px-6 py-6 border-b border-gray-100 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'>
            <div className='flex items-center justify-between'>
              <div className='flex items-center space-x-3'>
                <div className='relative'>
                  <div className='h-10 w-10 rounded-full flex items-center justify-center shadow-lg border-2 border-white bg-white overflow-hidden'>
                    <Image
                      src='/logo2.png'
                      alt='HNU Logo'
                      width={36}
                      height={36}
                      className='w-full h-full object-cover rounded-full'
                    />
                  </div>
                  <div className='absolute -top-1 -right-1 h-2 w-2 bg-blue-500 rounded-full border border-white shadow-sm animate-pulse'></div>
                </div>
                <div>
                  <SheetTitle className='text-left text-lg font-bold text-gray-900'>
                    {headerT('menu')}
                  </SheetTitle>
                  <p className='text-xs text-gray-600 font-medium'>
                    HNU University
                  </p>
                </div>
              </div>
              <Button
                variant='ghost'
                size='sm'
                onClick={onClose}
                className='h-10 w-10 p-0 rounded-xl hover:bg-white/50 transition-colors'
              >
                <FaTimes className='h-5 w-5 text-gray-600' />
              </Button>
            </div>
          </SheetHeader>

          {/* Navigation */}
          <div className='flex-1 px-6 py-6 overflow-y-auto'>
            <Accordion type='single' collapsible className='w-full'>
              {navigationItems.map((item, index) => (
                <AccordionItem
                  key={item.href}
                  value={`item-${index}`}
                  className='border-none'
                >
                  {item.submenu ? (
                    <>
                      <AccordionTrigger
                        className={`p-4 rounded-2xl transition-all duration-300 hover:bg-blue-50/50 ${
                          isActive(item.href)
                            ? 'bg-blue-100/70 text-blue-700 border border-blue-200'
                            : 'text-gray-700 hover:text-blue-700'
                        }`}
                      >
                        <span className='font-semibold text-lg text-left'>
                          {item.label}
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className='pt-2'>
                        <div className='ml-4 space-y-2'>
                          {item.submenu.map(sub => (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              onClick={onClose}
                              className='block p-3 rounded-xl text-gray-600 hover:bg-blue-50 hover:text-blue-700 transition-all duration-300 border-l-2 border-gray-200 hover:border-blue-300 bg-gray-50/50'
                            >
                              <span className='font-medium text-base'>
                                {sub.label}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </AccordionContent>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className={`flex items-center justify-between p-4 rounded-2xl transition-all duration-300 ${
                        isActive(item.href)
                          ? 'bg-blue-100/70 text-blue-700 border border-blue-200'
                          : 'text-gray-700 hover:bg-blue-50/50 hover:text-blue-700'
                      }`}
                    >
                      <span className='font-semibold text-lg'>
                        {item.label}
                      </span>
                      {isActive(item.href) && (
                        <div className='w-3 h-3 bg-blue-500 rounded-full shadow-sm'></div>
                      )}
                    </Link>
                  )}
                </AccordionItem>
              ))}
            </Accordion>

            <Separator className='my-8' />

            {/* Language Section */}
            <div className='space-y-4'>
              <div className='flex items-center space-x-2'>
                <FaGlobe className='h-4 w-4 text-gray-500' />
                <h3 className='text-sm font-semibold text-gray-600 uppercase tracking-wider'>
                  {headerT('language')}
                </h3>
              </div>

              <Link
                href={pathname}
                locale={nextLanguage?.code || 'en'}
                onClick={() => {
                  onLanguageChange();
                  onClose();
                }}
                className='w-full'
              >
                <Button
                  variant='outline'
                  size='lg'
                  className='w-full justify-start p-4 h-auto rounded-2xl hover:bg-blue-50/50 hover:border-blue-300 border-2 bg-white/80 backdrop-blur-sm transition-all duration-300'
                >
                  <div className='flex items-center space-x-3'>
                    <span className='text-2xl'>{nextLanguage?.flag}</span>
                    <div className='text-left'>
                      <div className='font-semibold text-base text-gray-800'>
                        {nextLanguage?.name}
                      </div>
                      <div className='text-xs text-gray-500 font-medium'>
                        {nextLanguage?.code.toUpperCase()}
                      </div>
                    </div>
                  </div>
                </Button>
              </Link>
            </div>
          </div>

          {/* Footer */}
          <div className='px-6 py-6 border-t border-gray-100 bg-gradient-to-br from-gray-50 via-blue-50/30 to-indigo-50/30'>
            <div className='text-center space-y-3'>
              <div className='flex items-center justify-center space-x-2'>
                <div className='h-8 w-8 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-md'>
                  <FaGraduationCap className='h-4 w-4 text-white' />
                </div>
                <span className='font-bold text-gray-800 text-lg'>HNU</span>
              </div>
              <p className='text-sm text-gray-600 font-medium'>
                {headerT('university_name')}
              </p>
              <Badge
                variant='outline'
                className='text-xs text-gray-500 border-gray-300'
              >
                Excellence in Education
              </Badge>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
