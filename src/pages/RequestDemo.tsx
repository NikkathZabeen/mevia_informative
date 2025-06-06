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
// import { createClient } from '@supabase/supabase-js';

// const supabase = createClient(
//   'https://zyxtbelggineqthfskgq.supabase.co',
//   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp5eHRiZWxnZ2luZXF0aGZza2dxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkxODcwNTQsImV4cCI6MjA2NDc2MzA1NH0.MyoeqdxJP_7tpx1QoiVFW4mkboctoIbI6RQjmb7-KxQ'
// );

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

  // const submitToSupabase = async (data: DemoFormData) => {
  //   try {
  //     console.log('Submitting to Supabase:', data);
  //     // TODO: Replace with actual Supabase client call
  //     const { error } = await supabase
  //       .from('demo_requests')
  //       .insert([{
  //         first_name: data.firstName,
  //         last_name: data.lastName,
  //         email: data.email,
  //         company: data.company,
  //         job_title: data.jobTitle,
  //         company_size: data.companySize,
  //         preferred_date: data.preferredDate,
  //         preferred_time: data.preferredTime,
  //         interests: data.interests,
  //         created_at: new Date().toISOString()
  //       }]);

  //     if (error) throw error;
  //     return { success: true };
  //   } catch (error) {
  //     console.error('Supabase error:', error);
  //     throw error;
  //   }
  // };

  const submitToGoogleSheets = async (data: DemoFormData) => {
    try {
      console.log('Submitting to Google Sheets:', data);
      // TODO: Replace with your Google Sheets Web App URL
      const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/AKfycby2gPPamo5qfGEW9XMJdYvEauO7qCa83PGsIvNfIlyeXg2knQEiWOlftKmfZkuAQq8S/exec';

      const response = await fetch(GOOGLE_SHEETS_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          timestamp: new Date().toISOString(),
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          company: data.company,
          jobTitle: data.jobTitle,
          companySize: data.companySize,
          preferredDate: data.preferredDate,
          preferredTime: data.preferredTime,
          interests: data.interests,
          type: 'demo_request'
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
    console.log('Form submitted:', data);

    try {
      // Submit to both Supabase and Google Sheets
      await Promise.all([
        // submitToSupabase(data),
        submitToGoogleSheets(data)
      ]);

      toast({
        title: "Demo Request Submitted!",
        description: "We'll contact you within 24 hours to schedule your personalized demo.",
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
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-3xl font-bold text-gray-900">
                      Schedule Your Demo
                    </h2>
                    {/* <div className="flex space-x-2">
                      <div className="bg-cherry-100 rounded-full p-2">
                        <Database className="h-5 w-5 text-cherry-600" />
                      </div>
                      <div className="bg-green-100 rounded-full p-2">
                        <Sheet className="h-5 w-5 text-green-600" />
                      </div>
                    </div> */}
                  </div>

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          First Name *
                        </label>
                        <Input
                          {...register('firstName', { required: 'First name is required' })}
                          placeholder="John"
                          className="border-gray-300 "
                        />
                        {errors.firstName && (
                          <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Last Name *
                        </label>
                        <Input
                          {...register('lastName', { required: 'Last name is required' })}
                          placeholder="Doe"
                          className="border-gray-300 "
                        />
                        {errors.lastName && (
                          <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Work Email *
                      </label>
                      <Input
                        {...register('email', {
                          required: 'Email is required',
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Invalid email address'
                          }
                        })}
                        type="email"
                        placeholder="john@company.com"
                        className="border-gray-300 "
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company Name *
                      </label>
                      <Input
                        {...register('company', { required: 'Company name is required' })}
                        placeholder="Your Company"
                        className="border-gray-300"
                      />
                      {errors.company && (
                        <p className="text-red-500 text-sm mt-1">{errors.company.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Job Title
                      </label>
                      <Input
                        {...register('jobTitle')}
                        placeholder="Marketing Manager"
                        className="border-gray-300 "
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company Size *
                      </label>
                      <select
                        {...register('companySize', { required: 'Company size is required' })}
                        className="w-full border border-gray-300 rounded-md px-3 py-2  focus:outline-none"
                      >
                        <option value="">Select company size</option>
                        <option value="1-10">1-10 employees</option>
                        <option value="11-50">11-50 employees</option>
                        <option value="51-200">51-200 employees</option>
                        <option value="201-1000">201-1000 employees</option>
                        <option value="1000+">1000+ employees</option>
                      </select>
                      {errors.companySize && (
                        <p className="text-red-500 text-sm mt-1">{errors.companySize.message}</p>
                      )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Preferred Date *
                        </label>
                        <Input
                          {...register('preferredDate', { required: 'Preferred date is required' })}
                          type="date"
                          className="border-gray-300 "
                        />
                        {errors.preferredDate && (
                          <p className="text-red-500 text-sm mt-1">{errors.preferredDate.message}</p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Preferred Time *
                        </label>
                        <select
                          {...register('preferredTime', { required: 'Preferred time is required' })}
                          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none"
                        >
                          <option value="">Select time</option>
                          {timeSlots.map((time) => (
                            <option key={time} value={time}>{time} IST</option>
                          ))}
                        </select>
                        {errors.preferredTime && (
                          <p className="text-red-500 text-sm mt-1">{errors.preferredTime.message}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        What are you most interested in learning about?
                      </label>
                      <Textarea
                        {...register('interests')}
                        placeholder="Tell us about your marketing goals and challenges..."
                        rows={4}
                        className="border-gray-300 "
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-cherry-gradient hover:shadow-xl transition-all duration-300 text-white font-semibold py-3"
                    >
                      {isSubmitting ? 'Submitting...' : 'Schedule Demo'}
                    </Button>
                  </form>

                  {/* <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Database className="h-4 w-4 text-cherry-600" />
                      <span>Secure database storage</span>
                      <span>•</span>
                      <Sheet className="h-4 w-4 text-green-600" />
                      <span>Google Sheets integration</span>
                    </div>
                  </div> */}
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
