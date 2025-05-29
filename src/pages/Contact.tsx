
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-cherry-600" />,
      title: "Email Us",
      details: ["hello@denvey.com", "support@denvey.com"],
      action: "Send an email"
    },
    {
      icon: <Phone className="h-6 w-6 text-cherry-600" />,
      title: "Call Us",
      details: ["+91 8638 43270", "+91 95351 98415"],
      action: "Give us a call"
    },
    {
      icon: <MapPin className="h-6 w-6 text-cherry-600" />,
      title: "Visit Us",
      details: ["Sarupathar, Nagoan,Assam, India 782427."],
      action: "Get directions"
    },
    {
      icon: <Clock className="h-6 w-6 text-cherry-600" />,
      title: "Office Hours",
      details: ["Mon-Fri: 9:00 AM - 6:00 PM IST", "Sat-Sun: Closed"],
      action: "Schedule a meeting"
    }
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
                Get in <span className="text-gradient">Touch</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Have questions about influencer marketing? Want to learn more about our platform?
                We're here to help you succeed.
              </p>
            </div>
          </div>
        </section>
        <section className="overflow-hidden bg-white border-t border-b border-gray-200">
          <div className="relative w-full py-3">
            <div className="flex space-x-8 animate-marquee-continuous">
              {[...Array(2)].map((_, index) => (
                <div key={index} className="flex space-x-8 whitespace-nowrap text-xl font-semibold text-cherry-600 opacity-50">
                  {Array.from({ length: 20 }).map((_, i) => (
                    <span key={i}> Denvey </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Contact Info */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {contactInfo.map((info, index) => (
                <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-all duration-300 border-0">
                  <CardContent className="p-8">
                    <div className="bg-cherry-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                      {info.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      {info.title}
                    </h3>
                    <div className="space-y-2 mb-4">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-600">{detail}</p>
                      ))}
                    </div>
                    <Button variant="outline" className="text-cherry-600 border-cherry-200 hover:bg-cherry-50">
                      {info.action}
                    </Button>
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
                  Whether you're a brand looking to scale your marketing or a creator ready to monetize your influence,
                  we're excited to hear from you. Fill out the form and we'll get back to you within 24 hours.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-cherry-100 rounded-full p-2 mt-1">
                      <Mail className="h-5 w-5 text-cherry-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Quick Response</h4>
                      <p className="text-gray-600">We typically respond within 24 hours during business days.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-cherry-100 rounded-full p-2 mt-1">
                      <Phone className="h-5 w-5 text-cherry-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Expert Support</h4>
                      <p className="text-gray-600">Our team of marketing experts is ready to help you succeed.</p>
                    </div>
                  </div>
                </div>
              </div>

              <Card className="bg-white shadow-2xl border-0">
                <CardContent className="p-8">
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
                        Email Address *
                      </label>
                      <Input type="email" placeholder="sri@example.com" className="border-gray-300 focus:border-cherry-500" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company
                      </label>
                      <Input placeholder="Your Company Name" className="border-gray-300 focus:border-cherry-500" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        I'm interested in *
                      </label>
                      <select className="w-full border border-gray-300 rounded-md px-3 py-2 focus:border-cherry-500 focus:outline-none">
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
                        placeholder="Tell us about your project or question..."
                        rows={4}
                        className="border-gray-300 focus:border-cherry-500"
                      />
                    </div>

                    <Button className="w-full bg-cherry-gradient hover:shadow-xl transition-all duration-300 text-white font-semibold py-3">
                      Send Message
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
              {[
                {
                  question: "How is Denvey different from traditional influencer marketing platforms?",
                  answer:
                    "Unlike traditional platforms that rely on surface-level metrics, Denvey uses deep data analysis and AI to match brands with influencers who align on values, audience authenticity, and conversion potential.",
                },
                {
                  question: "Is Denvey free to use?",
                  answer:
                    "Yes, signing up for Denvey is free for both influencers and brands. Some advanced features and campaign tools may be part of premium plans, which will be disclosed transparently when launched.",
                },
                {
                  question: "What types of influencers can join Denvey?",
                  answer:
                    "We welcome nano, micro, macro, and celebrity influencers across all niches and platforms. Whether you’re just starting or an established creator, Denvey gives you tailored brand opportunities.",
                },
                {
                  question: "How do brands measure campaign success on Denvey?",
                  answer:
                    "Denvey provides real-time dashboards tracking reach, engagement, click-throughs, conversion rates, and estimated ROI. You can also access historical performance and compare across campaigns.",
                },
              ].map((faq, index) => (
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
