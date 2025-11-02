import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowRight, Briefcase, Lightbulb, Users, Zap, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Brands = () => {
  const services = [
    {
      icon: <Lightbulb className="h-12 w-12 text-cherry-600" />,
      title: "Creative Campaign Strategy",
      description:
        "We design data-driven influencer campaigns tailored to your brand goals — from concept ideation to flawless execution.",
    },
    {
      icon: <Users className="h-12 w-12 text-cherry-600" />,
      title: "Influencer Sourcing & Management",
      description:
        "Our team handpicks and manages influencers who align perfectly with your audience, ensuring authenticity and high engagement.",
    },
    {
      icon: <Briefcase className="h-12 w-12 text-cherry-600" />,
      title: "Content Production & Brand Storytelling",
      description:
        "We handle end-to-end creative production — videos, reels, and posts that amplify your brand’s voice across all platforms.",
    },
    {
      icon: <Zap className="h-12 w-12 text-cherry-600" />,
      title: "Performance Tracking & ROI Reporting",
      description:
        "Get transparent reports on reach, conversions, and ROI with actionable insights that help you scale every campaign.",
    },
  ];

  const reasons = [
    "Personalized influencer strategy tailored to your brand",
    "Access to 10,000+ verified influencers across niches",
    "End-to-end campaign execution handled by our experts",
    "Creative team for scripting, production & storytelling",
    "Transparent ROI tracking and performance reports",
    "Trusted by top startups and D2C brands across India",
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
                  Scale Your Brand with <span className="text-gradient block">Authentic Influence</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  At Mevia, we craft impactful influencer campaigns that connect brands with audiences through creativity,
                  strategy, and authenticity. From ideation to execution — we do it all for you.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/request-demo">
                    <Button
                      size="lg"
                      className="bg-cherry-gradient hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-white font-semibold text-lg px-8 py-4 group"
                    >
                      Work With Us
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div>
                <Carousel
                  showThumbs={false}
                  showStatus={false}
                  autoPlay
                  infiniteLoop
                  interval={1500}
                  className="rounded-2xl shadow-2xl"
                >
                  {[
                    "https://media.istockphoto.com/id/1219580367/photo/marketing-campaign-brand-advertisement-business-strategy.webp?a=1&b=1&s=612x612&w=0&k=20&c=M2pvJ-vlg4m6kWpYZT199Ye0HMkk0kTM-rKy8fid8W0=",
                    "https://plus.unsplash.com/premium_photo-1713820020924-aef581945a3f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGJyYW5kcyUyMGNhbXBhaWduc3xlbnwwfHwwfHx8MA%3D%3D",
                    "https://media.istockphoto.com/id/2098359215/photo/digital-marketing-concept-businessman-using-laptop-with-ads-dashboard-digital-marketing.jpg?s=612x612&w=0&k=20&c=OdQP1rq-YcNN2nIuC8slL1BJKEwdYb7rT5mqTUNSTZQ=",
                    "https://plus.unsplash.com/premium_photo-1713820010572-b8c4b2ecbd55?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YnJhbmQlMjBkZWFsc3xlbnwwfHwwfHx8MA%3D%3D",
                    "https://media.istockphoto.com/id/1384828553/photo/is-it-time-to-travel-again.jpg?s=612x612&w=0&k=20&c=N9U9gozBykwFyaIuAbRcdPBPzMTClyLGx4kSyNaLN9s="
                  ].map((src, index) => (
                    <div key={index}>
                      <img src={src} alt={`Slide ${index + 1}`} className="rounded-2xl" />
                    </div>
                  ))}
                </Carousel>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Our Core Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From influencer selection to campaign analytics — we manage every detail to help your brand make an impact.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300 border-0">
                  <CardContent className="p-8 text-center">
                    <div className="bg-cherry-50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 lg:py-24 bg-cherry-light-gradient">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
                  Why Brands Partner with Mevia Agency
                </h2>
                <div className="space-y-4">
                  {reasons.map((reason, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-6 w-6 text-cherry-600 flex-shrink-0" />
                      <span className="text-lg text-gray-700">{reason}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <img
                  src="https://media.istockphoto.com/id/1150734727/photo/businesswoman-hand-placing-or-pulling-wooden-dominoes-with-brand-text-and-marketing.webp?a=1&b=1&s=612x612&w=0&k=20&c=QrrGZkeQHKyajwKTg56X6v-ZbLB2qOiNqS2DeU_mVsI="
                  alt="Agency Campaign Strategy"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Let’s Build Influence That Converts
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Partner with Mevia Agency to create influencer campaigns that resonate, inspire, and deliver measurable business growth.
            </p>
            <Link to="/request-demo">
              <Button
                size="lg"
                className="bg-cherry-gradient hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-white font-semibold text-lg px-8 py-4"
              >
                Get in Touch
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Brands;
