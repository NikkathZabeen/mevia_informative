import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Rocket, DollarSign, Globe2, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import DenveyLaunchPathway from '@/components/DenveyLaunchPathway';

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const textData = [
    'Over 3M–4M active content creators in India',
    '800M+ internet users and 450M+ active social media users',
    'Indian influencer marketing industry is estimated to be worth ₹2,200Cr+ ',
  ];

  useEffect(() => {
    const cycle = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % textData.length);
    }, 3000);
    return () => clearInterval(cycle);
  }, []);

  const values = [
    {
      icon: <Rocket className="h-8 w-8 text-cherry-600" />,
      title: 'B2C & D2C Brand Acceleration',
      description: 'Boost growth with precision influencer alignment.',
    },
    {
      icon: <DollarSign className="h-8 w-8 text-cherry-600" />,
      title: 'Affiliate Commerce Innovation',
      description: 'Collaborate with authentic creators to drive sales.',
    },
    {
      icon: <Globe2 className="h-8 w-8 text-cherry-600" />,
      title: 'Regional & Vernacular Content Monetization',
      description: 'Unlock new revenue streams across India.',
    },
    {
      icon: <Star className="h-8 w-8 text-cherry-600" />,
      title: 'Futuristic Creator Careers',
      description: 'Support creator independence and equity participation for long-term success.',
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* About Section */}
        <section className="pt-24 pb-16 lg:pt-32 lg:pb-24 bg-hero-gradient overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center lg:justify-between justify-center text-center lg:text-left min-h-[500px]">
            {/* Text Block */}
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-4">
                About <span className="text-gradient">Us</span>
              </h1>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                India's Influencer Marketing Ecosystem Is Poised for Transformation
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
                India’s influencer marketing industry is a vast, untapped frontier — ready for powerful transformation and
                growth. With Mevia’s cutting-edge technology, intelligent influencer matchmaking, and ROI-centric platform,
                we’re shaping a new era of influence — making it more efficient, more profitable, and more impactful for brands,
                creators, and businesses.
              </p>
            </div>

            {/* Animated Circles */}
            <div className="lg:w-1/2 w-full relative flex items-end justify-center min-h-[400px] sm:min-h-[350px] overflow-visible">
              {[
                {
                  text: "Over 3M–4M active content creators in India",
                  size: { base: 160, sm: 200 },
                  textSize: "text-[12px] sm:text-[14px] lg:text-[13px]",
                  maxWidth: "max-w-[75%]",
                  textPadding: "px-2 pt-8",
                  bg: "linear-gradient(to right, #7f1d1d, #dc2626)",
                  delay: 0,
                  z: 30,
                  textTop: "pt-6 sm:pt-10"
                },
                {
                  text: "800M+ internet users and 450M+ active social media users",
                  size: { base: 260, sm: 340 },
                  textSize: "text-[14px] sm:text-[16px] lg:text-[13px]",
                  maxWidth: "max-w-[70%]",
                  textPadding: "px-4 pt-3",
                  bg: "linear-gradient(to right, #991b1b, #ef4444)",
                  delay: 1,
                  z: 20,
                  textTop: "pt-10 sm:pt-16"
                },
                {
                  text: "Indian influencer marketing industry is estimated to be worth ₹2,200Cr+ ",
                  size: { base: 370, sm: 500 },
                  textSize: "text-[16px] sm:text-[18px] lg:text-[13px]",
                  maxWidth: "max-w-[75%]",
                  textPadding: "px-5 pt-6",
                  bg: "linear-gradient(to right, #7f1d1d, #450a0a)",
                  delay: 2,
                  z: 10,
                  textTop: "pt-16 sm:pt-24",
                  textColor: "text-white"
                }
              ].map(({ text, size, bg, delay, z, textTop, textColor = "text-white", textSize, maxWidth, textPadding }, index) => (
                <motion.div
                  key={index}
                  className={`absolute bottom-0 flex flex-col items-center justify-start text-center font-medium rounded-full overflow-hidden ${textTop}`}
                  style={{
                    width: `${size.base}px`,
                    height: `${size.base}px`,
                    backgroundImage: bg,
                    zIndex: z,
                    paddingTop: '20px'
                  }}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    delay,
                    duration: 1,
                    ease: "easeInOut"
                  }}
                >
                  <div className={`${textPadding} leading-snug drop-shadow-md font-semibold ${textColor} ${textSize} ${maxWidth}`}>
                    {text}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 lg:py-24 bg-cherry-light-gradient">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Future Booming Opportunities
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Mevia isn’t just entering the influencer space — it’s redefining it. Join us and grow with the future of
                influence-driven commerce in India.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-0">
                  <CardContent className="p-8 text-center">
                    <div className="bg-cherry-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Journey Section */}
        <section className="py-20 lg:py-32 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Our <span className="text-cherry-600">Journey</span>
              </h2>
              <div className="w-24 h-1 bg-cherry-600 mx-auto"></div>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-cherry-200"></div>

                <div className="space-y-16">
                  {/* Step 1 */}
                  <div className="relative flex items-start gap-8 animate-slide-in-left">
                    <div className="flex-shrink-0 w-16 h-16 bg-cherry-600 rounded-full flex items-center justify-center text-white font-bold text-xl z-10">
                      1
                    </div>
                    <div className="flex-1">
                      <h3 className="text-3xl font-bold text-gray-900 mb-4">2022 - The Beginning</h3>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        Mevia's journey began as an influencer marketing agency, helping brands connect with creators across India.
                        Through close collaboration, we identified critical gaps in the ecosystem.
                      </p>
                      <div className="mt-4 inline-flex items-center px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full font-medium">
                        Foundation Year
                      </div>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="relative flex items-start gap-8 animate-slide-in-left" style={{ animationDelay: '0.3s' }}>
                    <div className="flex-shrink-0 w-16 h-16 bg-cherry-600 rounded-full flex items-center justify-center text-white font-bold text-xl z-10">
                      2
                    </div>
                    <div className="flex-1">
                      <h3 className="text-3xl font-bold text-gray-900 mb-4">Research-Led Approach</h3>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        We invested extensively in research and development, gaining deep understanding of industry pain points
                        through data-driven insights and market analysis.
                      </p>
                      <div className="mt-4 inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full font-medium">
                        Innovation Phase
                      </div>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="relative flex items-start gap-8 animate-slide-in-left" style={{ animationDelay: '0.6s' }}>
                    <div className="flex-shrink-0 w-16 h-16 bg-cherry-600 rounded-full flex items-center justify-center text-white font-bold text-xl z-10">
                      3
                    </div>
                    <div className="flex-1">
                      <h3 className="text-3xl font-bold text-gray-900 mb-4">Platform Revolution</h3>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        Now launching two powerful products — a mobile app for Influencers and a smart platform for Brands —
                        designed to unlock the full potential of influencer marketing.
                      </p>
                      <div className="mt-4 inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full font-medium">
                        Launch Phase
                      </div>
                    </div>
                  </div>

                  {/* Step 4 */}
                  <div className="relative flex items-start gap-8 animate-slide-in-left" style={{ animationDelay: '0.9s' }}>
                    <div className="flex-shrink-0 w-16 h-16 bg-cherry-600 rounded-full flex items-center justify-center text-white font-bold text-xl z-10">
                      ∞
                    </div>
                    <div className="flex-1">
                      <h3 className="text-3xl font-bold text-gray-900 mb-4">Endless Possibilities</h3>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        Mevia is not just a platform; it's a solution built from the ground up to empower both creators
                        and businesses in a rapidly growing digital ecosystem.
                      </p>
                      <div className="mt-4 inline-flex items-center px-4 py-2 bg-purple-100 text-purple-800 rounded-full font-medium">
                        Future Vision
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <DenveyLaunchPathway />
      </main>
      <Footer />
    </div>
  );
};

export default About;
