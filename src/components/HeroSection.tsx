import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useTypewriter } from 'react-simple-typewriter';
import classNames from 'classnames';

const phrases = [
  {
    text: 'Creative Campaigns',
    image:
      'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
  },
  {
    text: 'Authentic Brand Stories',
    image:
      'https://media.istockphoto.com/id/2155004323/photo/young-african-american-woman-in-colorful-clothing-using-a-smartphone-low-angle-shot-with.webp?a=1&b=1&s=612x612&w=0&k=20&c=p5MBn_JFbrzVrptKGPMZ20RVfBL7Ju1Q-4uIxfFdsu4=',
  },
  {
    text: 'Measurable Growth',
    image:
      'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1000&q=80',
  },
];

const HeroSection: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [text] = useTypewriter({
    words: phrases.map((p) => p.text),
    loop: 0,
    delaySpeed: 400,
    typeSpeed: 60,
    deleteSpeed: 60,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="pt-24 pb-16 lg:pt-32 lg:pb-24 bg-hero-gradient overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Content */}
          <div className="animate-slide-in-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Connect For <br />
              <span className="text-gradient inline-block align-middle">
                {text}
              </span>
            </h1>

            <p className="text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed">
              Mevia is a full-service influencer marketing agency that helps brands craft impactful campaigns, connect with the right creators, and deliver real ROI.
              From strategy to execution, we turn collaborations into powerful brand stories that inspire audiences.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-cherry-gradient hover:shadow-2xl transform hover:scale-105 transition-all duration-300 text-white font-semibold text-lg px-8 py-4 group"
                >
                  Work With Us
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">250+</div>
                <div className="text-gray-600 font-medium">Campaigns Executed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">100+</div>
                <div className="text-gray-600 font-medium">Brands Empowered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">4.8★</div>
                <div className="text-gray-600 font-medium">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="animate-slide-in-right">
            <div className="relative transition-all duration-200 ease-in-out">
              <div className="absolute inset-0 bg-cherry-gradient rounded-3xl transform rotate-6 opacity-20"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
                <img
                  key={phrases[index].image}
                  src={phrases[index].image}
                  alt={phrases[index].text}
                  className={classNames(
                    'w-full h-auto object-cover transition-opacity duration-200 ease-in-out rounded-3xl'
                  )}
                />

                {/* Floating Cards */}
                <div className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-white rounded-lg shadow-lg p-3 sm:p-4 animate-float w-32 sm:w-auto max-w-[90%]">
                  <div className="text-lg sm:text-2xl font-bold text-cherry-600">+210%</div>
                  <div className="text-xs sm:text-sm text-gray-600">Average ROI Boost</div>
                </div>

                <div
                  className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-white rounded-lg shadow-lg p-3 sm:p-4 animate-float w-36 sm:w-auto max-w-[90%]"
                  style={{ animationDelay: '1s' }}
                >
                  <div className="text-lg sm:text-2xl font-bold text-cherry-600">1M+</div>
                  <div className="text-xs sm:text-sm text-gray-600">Audience Reach</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
