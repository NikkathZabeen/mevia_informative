
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Calendar, Users, BarChart3 } from 'lucide-react';

const RequestDemoSection = () => {
  const demoFeatures = [
    {
      icon: <Users className="h-6 w-6 text-cherry-600" />,
      title: "Live Platform Demo",
      description: "See our influencer discovery and campaign management tools in action."
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-cherry-600" />,
      title: "Analytics Overview",
      description: "Explore real-time performance tracking and ROI measurement."
    },
    {
      icon: <Calendar className="h-6 w-6 text-cherry-600" />,
      title: "Custom Strategy",
      description: "Get personalized recommendations for your brand's goals."
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Ready to See <span className="text-gradient">Denvey</span> in Action?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Book a personalized demo and discover how our platform can transform 
            your influencer marketing campaigns and drive measurable results.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Demo Features */}
          <div className="space-y-8">
            <div className="space-y-6">
              {demoFeatures.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4 animate-fade-in" style={{animationDelay: `${index * 0.2}s`}}>
                  <div className="bg-cherry-100 rounded-full p-3 flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-cherry-light-gradient rounded-2xl p-8">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">
                What You'll Learn
              </h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center space-x-3">
                  <ArrowRight className="h-4 w-4 text-cherry-600" />
                  <span>How to find perfect influencer matches</span>
                </li>
                <li className="flex items-center space-x-3">
                  <ArrowRight className="h-4 w-4 text-cherry-600" />
                  <span>Campaign setup and management best practices</span>
                </li>
                <li className="flex items-center space-x-3">
                  <ArrowRight className="h-4 w-4 text-cherry-600" />
                  <span>Measuring ROI and campaign success</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Demo Request Card */}
          <Card className="shadow-2xl border-0 bg-white">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <div className="bg-cherry-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-8 w-8 text-cherry-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Schedule Your Demo
                </h3>
                <p className="text-gray-600">
                  30-minute personalized session with our experts
                </p>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-cherry-600 mb-1">30</div>
                    <div className="text-sm text-gray-600">Minutes</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-cherry-600 mb-1">Free</div>
                    <div className="text-sm text-gray-600">No Cost</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-cherry-600 mb-1">1:1</div>
                    <div className="text-sm text-gray-600">Personal</div>
                  </div>
                </div>

                <Link to="/request-demo" className="block">
                  <Button className="w-full bg-cherry-gradient hover:shadow-xl transition-all duration-300 text-white font-semibold py-4 text-lg group">
                    Book Your Free Demo
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>

                <p className="text-center text-sm text-gray-500">
                  No commitment required • Available 24/7 • Expert guidance
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default RequestDemoSection;
