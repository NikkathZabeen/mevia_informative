
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Clock, CheckCircle, Users, BarChart3, Target } from 'lucide-react';

const RequestDemo = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const demoFeatures = [
    {
      icon: <Users className="h-8 w-8 text-cherry-600" />,
      title: "Influencer Discovery",
      description: "See how our AI-powered matching finds the perfect creators for your brand."
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-cherry-600" />,
      title: "Analytics Dashboard",
      description: "Explore real-time campaign tracking and comprehensive performance metrics."
    },
    {
      icon: <Target className="h-8 w-8 text-cherry-600" />,
      title: "Campaign Management",
      description: "Learn about our streamlined workflow from discovery to payment."
    }
  ];

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-24 pb-16 lg:pt-32 lg:pb-24 bg-hero-gradient">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Request a <span className="text-gradient">Demo</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                See Denvey in action with a personalized demo. Our experts will show you how to
                launch successful influencer campaigns and achieve your marketing goals.
              </p>
            </div>

            {/* Demo Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {demoFeatures.map((feature, index) => (
                <Card key={index} className="text-center shadow-lg border-0 bg-white">
                  <CardContent className="p-8">
                    <div className="bg-cherry-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
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

        {/* Demo Request Form */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Form */}
              <Card className="shadow-2xl border-0">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Schedule Your Demo
                  </h2>

                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          First Name *
                        </label>
                        <Input placeholder="Amulya" className="border-gray-300 focus:border-cherry-500" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Last Name *
                        </label>
                        <Input placeholder="Sri" className="border-gray-300 focus:border-cherry-500" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Work Email *
                      </label>
                      <Input type="email" placeholder="sri@company.com" className="border-gray-300 focus:border-cherry-500" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company Name *
                      </label>
                      <Input placeholder="Your Company" className="border-gray-300 focus:border-cherry-500" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Job Title
                      </label>
                      <Input placeholder="Marketing Manager" className="border-gray-300 focus:border-cherry-500" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company Size *
                      </label>
                      <select className="w-full border border-gray-300 rounded-md px-3 py-2 focus:border-cherry-500 focus:outline-none">
                        <option>Select company size</option>
                        <option>1-10 employees</option>
                        <option>11-50 employees</option>
                        <option>51-200 employees</option>
                        <option>201-1000 employees</option>
                        <option>1000+ employees</option>
                      </select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Preferred Date *
                        </label>
                        <div className="relative">
                          <Input
                            type="date"
                            value={selectedDate}
                            onChange={(e) => setSelectedDate(e.target.value)}
                            className="border-gray-300 focus:border-cherry-500"
                          />
                          <Calendar className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Preferred Time *
                        </label>
                        <select
                          value={selectedTime}
                          onChange={(e) => setSelectedTime(e.target.value)}
                          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:border-cherry-500 focus:outline-none"
                        >
                          <option>Select time</option>
                          {timeSlots.map((time) => (
                            <option key={time} value={time}>{time} IST</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        What are you most interested in learning about?
                      </label>
                      <Textarea
                        placeholder="Tell us about your marketing goals and challenges..."
                        rows={4}
                        className="border-gray-300 focus:border-cherry-500"
                      />
                    </div>

                    <Button className="w-full bg-cherry-gradient hover:shadow-xl transition-all duration-300 text-white font-semibold py-3">
                      Schedule Demo
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Demo Information */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    What to Expect
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-cherry-100 rounded-full p-2 mt-1 flex-shrink-0">
                        <Clock className="h-5 w-5 text-cherry-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">30-Minute Session</h4>
                        <p className="text-gray-600">A focused demo tailored to your specific needs and use cases.</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-cherry-100 rounded-full p-2 mt-1 flex-shrink-0">
                        <Users className="h-5 w-5 text-cherry-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Expert Guidance</h4>
                        <p className="text-gray-600">Learn from our influencer marketing specialists who work with top brands.</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-cherry-100 rounded-full p-2 mt-1 flex-shrink-0">
                        <CheckCircle className="h-5 w-5 text-cherry-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Custom Strategy</h4>
                        <p className="text-gray-600">Get actionable insights for your specific industry and marketing goals.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <Card className="bg-cherry-light-gradient border-0">
                  <CardContent className="p-8">
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">
                      Popular Demo Topics
                    </h4>
                    <ul className="space-y-3">
                      <li className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-cherry-600" />
                        <span className="text-gray-700">Platform navigation and setup</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-cherry-600" />
                        <span className="text-gray-700">Influencer discovery and vetting</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-cherry-600" />
                        <span className="text-gray-700">Campaign creation and management</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-cherry-600" />
                        <span className="text-gray-700">Performance tracking and ROI</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-cherry-600" />
                        <span className="text-gray-700">Pricing and package options</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default RequestDemo;
