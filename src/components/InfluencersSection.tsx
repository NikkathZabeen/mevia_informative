
import React from 'react';
import { ArrowRight, IndianRupee, TrendingUp, Shield, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const InfluencersSection = () => {
  const benefits = [
    {
      icon: <IndianRupee className="h-8 w-8 text-cherry-600" />,
      title: "Monetize Your Content with High-Value Brand Deals",
      description: "Transform your social media influence into sustainable income. Partner with premium, verified brands that align with your niche and audience.",
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-cherry-600" />,
      title: "Accelerate Your Growth with Smart Tools",
      description: "Access actionable insights, performance tracking, and personalized tips to grow your reach and build a loyal, engaged community.",
    },
    {
      icon: <Shield className="h-8 w-8 text-cherry-600" />,
      title: "Secure, Verified Brand Collaborations",
      description: "Get peace of mind with guaranteed payments, transparent contracts, and brand partnerships that are safe, secure, and built for long-term value.",
    },
    {
      icon: <Star className="h-8 w-8 text-cherry-600" />,
      title: "Exclusive Campaign Access",
      description: "Be the first to land high-paying influencer campaigns and exclusive brand collaborations tailored to your style, content category, and audience demographics.",
    },
  ];
  const testimonials = [
    {
      name: "Aarav Mehta",
      handle: "@aarav_lifestyle",
      followers: "250K",
      quote: "Mevia helped me find brands that match my audience and values. My reach and trust have grown tremendously!",
      avatar: "https://images.unsplash.com/photo-1509933551745-514268e48884?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGluZGlhbiUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      name: "Riya Sharma",
      handle: "@riya_fitness",
      followers: "180K",
      quote: "The platform made brand deals smooth and trustworthy. I'm finally earning what I deserve as a creator.",
      avatar: "https://images.unsplash.com/photo-1607189200597-4d0923ef98c6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW5kaWFuJTIwcGVvcGxlfGVufDB8fDB8fHww"
    },
    {
      name: "Neha Patil",
      handle: "@neha_fooddiary",
      followers: "320K",
      quote: "Mevia values content creators and ensures we’re paid fairly. It’s a game changer for Indian influencers.",
      avatar: "https://plus.unsplash.com/premium_photo-1682098109069-0e49e3b42884?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGluZGlhbiUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-cherry-light-gradient">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Transform Your  <span className="text-gradient">Influence into Impact</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join a thriving network of content creators turning their passion into a full-time profession.
            Collaborate with top brands, grow your audience, and monetize your content — all on one creator-first platform.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg bg-white"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center">
                <div className="bg-cherry-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:bg-cherry-100 transition-colors">
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

        {/* Testimonials */}
        {/* <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Creator Success Stories
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-0"
              >
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-cherry-600">{testimonial.handle}</p>
                      <p className="text-sm text-gray-500">{testimonial.followers} followers</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div> */}

        {/* CTA */}
        <div className="text-center">
          <Link to="/influencers">
            <Button
              size="lg"
              className="bg-cherry-gradient hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-white font-semibold text-lg px-3 py-4 group"
            >
              Join Creator Network Today
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default InfluencersSection;
