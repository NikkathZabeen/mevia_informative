import React from 'react';
import { AlertTriangle, TrendingDown, FileX, BarChart3 } from 'lucide-react';

const FrictionPointsSection = () => {
    const frictionPoints = [
        {
            icon: AlertTriangle,
            title: "Influencer Mismatch & Fake Engagement",
            description: "Partnering with creators who don't align with your brand values or have fake followers leads to poor audience resonance and low conversion.",
            color: "text-red-600",
            bgColor: "bg-red-50",
            borderColor: "border-red-200"
        },
        {
            icon: TrendingDown,
            title: "Inconsistent Content Quality Across Campaigns",
            description: "Unreliable or off-brand content hurts credibility. Brands need creators who consistently deliver high-quality visuals and messaging.",
            color: "text-pink-600",
            bgColor: "bg-pink-50",
            borderColor: "border-pink-200"
        },
        {
            icon: FileX,
            title: "Unclear Contracts & Delayed Payments",
            description: "Lack of transparent agreements, scope creep, and late payments create friction, leading to trust issues and stalled influencer marketing campaigns.",
            color: "text-pink-600",
            bgColor: "bg-pink-50",
            borderColor: "border-pink-200"
        },
        {
            icon: BarChart3,
            title: "Lack of Performance Tracking & ROI Visibility",
            description: "Without real-time analytics and conversion tracking, brands struggle to measure success, optimize campaigns, or justify influencer budgets.",
            color: "text-rose-800",
            bgColor: "bg-rose-50",
            borderColor: "border-rose-200"
        }
    ];

    return (
        <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
                        The Hidden
                        <span className="text-gradient bg-gradient-to-r from-red-600 to-cherry-700 bg-clip-text text-transparent block lg:inline lg:ml-3">
                            Friction Points
                        </span>
                        <span className="block mt-2">in Brand–Influencer Partnerships</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                        Influencer marketing has massive potential — but only when executed right.
                        These are the common pitfalls that weaken brand-influencer partnerships and reduce ROI:
                    </p>
                </div>

                {/* Friction Points Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {frictionPoints.map((point, index) => {
                        const IconComponent = point.icon;
                        return (
                            <div
                                key={index}
                                className={`group relative p-8 rounded-2xl border-2 ${point.borderColor} ${point.bgColor} 
                                    transform hover:scale-105 transition-all duration-300 hover:shadow-xl
                                    animate-slide-in-left`}
                                style={{
                                    animationDelay: `${index * 0.2}s`,
                                    animationFillMode: 'both'
                                }}
                            >
                                {/* Warning Badge */}
                                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-full 
                                    ${point.bgColor} border-2 ${point.borderColor} mb-6
                                    group-hover:animate-pulse`}>
                                    <IconComponent className={`h-7 w-7 ${point.color}`} />
                                </div>

                                {/* Number Badge */}
                                {/* <div className="absolute top-4 right-4 flex items-center justify-center w-8 h-8 
                                    bg-white rounded-full border-2 border-gray-200 text-sm font-bold text-gray-600">
                                    {index + 1}
                                </div> */}

                                {/* Content */}
                                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 leading-tight">
                                    {point.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed text-base lg:text-lg">
                                    {point.description}
                                </p>

                                {/* Decorative Element */}
                                <div className={`absolute bottom-0 right-0 w-20 h-20 ${point.color} opacity-5 
                                    transform rotate-12 group-hover:rotate-45 transition-transform duration-500`}>
                                    <IconComponent className="w-full h-full" />
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Call to Action */}
                {/* <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '1s', animationFillMode: 'both' }}>
                    <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 max-w-4xl mx-auto border border-gray-200">
                        <div className="flex items-center justify-center mb-6">
                            <div className="w-16 h-16 bg-cherry-gradient rounded-full flex items-center justify-center animate-pulse">
                                <BarChart3 className="h-8 w-8 text-white" />
                            </div>
                        </div>
                        <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                            Ready to Eliminate These Friction Points?
                        </h3>
                        <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
                            Our platform addresses each of these challenges with data-driven matching,
                            quality control, transparent workflows, and comprehensive analytics.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-cherry-gradient text-white px-8 py-4 rounded-xl font-semibold 
                                hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                                See How We Solve This
                            </button>
                            <button className="border-2 border-cherry-200 text-cherry-700 px-8 py-4 rounded-xl font-semibold 
                                hover:bg-cherry-50 transition-all duration-300">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div> */}
            </div>
        </section>
    );
};

export default FrictionPointsSection;
