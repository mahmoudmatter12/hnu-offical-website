'use client';
import HeroSection from '@/components/home/heroSection';
import AboutSection from '@/components/home/aboutSection';
import ProgramsSection from '@/components/home/programsSection';
import { heroSection, aboutSection, programsSection } from '@/data';
import React from 'react';
import { useLocale } from 'next-intl';

function Home() {
  const locale = useLocale(); // route ar or en based on the url
  return (
    <>
      <HeroSection {...heroSection} local={locale} />
      <AboutSection {...aboutSection} />
      <ProgramsSection {...programsSection} />
    </>
  );
}

export default Home;
