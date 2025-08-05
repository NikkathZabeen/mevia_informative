import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowRight, Database, Sheet } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const submitToSupabase = async (email: string) => {
    try {
      console.log('Submitting subscription to Supabase:', email);
      // TODO: Replace with actual Supabase client call
      // const { error } = await supabase
      //   .from('newsletter_subscriptions')
      //   .insert([{
      //     email: email,
      //     subscribed_at: new Date().toISOString(),
      //     status: 'active'
      //   }]);

      // if (error) throw error;
      return { success: true };
    } catch (error) {
      console.error('Supabase subscription error:', error);
      throw error;
    }
  };

  const submitToGoogleSheets = async (email: string) => {
    try {
      console.log('Submitting subscription to Google Sheets:', email);
      // TODO: Replace with your Google Sheets Web App URL
      const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/AKfycbz8of4HSQSPJnxIRVQNg-LDxBjHPecuoTFhahBxPyOw5E-40-PDlS2G6z9cAQ3gVy6tFQ/exec';

      const response = await fetch(GOOGLE_SHEETS_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          timestamp: new Date().toISOString(),
          email: email,
          type: 'newsletter_subscription',
          source: 'footer'
        }),
      });

      return { success: true };
    } catch (error) {
      console.error('Google Sheets subscription error:', error);
      throw error;
    }
  };

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address",
        variant: "destructive",
      });
      return;
    }

    // Basic email validation
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    console.log('Newsletter subscription:', email);

    try {
      // Submit to both Supabase and Google Sheets
      await Promise.all([
        submitToSupabase(email),
        submitToGoogleSheets(email)
      ]);

      toast({
        title: "Successfully Subscribed!",
        description: "Thanks for subscribing! We'll keep you updated on the latest influencer marketing trends.",
      });

      setEmail('');
    } catch (error) {
      console.error('Subscription error:', error);
      toast({
        title: "Subscription Error",
        description: "There was an issue with your subscription. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Newsletter Subscription Section */}
        <div className="bg-cherry-gradient rounded-2xl p-8 mb-12">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <h3 className="text-2xl lg:text-3xl font-bold text-white">
                Stay Updated with Industry Insights
              </h3>
              {/* <div className="flex space-x-2">
                <div className="bg-white/20 rounded-full p-2">
                  <Database className="h-5 w-5 text-white" />
                </div>
                <div className="bg-white/20 rounded-full p-2">
                  <Sheet className="h-5 w-5 text-white" />
                </div>
              </div> */}
            </div>
            <p className="text-cherry-100 mb-8 max-w-2xl mx-auto">
              Get the latest influencer marketing trends, tips, and exclusive insights delivered to your inbox.
            </p>

            <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
              <div className="flex gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-white border-0 text-gray-900 placeholder:text-gray-500"
                />
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-white text-cherry-600 hover:bg-gray-100 font-semibold px-6 group"
                >
                  {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
              <div className="flex items-center justify-center space-x-4 mt-3">
                <p className="text-cherry-100 text-sm">
                  No spam, unsubscribe anytime. We respect your privacy.
                </p>
                {/* <div className="flex items-center space-x-1 text-cherry-100 text-xs">
                  <Database className="h-3 w-3" />
                  <span>+</span>
                  <Sheet className="h-3 w-3" />
                  <span>Integrated</span>
                </div> */}
              </div>
            </form>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <img
                src="/lovable-uploads/logo.png"
                alt="Logo"
                className="w-36 sm:w-48 object-contain"
              />
            </div>

            <p className="text-gray-300 mb-6 leading-relaxed">
              Connecting brands with influential voices to create authentic marketing campaigns that drive real results.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61578768274224" className="text-gray-400 hover:text-cherry-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cherry-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/company/mevia-in/?viewAsMember=true" className="text-gray-400 hover:text-cherry-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/mevia.app/" className="text-gray-400 hover:text-cherry-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-cherry-300">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/brands" className="text-gray-300 hover:text-white transition-colors">
                  For Brands
                </Link>
              </li>
              <li>
                <Link to="/influencers" className="text-gray-300 hover:text-white transition-colors">
                  For Influencers
                </Link>
              </li>
              {/* <li>
                <Link to="/customer-stories" className="text-gray-300 hover:text-white transition-colors">
                  Success Stories
                </Link>
              </li> */}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-cherry-300">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/request-demo" className="text-gray-300 hover:text-white transition-colors">
                  Campaign Management
                </Link>
              </li>
              <li>
                <Link to="/request-demo" className="text-gray-300 hover:text-white transition-colors">
                  Influencer Discovery
                </Link>
              </li>
              <li>
                <Link to="/request-demo" className="text-gray-300 hover:text-white transition-colors">
                  Brand-Influencer Matching
                </Link>
              </li>
              <li>
                <Link to="/request-demo" className="text-gray-300 hover:text-white transition-colors">
                  Campaign Collaboration & Execution
                </Link>
              </li>
              <li>
                <Link to="/request-demo" className="text-gray-300 hover:text-white transition-colors">
                  Trend Analysis & Strategy Optimization
                </Link>
              </li>
              <li>
                <Link to="/request-demo" className="text-gray-300 hover:text-white transition-colors">
                  Contract & Payment Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-cherry-300">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-cherry-400" />
                <span className="text-gray-300">shaklin@meviastudio.com , msr.saq@meviastudio.com </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-cherry-400" />
                <span className="text-gray-300">+91 8638043270, +91 95351 98415</span>
              </div>
              {/* <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-cherry-400" />
                <span className="text-gray-300">SARUPATHAR , NAGAON,ASSAM, INDIA - 782427.</span>
              </div> */}
            </div>
          </div>
        </div>



        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 Mevia | SUMPIN TECHNOLOGY PRIVATE LIMITED. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="/documents/Mevia Privacy Policy (1).pdf" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="/documents/Mevia Terms of Service (1).pdf" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                Terms & Conditions
              </a>
              <a href="/documents/cookie-policy.pdf" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer >
  );
};


export default Footer;
