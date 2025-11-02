import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Facebook, Twitter, Linkedin, Instagram, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const submitToGoogleSheets = async (email) => {
    try {
      const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/AKfycbz8of4HSQSPJnxIRVQNg-LDxBjHPecuoTFhahBxPyOw5E-40-PDlS2G6z9cAQ3gVy6tFQ/exec';
      await fetch(GOOGLE_SHEETS_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          timestamp: new Date().toISOString(),
          email,
          type: 'newsletter_subscription',
          source: 'footer',
        }),
      });
      return { success: true };
    } catch (error) {
      throw error;
    }
  };

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) {
      toast({ title: 'Error', description: 'Please enter your email address', variant: 'destructive' });
      return;
    }

    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(email)) {
      toast({ title: 'Error', description: 'Please enter a valid email address', variant: 'destructive' });
      return;
    }

    setIsSubmitting(true);
    try {
      await submitToGoogleSheets(email);
      toast({
        title: 'Successfully Subscribed!',
        description: "Thanks for subscribing! You'll now receive our latest marketing insights and success stories.",
      });
      setEmail('');
    } catch {
      toast({
        title: 'Subscription Error',
        description: 'Something went wrong. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Newsletter Section */}
        <div className="bg-cherry-gradient rounded-2xl p-8 mb-12 text-center">
          <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
            Join Our Creative Community
          </h3>
          <p className="text-cherry-100 mb-8 max-w-2xl mx-auto">
            Subscribe for insights on influencer marketing, campaign trends, and creative strategies that elevate brands.
          </p>
          <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
            <div className="flex gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
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
            <p className="text-cherry-100 text-sm mt-3">
              No spam — just strategies, success stories, and inspiration.
            </p>
          </form>
        </div>

        {/* Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="mb-6">
              <img
                src="/lovable-uploads/logo.png"
                alt="Mevia Agency Logo"
                className="w-36 sm:w-48 object-contain"
              />
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Mevia is a next-generation influencer marketing agency helping brands craft compelling campaigns through
              strategy, creativity, and authentic storytelling.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/mevia.in/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cherry-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/company/mevia-in/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cherry-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61578768274224" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cherry-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cherry-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-cherry-300">Explore</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/brands" className="text-gray-300 hover:text-white transition-colors">For Brands</Link></li>
              <li><Link to="/influencers" className="text-gray-300 hover:text-white transition-colors">For Creators</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-cherry-300">Our Expertise</h3>
            <ul className="space-y-3">
              <li><Link to="/request-demo" className="text-gray-300 hover:text-white transition-colors">Influencer Campaign Strategy</Link></li>
              <li><Link to="/request-demo" className="text-gray-300 hover:text-white transition-colors">Creative Concept Development</Link></li>
              <li><Link to="/request-demo" className="text-gray-300 hover:text-white transition-colors">Talent Sourcing & Management</Link></li>
              <li><Link to="/request-demo" className="text-gray-300 hover:text-white transition-colors">Social Media Amplification</Link></li>
              <li><Link to="/request-demo" className="text-gray-300 hover:text-white transition-colors">Performance Tracking & Reporting</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-cherry-300">Get In Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-cherry-400" />
                <span className="text-gray-300">shaklin@meviastudio.com , msr.saq@meviastudio.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-cherry-400" />
                <span className="text-gray-300">+91 86380 43270, +91 95351 98415</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 Mevia Agency | Sumpin Technology Pvt. Ltd. All rights reserved.
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
    </footer>
  );
};

export default Footer;
