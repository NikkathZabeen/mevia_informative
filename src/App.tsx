
// import { Toaster } from "@/components/ui/toaster";
// import { Toaster as Sonner } from "@/components/ui/sonner";
// import { TooltipProvider } from "@/components/ui/tooltip";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Index from "./pages/Index";
// import About from "./pages/About";
// import Brands from "./pages/Brands";
// import Influencers from "./pages/Influencers";
// import CustomerStories from "./pages/CustomerStories";
// import Contact from "./pages/Contact";
// import LoginBrands from "./pages/LoginBrands";
// import LoginInfluencers from "./pages/LoginInfluencers";
// import RequestDemo from "./pages/RequestDemo";
// import NotFound from "./pages/NotFound";

// const queryClient = new QueryClient();

// const App = () => (
//   <QueryClientProvider client={queryClient}>
//     <TooltipProvider>
//       <Toaster />
//       <Sonner />
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Index />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/brands" element={<Brands />} />
//           <Route path="/influencers" element={<Influencers />} />
//           <Route path="/customer-stories" element={<CustomerStories />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/login/brands" element={<LoginBrands />} />
//           <Route path="/login/influencers" element={<LoginInfluencers />} />
//           <Route path="/request-demo" element={<RequestDemo />} />
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </BrowserRouter>
//     </TooltipProvider>
//   </QueryClientProvider>
// );

// export default App;


import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import About from "./pages/About";
import Brands from "./pages/Brands";
import Influencers from "./pages/Influencers";
import CustomerStories from "./pages/CustomerStories";
import Contact from "./pages/Contact";
import LoginBrands from "./pages/LoginBrands";
import LoginInfluencers from "./pages/LoginInfluencers";
import RequestDemo from "./pages/RequestDemo";
import PrivacyPolicy from "./pages/Privacypolicy";
import NotFound from "./pages/NotFound";
import 'core-js/stable';
import 'regenerator-runtime/runtime';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop /> {/* ✅ Add this here */}
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/influencers" element={<Influencers />} />
          <Route path="/customer-stories" element={<CustomerStories />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login/brands" element={<LoginBrands />} />
          <Route path="/login/influencers" element={<LoginInfluencers />} />
          <Route path="/request-demo" element={<RequestDemo />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
