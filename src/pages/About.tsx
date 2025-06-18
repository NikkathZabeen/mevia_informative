
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



import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Users, Target, Award, Globe, Smartphone, Brain, BarChart3, Rocket, DollarSign, Globe2, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import DenveyLaunchPathway from "@/components/DenveyLaunchPathway";
const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const cycle = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % textData.length);
    }, 3000); // change text every 3s
    return () => clearInterval(cycle);
  }, []);
  const values = [
    {
      icon: <Rocket className="h-8 w-8 text-cherry-600" />,
      title: "B2C & D2C Brand Acceleration",
      description: "Boost growth with precision influencer alignment."
    },
    {
      icon: <DollarSign className="h-8 w-8 text-cherry-600" />,
      title: "Affiliate Commerce Innovation",
      description: "Collaborate with authentic creators to drive sales."
    },
    {
      icon: <Globe2 className="h-8 w-8 text-cherry-600" />,
      title: "Regional & Vernacular Content Monetization",
      description: "Unlock new revenue streams across India."
    },
    {
      icon: <Star className="h-8 w-8 text-cherry-600" />,
      title: "Futuristic Creator Careers",
      description: "Support creator independence and equity participation for long-term success."
    }
  ];
  // const roadmapVersions = [
  //   {
  //     version: "1.1",
  //     title: "Mobile App for Influencers",
  //     description: "A sleek, intuitive app empowering creators to showcase profiles, track campaigns, and access exclusive brand opportunities.",
  //     icon: <Smartphone className="h-16 w-16" />,
  //     gradient: "from-blue-500 to-blue-700",
  //     features: ["Profile Management", "Campaign Tracking", "Real-time Analytics", "Push Notifications"],
  //     status: "In Development"
  //   },
  //   {
  //     version: "1.2",
  //     title: "AI-Powered Matchmaking",
  //     description: "Integration of Denvey's proprietary AI Engine to revolutionize brand-influencer connections through smart matchmaking.",
  //     icon: <Brain className="h-16 w-16" />,
  //     gradient: "from-purple-500 to-purple-700",
  //     features: ["Smart Matching", "Audience Analysis", "Fraud Detection", "Performance Prediction"],
  //     status: "Research Phase"
  //   },
  //   {
  //     version: "1.3",
  //     title: "Advanced Analytics Dashboard",
  //     description: "Deployment of advanced data analytics and real-time performance dashboards with comprehensive insights.",
  //     icon: <BarChart3 className="h-16 w-16" />,
  //     gradient: "from-green-500 to-green-700",
  //     features: ["Real-time Dashboards", "Sentiment Analysis", "ROI Tracking", "Adaptive Optimization"],
  //     status: "Planning"
  //   }
  // ];
  const textData = [
    "Over 3–4 million active content creators in India",
    "800+ million internet users and 450+ million active social media users",
    "Indian influencer marketing industry is estimated to be worth ₹2,200+ crore"
  ];

  {


    return (
      <div className="min-h-screen">
        <Header />
        <main>
          {/* Hero Section */}
          {/* <section className="pt-24 pb-16 lg:pt-32 lg:pb-24 bg-hero-gradient">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                  About <span className="text-gradient">Us</span>
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  India's Influencer Marketing Ecosystem Is Poised for Transformation <br />
                  India’s influencer marketing industry is a vast, untapped frontier — ready for powerful transformation and growth. With Denvey’s cutting-edge technology, intelligent influencer matchmaking, and ROI-centric platform, we’re shaping a new era of influence — making it more efficient, more profitable, and more impactful for brands, creators, and businesses.
                </p>
              </div>
            </div>
          </section> */}
          <section className="pt-24 pb-16 lg:pt-32 lg:pb-24 bg-hero-gradient">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between">
              {/* Left Side Content */}
              <div className="lg:w-1/2 text-left mb-12 lg:mb-0">
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                  About <span className="text-gradient">Us</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                  India's Influencer Marketing Ecosystem Is Poised for Transformation. <br />
                  India’s influencer marketing industry is a vast, untapped frontier — ready for powerful transformation and growth. With Denvey’s cutting-edge technology, intelligent influencer matchmaking, and ROI-centric platform, we’re shaping a new era of influence — making it more efficient, more profitable, and more impactful for brands, creators, and businesses.
                </p>
              </div>

              {/* Right Animated Circle */}
              <div className="lg:w-1/2 relative flex items-end justify-center min-h-[500px]">
                {[
                  {
                    text: "Over 3–4 million active content creators in India",
                    size: 200,
                    bg: "linear-gradient(to right, #7f1d1d, #dc2626)", // deep red to vibrant red
                    delay: 0,
                    z: 30,
                    textTop: "pt-10"
                  },
                  {
                    text: "800+ million internet users and 450+ million active social media users",
                    size: 320,
                    bg: "linear-gradient(to right, #991b1b, #ef4444)", // blood red to soft red
                    delay: 1,
                    z: 20,
                    textTop: "pt-16"
                  },
                  {
                    text: "Indian influencer marketing industry is estimated to be worth ₹2,200+ crore",
                    size: 480,
                    bg: "linear-gradient(to right, #7f1d1d, #450a0a)", // deep red to dark maroon
                    delay: 2,
                    z: 10,
                    textTop: "pt-24",
                    textColor: "text-white"
                  }
                ].map(({ text, size, bg, delay, z, textTop }, index) => (
                  <motion.div
                    key={index}
                    className={`absolute bottom-0 flex flex-col items-center text-center text-white font-medium rounded-full overflow-hidden ${textTop}`}
                    style={{
                      width: `${size}px`,
                      height: `${size}px`,
                      backgroundImage: bg, // <-- ✅ use backgroundImage instead
                      zIndex: z,
                    }}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      delay,
                      duration: 1,
                      ease: "easeInOut"
                    }}
                  >
                    <div className="px-4 text-sm sm:text-base max-w-[80%] leading-snug">
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
                  Denvey isn’t just entering the influencer space — it’s redefining it. Join us and grow with the future of influence-driven commerce in India.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {values.map((value, index) => (
                  <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-0">
                    <CardContent className="p-8 text-center">
                      <div className="bg-cherry-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                        {value.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        {value.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Our Journey Section - Linear Timeline */}
          <section className="py-20 lg:py-32 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-20">
                <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                  Our <span className="text-cherry-600">Journey</span>
                </h2>
                <div className="w-24 h-1 bg-cherry-600 mx-auto"></div>
              </div>

              <div className="max-w-4xl mx-auto">
                {/* Timeline Line */}
                <div className="relative">
                  <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-cherry-200"></div>

                  <div className="space-y-16">
                    {/* 2022 Start */}
                    <div className="relative flex items-start gap-8 animate-slide-in-left">
                      <div className="flex-shrink-0 w-16 h-16 bg-cherry-600 rounded-full flex items-center justify-center text-white font-bold text-xl z-10">
                        1
                      </div>
                      <div className="flex-1">
                        <h3 className="text-3xl font-bold text-gray-900 mb-4">2022 - The Beginning</h3>
                        <p className="text-lg text-gray-600 leading-relaxed">
                          Denvey's journey began as an influencer marketing agency, helping brands connect with creators across India.
                          Through close collaboration, we identified critical gaps in the ecosystem.
                        </p>
                        <div className="mt-4 inline-flex items-center px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full font-medium">
                          Foundation Year
                        </div>
                      </div>
                    </div>

                    {/* 2 Years R&D */}
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

                    {/* Platform Launch */}
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

                    {/* Future Vision */}
                    <div className="relative flex items-start gap-8 animate-slide-in-left" style={{ animationDelay: '0.9s' }}>
                      <div className="flex-shrink-0 w-16 h-16 bg-cherry-600 rounded-full flex items-center justify-center text-white font-bold text-xl z-10">
                        ∞
                      </div>
                      <div className="flex-1">
                        <h3 className="text-3xl font-bold text-gray-900 mb-4">Endless Possibilities</h3>
                        <p className="text-lg text-gray-600 leading-relaxed">
                          Denvey is not just a platform; it's a solution built from the ground up to empower both creators
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

          {/* Mission & Vision Section */}
          {/* <section className="py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                  To engineer a future where every brand-influencer partnership is intelligent, impactful, and ROI-driven—powered by data, trust, and technology.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We aim to eliminate guesswork from influencer marketing by building a smart ecosystem where authentic voices meet precise brand goals, creating value for every click, view, and collaboration.
                </p>
              </div>
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  Our Vision
                </h2>
                <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                  To build the world's most intelligent and ethical influence economy—one where trust, transparency, and technology drive every partnership.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We’re not just a platform; we’re building the operating system for the future of influence.
                </p>
              </div>
            </div>
          </div>
        </section> */}
          <section className="py-16 lg:py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
                {/* Mission Block */}
                <div className="h-full border-[2px] border-red-400 border-opacity-40 rounded-xl p-6 shadow-sm flex flex-col">
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                    Our Mission
                  </h2>
                  <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                    To engineer a future where every brand-influencer partnership is intelligent, impactful, and ROI-driven — powered by data, trust, and cutting-edge technology.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    We aim to eliminate guesswork from influencer marketing by building a smart ecosystem where authentic creators connect with precise brand goals, delivering real value for every click, view, and collaboration.
                  </p>
                </div>

                {/* Vision Block */}
                <div className="h-full border-[2px] border-red-400 border-opacity-40 rounded-xl p-6 shadow-sm flex flex-col">
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                    Our Vision
                  </h2>
                  <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                    To build the world’s most intelligent, ethical, and transparent influencer marketing ecosystem — where trust, technology, and data drive every partnership.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    We’re more than just a platform; we’re creating the operating system for the future of influence — empowering brands and creators to connect, collaborate, and grow in a smarter, more efficient way.
                  </p>
                </div>
              </div>
            </div>
          </section>


          {/* Traction Section */}

          {/* <section className="py-16 lg:py-24 bg-gradient-to-br from-white via-pink-50 to-cherry-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  Our Traction
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Denvey is already gaining strong momentum in its mission to redefine the influencer-brand ecosystem.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {[
                  "In just a short span, the platform has attracted a diverse community of creators and forward-thinking brands.",
                  "Influencers love our career-building tools, analytics, and long-term equity potential.",
                  "Brands—startups to D2C disruptors—leverage our AI engine to find true ROI partners.",
                  "Our tech backbone is strong—Match engine reliably connects authentic creators with intentful brands.",
                  "The future? Scaling our AI, integrating deeper data, and streamlining campaign operations.",
                  "Denvey is no longer just an idea—it’s a fast-evolving ecosystem building trust and results."
                ].map((point, index) => (
                  <div
                    key={index}
                    className="bg-white shadow-md hover:shadow-xl rounded-xl p-6 transition duration-300 border border-gray-100"
                  >
                    <p className="text-gray-700 text-lg leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </section> */}

          <DenveyLaunchPathway />


          {/* 
          Team Section */}
          {/* <section className="py-16 lg:py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  Leadership Team
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Meet the visionaries building the future of influence.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    name: "Shaklin Ahmed",
                    role: "CEO & Founder",
                    image: "https://images.unsplash.com/photo-1548786817-c53b48f3f017?w=300&h=300&fit=crop&crop=face"
                  },
                  {
                    name: "Saquib Mansur",
                    role: "CTO",
                    image: "https://images.unsplash.com/photo-1603415526960-f7e0328b5c41?w=300&h=300&fit=crop&crop=face"
                  },
                  {
                    name: "Example",
                    role: "Head of Marketing",
                    image: "https://images.unsplash.com/photo-1590561068427-ec9a9079a65d?w=300&h=300&fit=crop&crop=face"
                  }
                ].map((member, index) => (
                  <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-0">
                    <CardContent className="p-8 text-center">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-24 h-24 rounded-full mx-auto mb-6 object-cover"
                      />
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {member.name}
                      </h3>
                      <p className="text-cherry-600 font-medium">
                        {member.role}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section> */}
        </main>
        <Footer />
      </div>
    );
  };
}

export default About;



// import React from 'react';
// import Header from '@/components/Header';
// import Footer from '@/components/Footer';
// import { Users, Target, Award, Globe, Smartphone, Brain, BarChart3 } from 'lucide-react';
// import { Card, CardContent } from '@/components/ui/card';

// const About = () => {
//   const values = [
//     {
//       icon: <Users className="h-8 w-8 text-cherry-600" />,
//       title: "AI-Powered Matchmaking",
//       description: "Go beyond demographics. Connect through deep behavior and brand-fit analysis."
//     },
//     {
//       icon: <Target className="h-8 w-8 text-cherry-600" />,
//       title: "ROI Prediction & Simulation",
//       description: "Know your impact before your campaign even launches."
//     },
//     {
//       icon: <Award className="h-8 w-8 text-cherry-600" />,
//       title: "Live Intelligence Layer",
//       description: "Real-time performance tracking, fraud detection, and sentiment heatmaps."
//     },
//     {
//       icon: <Globe className="h-8 w-8 text-cherry-600" />,
//       title: "Ethical Influence Economy",
//       description: "Trust, transparency, and technology drive every partnership we build."
//     }
//   ];

//   const roadmapVersions = [
//     {
//       version: "1.1",
//       title: "Mobile App for Influencers",
//       description: "A sleek, intuitive app empowering creators to showcase profiles, track campaigns, and access exclusive brand opportunities.",
//       icon: <Smartphone className="h-16 w-16 text-white" />,
//       gradient: "from-blue-500 to-blue-700",
//       features: ["Profile Management", "Campaign Tracking", "Real-time Analytics", "Push Notifications"],
//       status: "In Development"
//     },
//     {
//       version: "1.2",
//       title: "AI-Powered Matchmaking",
//       description: "Integration of Denvey's proprietary AI Engine to revolutionize brand-influencer connections through smart matchmaking.",
//       icon: <Brain className="h-16 w-16 text-white" />,
//       gradient: "from-purple-500 to-purple-700",
//       features: ["Smart Matching", "Audience Analysis", "Fraud Detection", "Performance Prediction"],
//       status: "Research Phase"
//     },
//     {
//       version: "1.3",
//       title: "Advanced Analytics Dashboard",
//       description: "Deployment of advanced data analytics and real-time performance dashboards with comprehensive insights.",
//       icon: <BarChart3 className="h-16 w-16 text-white" />,
//       gradient: "from-green-500 to-green-700",
//       features: ["Real-time Dashboards", "Sentiment Analysis", "ROI Tracking", "Adaptive Optimization"],
//       status: "Planning"
//     }
//   ];

//   return (
//     <div className="min-h-screen">
//       <Header />
//       <main>
//         {/* Hero */}
//         <section className="pt-24 pb-16 lg:pt-32 lg:pb-24 bg-hero-gradient">
//           <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
//             <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
//               About <span className="text-gradient">Denvey</span>
//             </h1>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
//               Denvey is a next-generation marketplace redefining how brands and influencers collaborate in a data-driven, ROI-focused world.
//               We empower brands to discover, connect, and grow with the right voices—not just the loudest ones.
//             </p>
//           </div>
//         </section>

//         {/* Mission & Vision */}
//         <section className="py-16 lg:py-24 bg-white">
//           <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
//             <div>
//               <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
//               <p className="text-lg text-gray-600 mb-4 leading-relaxed">
//                 To engineer a future where every brand-influencer partnership is intelligent, impactful, and ROI-driven—powered by data, trust, and technology.
//               </p>
//               <p className="text-lg text-gray-600 leading-relaxed">
//                 We aim to eliminate guesswork from influencer marketing by building a smart ecosystem where authentic voices meet precise brand goals, creating value for every click, view, and collaboration.
//               </p>
//             </div>
//             <div>
//               <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Our Vision</h2>
//               <p className="text-lg text-gray-600 leading-relaxed">
//                 We envision a world where influence is earned, not bought—where campaigns prioritize community trust and platforms are built on fairness, innovation, and verified results.
//               </p>
//               <p className="text-lg text-gray-600 leading-relaxed">
//                 Denvey is committed to building the infrastructure for that future—one algorithm, one partnership, and one insight at a time.
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* Values */}
//         <section className="py-16 lg:py-24 bg-cherry-light-gradient">
//           <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
//             <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Our Values</h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
//               These core principles guide everything we do at Denvey.
//             </p>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//               {values.map((value, index) => (
//                 <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-0">
//                   <CardContent className="p-8 text-center">
//                     <div className="bg-cherry-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
//                       {value.icon}
//                     </div>
//                     <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
//                     <p className="text-gray-600 leading-relaxed">{value.description}</p>
//                   </CardContent>
//                 </Card>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Strategic Denvey Launch Roadmap */}
//         <section className="py-16 lg:py-24 bg-white">
//           <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="text-center mb-12">
//               <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
//                 Strategic Denvey Launch Roadmap
//               </h2>
//               <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//                 Explore upcoming versions of Denvey designed to evolve the platform across intelligence, experience, and scale.
//               </p>
//             </div>

//             <div className="max-h-[600px] overflow-y-auto space-y-8 relative pl-6">
//               {roadmapVersions.map((version, index) => (
//                 <div key={index} className="relative pl-8 border-l-4 border-gray-200">
//                   <div className={`absolute -left-3 top-2 rounded-full w-6 h-6 bg-gradient-to-r ${version.gradient}`}></div>
//                   <div className="bg-gray-50 rounded-2xl shadow-md p-6 mb-4">
//                     <div className="flex items-center gap-4 mb-4">
//                       <div className={`rounded-xl p-4 bg-gradient-to-r ${version.gradient}`}>
//                         {version.icon}
//                       </div>
//                       <div>
//                         <h3 className="text-xl font-bold text-gray-900">{version.title}</h3>
//                         <p className="text-sm text-gray-500">Version {version.version} • {version.status}</p>
//                       </div>
//                     </div>
//                     <p className="text-gray-600 mb-3">{version.description}</p>
//                     <ul className="list-disc list-inside text-sm text-gray-700">
//                       {version.features.map((feat, i) => (
//                         <li key={i}>{feat}</li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>
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
