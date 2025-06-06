
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import BrandsSection from '@/components/BrandsSection';
import InfluencersSection from '@/components/InfluencersSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import TellUsYourChallenge from '@/components/TellUsYourChallenge';
import RequestDemoSection from '@/components/RequestDemoSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <BrandsSection />
        <InfluencersSection />
        <HowItWorksSection />
        <TellUsYourChallenge />
        <RequestDemoSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
