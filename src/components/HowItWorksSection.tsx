
import React from 'react';
import { Search, Handshake, BarChart, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const HowItWorksSection = () => {
  const steps = [
    {
      icon: <Search className="h-12 w-12 text-cherry-600" />,
      title: "Discover & Connect",
      description: "Browse our curated network of influencers or let brands find you through our AI-powered matching system.",
      color: "bg-blue-50"
    },
    {
      icon: <Handshake className="h-12 w-12 text-cherry-600" />,
      title: "Collaborate & Create",
      description: "Work together on authentic content that resonates with your audience and achieves campaign objectives.",
      color: "bg-purple-50"
    },
    {
      icon: <BarChart className="h-12 w-12 text-cherry-600" />,
      title: "Track & Optimize",
      description: "Monitor performance in real-time with detailed analytics and insights to maximize campaign success.",
      color: "bg-green-50"
    },
    {
      icon: <CheckCircle className="h-12 w-12 text-cherry-600" />,
      title: "Deliver Results",
      description: "Achieve measurable outcomes with our comprehensive reporting and ROI tracking tools.",
      color: "bg-orange-50"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            How to Get <span className="text-gradient">Started</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From discovery to delivery, our streamlined process makes influencer marketing simple,
            effective, and transparent for both brands and creators.
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

        {/* Process Visualization */}
        {/* <div className="bg-cherry-light-gradient rounded-3xl p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Seamless Workflow
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our platform automates the complex parts of influencer marketing while keeping the human connection at its core.
                From contract negotiations to payment processing, we handle the logistics so you can focus on creating amazing content.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-cherry-600" />
                  <span className="text-gray-700 font-medium">Automated matching algorithm</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-cherry-600" />
                  <span className="text-gray-700 font-medium">Secure contract management</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-cherry-600" />
                  <span className="text-gray-700 font-medium">Real-time performance tracking</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-cherry-600" />
                  <span className="text-gray-700 font-medium">Guaranteed payment protection</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://plus.unsplash.com/premium_photo-1725408044110-eff678909e0a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHNvY2lhbCUyMG1lZGlhJTIwbWFhcmtldGluZ3xlbnwwfHwwfHx8MA%3D%3D"
                alt="Workflow Dashboard"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-cherry-gradient rounded-2xl opacity-10"></div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default HowItWorksSection;
