import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Mail, Phone, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    interests: '',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await fetch(
        'https://script.google.com/macros/s/AKfycbwl9T0CCjY4X81feJu-oVgvT7micXQAjTm7MBVaQECxAeP4xLpn8ar6MJDilt-8JqZI/exec',
        {
          method: 'POST',
          mode: 'no-cors',
          body: JSON.stringify({
            ...formData,
            timestamp: new Date().toISOString(),
            source: 'Contact Page',
          }),
          headers: { 'Content-Type': 'application/json' },
        }
      );

      toast.success('✅ Thank you! Your message has been submitted successfully.', {
        position: 'bottom-right',
        duration: 5000,
      });

      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        interests: '',
        message: '',
      });
    } catch (error) {
      toast.error('❌ Submission failed. Please check your network.', {
        position: 'bottom-right',
      });
    } finally {
      setSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-cherry-600" />,
      title: 'Email Us',
      details: ['shaklin@meviastudio.com', 'msr.saq@meviastudio.com'],
    },
    {
      icon: <Phone className="h-6 w-6 text-cherry-600" />,
      title: 'Call Us',
      details: ['+91 8638 43270', '+91 95351 98415'],
    },
    {
      icon: <Clock className="h-6 w-6 text-cherry-600" />,
      title: 'Office Hours',
      details: ['Mon-Fri: 9:00 AM - 6:00 PM IST', 'Sat-Sun: Closed'],
    },
  ];

  const faqs = [
    {
      question: 'How quickly can I expect a response?',
      answer: 'We typically respond to all messages within 24 business hours.',
    },
    {
      question: 'Can I request a platform demo via this form?',
      answer:
        "Yes, just select 'Platform Demo' from the interest dropdown and we'll get back to you with scheduling options.",
    },
    {
      question: "Who can use Mevia's platform?",
      answer:
        "Our platform is designed for both brands looking to run influencer campaigns and creators seeking collaborations.",
    },
    {
      question: 'What kind of support do you offer?',
      answer:
        'We offer email and phone support during office hours and are happy to assist with setup, campaign management, or inquiries.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Toaster />
      <Header />

      <main>
        {/* Hero Section */}
        <section className="pt-24 pb-16 lg:pt-32 lg:pb-24 bg-hero-gradient">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Get in <span className="text-gradient">Touch</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Have questions about influencer marketing? Want to learn more about our
                platform? We're here to help you succeed.
              </p>
            </div>
          </div>
        </section>

        {/* Animated Banner */}
        <section className="overflow-hidden bg-white border-t border-b border-gray-200">
          <div className="relative w-full py-3">
            <div className="flex space-x-8 animate-marquee-continuous">
              {[...Array(2)].map((_, index) => (
                <div
                  key={index}
                  className="flex space-x-8 whitespace-nowrap text-xl font-semibold text-cherry-600 opacity-50"
                >
                  {Array.from({ length: 20 }).map((_, i) => (
                    <span key={i}> Mevia </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="text-center shadow-lg hover:shadow-xl transition-all duration-300 border-0"
                >
                  <CardContent className="p-8">
                    <div className="bg-cherry-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                      {info.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      {info.title}
                    </h3>
                    <div className="space-y-2 mb-4">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-600">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16 lg:py-24 bg-cherry-light-gradient">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  Send us a Message
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Whether you're a brand looking to scale your marketing or a creator ready
                  to monetize your influence, we're excited to hear from you. Fill out the
                  form and we'll get back to you within 24 hours.
                </p>
              </div>

              <Card className="bg-white shadow-2xl border-0">
                <CardContent className="p-8">
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          First Name *
                        </label>
                        <Input
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                          placeholder="Amulya"
                          className="border-gray-300 focus:border-cherry-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Last Name *
                        </label>
                        <Input
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                          placeholder="Sri"
                          className="border-gray-300 focus:border-cherry-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="sri@example.com"
                        className="border-gray-300 focus:border-cherry-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company
                      </label>
                      <Input
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your Company Name"
                        className="border-gray-300 focus:border-cherry-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        I'm interested in *
                      </label>
                      <select
                        name="interests"
                        value={formData.interests}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:border-cherry-500 focus:outline-none"
                      >
                        <option value="">Select</option>
                        <option>Brand Solutions</option>
                        <option>Creator Partnerships</option>
                        <option>Platform Demo</option>
                        <option>General Inquiry</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Tell us about your project or question..."
                        rows={4}
                        className="border-gray-300 focus:border-cherry-500"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={submitting}
                      className="w-full bg-cherry-gradient hover:shadow-xl transition-all duration-300 text-white font-semibold py-3"
                    >
                      {submitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {faqs.map((faq, index) => (
                <Card key={index} className="shadow-lg border-0">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
