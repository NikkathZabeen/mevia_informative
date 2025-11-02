import React from 'react';
import { AlertTriangle, TrendingUp, Handshake, BarChart3 } from 'lucide-react';

const FrictionPointsSection = () => {
    const challenges = [
        {
            icon: AlertTriangle,
            title: "We Identify Authentic & Aligned Influencers",
            description:
                "Say goodbye to fake engagement and mismatched partnerships. Our vetting process ensures every creator truly reflects your brand values and audience tone.",
            color: "text-red-600",
            bgColor: "bg-red-50",
            borderColor: "border-red-200",
        },
        {
            icon: TrendingUp,
            title: "We Deliver Consistent, High-Quality Campaigns",
            description:
                "From creative direction to final delivery, our team ensures every post meets brand standards, drives engagement, and maintains visual excellence across all collaborations.",
            color: "text-pink-600",
            bgColor: "bg-pink-50",
            borderColor: "border-pink-200",
        },
        {
            icon: Handshake,
            title: "We Manage Contracts & Payments Transparently",
            description:
                "We handle agreements, deliverables, and timelines — ensuring smooth partnerships, clear expectations, and timely payments for all stakeholders.",
            color: "text-rose-600",
            bgColor: "bg-rose-50",
            borderColor: "border-rose-200",
        },
        {
            icon: BarChart3,
            title: "We Track Performance & Optimize Strategy",
            description:
                "Our analytics dashboard provides real-time insights into reach, engagement, and ROI — empowering you to make data-driven campaign decisions.",
            color: "text-rose-800",
            bgColor: "bg-rose-50",
            borderColor: "border-rose-200",
        },
    ];

    return (
        <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
                        How{" "}
                        <span className="text-gradient bg-gradient-to-r from-red-600 to-cherry-700 bg-clip-text text-transparent">
                            We Simplify
                        </span>{" "}
                        Influencer Marketing for Brands
                    </h2>
                    <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                        As a full-service influencer marketing agency, we remove the roadblocks and deliver end-to-end campaign success.
                    </p>
                </div>

                {/* Challenges Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {challenges.map((item, index) => {
                        const IconComponent = item.icon;
                        return (
                            <div
                                key={index}
                                className={`group relative p-8 rounded-2xl border-2 ${item.borderColor} ${item.bgColor} 
                transform hover:scale-105 transition-all duration-300 hover:shadow-xl animate-slide-in-left`}
                                style={{
                                    animationDelay: `${index * 0.2}s`,
                                    animationFillMode: "both",
                                }}
                            >
                                <div
                                    className={`inline-flex items-center justify-center w-14 h-14 rounded-full 
                  ${item.bgColor} border-2 ${item.borderColor} mb-6 group-hover:animate-pulse`}
                                >
                                    <IconComponent className={`h-7 w-7 ${item.color}`} />
                                </div>

                                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 leading-tight">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed text-base lg:text-lg">
                                    {item.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default FrictionPointsSection;
