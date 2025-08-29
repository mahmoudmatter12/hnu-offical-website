'use client';

import { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import {
  FaPhone,
  FaEnvelope,
  FaClock,
  FaFacebook,
  FaLinkedin,
  FaBars,
  FaGlobe,
} from 'react-icons/fa';
import MobileMenu from './MobileMenu';

function Header2() {
  const t = useTranslations('navigation');
  const headerT = useTranslations('header');
  const locale = useLocale();
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Helper to get current locale and base pathةش
  const currentLocale = locale;
  const basePath = pathname?.replace(/^\/(en|ar)/, '') || '/';

  const navigationItems = [
    { href: basePath, label: t('home') },
    {
      href: `${basePath}/about`,
      label: t('about'),
      submenu: [
        { href: '/about/president', label: headerT("University's president") },
        { href: '/about/university', label: headerT('About the university') },
      ],
    },
    {
      href: `${basePath}/Faculties & Programs`,
      label: t('faculties_and_programs'),
      submenu: [
        { href: '/Faculties & Programs/business', label: headerT('Business') },
        { href: '/Faculties & Programs/law', label: headerT('Law') },
        {
          href: '/Faculties & Programs/engineering',
          label: headerT('Engineering'),
        },
        {
          href: `${basePath}/Faculties & Programs/computer-science-engineering`,
          label: headerT('Computer Science & Engineering'),
        },
        {
          href: `${basePath}/Faculties & Programs/science`,
          label: headerT('Science'),
        },
        {
          href: `${basePath}/Faculties & Programs/medicine`,
          label: headerT('Medicine'),
        },
        {
          href: `${basePath}/Faculties & Programs/dentistry`,
          label: headerT('Dentistry'),
        },
        {
          href: `${basePath}/Faculties & Programs/applied-health-sciences-technology`,
          label: headerT('Applied Health Sciences Technology'),
        },
      ],
    },
    { href: `${basePath}/FAQ`, label: t('FAQ') },
    { href: `${basePath}/media`, label: t('media') },
    { href: `${basePath}/contact`, label: t('contact') },
  ];

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦' },
  ];

  const nextLanguage = languages.find(lang => lang.code !== currentLocale);

  const handleLanguageChange = () => {
    setIsMobileMenuOpen(false);
  };

  const isActive = (href: string) => {
    if (href === basePath) {
      return (
        pathname === basePath || pathname === `/${currentLocale}${basePath}`
      );
    }
    return pathname === href || pathname === `/${currentLocale}${href}`;
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'shadow-lg' : ''
          }`}
      >
        <div className='relative'>
          {/* Top Bar */}
          <div className='bg-slate-900 text-white text-sm flex justify-between items-center px-4 sm:px-6 py-2'>
            {/* Left side: contact info */}
            <div className='hidden md:flex gap-4 lg:gap-6'>
              <div className='flex items-center gap-2'>
                <FaPhone className='text-blue-400 text-xs' />
                <span className='text-xs'>0123456789 - 0123456789</span>
              </div>
              <div className='flex items-center gap-2'>
                <FaEnvelope className='text-blue-400 text-xs' />
                <span className='text-xs'>info@info.edu.eg</span>
              </div>
              <div className='flex items-center gap-2'>
                <FaClock className='text-blue-400 text-xs' />
                <span className='text-xs'>Sat - Thu: 9 AM - 4 PM</span>
              </div>
            </div>

            {/* Right side: socials + language */}
            <div className='flex items-center gap-3 lg:gap-4'>
              <Badge
                variant='secondary'
                className='bg-blue-900/50 text-blue-200 border-blue-700/50 text-xs'
              >
                {headerT('FOLLOW US')}
              </Badge>
              <a
                href='https://facebook.com'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-blue-400 transition-colors p-1 rounded'
              >
                <FaFacebook className='text-sm' />
              </a>
              <a
                href='https://linkedin.com'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-blue-400 transition-colors p-1 rounded'
              >
                <FaLinkedin className='text-sm' />
              </a>
            </div>

            {/* Language Button */}
            <div className='flex justify-center items-center'>
              <Link
                href={pathname}
                locale={nextLanguage?.code || 'en'}
                onClick={handleLanguageChange}
              >
                <Button
                  variant='outline'
                  size='sm'
                  className='rounded-lg flex items-center text-xs py-1 px-2 border-white/20 text-white hover:bg-white/10 h-7'
                >
                  <FaGlobe className='text-xs mr-1' />
                  <span className='text-xs mr-1'>{nextLanguage?.flag}</span>
                  <span className='font-medium text-xs'>
                    {nextLanguage?.code.toUpperCase()}
                  </span>
                </Button>
              </Link>
            </div>
          </div>

          {/* Main Header */}
          <div className='flex items-center justify-center w-full bg-slate-900'>
            <div className='w-screen px-4 sm:px-6 lg:px-12 bg-white rounded-tl-[1000px]'>
              <div className='flex h-20 sm:h-24 lg:h-28 items-center justify-between'>
                {/* Logo and University Name */}
                <div className='flex items-center space-x-3 sm:space-x-4 lg:space-x-6 flex-shrink-0'>
                  <div className='relative'>
                    <div className='h-12 w-12 sm:h-16 sm:w-16 lg:h-20 lg:w-20 rounded-full flex items-center justify-center shadow-xl border-2 border-white bg-white overflow-hidden'>
                      <Image
                        src='/logo2.png'
                        alt='HNU Logo'
                        width={48}
                        height={48}
                        className='w-full h-full object-cover rounded-full'
                      />
                    </div>
                    <div className='absolute -top-1 -right-1 h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 bg-blue-500 rounded-full border-2 border-white shadow-md animate-pulse'></div>
                  </div>
                  <div className='hidden sm:block'>
                    <h1 className='text-base sm:text-lg lg:text-xl font-bold bg-gradient-to-r from-blue-950 to-blue-600 bg-clip-text text-transparent leading-tight'>
                      {headerT('university_name')}
                    </h1>
                  </div>
                </div>

                {/* Desktop Navigation */}
                <div className='hidden lg:flex items-center space-x-1 flex-1 justify-center mx-8'>
                  {navigationItems.map(item => (
                    <div key={item.href} className='relative group'>
                      <Link
                        href={item.href}
                        className={`px-4 py-3 rounded-xl transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 ${isActive(item.href)
                            ? 'text-blue-700 font-semibold bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 shadow-sm'
                            : 'text-gray-700 hover:text-blue-700'
                          }`}
                      >
                        <span
                          className={
                            item.href === '/contact' ? 'font-bold' : ''
                          }
                        >
                          {item.label}
                        </span>
                      </Link>

                      {/* Dropdown Menu */}
                      {item.submenu && (
                        <div className='absolute top-full left-0 mt-1 hidden group-hover:block bg-white shadow-lg rounded-lg z-50 min-w-[300px] border border-gray-100'>
                          {item.submenu.map(sub => (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              className='block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors first:rounded-t-lg last:rounded-b-lg'
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Mobile Menu Button */}
                <div className='lg:hidden'>
                  <Button
                    variant='ghost'
                    size='sm'
                    onClick={() => setIsMobileMenuOpen(true)}
                    className='p-2 h-10 w-10 rounded-xl hover:bg-gray-100'
                  >
                    <FaBars className='h-5 w-5 text-gray-700' />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navigationItems={navigationItems}
        isActive={isActive}
        pathname={pathname}
        nextLanguage={nextLanguage}
        onLanguageChange={handleLanguageChange}
        headerT={headerT}
      />

      {/* Spacer to prevent content from going under fixed header */}
      <div className='h-28 sm:h-32 lg:h-40'></div>
    </>
  );
}

export default Header2;
