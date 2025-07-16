
// import React, { useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { ChevronDown, Menu, X } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from '@/components/ui/dropdown-menu';

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const location = useLocation();

//   const navigationItems = [
//     { name: 'About Us', path: '/about' },
//     { name: 'Brands', path: '/brands' },
//     { name: 'Influencers', path: '/influencers' },
//     // { name: 'Customer Stories', path: '/customer-stories' },
//     { name: 'Contact Us', path: '/contact' },
//   ];
//   const serviceItems = [
//     { name: 'Campaign Management', path: '/services/campaign-management' },
//     { name: 'Influencer Discovery', path: '/services/influencer-discovery' },
//     { name: 'Performance Analytics', path: '/services/performance-analytics' },
//     { name: 'Content Creation', path: '/services/content-creation' },
//   ];

//   const isActivePath = (path: string) => location.pathname === path;

//   return (
//     <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16 lg:h-20">
//           {/* Logo and Company Name */}
//           <Link to="/" className="flex items-center space-x-3 group">
//             <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-lg overflow-hidden bg-cherry-gradient shadow-lg group-hover:shadow-xl transition-shadow duration-300">
//               <img
//                 src="/lovable-uploads/542fdc0d-a9b0-4b9f-b44b-f396c5ce9ada.png"
//                 alt="Denvey Logo"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <span className="text-2xl lg:text-3xl font-bold text-gradient font-[Playfair_Display]">
//               Denvey
//             </span>
//           </Link>

//           {/* Desktop Navigation */}
//           {/* <nav className="hidden lg:flex items-center space-x-8">
//             {navigationItems.map((item) => (
//               <Link
//                 key={item.name}
//                 to={item.path}
//                 className={`relative text-sm font-medium transition-colors duration-200 hover:text-cherry-600 ${
//                   isActivePath(item.path) ? 'text-cherry-600' : 'text-gray-700'
//                 } after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-cherry-600 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left`}
//               >
//                 {item.name}
//               </Link>
//             ))}
//           </nav> */}

//           {/* Desktop Navigation */}
//           <nav className="hidden lg:flex items-center space-x-8">
//             {/* Services Dropdown */}
//             <DropdownMenu>
//               <DropdownMenuTrigger asChild>
//                 <button className="relative text-sm font-medium transition-colors duration-200 hover:text-cherry-600 text-gray-700 flex items-center after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-cherry-600 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">
//                   Services <ChevronDown className="ml-1 h-4 w-4" />
//                 </button>
//               </DropdownMenuTrigger>
//               <DropdownMenuContent className="w-56 bg-white border border-gray-200 shadow-lg">
//                 {serviceItems.map((service) => (
//                   <DropdownMenuItem key={service.name}>
//                     <Link to={service.path} className="w-full">
//                       {service.name}
//                     </Link>
//                   </DropdownMenuItem>
//                 ))}
//               </DropdownMenuContent>
//             </DropdownMenu>
//           </nav>
//           <nav className="hidden lg:flex items-center space-x-8">
//             {navigationItems.map((item) => (
//               <Link
//                 key={item.name}
//                 to={item.path}
//                 className={`relative text-lg font-medium transition-colors duration-200 hover:text-cherry-600 ${isActivePath(item.path) ? 'text-cherry-600' : 'text-gray-700'
//                   } after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-cherry-600 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left`}
//               >
//                 {item.name}
//               </Link>
//             ))}
//           </nav>

//           {/* Desktop Auth Buttons */}
//           <div className="hidden lg:flex items-center space-x-4">
//             {/* <DropdownMenu>
//               <DropdownMenuTrigger asChild>
//                 <Button
//                   variant="ghost"
//                   className="text-gray-700 hover:text-cherry-600 hover:bg-cherry-50"
//                 >
//                   Login <ChevronDown className="ml-1 h-4 w-4" />
//                 </Button>
//               </DropdownMenuTrigger>
//               <DropdownMenuContent className="w-48 bg-white border border-gray-200 shadow-lg">
//                 <DropdownMenuItem>
//                   <Link to="/login/brands" className="w-full">
//                     Login for Brands
//                   </Link>
//                 </DropdownMenuItem>
//                 <DropdownMenuItem>
//                   <Link to="/login/influencers" className="w-full">
//                     Login for Influencers
//                   </Link>
//                 </DropdownMenuItem>
//               </DropdownMenuContent>
//             </DropdownMenu> */}

//             <Link to="/request-demo">
//               <Button className="bg-cherry-gradient hover:shadow-lg transform hover:scale-105 transition-all duration-200 text-white font-semibold">
//                 Request Demo
//               </Button>
//             </Link>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             className="lg:hidden p-2 text-gray-700 hover:text-cherry-600 transition-colors"
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//           >
//             {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//           </button>
//         </div>

//         {/* Mobile Navigation */}
//         {isMenuOpen && (
//           <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg animate-fade-in">
//             <nav className="container mx-auto px-4 py-4 space-y-4">
//               {navigationItems.map((item) => (
//                 <Link
//                   key={item.name}
//                   to={item.path}
//                   className={`block text-base font-medium transition-colors duration-200 ${isActivePath(item.path) ? 'text-cherry-600' : 'text-gray-700'
//                     } hover:text-cherry-600`}
//                   onClick={() => setIsMenuOpen(false)}
//                 >
//                   {item.name}
//                 </Link>
//               ))}

//               <div className="pt-4 border-t border-gray-200 space-y-3">
//                 <Link to="/login/brands" className="block text-gray-700 hover:text-cherry-600 transition-colors">
//                   Login for Brands
//                 </Link>
//                 <Link to="/login/influencers" className="block text-gray-700 hover:text-cherry-600 transition-colors">
//                   Login for Influencers
//                 </Link>
//                 <Link to="/request-demo" onClick={() => setIsMenuOpen(false)}>
//                   <Button className="w-full bg-cherry-gradient text-white font-semibold">
//                     Request Demo
//                   </Button>
//                 </Link>
//               </div>
//             </nav>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Header;
// import React, { useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { ChevronDown, Menu, X } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from '@/components/ui/dropdown-menu';

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const location = useLocation();

//   const navigationItems = [
//     { name: 'About Us', path: '/about' },
//     { name: 'Brands', path: '/brands' },
//     { name: 'Influencers', path: '/influencers' },
//     { name: 'Contact Us', path: '/contact' },
//   ];

//   const serviceItems = [
//     { name: 'Campaign Management', path: '/request-demo' },
//     { name: 'Influencer Discovery', path: '/request-demo' },
//     { name: 'Brand-Influencer Matching', path: '/request-demo' },
//     { name: 'Campaign Collaboration & Execution', path: '/request-demo' },
//     { name: 'Trend Analysis & Strategy Optimization', path: '/request-demo' },
//     { name: 'Contract & Payment Support', path: '/request-demo' }
//   ];

//   const isActivePath = (path: string) => location.pathname === path;

//   return (
//     <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16 lg:h-20">
//           <Link to="/" className="flex items-center space-x-3 group">
//             <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-lg overflow-hidden bg-cherry-gradient shadow-lg group-hover:shadow-xl transition-shadow duration-300">
//               <img
//                 src="/lovable-uploads/542fdc0d-a9b0-4b9f-b44b-f396c5ce9ada.png"
//                 alt="Denvey Logo"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <span className="text-2xl lg:text-3xl font-bold text-gradient font-[Playfair_Display]">
//               DENVEY
//             </span>
//           </Link>

//           {/* Desktop Navigation */}
//           <nav className="hidden lg:flex items-center space-x-8">
//             {navigationItems.map((item, index) => {
//               if (item.name === 'Contact Us') {
//                 return (
//                   <React.Fragment key="services">
//                     {/* Services Dropdown inserted before Contact Us */}
//                     <DropdownMenu>
//                       <DropdownMenuTrigger asChild>
//                         <button className="relative text-lg font-medium transition-colors duration-200 hover:text-cherry-600 text-gray-700 flex items-center after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-cherry-600 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">
//                           Services <ChevronDown className="ml-1 h-4 w-4" />
//                         </button>
//                       </DropdownMenuTrigger>
//                       <DropdownMenuContent className="w-56 bg-white border border-gray-200 shadow-lg">
//                         {serviceItems.map((service) => (
//                           <DropdownMenuItem key={service.name}>
//                             <Link to={service.path} className="w-full">
//                               {service.name}
//                             </Link>
//                           </DropdownMenuItem>
//                         ))}
//                       </DropdownMenuContent>
//                     </DropdownMenu>

//                     {/* Now render Contact Us */}
//                     <Link
//                       key={item.name}
//                       to={item.path}
//                       className={`relative text-lg font-medium transition-colors duration-200 hover:text-cherry-600 ${isActivePath(item.path) ? 'text-cherry-600' : 'text-gray-700'
//                         } after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-cherry-600 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left`}
//                     >
//                       {item.name}
//                     </Link>
//                   </React.Fragment>
//                 );
//               }

//               return (
//                 <Link
//                   key={item.name}
//                   to={item.path}
//                   className={`relative text-lg font-medium transition-colors duration-200 hover:text-cherry-600 ${isActivePath(item.path) ? 'text-cherry-600' : 'text-gray-700'
//                     } after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-cherry-600 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left`}
//                 >
//                   {item.name}
//                 </Link>
//               );
//             })}
//           </nav>

//           {/* Desktop Auth Button */}
//           <div className="hidden lg:flex items-center space-x-4">
//             <Link to="/request-demo">
//               <Button className="bg-cherry-gradient hover:shadow-lg transform hover:scale-105 transition-all duration-200 text-white font-semibold">
//                 Request Demo
//               </Button>
//             </Link>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             className="lg:hidden p-2 text-gray-700 hover:text-cherry-600 transition-colors"
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//           >
//             {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//           </button>
//         </div>

//         {/* Mobile Navigation */}
//         {isMenuOpen && (
//           <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg animate-fade-in">
//             <nav className="container mx-auto px-4 py-4 space-y-4">
//               {navigationItems.map((item, index) => {
//                 if (item.name === 'Contact Us') {
//                   return (
//                     <React.Fragment key="mobile-services">
//                       {/* Services dropdown before Contact Us */}
//                       {serviceItems.map((service) => (
//                         <Link
//                           key={service.name}
//                           to={service.path}
//                           className="block text-base font-medium text-gray-700 hover:text-cherry-600 transition-colors"
//                           onClick={() => setIsMenuOpen(false)}
//                         >
//                           {service.name}
//                         </Link>
//                       ))}

//                       <Link
//                         key={item.name}
//                         to={item.path}
//                         className={`block text-base font-medium transition-colors duration-200 ${isActivePath(item.path) ? 'text-cherry-600' : 'text-gray-700'
//                           } hover:text-cherry-600`}
//                         onClick={() => setIsMenuOpen(false)}
//                       >
//                         {item.name}
//                       </Link>
//                     </React.Fragment>
//                   );
//                 }

//                 return (
//                   <Link
//                     key={item.name}
//                     to={item.path}
//                     className={`block text-base font-medium transition-colors duration-200 ${isActivePath(item.path) ? 'text-cherry-600' : 'text-gray-700'
//                       } hover:text-cherry-600`}
//                     onClick={() => setIsMenuOpen(false)}
//                   >
//                     {item.name}
//                   </Link>
//                 );
//               })}

//               <div className="pt-4 border-t border-gray-200 space-y-3">
//                 {/* <Link to="/login/brands" className="block text-gray-700 hover:text-cherry-600 transition-colors">
//                   Login for Brands
//                 </Link>
//                 <Link to="/login/influencers" className="block text-gray-700 hover:text-cherry-600 transition-colors">
//                   Login for Influencers
//                 </Link> */}
//                 <Link to="/request-demo" onClick={() => setIsMenuOpen(false)}>
//                   <Button className="w-full bg-cherry-gradient text-white font-semibold">
//                     Request Demo
//                   </Button>
//                 </Link>
//               </div>
//             </nav>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Header;

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
    { name: 'Contact Us', path: '/contact' },
  ];

  const serviceItems = [
    { name: 'Campaign Management', path: '/request-demo' },
    { name: 'Influencer Discovery', path: '/request-demo' },
    { name: 'Brand-Influencer Matching', path: '/request-demo' },
    { name: 'Campaign Collaboration & Execution', path: '/request-demo' },
    { name: 'Trend Analysis & Strategy Optimization', path: '/request-demo' },
    { name: 'Contract & Payment Support', path: '/request-demo' },
  ];

  const isActivePath = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="group">
            <img
              src="/lovable-uploads/logo.png"
              alt="Logo"
              className="w-36 sm:w-49 object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>


          <nav className="hidden lg:flex items-center space-x-6">
            {navigationItems.slice(0, 3).map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative text-base font-medium transition-colors duration-200 hover:text-cherry-600 ${isActivePath(item.path) ? 'text-cherry-600' : 'text-gray-700'
                  } after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-cherry-600 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left`}
              >
                {item.name}
              </Link>
            ))}

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="relative text-base font-medium transition-colors duration-200 hover:text-cherry-600 text-gray-700 flex items-center after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-cherry-600 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">
                  Services <ChevronDown className="ml-1 h-4 w-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-white border border-gray-200 shadow-lg">
                {serviceItems.map((service) => (
                  <DropdownMenuItem key={service.name}>
                    <Link to={service.path} className="w-full">
                      {service.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              to={navigationItems[3].path}
              className={`relative text-base font-medium transition-colors duration-200 hover:text-cherry-600 ${isActivePath(navigationItems[3].path) ? 'text-cherry-600' : 'text-gray-700'
                } after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-cherry-600 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left`}
            >
              {navigationItems[3].name}
            </Link>
          </nav>

          <div className="hidden lg:flex items-center space-x-3">
            <Link to="/request-demo">
              <Button
                size="sm"
                className="bg-cherry-gradient hover:shadow-lg transform hover:scale-105 transition-all duration-200 text-white font-semibold text-sm px-4 py-2"
              >
                Request Demo
              </Button>
            </Link>
          </div>

          <button
            className="lg:hidden p-2 text-gray-700 hover:text-cherry-600 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg animate-fade-in">
            <nav className="container mx-auto px-4 py-4 space-y-4">
              <div className="border-b border-gray-200 pb-4">
                <p className="text-sm font-semibold text-gray-900 mb-2">Services</p>
                {serviceItems.map((service) => (
                  <Link
                    key={service.name}
                    to={service.path}
                    className="block pl-4 py-1 text-sm text-gray-600 hover:text-cherry-600 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>

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
