import React from 'react';
import { ArrowRight, BarChart3, Users, Target, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const BrandsSection = () => {
  const features = [
    {
      icon: <Target className="h-8 w-8 text-cherry-600" />,
      title: "Strategic Influencer Campaigns",
      description:
        "We go beyond connections — we craft influencer strategies that resonate. From campaign ideation to final delivery, our team ensures every collaboration amplifies your brand story.",
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-cherry-600" />,
      title: "Data-Driven Campaign Insights",
      description:
        "Gain complete visibility into how your campaigns perform. Our analytics-driven reporting highlights key metrics — engagement, conversions, and ROI — to guide smarter decisions.",
    },
    {
      icon: <Users className="h-8 w-8 text-cherry-600" />,
      title: "Creator Relationship Management",
      description:
        "We handle everything — from identifying the perfect creators to managing contracts, briefs, and deliverables. Build lasting partnerships that drive consistent brand growth.",
    },
    {
      icon: <Zap className="h-8 w-8 text-cherry-600" />,
      title: "Performance Optimization & ROI",
      description:
        "With real-time feedback and post-campaign audits, we refine strategies to maximize results. Every collaboration is optimized for impact, efficiency, and authenticity.",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Elevate Your Brand with <br />
            <span className="text-gradient">Expert Influencer Marketing Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            As a full-service influencer marketing agency, Mevia partners with brands to
            design, execute, and scale impactful campaigns. We combine creativity, strategy,
            and data to turn influencer collaborations into measurable business growth.
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
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link to="/brands">
            <Button
              size="lg"
              className="bg-cherry-gradient hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-white font-semibold text-lg px-3 py-4 group"
            >
              Work With Our Agency
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
