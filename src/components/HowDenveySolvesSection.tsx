import React from 'react';
import { Zap, Users, ShieldCheck, TrendingUp, LayoutDashboard } from 'lucide-react';

const HowMeviaSolvesSection = () => {
    const solutions = [
        {
            icon: Zap,
            title: "Strategic Influencer Partnerships",
            description: "We identify and collaborate with influencers who truly align with your brand’s voice and audience — ensuring every partnership feels natural, engaging, and authentic.",
            number: "01"
        },
        {
            icon: Users,
            title: "Creative Campaign Direction",
            description: "Our in-house strategy and creative team conceptualizes campaigns that spark conversation and deliver impact — from storytelling to visuals, every detail drives brand resonance.",
            number: "02"
        },
        {
            icon: ShieldCheck,
            title: "Transparent Management & Secure Payments",
            description: "We handle contracts, timelines, and influencer coordination — ensuring smooth execution, secure transactions, and complete peace of mind for both brands and creators.",
            number: "03"
        },
        {
            icon: TrendingUp,
            title: "Performance Tracking & ROI Optimization",
            description: "We go beyond vanity metrics. Our team tracks conversions, reach, and audience sentiment to continuously optimize influencer performance and maximize ROI.",
            number: "04"
        },
        {
            icon: LayoutDashboard,
            title: "End-to-End Campaign Management",
            description: "From strategy and influencer sourcing to execution and reporting — Mevia manages every stage of your influencer campaign, letting you focus on your brand’s growth.",
            number: "05"
        }
    ];

    return (
        <section className="py-20 lg:py-32 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-20 animate-fade-in">
                    <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                        How <span className="text-cherry-600">Mevia</span> Delivers Results
                    </h2>
                    <p className="text-2xl lg:text-3xl font-medium text-gray-600 mb-8">
                        Our Agency Approach to Influencer Marketing Excellence
                    </p>
                    <p className="text-xl lg:text-xl font-medium text-cherry-600 mb-8">
                        Why Brands Trust Us
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
                                {/* Icon */}
                                <div className="flex-shrink-0">
                                    <div className="relative">
                                        <div className="w-24 h-24 bg-cherry-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                            <IconComponent className="h-12 w-12 text-white" />
                                        </div>
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
            </div>
        </section>
    );
};

export default HowMeviaSolvesSection;
