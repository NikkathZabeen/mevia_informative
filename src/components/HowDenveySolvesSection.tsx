import React from 'react';
import { Zap, Users, ShieldCheck, TrendingUp, LayoutDashboard, ArrowRight } from 'lucide-react';

const HowDenveySolvesSection = () => {
    const solutions = [
        {
            icon: Zap,
            title: "AI-Powered Influencer Matching",
            description: "Denvey uses intelligent algorithms to connect brands with the right influencers based on niche, audience behavior, engagement quality, and campaign objectives — reducing mismatched collaborations and fake followers.",
            number: "01"
        },
        {
            icon: Users,
            title: "High-Quality Content Delivery",
            description: "We ensure content consistency with structured creative briefs, approval workflows, and quality benchmarks — helping brands maintain brand identity across influencer campaigns.",
            number: "02"
        },
        {
            icon: ShieldCheck,
            title: "Secure Contracts & Guaranteed Payments",
            description: "Our platform offers automated influencer contracts and escrow-based payments, ensuring transparency, timely compensation, and trust in every brand-creator partnership.",
            number: "03"
        },
        {
            icon: TrendingUp,
            title: "Advanced Campaign Analytics & ROI Tracking",
            description: "Get full visibility with real-time performance dashboards, conversion tracking, and detailed influencer analytics to measure campaign ROI and optimize results.",
            number: "04"
        },
        {
            icon: LayoutDashboard,
            title: "End-to-End Influencer Campaign Management",
            description: "Denvey streamlines the entire influencer marketing workflow — from influencer discovery to campaign execution and reporting — all in one easy-to-use platform.",
            number: "05"
        }
    ];

    return (
        <section className="py-20 lg:py-32 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-20 animate-fade-in">
                    <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                        How <span className="text-cherry-600">Denvey</span> Solves
                    </h2>
                    <p className="text-2xl lg:text-3xl font-medium text-gray-600 mb-8">
                        Influencer Marketing Challenges for Brands and Creators.
                    </p>
                    <p className="text-xl lg:text-xl font-medium text-cherry-600 mb-8">
                        Why Choose Us?
                    </p>
                    <div className="w-24 h-1 bg-cherry-600 mx-auto"></div>
                </div>

                {/* Solutions List */}
                <div className="max-w-4xl mx-auto space-y-16">
                    {solutions.map((solution, index) => {
                        const IconComponent = solution.icon;
                        const isEven = index % 2 === 0;

                        return (
                            <div
                                key={index}
                                className={`flex items-center gap-12 ${isEven ? 'flex-row' : 'flex-row-reverse'} group animate-slide-in-left`}
                                style={{ animationDelay: `${index * 0.2}s` }}
                            >
                                {/* Icon and Number */}
                                <div className="flex-shrink-0">
                                    <div className="relative">
                                        <div className="w-24 h-24 bg-cherry-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                            <IconComponent className="h-12 w-12 text-white" />
                                        </div>
                                        {/* <div className="absolute -top-2 -right-2 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">
                                            {solution.number}
                                        </div> */}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex-1">
                                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 group-hover:text-cherry-600 transition-colors">
                                        {solution.title}
                                    </h3>
                                    <p className="text-lg text-gray-600 leading-relaxed">
                                        {solution.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Bottom CTA */}
                {/* <div className="text-center mt-20 animate-fade-in" style={{ animationDelay: '1.5s' }}>
                    <div className="bg-gray-900 rounded-2xl p-12 max-w-3xl mx-auto">
                        <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                            Ready to Transform Your Marketing?
                        </h3>
                        <p className="text-xl text-gray-300 mb-8">
                            Join thousands of brands already using Denvey
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-cherry-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-cherry-700 transition-colors flex items-center justify-center gap-2">
                                Start Your Journey
                                <ArrowRight className="h-5 w-5" />
                            </button>
                            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-gray-900 transition-colors">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div> */}
            </div>
        </section>
    );
};

export default HowDenveySolvesSection;
