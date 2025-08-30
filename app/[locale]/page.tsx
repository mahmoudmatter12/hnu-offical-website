'use client';
import HeroSection from '@/components/home/heroSection';
import AboutSection from '@/components/home/aboutSection';
import ProgramsSection from '@/components/home/programsSection';
import { heroSection, aboutSection, programsSection, FactsAndNumbers } from '@/data';
import React from 'react';
import { useLocale } from 'next-intl';
import FcatsAndNumber from '@/components/home/FcatsAndNumber';
import FAQ from '@/components/home/FAQ';
import TopStudentActivities from '@/components/home/TopStudentActivities';
import TopEvents from '@/components/home/TopEvents';
import TopNews from '@/components/home/TopNews';

function Home() {
  const locale = useLocale(); // route ar or en based on the url
  return (
    <>
      <HeroSection {...heroSection} local={locale} />
      <AboutSection {...aboutSection} />
      <ProgramsSection {...programsSection} />
      <FcatsAndNumber FactsAndNumbers={FactsAndNumbers} />
      <FAQ />
      <TopNews />
      <TopEvents />
      <TopStudentActivities />
    </>
  );
}

export default Home;
