import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowRight, Briefcase, TrendingUp, Shield, Star, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const Influencers = () => {
  const benefits = [
    {
      icon: <Briefcase className="h-12 w-12 text-cherry-600" />,
      title: "High-Value Brand Collaborations",
      description: "Partner with premium brands through our agency-managed campaigns designed to highlight your authentic influence."
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-cherry-600" />,
      title: "Personal Brand Growth",
      description: "Access creative direction, professional shoots, and strategic guidance to elevate your online presence."
    },
    {
      icon: <Shield className="h-12 w-12 text-cherry-600" />,
      title: "Secure & Transparent Deals",
      description: "We handle contracts, payments, and brand coordination — ensuring a seamless and trustworthy collaboration process."
    },
    {
      icon: <Star className="h-12 w-12 text-cherry-600" />,
      title: "Talent Representation",
      description: "As your agency, we help negotiate rates, pitch your profile to global brands, and amplify your reach across industries."
    }
  ];

  const perks = [
    "Guaranteed payments and contract protection",
    "Exclusive partnerships with global and luxury brands",
    "Creative direction and content strategy support",
    "Talent PR and social media growth consulting",
    "Dedicated manager for brand collaborations",
    "Performance tracking and career development"
  ];

  const carouselImages = [
    "https://images.unsplash.com/photo-1626455530771-c69b7fb3ca40?w=600&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1585834377284-e86d9f5c647c?w=600&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/flagged/photo-1570733117311-d990c3816c47?w=600&auto=format&fit=crop&q=60",
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
                  As a full-service influencer marketing agency, we connect talented creators with purpose-driven brands.
                  Collaborate, grow, and let our team handle the business — so you can focus on creating.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/join-talent">
                    <Button
                      size="lg"
                      className="bg-cherry-gradient hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-white font-semibold text-lg px-8 py-4 group"
                    >
                      Apply as a Creator
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div>
                <img
                  src="https://plus.unsplash.com/premium_photo-1663040316559-8684ca45d7e9?w=600&auto=format&fit=crop&q=60"
                  alt="Creator Collaboration"
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
                Why Creators Choose Our Agency
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We represent and support influencers through every stage — from content creation to brand partnerships and long-term growth.
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

        {/* Perks Section */}
        <section className="py-16 lg:py-24 bg-cherry-light-gradient">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <Swiper
                  spaceBetween={20}
                  slidesPerView={1}
                  autoplay={{
                    delay: 1500,
                    disableOnInteraction: false,
                  }}
                  modules={[Autoplay]}
                  className="rounded-2xl shadow-2xl"
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
                  What You Get with Us
                </h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Partnering with our agency means you’re never navigating the creator journey alone —
                  we guide, support, and amplify your influence.
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
        <section className="py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Ready to Work with Our Agency?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Let’s build your brand, expand your reach, and connect you with meaningful partnerships that last.
            </p>
            <Link to="/join-talent">
              <Button
                size="lg"
                className="bg-cherry-gradient hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-white font-semibold text-lg px-8 py-4"
              >
                Get Started
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
