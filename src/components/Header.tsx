
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: 'About Us', path: '/about' },
    { name: 'Brands', path: '/brands' },
    { name: 'Influencers', path: '/influencers' },
    // { name: 'Customer Stories', path: '/customer-stories' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const isActivePath = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo and Company Name */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-lg overflow-hidden bg-cherry-gradient shadow-lg group-hover:shadow-xl transition-shadow duration-300">
              <img
                src="/lovable-uploads/542fdc0d-a9b0-4b9f-b44b-f396c5ce9ada.png"
                alt="Denvey Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-2xl lg:text-3xl font-bold text-gradient font-[Playfair_Display]">
              Denvey
            </span>
          </Link>

          {/* Desktop Navigation */}
          {/* <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative text-sm font-medium transition-colors duration-200 hover:text-cherry-600 ${
                  isActivePath(item.path) ? 'text-cherry-600' : 'text-gray-700'
                } after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-cherry-600 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left`}
              >
                {item.name}
              </Link>
            ))}
          </nav> */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative text-lg font-medium transition-colors duration-200 hover:text-cherry-600 ${isActivePath(item.path) ? 'text-cherry-600' : 'text-gray-700'
                  } after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-cherry-600 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="text-gray-700 hover:text-cherry-600 hover:bg-cherry-50"
                >
                  Login <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48 bg-white border border-gray-200 shadow-lg">
                <DropdownMenuItem>
                  <Link to="/login/brands" className="w-full">
                    Login for Brands
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/login/influencers" className="w-full">
                    Login for Influencers
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu> */}

            <Link to="/request-demo">
              <Button className="bg-cherry-gradient hover:shadow-lg transform hover:scale-105 transition-all duration-200 text-white font-semibold">
                Request Demo
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-700 hover:text-cherry-600 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg animate-fade-in">
            <nav className="container mx-auto px-4 py-4 space-y-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block text-base font-medium transition-colors duration-200 ${isActivePath(item.path) ? 'text-cherry-600' : 'text-gray-700'
                    } hover:text-cherry-600`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              <div className="pt-4 border-t border-gray-200 space-y-3">
                <Link to="/login/brands" className="block text-gray-700 hover:text-cherry-600 transition-colors">
                  Login for Brands
                </Link>
                <Link to="/login/influencers" className="block text-gray-700 hover:text-cherry-600 transition-colors">
                  Login for Influencers
                </Link>
                <Link to="/request-demo" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full bg-cherry-gradient text-white font-semibold">
                    Request Demo
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
