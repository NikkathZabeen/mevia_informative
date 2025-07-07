
import React from 'react';
import { ArrowRight, BarChart3, Users, Target, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const BrandsSection = () => {
  const features = [
    {
      icon: <Target className="h-8 w-8 text-cherry-600" />,
      title: "AI-Powered Influencer Discovery",
      description: "Say goodbye to guesswork. Our smart matching algorithm finds the right influencers based on your niche, audience, and campaign goals — faster and more accurately.",
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-cherry-600" />,
      title: "Real-Time Campaign Analytics",
      description: "Track every click, view, and conversion with live data dashboards. Get full visibility into performance metrics that matter — from reach and engagement to ROI.",
    },
    {
      icon: <Users className="h-8 w-8 text-cherry-600" />,
      title: "End-to-End Campaign Management",
      description: "Plan, execute, and manage influencer campaigns seamlessly. From discovery to contract, content approval to payment — Mevia handles it all in one streamlined platform.",
    },
    {
      icon: <Zap className="h-8 w-8 text-cherry-600" />,
      title: "Maximize ROI with Actionable Insights",
      description: "Optimize your influencer marketing strategy with AI-driven recommendations. Spend smarter, scale faster, and convert better with performance-backed decisions.",
    },
  ];

  const brands = [
    "Nike", "Coca-Cola", "Apple", "Google", "Microsoft", "Amazon"
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Achieve Brand Growth with <br /><span className="text-gradient">Effective Creator Collaborations</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Connect with authentic influencers who align with your brand values and speak your audience’s language.
            Mevia helps you drive real engagement, build trust, and
            achieve measurable ROI through data-driven creator collaborations.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center">
                <div className="bg-cherry-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:bg-cherry-100 transition-colors">
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

        {/* Trusted Brands */}
        {/* <div className="text-center mb-12">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8">
            Trusted by Industry Leaders
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {brands.map((brand, index) => (
              <div 
                key={index}
                className="text-2xl font-bold text-gray-400 hover:text-cherry-600 transition-colors cursor-pointer"
              >
                {brand}
              </div>
            ))}
          </div>
        </div> */}

        {/* CTA */}
        <div className="text-center">
          <Link to="/brands">
            <Button
              size="lg"
              className="bg-cherry-gradient hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-white font-semibold text-lg px-3 py-4 group"
            >
              Connect with Ideal Creator
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
