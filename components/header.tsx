'use client';

import { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
  Menu,
  Globe,
  X,
  Home,
  Settings,
  Phone,
  GraduationCap,
  Building2,
} from 'lucide-react';
import Image from 'next/image';

const Header = () => {
  const t = useTranslations('navigation');
  const headerT = useTranslations('header');
  const locale = useLocale();
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { href: '/', label: t('home'), icon: Home },
    { href: '/about', label: t('about'), icon: Building2 },
    { href: '/services', label: t('services'), icon: Settings },
    { href: '/contact', label: t('contact'), icon: Phone },
  ];

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦' },
  ];

  const nextLanguage = languages.find(lang => lang.code !== locale);

  const handleLanguageChange = () => {
    // This will be handled by the Link component
    setIsMobileMenuOpen(false);
  };

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/' || pathname === `/${locale}`;
    }
    return pathname === href || pathname === `/${locale}${href}`;
  };

  return (
    <>
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100'
            : 'bg-white/90 backdrop-blur-sm'
          }`}
      >
        <div className='w-full px-6 sm:px-8 lg:px-12'>
          <div className='flex h-28 items-center justify-between'>
            {/* Logo and University Name */}
            <div className='flex items-center space-x-6 flex-shrink-0'>
              <div className='relative transition-transform duration-300 ease-out hover:-translate-y-0.5'>
                <div className='h-20 w-20 rounded-3xl flex items-center justify-center shadow-2xl border-4 border-white transition-shadow duration-300 hover:shadow-[0_12px_24px_-8px_rgba(0,0,0,0.25)]'>
                  <Image
                    src='/logo.png'
                    alt='HNU Logo'
                    width={100}
                    height={100}
                    className='rounded-2xl transition-transform duration-500 ease-out will-change-transform'
                  />
                </div>
                <div className='absolute -top-3 -right-3 h-6 w-6 bg-green-500 rounded-full border-4 border-white shadow-lg animate-pulse'></div>
                <div className='absolute -bottom-2 -left-2 h-4 w-4 bg-blue-500 rounded-full border-2 border-white shadow-md'></div>
              </div>
              <div className='hidden sm:block'>
                <h1 className='text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent leading-tight'>
                  {headerT('university_name')}
                </h1>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className='hidden lg:flex items-center space-x-1 flex-1 justify-center mx-8'>
              {navigationItems.map(item => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`group relative px-4 py-3 rounded-xl transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 flex-shrink-0 ${isActive(item.href)
                        ? 'text-blue-700 font-semibold bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 shadow-sm'
                        : 'text-gray-700 hover:text-blue-700'
                      }`}
                  >
                    <div className='flex items-center space-x-2'>
                      <Icon
                        className={`h-4 w-4 transition-transform duration-300 ease-out group-hover:scale-110 ${isActive(item.href)
                            ? 'text-blue-600'
                            : 'text-gray-500'
                          }`}
                      />
                      <span className='font-medium text-sm whitespace-nowrap'>
                        {item.label}
                      </span>
                    </div>
                    {isActive(item.href) && (
                      <div className='absolute bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-blue-600 rounded-full shadow-sm transition-all duration-300'></div>
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right Section */}
            <div className='flex items-center space-x-4 flex-shrink-0'>
              {/* Language Toggle Button - Desktop */}
              <Link
                href={pathname}
                locale={nextLanguage?.code || 'en'}
                onClick={handleLanguageChange}
              >
                <Button
                  variant='outline'
                  size='lg'
                  className='hidden md:flex items-center space-x-3 px-6 py-3 border-2 border-gray-200 hover:border-blue-400 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300 rounded-xl shadow-sm hover:shadow-md'
                >
                  <Globe className='h-5 w-5 text-gray-600' />
                  <span className='text-xl'>{nextLanguage?.flag}</span>
                  <span className='font-semibold text-gray-700 text-base'>
                    {nextLanguage?.code.toUpperCase()}
                  </span>
                </Button>
              </Link>

              {/* Mobile Menu Button */}
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button
                    variant='ghost'
                    size='lg'
                    className='lg:hidden p-3 h-12 w-12 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300 ease-out hover:-translate-y-0.5'
                  >
                    <Menu className='h-6 w-6 text-gray-700' />
                  </Button>
                </SheetTrigger>
                <SheetContent side='right' className='w-full sm:w-[450px] p-0 will-change-transform transition-transform duration-300 ease-out'>
                  <div className='flex flex-col h-full'>
                    {/* Header */}
                    <SheetHeader className='px-8 py-6 border-b border-gray-100'>
                      <div className='flex items-center justify-between'>
                        <SheetTitle className='text-left text-xl font-bold text-gray-900'>
                          {headerT('menu')}
                        </SheetTitle>
                        <Button
                          variant='ghost'
                          size='sm'
                          onClick={() => setIsMobileMenuOpen(false)}
                          className='h-10 w-10 p-0 rounded-xl hover:bg-gray-100'
                        >
                          <X className='h-5 w-5' />
                        </Button>
                      </div>
                    </SheetHeader>

                    {/* Navigation */}
                    <div className='flex-1 px-8 py-8'>
                      <nav className='space-y-3'>
                        {navigationItems.map(item => {
                          const Icon = item.icon;
                          return (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className={`flex items-center space-x-4 p-5 rounded-2xl transition-all duration-300 ${isActive(item.href)
                                  ? 'bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 border-2 border-blue-200 shadow-sm'
                                  : 'text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-700'
                                }`}
                            >
                              <div
                                className={`p-3 rounded-xl transition-colors duration-300 ${isActive(item.href)
                                    ? 'bg-blue-100 text-blue-600'
                                    : 'bg-gray-100 text-gray-600'
                                  }`}
                              >
                                <Icon className='h-6 w-6' />
                              </div>
                              <span className='font-semibold text-xl'>
                                {item.label}
                              </span>
                              {isActive(item.href) && (
                                <div className='ml-auto w-3 h-3 bg-blue-600 rounded-full shadow-sm'></div>
                              )}
                            </Link>
                          );
                        })}
                      </nav>

                      {/* Language Button */}
                      <div className='mt-10 pt-8 border-t border-gray-100'>
                        <h3 className='text-sm font-semibold text-gray-500 mb-6 uppercase tracking-wider'>
                          {headerT('language')}
                        </h3>
                        <Link
                          href={pathname}
                          locale={nextLanguage?.code || 'en'}
                          onClick={() => {
                            handleLanguageChange();
                            setIsMobileMenuOpen(false);
                          }}
                          className='w-full'
                        >
                          <Button
                            variant='outline'
                            size='lg'
                            className='w-full justify-start p-5 h-auto rounded-2xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:border-blue-300 border-2'
                          >
                            <span className='text-3xl mr-4'>
                              {nextLanguage?.flag}
                            </span>
                            <div className='text-left'>
                              <div className='font-semibold text-lg'>
                                {nextLanguage?.name}
                              </div>
                              <div className='text-sm opacity-90 font-medium'>
                                {nextLanguage?.code.toUpperCase()}
                              </div>
                            </div>
                          </Button>
                        </Link>
                      </div>
                    </div>

                    {/* Footer */}
                    <div className='px-8 py-6 border-t border-gray-100 bg-gradient-to-r from-gray-50 to-blue-50'>
                      <div className='text-center'>
                        <div className='flex items-center justify-center space-x-3 mb-3'>
                          <div className='h-8 w-8 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-lg'>
                            <GraduationCap className='h-4 w-4 text-white' />
                          </div>
                          <span className='font-bold text-gray-900 text-lg'>
                            HNU
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      {/* Spacer to prevent content from going under fixed header */}
      <div className='h-28'></div>
    </>
  );
};

export default Header;
