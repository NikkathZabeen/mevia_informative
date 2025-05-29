
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to Supabase to handle email subscription
    console.log('Subscribe email:', email);
    // For now, just show success message
    alert('Thanks for subscribing! We\'ll keep you updated on the latest influencer marketing trends.');
    setEmail('');
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Newsletter Subscription Section */}
        <div className="bg-cherry-gradient rounded-2xl p-8 mb-12">
          <div className="text-center">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Stay Updated with Industry Insights
            </h3>
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
                  className="bg-white text-cherry-600 hover:bg-gray-100 font-semibold px-6 group"
                >
                  Subscribe
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
              <p className="text-cherry-100 text-sm mt-3">
                No spam, unsubscribe anytime. We respect your privacy.
              </p>
            </form>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 rounded-lg overflow-hidden bg-cherry-gradient shadow-lg">
                <img
                  src="/lovable-uploads/542fdc0d-a9b0-4b9f-b44b-f396c5ce9ada.png"
                  alt="Denvey Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-2xl font-bold text-gradient font-[Playfair_Display]">
                Denvey
              </span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Connecting brands with influential voices to create authentic marketing campaigns that drive real results.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-cherry-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cherry-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cherry-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cherry-400 transition-colors">
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
              <li>
                <Link to="/customer-stories" className="text-gray-300 hover:text-white transition-colors">
                  Success Stories
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-cherry-300">Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Campaign Management
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Influencer Discovery
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Performance Analytics
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Content Creation
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-cherry-300">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-cherry-400" />
                <span className="text-gray-300">hello@denvey.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-cherry-400" />
                <span className="text-gray-300">+91 8638043270</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-cherry-400" />
                <span className="text-gray-300">SARUPATHAR , NAGAON,ASSAM, INDIA - 782427.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 Denvey | SUMPIN TECHNOLOGY PRIVATE LIMITED. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">

              <div className="space-y-2">
                <Link to="/privacy-policy" className="text-gray-400 hover:text-white transition">
                  Privacy Policy
                </Link>
              </div>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
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
