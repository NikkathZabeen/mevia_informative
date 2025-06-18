
// import React from 'react';
// import { ArrowRight, Play, Star } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { Link } from 'react-router-dom';

// const HeroSection = () => {
//   return (
//     <section className="pt-24 pb-16 lg:pt-32 lg:pb-24 bg-hero-gradient overflow-hidden">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
//           {/* Content */}
//           <div className="animate-slide-in-left">
//             <div className="flex items-center space-x-2 mb-6">
//               {/* <div className="flex space-x-1">
//                 {[...Array(5)].map((_, i) => (
//                   <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
//                 ))}
//               </div> */}
//               {/* <span className="text-gray-600 text-sm font-medium">
//                 Trusted by 500+ brands worldwide
//               </span> */}
//             </div>

//             <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 leading-tight">
//               Connect with
//               <span className="text-gradient block">
//                 Influential Voices
//               </span>
//             </h1>

//             <p className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed">
//               Bridge the gap between brands and creators with our innovative influencer marketing platform.
//               Drive authentic engagement and measurable results.
//             </p>

//             <div className="flex flex-col sm:flex-row gap-4 mb-12">
//               <Link to="/request-demo">
//                 <Button
//                   size="lg"
//                   className="bg-cherry-gradient hover:shadow-2xl transform hover:scale-105 transition-all duration-300 text-white font-semibold text-lg px-8 py-4 group"
//                 >
//                   Start Your Campaign
//                   <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
//                 </Button>
//               </Link>

//               <Button
//                 variant="outline"
//                 size="lg"
//                 className="border-2 border-cherry-200 text-cherry-700 hover:bg-cherry-50 font-semibold text-lg px-8 py-4 group"
//               >
//                 <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
//                 Watch Demo
//               </Button>
//             </div>

//             {/* Stats */}
//             <div className="grid grid-cols-3 gap-8">
//               <div className="text-center">
//                 <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">10K+</div>
//                 <div className="text-gray-600 font-medium">Active Influencers</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">500+</div>
//                 <div className="text-gray-600 font-medium">Brand Partners</div>
//               </div>
//               <div className="text-center">
//                 <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">95%</div>
//                 <div className="text-gray-600 font-medium">Success Rate</div>
//               </div>
//             </div>
//           </div>

//           {/* Hero Image */}
//           <div className="animate-slide-in-right">
//             <div className="relative">
//               <div className="absolute inset-0 bg-cherry-gradient rounded-3xl transform rotate-6 opacity-20"></div>
//               <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
//                 <img
//                   src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
//                   alt="Influencer Marketing Dashboard"
//                   className="w-full h-auto object-cover"
//                 />

//                 {/* Floating Stats Cards */}
//                 <div className="absolute top-6 right-6 bg-white rounded-lg shadow-lg p-4 animate-float">
//                   <div className="text-2xl font-bold text-cherry-600">+212%</div>
//                   <div className="text-sm text-gray-600">Engagement Growth</div>
//                 </div>

//                 <div className="absolute bottom-6 left-6 bg-white rounded-lg shadow-lg p-4 animate-float" style={{ animationDelay: '1s' }}>
//                   <div className="text-2xl font-bold text-cherry-600">&#8377; 1.8Cr +</div>
//                   <div className="text-sm text-gray-600">Campaign ROI</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;


import React, { useEffect, useState } from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import classNames from 'classnames';

const phrases = [
  {
    text: 'Smarter Matches',
    image:
      'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
  },
  {
    text: 'Stronger Outcomes',
    image:
      'https://media.istockphoto.com/id/2155004323/photo/young-african-american-woman-in-colorful-clothing-using-a-smartphone-low-angle-shot-with.webp?a=1&b=1&s=612x612&w=0&k=20&c=p5MBn_JFbrzVrptKGPMZ20RVfBL7Ju1Q-4uIxfFdsu4=',
  },
];

const HeroSection: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [text] = useTypewriter({
    words: phrases.map((p) => p.text),
    loop: 0,
    delaySpeed: 400,
    typeSpeed: 60,
    deleteSpeed: 60
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
            <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Connect For{' '}
              <span className="text-gradient block h-[80px]">
                {text}
                <Cursor cursorStyle="|" />
              </span>
            </h1>

            <p className="text-lg lg:text-2x2 text-gray-600 mb-8 leading-relaxed">
              Denvey is an AI-powered influencer marketing platform connecting brands with the right creators. Brands find influencers who align with their values, while creators discover campaigns that fit their niche. Together, they build authentic partnerships that drive engagement, reach, and real results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link to="/request-demo">
                <Button
                  size="lg"
                  className="bg-cherry-gradient hover:shadow-2xl transform hover:scale-105 transition-all duration-300 text-white font-semibold text-lg px-8 py-4 group"
                >
                  Start Your Campaign
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>

              {/* <Button
                variant="outline"
                size="lg"
                className="border-2 border-cherry-200 text-cherry-700 hover:bg-cherry-50 font-semibold text-lg px-8 py-4 group"
              >
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button> */}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">10K+</div>
                <div className="text-gray-600 font-medium">Active Influencers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">500+</div>
                <div className="text-gray-600 font-medium">Brand Partners</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">100%</div>
                <div className="text-gray-600 font-medium">Success Rate</div>
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
                <div className="absolute top-6 right-6 bg-white rounded-lg shadow-lg p-4 animate-float">
                  <div className="text-2xl font-bold text-cherry-600">+212%</div>
                  <div className="text-sm text-gray-600">Engagement Growth</div>
                </div>

                <div
                  className="absolute bottom-6 left-6 bg-white rounded-lg shadow-lg p-4 animate-float"
                  style={{ animationDelay: '1s' }}
                >
                  <div className="text-2xl font-bold text-cherry-600">&#8377; 1.8Cr +</div>
                  <div className="text-sm text-gray-600">Campaign ROI</div>
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

