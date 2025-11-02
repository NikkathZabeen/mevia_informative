import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Calendar, Clock, CheckCircle, Users, BarChart3, Target, Database, Sheet } from 'lucide-react';

interface DemoFormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  jobTitle: string;
  companySize: string;
  preferredDate: string;
  preferredTime: string;
  interests: string;
}

const RequestDemo = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { register, handleSubmit, reset, formState: { errors } } = useForm<DemoFormData>();

  const demoFeatures = [
    {
      icon: <Target className="h-8 w-8 text-cherry-600" />,
      title: "Marketing Strategy Session",
      description: "Understand how Mevia Agency crafts data-driven marketing strategies to elevate your brand visibility."
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-cherry-600" />,
      title: "Performance Analytics",
      description: "See how we track campaign performance, optimize budgets, and ensure measurable ROI for every client."
    },
    {
      icon: <Users className="h-8 w-8 text-cherry-600" />,
      title: "Creative & Influencer Collaboration",
      description: "Discover our approach to building impactful influencer partnerships and creative storytelling."
    }
  ];

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'
  ];

  const submitToGoogleSheets = async (data: DemoFormData) => {
    try {
      const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/AKfycby2gPPamo5qfGEW9XMJdYvEauO7qCa83PGsIvNfIlyeXg2knQEiWOlftKmfZkuAQq8S/exec';
      await fetch(GOOGLE_SHEETS_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          timestamp: new Date().toISOString(),
          ...data,
          type: 'agency_demo_request'
        }),
      });
      return { success: true };
    } catch (error) {
      console.error('Google Sheets error:', error);
      throw error;
    }
  };

  const onSubmit = async (data: DemoFormData) => {
    setIsSubmitting(true);
    try {
      await submitToGoogleSheets(data);
      toast({
        title: "Consultation Request Submitted!",
        description: "Our team will reach out within 24 hours to schedule your free strategy call.",
      });
      reset();
    } catch (error) {
      console.error('Submission error:', error);
      toast({
        title: "Submission Error",
        description: "There was an issue submitting your request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-24 pb-16 lg:pt-32 lg:pb-24 bg-hero-gradient">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Book a <span className="text-gradient">Free Strategy Call</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Discover how <strong>Mevia Agency</strong> can help your brand grow through creative strategy,
                influencer collaborations, and performance-driven marketing solutions.
              </p>
            </div>

            {/* Key Highlights */}
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

        {/* Consultation Form */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Form */}
              <Card className="shadow-2xl border-0">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Schedule Your Consultation
                  </h2>

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          First Name *
                        </label>
                        <Input {...register('firstName', { required: 'First name is required' })} placeholder="John" />
                        {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Last Name *
                        </label>
                        <Input {...register('lastName', { required: 'Last name is required' })} placeholder="Doe" />
                        {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Work Email *</label>
                      <Input
                        {...register('email', {
                          required: 'Email is required',
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Invalid email address',
                          },
                        })}
                        type="email"
                        placeholder="john@company.com"
                      />
                      {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Company Name *</label>
                      <Input {...register('company', { required: 'Company name is required' })} placeholder="Your Company" />
                      {errors.company && <p className="text-red-500 text-sm mt-1">{errors.company.message}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Job Title</label>
                      <Input {...register('jobTitle')} placeholder="Marketing Manager" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Company Size *</label>
                      <select {...register('companySize', { required: 'Company size is required' })} className="w-full border border-gray-300 rounded-md px-3 py-2">
                        <option value="">Select company size</option>
                        <option value="1-10">1-10 employees</option>
                        <option value="11-50">11-50 employees</option>
                        <option value="51-200">51-200 employees</option>
                        <option value="201-1000">201-1000 employees</option>
                        <option value="1000+">1000+ employees</option>
                      </select>
                      {errors.companySize && <p className="text-red-500 text-sm mt-1">{errors.companySize.message}</p>}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Date *</label>
                        <Input {...register('preferredDate', { required: 'Preferred date is required' })} type="date" />
                        {errors.preferredDate && <p className="text-red-500 text-sm mt-1">{errors.preferredDate.message}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Time *</label>
                        <select {...register('preferredTime', { required: 'Preferred time is required' })} className="w-full border border-gray-300 rounded-md px-3 py-2">
                          <option value="">Select time</option>
                          {timeSlots.map((time) => (
                            <option key={time} value={time}>{time} IST</option>
                          ))}
                        </select>
                        {errors.preferredTime && <p className="text-red-500 text-sm mt-1">{errors.preferredTime.message}</p>}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Tell us about your marketing goals
                      </label>
                      <Textarea {...register('interests')} placeholder="Describe what you're hoping to achieve..." rows={4} />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-cherry-gradient hover:shadow-xl transition-all duration-300 text-white font-semibold py-3"
                    >
                      {isSubmitting ? 'Submitting...' : 'Book Strategy Call'}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Info Section */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">What to Expect</h3>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-cherry-100 rounded-full p-2 mt-1 flex-shrink-0">
                        <Clock className="h-5 w-5 text-cherry-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">30-Minute Consultation</h4>
                        <p className="text-gray-600">A focused session to understand your business challenges and marketing goals.</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-cherry-100 rounded-full p-2 mt-1 flex-shrink-0">
                        <Users className="h-5 w-5 text-cherry-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Expert Insights</h4>
                        <p className="text-gray-600">Talk directly with our strategy and creative experts who’ve worked with top brands.</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-cherry-100 rounded-full p-2 mt-1 flex-shrink-0">
                        <CheckCircle className="h-5 w-5 text-cherry-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Actionable Recommendations</h4>
                        <p className="text-gray-600">Walk away with insights and strategies you can implement immediately.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <Card className="bg-cherry-light-gradient border-0">
                  <CardContent className="p-8">
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">Popular Consultation Topics</h4>
                    <ul className="space-y-3">
                      <li className="flex items-center space-x-3"><CheckCircle className="h-5 w-5 text-cherry-600" /><span>Brand positioning & storytelling</span></li>
                      <li className="flex items-center space-x-3"><CheckCircle className="h-5 w-5 text-cherry-600" /><span>Influencer marketing strategy</span></li>
                      <li className="flex items-center space-x-3"><CheckCircle className="h-5 w-5 text-cherry-600" /><span>Social media growth plans</span></li>
                      <li className="flex items-center space-x-3"><CheckCircle className="h-5 w-5 text-cherry-600" /><span>Campaign performance & analytics</span></li>
                      <li className="flex items-center space-x-3"><CheckCircle className="h-5 w-5 text-cherry-600" /><span>Creative content ideation</span></li>
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
