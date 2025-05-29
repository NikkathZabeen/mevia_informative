
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowRight, BarChart3, Users, Target, Zap, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Brands = () => {
  const features = [
    {
      icon: <Target className="h-12 w-12 text-cherry-600" />,
      title: "Precision Targeting",
      description: "Find influencers who perfectly match your brand values and target audience using our advanced AI algorithms."
    },
    {
      icon: <BarChart3 className="h-12 w-12 text-cherry-600" />,
      title: "Advanced Analytics",
      description: "Track every metric that matters with real-time reporting and comprehensive campaign insights."
    },
    {
      icon: <Users className="h-12 w-12 text-cherry-600" />,
      title: "Vetted Network",
      description: "Access our curated network of authentic influencers who have been verified for quality and engagement."
    },
    {
      icon: <Zap className="h-12 w-12 text-cherry-600" />,
      title: "Campaign Automation",
      description: "Streamline your workflow with automated contract management, content approval, and payment processing."
    }
  ];

  const benefits = [
    "Increase brand awareness by 350% on average",
    "Drive 5x higher engagement than traditional advertising",
    "Access to vetted influencers across all niches",
    "Real-time campaign tracking and optimization",
    "Secure payment and contract management",
    "Dedicated account manager support"
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
                  Scale Your Brand with
                  <span className="text-gradient block">
                    Authentic Influence
                  </span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Connect with verified influencers who genuinely love your brand.
                  Drive meaningful engagement and measurable results with our enterprise-grade platform.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/request-demo">
                    <Button
                      size="lg"
                      className="bg-cherry-gradient hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-white font-semibold text-lg px-8 py-4 group"
                    >
                      Start Your Campaign
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
                  interval={1000}
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

        {/* Features Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Everything You Need to Succeed
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our comprehensive platform provides all the tools and insights you need to run successful influencer marketing campaigns.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300 border-0">
                  <CardContent className="p-8 text-center">
                    <div className="bg-cherry-50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 lg:py-24 bg-cherry-light-gradient">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
                  Why Brands Choose Denvey
                </h2>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-6 w-6 text-cherry-600 flex-shrink-0" />
                      <span className="text-lg text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <img
                  src="https://media.istockphoto.com/id/1150734727/photo/businesswoman-hand-placing-or-pulling-wooden-dominoes-with-brand-text-and-marketing.webp?a=1&b=1&s=612x612&w=0&k=20&c=QrrGZkeQHKyajwKTg56X6v-ZbLB2qOiNqS2DeU_mVsI="
                  alt="Analytics Dashboard"
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
              Ready to Transform Your Marketing?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Join hundreds of successful brands who trust Denvey to connect them with the perfect influencers for their campaigns.
            </p>
            <Link to="/request-demo">
              <Button
                size="lg"
                className="bg-cherry-gradient hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-white font-semibold text-lg px-8 py-4"
              >
                Get Started Today
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
