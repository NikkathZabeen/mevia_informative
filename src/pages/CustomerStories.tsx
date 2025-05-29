
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Star, TrendingUp, Users, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const CustomerStories = () => {
  const stories = [
    {
      company: "GreenLeaf Cosmetics",
      logo: "https://images.unsplash.com/photo-1627384113972-f4c0392fe5aa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29zbWV0aWNzJTIwbWFya2V0aW5nfGVufDB8fDB8fHww",
      results: [
        { metric: "Brand Awareness", value: "+340%" },
        { metric: "Sales Growth", value: "+180%" },
        { metric: "ROI", value: "650%" }
      ],
      quote: "Denvey transformed our influencer marketing strategy. We found authentic voices who genuinely connected with our values, resulting in our most successful campaign ever.",
      contact: "Dr.Roshitha M, CMO",
      image: "https://images.unsplash.com/photo-1627384113972-f4c0392fe5aa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29zbWV0aWNzJTIwbWFya2V0aW5nfGVufDB8fDB8fHww"
    },
    {
      company: "TechFlow Solutions",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop",
      results: [
        { metric: "Lead Generation", value: "+425%" },
        { metric: "Demo Requests", value: "+290%" },
        { metric: "Conversion Rate", value: "+150%" }
      ],
      quote: "The quality of influencers on Denvey is unmatched. They helped us reach decision-makers in our industry with authentic, educational content that drove real business results.",
      contact: "Jason Theophilus, Head of Marketing",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      company: "Fitness First",
      logo: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=100&h=100&fit=crop",
      results: [
        { metric: "Membership Sign-ups", value: "+220%" },
        { metric: "App Downloads", value: "+380%" },
        { metric: "Community Growth", value: "+500%" }
      ],
      quote: "Denvey connected us with fitness influencers who truly embodied our brand values. The authentic partnerships drove incredible engagement and real membership growth.",
      contact: "Emma Watson, Brand Director",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  const creatorStories = [
    {
      name: "Vinuthna",
      handle: "@vinufoodie",
      niche: "Food & Lifestyle",
      followers: "185K",
      earnings: "₹2.5L/year",
      avatar: "https://images.unsplash.com/photo-1659352154866-2c478bdaf163?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZvb2RpZSUyMGdpcmwlMjBpbmRpYW58ZW58MHx8MHx8fDA%3D",
      quote: "Denvey helped me turn my food blog into a sustainable business. I now work with brands I genuinely love and my audience can tell the difference.",
      growth: "+300% income growth in 12 months"
    },
    {
      name: "Shubman Gill",
      handle: "@ShubmanGilltech",
      niche: "Technology",
      followers: "120K",
      earnings: "₹8.5L/year",
      avatar: "https://images.unsplash.com/photo-1588585994994-c6370cd1db0d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dGVjaCUyMGJveSUyMGluZGlhbnxlbnwwfHwwfHx8MA%3D%3D",
      quote: "The platform's approach to matching is incredible. I only work with tech companies whose products I actually use and believe in.",
      growth: "+250% engagement increase"
    },
    {
      name: "Harshitha",
      handle: "@harshithastyle",
      niche: "Fashion & Beauty",
      followers: "340K",
      earnings: "₹3.2L/year",
      avatar: "https://plus.unsplash.com/premium_photo-1682096065017-ab3d3a162b33?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHN0eWxpc2glMjBnaXJscyUyMGluZGlhbnxlbnwwfHwwfHx8MA%3D%3D",
      quote: "Denvey's professional approach and guaranteed payments gave me the confidence to make content creation my full-time career.",
      growth: "+400% follower growth"
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
                Success <span className="text-gradient">Stories</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Discover how brands and creators are achieving extraordinary results through
                authentic partnerships on the Denvey platform.
              </p>
            </div>

            {/* Success Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">500+</div>
                <div className="text-gray-600 font-medium">Successful Campaigns</div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">&#8377;2.5Cr+</div>
                <div className="text-gray-600 font-medium">Creator Earnings</div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">350%</div>
                <div className="text-gray-600 font-medium">Avg. ROI Increase</div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">98%</div>
                <div className="text-gray-600 font-medium">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </section>

        {/* Brand Success Stories */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Brand Success Stories
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See how leading brands are driving growth through authentic influencer partnerships.
              </p>
            </div>

            <div className="space-y-16">
              {stories.map((story, index) => (
                <Card key={index} className="shadow-2xl border-0 overflow-hidden">
                  <CardContent className="p-0">
                    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                      <div className={`p-8 lg:p-12 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                        <div className="flex items-center mb-6">
                          <img
                            src={story.logo}
                            alt={story.company}
                            className="w-12 h-12 rounded-lg object-cover mr-4"
                          />
                          <h3 className="text-2xl font-bold text-gray-900">{story.company}</h3>
                        </div>

                        <div className="grid grid-cols-3 gap-4 mb-8">
                          {story.results.map((result, idx) => (
                            <div key={idx} className="text-center">
                              <div className="text-2xl font-bold text-cherry-600 mb-1">{result.value}</div>
                              <div className="text-sm text-gray-600">{result.metric}</div>
                            </div>
                          ))}
                        </div>

                        <blockquote className="text-lg text-gray-700 italic mb-6 leading-relaxed">
                          "{story.quote}"
                        </blockquote>

                        <div className="text-gray-600 font-medium">
                          — {story.contact}
                        </div>
                      </div>

                      <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                        <img
                          src={story.image}
                          alt={story.company}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Creator Success Stories */}
        <section className="py-16 lg:py-24 bg-cherry-light-gradient">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Creator Success Stories
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Meet the creators who have transformed their passion into thriving businesses.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {creatorStories.map((creator, index) => (
                <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-0">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <img
                        src={creator.avatar}
                        alt={creator.name}
                        className="w-16 h-16 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h4 className="font-bold text-gray-900 text-lg">{creator.name}</h4>
                        <p className="text-cherry-600">{creator.handle}</p>
                        <p className="text-sm text-gray-500">{creator.niche}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="text-center bg-cherry-50 rounded-lg p-3">
                        <div className="text-lg font-bold text-cherry-600">{creator.followers}</div>
                        <div className="text-xs text-gray-600">Followers</div>
                      </div>
                      <div className="text-center bg-green-50 rounded-lg p-3">
                        <div className="text-lg font-bold text-green-600">{creator.earnings}</div>
                        <div className="text-xs text-gray-600">Annual Earnings</div>
                      </div>
                    </div>

                    <blockquote className="text-gray-600 italic mb-4 leading-relaxed">
                      "{creator.quote}"
                    </blockquote>

                    <div className="text-sm font-semibold text-cherry-600">
                      {creator.growth}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Awards Section */}
        {/* <section className="py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Industry Recognition
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our commitment to excellence has been recognized by industry leaders.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { award: "Best Influencer Platform 2024", org: "MarTech Awards" },
                { award: "Innovation in Marketing", org: "Digital Marketing Institute" },
                { award: "Top B2B Software", org: "G2 Reviews" },
                { award: "Creator's Choice Award", org: "Creator Economy Report" }
              ].map((award, index) => (
                <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-all duration-300 border-0">
                  <CardContent className="p-8">
                    <Award className="h-12 w-12 text-cherry-600 mx-auto mb-4" />
                    <h3 className="font-bold text-gray-900 mb-2">{award.award}</h3>
                    <p className="text-gray-600">{award.org}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section> */}
      </main>
      <Footer />
    </div>
  );
};

export default CustomerStories;
