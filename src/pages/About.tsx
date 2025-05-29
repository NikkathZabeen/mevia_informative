
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
import { Users, Target, Award, Globe } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const values = [
    {
      icon: <Users className="h-8 w-8 text-cherry-600" />,
      title: "AI-Powered Matchmaking",
      description: "Go beyond demographics. Connect through deep behavior and brand-fit analysis."
    },
    {
      icon: <Target className="h-8 w-8 text-cherry-600" />,
      title: "ROI Prediction & Simulation",
      description: "Know your impact before your campaign even launches."
    },
    {
      icon: <Award className="h-8 w-8 text-cherry-600" />,
      title: "Live Intelligence Layer",
      description: "Real-time performance tracking, fraud detection, and sentiment heatmaps."
    },
    {
      icon: <Globe className="h-8 w-8 text-cherry-600" />,
      title: "Ethical Influence Economy",
      description: "Trust, transparency, and technology drive every partnership we build."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-24 pb-16 lg:pt-32 lg:pb-24 bg-hero-gradient">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                About <span className="text-gradient">Denvey</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Denvey is a next-generation marketplace redefining how brands and influencers collaborate in a data-driven, ROI-focused world.
                We empower brands to discover, connect, and grow with the right voices—not just the loudest ones.
              </p>
            </div>
          </div>
        </section>


        {/* Mission & Vision Section */}
        <section className="py-16 lg:py-24 bg-white">
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
        </section>

        {/* Traction Section */}

        <section className="py-16 lg:py-24 bg-gradient-to-br from-white via-pink-50 to-cherry-50">
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
        </section>



        {/* Values Section */}
        <section className="py-16 lg:py-24 bg-cherry-light-gradient">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                What Makes Denvey Different?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We solve modern marketing’s biggest challenge: influence without outcome. Here's how we engineer success.
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

        {/* Team Section */}
        <section className="py-16 lg:py-24 bg-white">
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
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
