
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import Header from '@/components/Header';
// import Footer from '@/components/Footer';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Card, CardContent } from '@/components/ui/card';
// import { Eye, EyeOff, Star } from 'lucide-react';

// const LoginInfluencers = () => {
//   const [showPassword, setShowPassword] = useState(false);

//   return (
//     <div className="min-h-screen">
//       <Header />
//       <main>
//         <section className="pt-24 pb-16 lg:pt-32 lg:pb-24 bg-hero-gradient">
//           <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="max-w-md mx-auto">
//               <Card className="shadow-2xl border-0 bg-white">
//                 <CardContent className="p-8">
//                   <div className="text-center mb-8">
//                     <div className="bg-cherry-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
//                       <Star className="h-8 w-8 text-cherry-600" />
//                     </div>
//                     <h1 className="text-2xl font-bold text-gray-900 mb-2">
//                       Creator Login
//                     </h1>
//                     <p className="text-gray-600">
//                       Access your creator dashboard and manage partnerships
//                     </p>
//                   </div>

//                   <form className="space-y-6">
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">
//                         Email Address
//                       </label>
//                       <Input 
//                         type="email" 
//                         placeholder="creator@example.com"
//                         className="border-gray-300 focus:border-cherry-500"
//                       />
//                     </div>

//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">
//                         Password
//                       </label>
//                       <div className="relative">
//                         <Input 
//                           type={showPassword ? "text" : "password"}
//                           placeholder="Enter your password"
//                           className="border-gray-300 focus:border-cherry-500 pr-10"
//                         />
//                         <button
//                           type="button"
//                           className="absolute inset-y-0 right-0 pr-3 flex items-center"
//                           onClick={() => setShowPassword(!showPassword)}
//                         >
//                           {showPassword ? (
//                             <EyeOff className="h-5 w-5 text-gray-400" />
//                           ) : (
//                             <Eye className="h-5 w-5 text-gray-400" />
//                           )}
//                         </button>
//                       </div>
//                     </div>

//                     <div className="flex items-center justify-between">
//                       <label className="flex items-center">
//                         <input type="checkbox" className="rounded border-gray-300 text-cherry-600 focus:ring-cherry-500" />
//                         <span className="ml-2 text-sm text-gray-600">Remember me</span>
//                       </label>
//                       <a href="#" className="text-sm text-cherry-600 hover:text-cherry-700">
//                         Forgot password?
//                       </a>
//                     </div>

//                     <Button className="w-full bg-cherry-gradient hover:shadow-xl transition-all duration-300 text-white font-semibold py-3">
//                       Sign In
//                     </Button>
//                   </form>

//                   <div className="mt-8 pt-6 border-t border-gray-200">
//                     <p className="text-center text-sm text-gray-500">
//                       Are you a brand?{' '}
//                       <Link to="/login/brands" className="text-cherry-600 hover:text-cherry-700 font-medium">
//                         Login here
//                       </Link>
//                     </p>
//                   </div>
//                 </CardContent>
//               </Card>
//             </div>
//           </div>
//         </section>
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default LoginInfluencers;


// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import Header from '@/components/Header';
// import Footer from '@/components/Footer';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Card, CardContent } from '@/components/ui/card';
// import { Star } from 'lucide-react';
// import { toast } from 'sonner';

// const LoginInfluencers = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     instagramLink: '',
//     niche: '',
//     customNiche: '',
//     about: '',
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const nicheOptions = [
//     'Fashion', 'Beauty', 'Travel', 'Food', 'Gaming', 'Technology',
//     'Fitness', 'Lifestyle', 'Education', 'Arts & Crafts', 'Finance',
//     'Parenting', 'Pets', 'Comedy', 'Music', 'Other'
//   ];

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleNicheChange = (e) => {
//     const value = e.target.value;
//     setFormData((prev) => ({
//       ...prev,
//       niche: value,
//       customNiche: value === 'Other' ? '' : prev.customNiche,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     const finalNiche = formData.niche === 'Other' ? formData.customNiche.trim() : formData.niche;

//     if (!finalNiche) {
//       toast.error('Please specify your niche.', { position: 'bottom-right' });
//       setIsSubmitting(false);
//       return;
//     }

//     try {
//       const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwYpIxONbk5HB6rHu5NP-Gwl59npdxeLasLiP2ttXNP52UIC2CcRasU9bt7ryXWCE7PrQ/exec';

//       const dataToSend = {
//         name: formData.name,
//         email: formData.email,
//         phone: formData.phone,
//         instagramLink: formData.instagramLink,
//         niche: finalNiche,
//         about: formData.about,
//       };

//       await fetch(SCRIPT_URL, {
//         method: 'POST',
//         mode: 'no-cors',
//         headers: {
//           'Content-Type': 'application/x-www-form-urlencoded',
//         },
//         body: new URLSearchParams(dataToSend).toString(),
//       });

//       toast.success('Application submitted!', {
//         description: 'Our team will contact you shortly.',
//         position: 'bottom-right',
//       });

//       setFormData({
//         name: '',
//         email: '',
//         phone: '',
//         instagramLink: '',
//         niche: '',
//         customNiche: '',
//         about: '',
//       });
//     } catch (error) {
//       console.error('Error submitting form:', error);
//       toast.error('Submission failed!', {
//         description: 'Please try again later.',
//         position: 'bottom-right',
//       });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col">
//       <Header />
//       <main className="flex-grow">
//         <section className="pt-24 pb-16 lg:pt-32 lg:pb-24 bg-hero-gradient">
//           <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="max-w-md mx-auto">
//               <Card className="shadow-2xl border-0 bg-white">
//                 <CardContent className="p-8">
//                   <div className="text-center mb-8">
//                     <div className="bg-cherry-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
//                       <Star className="h-8 w-8 text-cherry-600" />
//                     </div>
//                     <h1 className="text-2xl font-bold text-gray-900 mb-2">
//                       Creator Application
//                     </h1>
//                     <p className="text-gray-600">
//                       Join our network and start collaborating with brands!
//                     </p>
//                   </div>

//                   <form className="space-y-6" onSubmit={handleSubmit}>
//                     {[
//                       { id: 'name', label: 'Name', type: 'text', placeholder: 'Your full name' },
//                       { id: 'email', label: 'Email Address', type: 'email', placeholder: 'creator@example.com' },
//                       { id: 'phone', label: 'Phone Number', type: 'tel', placeholder: '+91 9876543210' },
//                       { id: 'instagramLink', label: 'Instagram Profile Link', type: 'url', placeholder: 'https://instagram.com/yourprofile' },
//                     ].map((field) => (
//                       <div key={field.id}>
//                         <label htmlFor={field.id} className="block text-sm font-medium text-gray-700 mb-2">
//                           {field.label}
//                         </label>
//                         <Input
//                           id={field.id}
//                           name={field.id}
//                           type={field.type}
//                           placeholder={field.placeholder}
//                           className="border-gray-300 focus:border-cherry-500"
//                           value={formData[field.id]}
//                           onChange={handleChange}
//                           required
//                         />
//                       </div>
//                     ))}

//                     {/* Niche */}
//                     <div>
//                       <label htmlFor="niche" className="block text-sm font-medium text-gray-700 mb-2">
//                         Niche
//                       </label>
//                       <select
//                         id="niche"
//                         name="niche"
//                         className="flex h-10 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-cherry-500"
//                         value={formData.niche}
//                         onChange={handleNicheChange}
//                         required
//                       >
//                         <option value="">Select your niche</option>
//                         {nicheOptions.map((option) => (
//                           <option key={option} value={option}>
//                             {option}
//                           </option>
//                         ))}
//                       </select>

//                       {formData.niche === 'Other' && (
//                         <Input
//                           id="customNiche"
//                           name="customNiche"
//                           type="text"
//                           placeholder="Please specify your niche"
//                           className="border-gray-300 focus:border-cherry-500 mt-3"
//                           value={formData.customNiche}
//                           onChange={handleChange}
//                           required
//                         />
//                       )}
//                     </div>

//                     {/* About */}
//                     <div>
//                       <label htmlFor="about" className="block text-sm font-medium text-gray-700 mb-2">
//                         Tell us more about yourself
//                       </label>
//                       <textarea
//                         id="about"
//                         name="about"
//                         rows={4}
//                         placeholder="Share your experience, audience demographics, or anything else relevant."
//                         className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:ring-cherry-500"
//                         value={formData.about}
//                         onChange={handleChange}
//                         required
//                       ></textarea>
//                     </div>

//                     <Button
//                       type="submit"
//                       className="w-full bg-cherry-gradient hover:shadow-xl transition-all duration-300 text-white font-semibold py-3"
//                       disabled={isSubmitting}
//                     >
//                       {isSubmitting ? 'Submitting...' : 'Submit Application'}
//                     </Button>
//                   </form>

//                   {/* <div className="mt-8 pt-6 border-t border-gray-200">
//                     <p className="text-center text-sm text-gray-500">
//                       Are you a brand?{' '}
//                       <Link to="/login/brands" className="text-cherry-600 hover:text-cherry-700 font-medium">
//                         Login here
//                       </Link>
//                     </p>
//                   </div> */}
//                 </CardContent>
//               </Card>
//             </div>
//           </div>
//         </section>
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default LoginInfluencers;


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';
import { toast } from 'sonner';

const LoginInfluencers = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    instagramLink: '',
    niche: '',
    customNiche: '',
    about: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const nicheOptions = [
    'Fashion',
    'Beauty',
    'Travel',
    'Food',
    'Gaming',
    'Technology',
    'Fitness',
    'Lifestyle',
    'Education',
    'Arts & Crafts',
    'Finance',
    'Parenting',
    'Pets',
    'Comedy',
    'Music',
    'Other'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleNicheChange = (e) => {
    const selectedNiche = e.target.value;
    setFormData((prevData) => ({
      ...prevData,
      niche: selectedNiche,
      customNiche: selectedNiche === 'Other' ? '' : prevData.customNiche
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const finalNiche = formData.niche === 'Other' ? formData.customNiche : formData.niche;

    if (formData.niche === 'Other' && !formData.customNiche.trim()) {
      toast.error('Please specify your niche.', {
        position: 'bottom-right',
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwYpIxONbk5HB6rHu5NP-Gwl59npdxeLasLiP2ttXNP52UIC2CcRasU9bt7ryXWCE7PrQ/exec'; // Make sure this is still correct

      const dataToSend = {
        ...formData,
        niche: finalNiche,
        customNiche: undefined
      };

      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(dataToSend).toString(),
      });

      toast.success('Application submitted!', {
        description: 'Our team will contact you shortly.',
        position: 'bottom-right',
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        instagramLink: '',
        niche: '',
        customNiche: '',
        about: '',
      });

    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Submission failed!', {
        description: 'Please try again later.',
        position: 'bottom-right',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="pt-24 pb-16 lg:pt-32 lg:pb-24 bg-hero-gradient flex items-center justify-center min-h-[calc(100vh-theme(spacing.24))]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Increased gap and ensured items are stretched for better alignment */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center lg:items-start"> {/* gap-16 for more space, items-start to align top */}
              {/* Left Side Content Area - Corrected Text Color */}
              <div className="text-center lg:text-left text-gray-800 dark:text-white max-w-lg lg:max-w-none mx-auto lg:mx-0"> {/* Changed text-white to text-gray-800 */}
                <h2 className="text-4xl font-extrabold mb-6 leading-tight">
                  Join Our Thriving Creator Community
                </h2>
                <p className="text-lg opacity-90 mb-8">
                  Become a part of a dynamic network connecting talented creators with top brands.
                  Expand your reach, unlock new opportunities, and monetize your content like never before.
                </p>
                <ul className="text-lg opacity-90 space-y-4">
                  <li className="flex items-start lg:items-center">
                    <Star className="h-6 w-6 text-cherry-600 mr-3 mt-1 lg:mt-0 flex-shrink-0" /> {/* Adjusted star color for contrast */}
                    <span>Access exclusive brand collaborations</span>
                  </li>
                  <li className="flex items-start lg:items-center">
                    <Star className="h-6 w-6 text-cherry-600 mr-3 mt-1 lg:mt-0 flex-shrink-0" />
                    <span>Streamlined campaign management</span>
                  </li>
                  <li className="flex items-start lg:items-center">
                    <Star className="h-6 w-6 text-cherry-600 mr-3 mt-1 lg:mt-0 flex-shrink-0" />
                    <span>Dedicated support to grow your influence</span>
                  </li>
                </ul>
                <p className="text-lg opacity-90 mt-8">
                  Fill out the form on the right to start your journey with us!
                </p>
              </div>

              {/* Right Side Form Area - Adjusted width for better fit */}
              <div className="w-full max-w-lg mx-auto lg:max-w-xl lg:ml-auto lg:mr-0"> {/* Changed max-w-md to max-w-lg or max-w-xl */}
                <Card className="shadow-2xl border-0 bg-white">
                  <CardContent className="p-8">
                    <div className="text-center mb-8">
                      <div className="bg-cherry-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                        <Star className="h-8 w-8 text-cherry-600" />
                      </div>
                      <h1 className="text-2xl font-bold text-gray-900 mb-2">
                        Creator Application
                      </h1>
                      <p className="text-gray-600">
                        Join our network and start collaborating with brands!
                      </p>
                    </div>

                    <form className="space-y-6" onSubmit={handleSubmit}>
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Name
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Your full name"
                          className="border-gray-300 focus:border-cherry-500"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="creator@example.com"
                          className="border-gray-300 focus:border-cherry-500"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="+91 9876543210"
                          className="border-gray-300 focus:border-cherry-500"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="instagramLink" className="block text-sm font-medium text-gray-700 mb-2">
                          Instagram Profile Link
                        </label>
                        <Input
                          id="instagramLink"
                          name="instagramLink"
                          type="url"
                          placeholder="https://instagram.com/yourprofile"
                          className="border-gray-300 focus:border-cherry-500"
                          value={formData.instagramLink}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="niche" className="block text-sm font-medium text-gray-700 mb-2">
                          Niche
                        </label>
                        <select
                          id="niche"
                          name="niche"
                          className="flex h-10 w-full rounded-md border border-gray-300 bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cherry-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          value={formData.niche}
                          onChange={handleNicheChange}
                          required
                        >
                          <option value="">Select your niche</option>
                          {nicheOptions.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>

                        {formData.niche === 'Other' && (
                          <Input
                            id="customNiche"
                            name="customNiche"
                            type="text"
                            placeholder="Please specify your niche"
                            className="border-gray-300 focus:border-cherry-500 mt-3"
                            value={formData.customNiche}
                            onChange={handleChange}
                            required
                          />
                        )}
                      </div>

                      <div>
                        <label htmlFor="about" className="block text-sm font-medium text-gray-700 mb-2">
                          Tell us more about yourself
                        </label>
                        <textarea
                          id="about"
                          name="about"
                          rows={4}
                          placeholder="Share your experience, audience demographics, or anything else relevant."
                          className="flex h-10 w-full rounded-md border border-gray-300 bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cherry-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          value={formData.about}
                          onChange={handleChange}
                          required
                        ></textarea>
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-cherry-gradient hover:shadow-xl transition-all duration-300 text-white font-semibold py-3"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Submitting...' : 'Submit Application'}
                      </Button>
                    </form>

                    {/* <div className="mt-8 pt-6 border-t border-gray-200">
                      <p className="text-center text-sm text-gray-500">
                        Are you a brand?{' '}
                        <Link to="/login/brands" className="text-cherry-600 hover:text-cherry-700 font-medium">
                          Login here
                        </Link>
                      </p>
                    </div> */}
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

export default LoginInfluencers;