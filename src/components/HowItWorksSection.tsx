import React from 'react';
import { Search, Handshake, BarChart, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const HowItWorksSection = () => {
  const steps = [
    {
      icon: <Search className="h-12 w-12 text-cherry-600" />,
      title: "Research & Strategy",
      description: "We start by understanding your brand, audience, and goals to craft a data-driven influencer marketing strategy that fits your identity.",
      color: "bg-blue-50"
    },
    {
      icon: <Handshake className="h-12 w-12 text-cherry-600" />,
      title: "Creator Collaboration",
      description: "Our team identifies, reaches out to, and manages influencers who align perfectly with your brand message and campaign objectives.",
      color: "bg-purple-50"
    },
    {
      icon: <BarChart className="h-12 w-12 text-cherry-600" />,
      title: "Campaign Execution",
      description: "We handle end-to-end execution — from creative direction and content approval to scheduling, publishing, and coordination.",
      color: "bg-green-50"
    },
    {
      icon: <CheckCircle className="h-12 w-12 text-cherry-600" />,
      title: "Performance & Reporting",
      description: "Once the campaign goes live, we track KPIs, analyze engagement metrics, and deliver transparent performance reports with actionable insights.",
      color: "bg-orange-50"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            How <span className="text-gradient">Denvey Works</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our process blends creativity and strategy — helping brands partner with the right creators,
            deliver meaningful stories, and achieve measurable impact.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg h-full">
                <CardContent className="p-8 text-center h-full flex flex-col">
                  <div className={`${step.color} rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                    {step.icon}
                  </div>

                  <div className="bg-cherry-600 text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                    {index + 1}
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {step.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed flex-grow">
                    {step.description}
                  </p>
                </CardContent>
              </Card>

              {/* Connector Arrow (hidden on mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <div className="w-8 h-0.5 bg-cherry-300"></div>
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-cherry-300 border-t-2 border-t-transparent border-b-2 border-b-transparent"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
