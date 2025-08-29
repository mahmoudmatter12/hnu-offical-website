'use client';

import { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import {
  FaPhone,
  FaEnvelope,
  FaClock,
  FaFacebook,
  FaLinkedin,
  FaInstagram,
} from 'react-icons/fa';

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

  const navigationItems = [
    { href: '/', label: t('home') },
    {
      href: '/about',
      label: t('about'),
      submenu: [
        { href: '/about/president', label: headerT("University's president") },
        { href: '/about/university', label: headerT('About the university') },
      ],
    },
    {
      href: '/Faculties & Programs',
      label: t('faculties_and_programs'),
      submenu: [
        { href: '/Faculties & Programs/business', label: headerT('Business') },
        { href: '/Faculties & Programs/law', label: headerT('Law') },
        {
          href: '/Faculties & Programs/engineering',
          label: headerT('Engineering'),
        },
        {
          href: '/Faculties & Programs/computer-science-engineering',
          label: headerT('Computer Science & Engineering'),
        },
        { href: '/Faculties & Programs/science', label: headerT('Science') },
        { href: '/Faculties & Programs/medicine', label: headerT('Medicine') },
        {
          href: '/Faculties & Programs/dentistry',
          label: headerT('Dentistry'),
        },
        {
          href: '/Faculties & Programs/applied-health-sciences-technology',
          label: headerT('Applied Health Sciences Technology'),
        },
      ],
    },
    { href: '/FAQ', label: t('FAQ') },
    { href: '/media', label: t('media') },
    { href: '/contact', label: t('contact') },
  ];
  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦' },
  ];

  const nextLanguage = languages.find(lang => lang.code !== locale);

  const handleLanguageChange = () => {
    setIsMobileMenuOpen(false);
  };

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/' || pathname === `/${locale}`;
    }
    return pathname === href || pathname === `/${locale}${href}`;
  };

  return (
    <nav className='left-0 right-0 z-50 transition-all duration-300'>
      <div className='relative'>
        <div className='bg-[#0f172a] text-white text-sm flex justify-between items-center px-6 py-2'>
          {/* Left side: contact info */}
          <div className='hidden md:flex gap-6'>
            <div className='flex items-center gap-2'>
              <FaPhone /> <span>0123456789 - 0123456789</span>
            </div>
            <div className='flex items-center gap-2'>
              <FaEnvelope /> <span>info@info.edu.eg</span>
            </div>
            <div className='flex items-center gap-2'>
              <FaClock /> <span>Sat - Thu: 9 AM - 4 PM</span>
            </div>
          </div>

          {/* Right side: socials + language */}
          <div className='flex items-center gap-4'>
            <span>{headerT('FOLLOW US')}</span>
            <a
              href='https://facebook.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaFacebook className='hover:text-blue-600 cursor-pointer' />
            </a>
            <a
              href='https://linkedin.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaLinkedin className='hover:text-blue-600 cursor-pointer' />
            </a>
          </div>

          {/* Language Button */}
          <div className='flex justify-center items-center'>
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
                className='rounded-xl flex items-center
                 text-sm sm:text-base
                 py-1 sm:py-4 px-4 sm:px-4'
              >
                <span className='text-xl sm:text-3xl mr-2 sm:mr-4'>
                  {nextLanguage?.flag}
                </span>
                <div className='flex items-center text-left'>
                  <div className='font-semibold text-sm sm:text-lg'>
                    {nextLanguage?.name}
                  </div>
                </div>
              </Button>
            </Link>
          </div>
        </div>

        <div className='flex items-center justify-center w-full bg-[#0f172a]'>
          {/* اللوجو + اسم الجامعة */}
          <div className='w-screen px-6 sm:px-8 lg:px-12 bg-white rounded-tl-[1000px]'>
            <div className='flex h-28 items-center justify-between'>
              <div className='flex items-center space-x-6 flex-shrink-0'>
                <div className='relative'>
                  <div className='h-15 w-15 rounded-full flex items-center justify-center shadow-2xl'>
                    <Image
                      src='/logo.png'
                      alt='HNU Logo'
                      width={70}
                      height={70}
                      className='rounded-2xl'
                    />
                  </div>
                  <div className='absolute -top-3 -right-3 h-6 w-6 bg-blue-500 rounded-full border-4 border-white shadow-lg animate-bounce'></div>
                  <div className='absolute -bottom-2 -left-2 h-4 w-4 bg-blue-950 rounded-full border-2 border-white shadow-md'></div>
                </div>
                <div className='hidden sm:block'>
                  <h1 className='text-xl font-bold bg-gradient-to-r from-blue-950 to-blue-600 bg-clip-text text-transparent leading-tight'>
                    {headerT('university_name')}
                  </h1>
                </div>
              </div>
              {/*  */}
              <div className='hidden lg:flex items-center space-x-1 flex-1 justify-center mx-8'>
                {navigationItems.map(item => (
                  <div key={item.href} className='relative group'>
                    <Link
                      href={item.href}
                      className={`px-4 py-3 rounded-xl transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 ${
                        isActive(item.href)
                          ? 'text-blue-700 font-semibold bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 shadow-sm'
                          : 'text-gray-700 hover:text-blue-700'
                      }`}
                    >
                      <span
                        className={`${item.href === '/contact' ? 'font-bold' : ''}`}
                      >
                        {item.label}
                      </span>
                    </Link>

                    {/* Dropdown Menu */}
                    {item.submenu && (
                      <div className='absolute top-full left-0 mt-1 hidden group-hover:block bg-white shadow-lg rounded-lg z-50 min-w-[300px]'>
                        {item.submenu.map(sub => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            className='block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-700'
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header2;
