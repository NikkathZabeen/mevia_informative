
// import React from 'react';
// import Header from '@/components/Header';
// import Footer from '@/components/Footer';
// import { Users, Target, Award, Globe } from 'lucide-react';
// import { Card, CardContent } from '@/components/ui/card';

// const About = () => {
//   const values = [
//     {
//       icon: <Users className="h-8 w-8 text-cherry-600" />,
//       title: "Community First",
//       description: "We believe in building authentic relationships between brands and creators."
//     },
//     {
//       icon: <Target className="h-8 w-8 text-cherry-600" />,
//       title: "Results Driven",
//       description: "Every campaign is optimized for maximum impact and measurable outcomes."
//     },
//     {
//       icon: <Award className="h-8 w-8 text-cherry-600" />,
//       title: "Excellence",
//       description: "We maintain the highest standards in everything we do."
//     },
//     {
//       icon: <Globe className="h-8 w-8 text-cherry-600" />,
//       title: "Global Impact",
//       description: "Connecting brands and creators across the world to drive positive change."
//     }
//   ];

//   return (
//     <div className="min-h-screen">
//       <Header />
//       <main>
//         {/* Hero Section */}
//         <section className="pt-24 pb-16 lg:pt-32 lg:pb-24 bg-hero-gradient">
//           <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="text-center mb-16">
//               <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
//                 About <span className="text-gradient">Denvey</span>
//               </h1>
//               <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
//                 We're revolutionizing influencer marketing by creating authentic connections 
//                 between brands and creators that drive real results.
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* Mission Section */}
//         <section className="py-16 lg:py-24 bg-white">
//           <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//               <div>
//                 <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
//                   Our Mission
//                 </h2>
//                 <p className="text-lg text-gray-600 mb-6 leading-relaxed">
//                   At Denvey, we believe that authentic storytelling is the most powerful form of marketing. 
//                   Our mission is to bridge the gap between brands seeking genuine connection and creators 
//                   who inspire their communities.
//                 </p>
//                 <p className="text-lg text-gray-600 leading-relaxed">
//                   We've built a platform that prioritizes transparency, fairness, and results, 
//                   ensuring that every partnership creates value for brands, creators, and their audiences.
//                 </p>
//               </div>
//               <div>
//                 <img 
//                   src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
//                   alt="Team collaboration"
//                   className="rounded-2xl shadow-2xl"
//                 />
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Values Section */}
//         <section className="py-16 lg:py-24 bg-cherry-light-gradient">
//           <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="text-center mb-16">
//               <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
//                 Our Values
//               </h2>
//               <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//                 These core principles guide everything we do at Denvey.
//               </p>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//               {values.map((value, index) => (
//                 <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-0">
//                   <CardContent className="p-8 text-center">
//                     <div className="bg-cherry-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
//                       {value.icon}
//                     </div>
//                     <h3 className="text-xl font-semibold text-gray-900 mb-4">
//                       {value.title}
//                     </h3>
//                     <p className="text-gray-600 leading-relaxed">
//                       {value.description}
//                     </p>
//                   </CardContent>
//                 </Card>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Team Section */}
//         <section className="py-16 lg:py-24 bg-white">
//           <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="text-center mb-16">
//               <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
//                 Leadership Team
//               </h2>
//               <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//                 Meet the visionaries behind Denvey's success.
//               </p>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//               {[
//                 {
//                   name: "Sarah Chen",
//                   role: "CEO & Founder",
//                   image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=300&h=300&fit=crop&crop=face"
//                 },
//                 {
//                   name: "Michael Rodriguez",
//                   role: "CTO",
//                   image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
//                 },
//                 {
//                   name: "Emily Johnson",
//                   role: "Head of Marketing",
//                   image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face"
//                 }
//               ].map((member, index) => (
//                 <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-0">
//                   <CardContent className="p-8 text-center">
//                     <img 
//                       src={member.image}
//                       alt={member.name}
//                       className="w-24 h-24 rounded-full mx-auto mb-6 object-cover"
//                     />
//                     <h3 className="text-xl font-semibold text-gray-900 mb-2">
//                       {member.name}
//                     </h3>
//                     <p className="text-cherry-600 font-medium">
//                       {member.role}
//                     </p>
//                   </CardContent>
//                 </Card>
//               ))}
//             </div>
//           </div>
//         </section>
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default About;


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
    '800M+ internet users and 450M+  active social media users',
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
                      <h3 className="text-3xl font-bold text-gray-900 mb-4">2+ Years of R&D</h3>
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

// export default About;


// import 'normalize.css';
// import React, { useState, useEffect } from 'react';
// import Header from '@/components/Header';
// import Footer from '@/components/Footer';
// import { motion } from "framer-motion";
// import { Rocket, DollarSign, Globe2, Star } from 'lucide-react';
// import { Card, CardContent } from '@/components/ui/card';
// import DenveyLaunchPathway from "@/components/DenveyLaunchPathway";
// import 'core-js/stable';
// import 'regenerator-runtime/runtime';

// // Feature detection for Flexbox
// const isFlexSupported = () => {
//   return 'flex' in document.body.style;
// };

// const About = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     if (!Array.prototype.includes) {
//       Array.prototype.includes = function (searchElement, fromIndex) {
//         return this.indexOf(searchElement, fromIndex) !== -1;
//       };
//     }

//     const cycle = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % textData.length);
//     }, 3000);
//     return () => clearInterval(cycle);
//   }, []);

//   const values = [
//     {
//       icon: <Rocket className="h-8 w-8 text-cherry-600" />,
//       title: "B2C & D2C Brand Acceleration",
//       description: "Boost growth with precision influencer alignment."
//     },
//     {
//       icon: <DollarSign className="h-8 w-8 text-cherry-600" />,
//       title: "Affiliate Commerce Innovation",
//       description: "Collaborate with authentic creators to drive sales."
//     },
//     {
//       icon: <Globe2 className="h-8 w-8 text-cherry-600" />,
//       title: "Regional & Vernacular Content Monetization",
//       description: "Unlock new revenue streams across India."
//     },
//     {
//       icon: <Star className="h-8 w-8 text-cherry-600" />,
//       title: "Futuristic Creator Careers",
//       description: "Support creator independence and equity participation for long-term success."
//     }
//   ];

//   const textData = [
//     "Over 3–4 million active content creators in India",
//     "800+ million internet users and 450+ million active social media users",
//     "Indian influencer marketing industry is estimated to be worth ₹2,200+ crore"
//   ];

//   return (
//     <div className="min-h-screen" role="main" aria-label="About Page">
//       <Header />
//       <main>
//         {/* About Section */}
//         <section className="pt-24 pb-16 lg:pt-32 lg:pb-24 bg-hero-gradient">
//           <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center lg:justify-between justify-center text-center lg:text-left">
//             <div className="lg:w-1/2 mb-12 lg:mb-0">
//               <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-4">
//                 About <span className="text-gradient">Us</span>
//               </h1>
//               <h2 className="text-2xl font-semibold text-gray-800 mb-4">
//                 India's Influencer Marketing Ecosystem Is Poised for Transformation
//               </h2>
//               <p className="text-lg text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
//                 India’s influencer marketing industry is a vast, untapped frontier — ready for powerful transformation and growth. With Denvey’s cutting-edge technology, intelligent influencer matchmaking, and ROI-centric platform, we’re shaping a new era of influence — making it more efficient, more profitable, and more impactful for brands, creators, and businesses.
//               </p>
//             </div>

//             {/* Animated Responsive Circles */}
//             <div className="lg:w-1/2 relative flex items-end justify-center min-h-[500px]">
//               {textData.map((text, index) => (
//                 <motion.div
//                   key={index}
//                   className={`absolute bottom-0 flex flex-col items-center text-center font-medium rounded-full overflow-hidden ${index === 0 ? "pt-10" : index === 1 ? "pt-16" : "pt-24"
//                     }`}
//                   style={{
//                     width: `min(${200 + index * 120}px, 80vw)`,
//                     height: `min(${200 + index * 120}px, 80vw)`,
//                     backgroundImage: index === 0
//                       ? "linear-gradient(to right, #7f1d1d, #dc2626)"
//                       : index === 1
//                         ? "linear-gradient(to right, #991b1b, #ef4444)"
//                         : "linear-gradient(to right, #7f1d1d, #450a0a)",
//                     zIndex: 30 - index * 10,
//                     opacity: currentIndex === index ? 1 : 0,
//                     transition: 'opacity 0.8s ease-in-out',
//                     color: index === 2 ? 'white' : 'white'
//                   }}
//                 >
//                   <div className="px-4 text-sm sm:text-base max-w-[80%] leading-snug">
//                     {text}
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Values Section */}
//         <section className="py-16 lg:py-24 bg-cherry-light-gradient">
//           <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="text-center mb-16">
//               <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
//                 Future Booming Opportunities
//               </h2>
//               <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//                 Denvey isn’t just entering the influencer space — it’s redefining it. Join us and grow with the future of influence-driven commerce in India.
//               </p>
//             </div>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//               {values.map((value, index) => (
//                 <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-0">
//                   <CardContent className="p-8 text-center">
//                     <div className="bg-cherry-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
//                       {value.icon}
//                     </div>
//                     <h3 className="text-xl font-semibold text-gray-900 mb-4">
//                       {value.title}
//                     </h3>
//                     <p className="text-gray-600 leading-relaxed">
//                       {value.description}
//                     </p>
//                   </CardContent>
//                 </Card>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Journey Section */}
//         <section className="py-20 lg:py-32 bg-white">
//           <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="text-center mb-20">
//               <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
//                 Our <span className="text-cherry-600">Journey</span>
//               </h2>
//               <div className="w-24 h-1 bg-cherry-600 mx-auto"></div>
//             </div>

//             <div className="max-w-4xl mx-auto">
//               <div className="relative">
//                 <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-cherry-200"></div>

//                 <div className="space-y-16">
//                   {[{
//                     year: "2022",
//                     title: "The Beginning",
//                     desc: "Denvey's journey began as an influencer marketing agency, helping brands connect with creators across India. Through close collaboration, we identified critical gaps in the ecosystem.",
//                     tag: "Foundation Year",
//                     tagColor: "bg-yellow-100 text-yellow-800"
//                   },
//                   {
//                     year: "2",
//                     title: "2+ Years of R&D",
//                     desc: "We invested extensively in research and development, gaining deep understanding of industry pain points through data-driven insights and market analysis.",
//                     tag: "Innovation Phase",
//                     tagColor: "bg-blue-100 text-blue-800"
//                   },
//                   {
//                     year: "3",
//                     title: "Platform Revolution",
//                     desc: "Now launching two powerful products — a mobile app for Influencers and a smart platform for Brands — designed to unlock the full potential of influencer marketing.",
//                     tag: "Launch Phase",
//                     tagColor: "bg-green-100 text-green-800"
//                   },
//                   {
//                     year: "∞",
//                     title: "Endless Possibilities",
//                     desc: "Denvey is not just a platform; it's a solution built from the ground up to empower both creators and businesses in a rapidly growing digital ecosystem.",
//                     tag: "Future Vision",
//                     tagColor: "bg-purple-100 text-purple-800"
//                   }].map((item, index) => (
//                     <div
//                       key={index}
//                       className="relative flex items-start gap-8 animate-slide-in-left"
//                       style={{ animationDelay: `${index * 0.3}s` }}
//                     >
//                       <div className="flex-shrink-0 w-16 h-16 bg-cherry-600 rounded-full flex items-center justify-center text-white font-bold text-xl z-10">
//                         {item.year}
//                       </div>
//                       <div className="flex-1">
//                         <h3 className="text-3xl font-bold text-gray-900 mb-4">{item.title}</h3>
//                         <p className="text-lg text-gray-600 leading-relaxed">{item.desc}</p>
//                         <div className={`mt-4 inline-flex items-center px-4 py-2 rounded-full font-medium ${item.tagColor}`}>
//                           {item.tag}
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         <DenveyLaunchPathway />
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default About;
