import HeroSection from '@/components/home/heroSection';
import AboutSection from '@/components/home/aboutSection';
import ProgramsSection from '@/components/home/programsSection';
import { heroSection, aboutSection, programsSection } from '@/data';
import React from 'react';

function Home() {
  return (
    <>
      <HeroSection {...heroSection} />
      <AboutSection {...aboutSection} />
      <ProgramsSection {...programsSection} />
    </>
  );
}

export default Home;
