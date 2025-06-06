
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowRight, IndianRupee, TrendingUp, Shield, Star, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
const Influencers = () => {
  const benefits = [
    {
      icon: <IndianRupee className="h-12 w-12 text-cherry-600" />,
      title: "Fair Compensation",
      description: "Get paid what you're worth with transparent pricing and guaranteed payment protection."
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-cherry-600" />,
      title: "Grow Your Brand",
      description: "Access exclusive opportunities and tools to expand your reach and build your personal brand."
    },
    {
      icon: <Shield className="h-12 w-12 text-cherry-600" />,
      title: "Secure Platform",
      description: "Work with verified brands through our secure platform with contract protection and dispute resolution."
    },
    {
      icon: <Star className="h-12 w-12 text-cherry-600" />,
      title: "Premium Partnerships",
      description: "Connect with top-tier brands that align with your values and audience interests."
    }
  ];

  const perks = [
    "Guaranteed payment within 30 days",
    "Access to exclusive brand partnerships",
    "Professional development resources",
    "24/7 creator support team",
    "Performance analytics and insights",
    "Flexible collaboration terms"
  ];
  const carouselImages = [
    "https://images.unsplash.com/photo-1626455530771-c69b7fb3ca40?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGluZmx1ZW5jZXJ8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1585834377284-e86d9f5c647c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fGluZmx1ZW5jZXJ8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3ltfGVufDB8fDB8fHww",
    "https://images.unsplash.com/flagged/photo-1570733117311-d990c3816c47?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGZhc2hpb258ZW58MHx8MHx8fDA%3D",
    "https://media.istockphoto.com/id/2145872892/photo/blogger-mom-snaps-selfie-with-daughter-eating-ice-cream-in-pool-at-luxury-resort-smiling-duo.webp?a=1&b=1&s=612x612&w=0&k=20&c=25ghQJXNpcv7wX4CIVEDqpc9mw5JIdOj382k34FNxrA="
  ];
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-24 pb-16 lg:pt-32 lg:pb-24 bg-hero-gradient">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                  Turn Your Passion into
                  <span className="text-gradient block">
                    Profitable Partnerships
                  </span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Join thousands of creators who are building sustainable careers through authentic brand collaborations.
                  Get discovered, get paid, and grow your influence.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/login/influencers">
                    <Button
                      size="lg"
                      className="bg-cherry-gradient hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-white font-semibold text-lg px-8 py-4 group"
                    >
                      Join Our Network
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div>
                <img
                  src="https://plus.unsplash.com/premium_photo-1663040316559-8684ca45d7e9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29udGVudCUyMGNyZWF0aW9ufGVufDB8fDB8fHww"
                  alt="Content Creator"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Why Creators Love Denvey
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We're committed to supporting creators with the tools, opportunities, and protection they need to thrive.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300 border-0">
                  <CardContent className="p-8 text-center">
                    <div className="bg-cherry-50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories */}
        {/* <section className="py-16 lg:py-24 bg-cherry-light-gradient">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Creator Success Stories
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Real creators, real results, real income growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Yogesh Chandra",
                  handle: "@yogeshfitness",
                  growth: "+200% income",
                  quote: "Denvey helped me turn my fitness passion into a six-figure business. The brand partnerships are authentic and my audience loves them!",
                  avatar: "https://t4.ftcdn.net/jpg/04/86/27/55/240_F_486275542_2naclPUDyNhgq3hxpxTzCdyBNQa1s6vP.jpg"
                },
                {
                  name: "Tejaswini P",
                  handle: "@tejatech",
                  growth: "+150% followers",
                  quote: "Working with tech brands through Denvey has elevated my content and brought amazing opportunities I never would have found alone.",
                  avatar: "https://t4.ftcdn.net/jpg/12/02/06/19/240_F_1202061968_jy1FfLFEqVlE0zJBQxKGdvk2Ke9BOcHj.jpg "
                },
                {
                  name: "Neha Sareen",
                  handle: "@nehastyle",
                  growth: "+300% engagement",
                  quote: "The platform makes collaboration so easy. I can focus on creating great content while Denvey handles all the business side.",
                  avatar: "https://t4.ftcdn.net/jpg/10/74/47/15/240_F_1074471597_N3g30RATGfhMN7bRfy6lQzOnteZsudIZ.jpg"
                }
              ].map((story, index) => (
                <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-0">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <img
                        src={story.avatar}
                        alt={story.name}
                        className="w-16 h-16 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h4 className="font-semibold text-gray-900 text-lg">{story.name}</h4>
                        <p className="text-cherry-600">{story.handle}</p>
                        <p className="text-sm font-semibold text-green-600">{story.growth}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 italic leading-relaxed">
                      "{story.quote}"
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section> */}

        {/* Perks Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <Swiper
                  spaceBetween={20}
                  slidesPerView={1}
                  autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                  }}
                  modules={[Autoplay]}
                  className="rounded-2xl shadow-2xl"
                  style={{
                    transition: "ease-in 0.5s",
                  }}
                >
                  {carouselImages.map((url, index) => (
                    <SwiperSlide key={index}>
                      <img
                        src={url}
                        alt={`Slide ${index + 1}`}
                        className="rounded-2xl object-cover w-full h-96"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  More Than Just a Platform
                </h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  We empower creators with all the tools they need to grow, succeed, and own their journey.
                </p>
                <ul className="space-y-4">
                  {perks.map((perk, index) => (
                    <li key={index} className="flex items-center text-gray-700 text-lg">
                      <CheckCircle className="text-cherry-600 w-5 h-5 mr-3" />
                      {perk}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-cherry-light-gradient">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Ready to Monetize Your Influence?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Join our creator network and start collaborating with brands that value your unique voice and creativity.
            </p>
            <Link to="/login/influencers">
              <Button
                size="lg"
                className="bg-cherry-gradient hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-white font-semibold text-lg px-8 py-4"
              >
                Apply to Join
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Influencers;


// import React from 'react';
// import Header from '@/components/Header';
// import Footer from '@/components/Footer';
// import { ArrowRight, IndianRupee, TrendingUp, Shield, Star, CheckCircle } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent } from '@/components/ui/card';
// import { Link } from 'react-router-dom';

// // Swiper imports
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination, Autoplay } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/pagination';

// const Influencers = () => {
//   const benefits = [
//     {
//       icon: <IndianRupee className="h-12 w-12 text-cherry-600" />,
//       title: "Fair Compensation",
//       description: "Get paid what you're worth with transparent pricing and guaranteed payment protection."
//     },
//     {
//       icon: <TrendingUp className="h-12 w-12 text-cherry-600" />,
//       title: "Grow Your Brand",
//       description: "Access exclusive opportunities and tools to expand your reach and build your personal brand."
//     },
//     {
//       icon: <Shield className="h-12 w-12 text-cherry-600" />,
//       title: "Secure Platform",
//       description: "Work with verified brands through our secure platform with contract protection and dispute resolution."
//     },
//     {
//       icon: <Star className="h-12 w-12 text-cherry-600" />,
//       title: "Premium Partnerships",
//       description: "Connect with top-tier brands that align with your values and audience interests."
//     }
//   ];


//   const perks = [
//     "Guaranteed payment within 30 days",
//     "Access to exclusive brand partnerships",
//     "Professional development resources",
//     "24/7 creator support team",
//     "Performance analytics and insights",
//     "Flexible collaboration terms"
//   ];

const carouselImages = [
  "https://images.unsplash.com/photo-1626455530771-c69b7fb3ca40?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGluZmx1ZW5jZXJ8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1585834377284-e86d9f5c647c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fGluZmx1ZW5jZXJ8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3ltfGVufDB8fDB8fHww",
  "https://images.unsplash.com/flagged/photo-1570733117311-d990c3816c47?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGZhc2hpb258ZW58MHx8MHx8fDA%3D",
  "https://media.istockphoto.com/id/2145872892/photo/blogger-mom-snaps-selfie-with-daughter-eating-ice-cream-in-pool-at-luxury-resort-smiling-duo.webp?a=1&b=1&s=612x612&w=0&k=20&c=25ghQJXNpcv7wX4CIVEDqpc9mw5JIdOj382k34FNxrA="
];

//   return (
//     <div className="min-h-screen">
//       <Header />
//       <main>
//         {/* Hero Section */}
//         <section className="pt-24 pb-16 lg:pt-32 lg:pb-24 bg-hero-gradient">
//           <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//               <div>
//                 <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
//                   Turn Your Passion into
//                   <span className="text-gradient block">
//                     Profitable Partnerships
//                   </span>
//                 </h1>
//                 <p className="text-xl text-gray-600 mb-8 leading-relaxed">
//                   Join thousands of creators who are building sustainable careers through authentic brand collaborations.
//                   Get discovered, get paid, and grow your influence.
//                 </p>
//                 <div className="flex flex-col sm:flex-row gap-4">
//                   <Link to="/login/influencers">
//                     <Button
//                       size="lg"
//                       className="bg-cherry-gradient hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-white font-semibold text-lg px-8 py-4 group"
//                     >
//                       Join Our Network
//                       <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
//                     </Button>
//                   </Link>
//                 </div>
//               </div>
//               <div>
//                 <img
//                   src="https://images.unsplash.com/photo-1726066012749-f81bf4422d4e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGJyYW5kJTIwbWFya2V0aW5nfGVufDB8fDB8fHww"
//                   alt="Content Creator"
//                   className="rounded-2xl shadow-2xl"
//                 />
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Perks Section with Swiper Carousel */}
//         <section className="py-16 lg:py-24 bg-white">
//           <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//               <div>
//                 <Swiper
//                   spaceBetween={20}
//                   slidesPerView={1}
//                   autoplay={{
//                     delay: 1000,
//                     disableOnInteraction: false,
//                   }}
//                   modules={[Autoplay]}
//                   className="rounded-2xl shadow-2xl"
//                   style={{
//                     transition: "ease-in 0.5s",
//                   }}
//                 >
//                   {carouselImages.map((url, index) => (
//                     <SwiperSlide key={index}>
//                       <img
//                         src={url}
//                         alt={`Slide ${index + 1}`}
//                         className="rounded-2xl object-cover w-full h-96"
//                       />
//                     </SwiperSlide>
//                   ))}
//                 </Swiper>
//               </div>
//               <div>
//                 <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
//                   More Than Just a Platform
//                 </h2>
//                 <p className="text-xl text-gray-600 mb-8 leading-relaxed">
//                   We empower creators with all the tools they need to grow, succeed, and own their journey.
//                 </p>
//                 <ul className="space-y-4">
//                   {perks.map((perk, index) => (
//                     <li key={index} className="flex items-center text-gray-700 text-lg">
//                       <CheckCircle className="text-cherry-600 w-5 h-5 mr-3" />
//                       {perk}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </section>
//         {/* CTA Section */}
//         <section className="py-16 lg:py-24 bg-cherry-light-gradient">
//           <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
//             <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
//               Ready to Monetize Your Influence?
//             </h2>
//             <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
//               Join our creator network and start collaborating with brands that value your unique voice and creativity.
//             </p>
//             <Link to="/login/influencers">
//               <Button
//                 size="lg"
//                 className="bg-cherry-gradient hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-white font-semibold text-lg px-8 py-4"
//               >
//                 Apply to Join
//               </Button>
//             </Link>
//           </div>
//         </section>
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default Influencers;
