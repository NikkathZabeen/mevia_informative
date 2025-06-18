import React from 'react';
import { Smartphone, Brain } from 'lucide-react';

const DenveyLaunchPathway = () => {
    const launchSteps = [
        {
            version: "V1.1",
            title: "Empowering Influencers & Brands",
            description: (
                <>
                    <strong>Mobile App for Influencers:</strong> A sleek, user-centric app designed for creators to showcase their profiles, track campaigns, and connect with exclusive collaboration opportunities.
                    <br /><br />
                    <strong>Web Application for Brands:</strong> A powerful brand dashboard that lets businesses find the right creators, manage campaigns effortlessly, and maximize their influencer marketing potential.
                </>
            ),
            icon: Smartphone,
            color: "from-red-500 to-red-700",
            bgColor: "bg-red-50",
        },
        {
            version: "V1.2",
            title: "Intelligent Matching & Insights",
            description: (
                <>
                    <strong>Proprietary Matching Algorithm:</strong> Using advanced technology and data, Denvey intelligently pairs the right creators with the right brands — ensuring more impactful campaigns.
                    <br /><br />
                    <strong>Enhanced Analytics:</strong> Our platform provides deeper, actionable insights, helping brands and creators make smarter decisions and drive greater return on investment (ROI).
                </>
            ),
            icon: Brain,
            color: "from-pink-500 to-pink-700",
            bgColor: "bg-pink-50",
        },
    ];

    return (
        <section className="py-16 lg:py-24 bg-gradient-to-b from-pink-50 to-red-50 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-20">
                    <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-4">
                        Denvey <span className="text-red-600">Strategic Launch Pathway</span>
                    </h2>
                    <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                        Discover how Denvey is shaping the future of influencer marketing — empowering creators and brands to connect, collaborate, and grow smarter.
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative max-w-6xl mx-auto">
                    {/* Vertical Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-red-200 hidden lg:block"></div>

                    {launchSteps.map((step, index) => {
                        const isEven = index % 2 === 0;
                        const Icon = step.icon;

                        return (
                            <div
                                key={index}
                                className={`relative flex items-center mb-16 lg:mb-24 ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                            >
                                {/* Content */}
                                <div className={`w-full lg:w-5/12 ${isEven ? 'lg:pr-16' : 'lg:pl-16'}`}>
                                    <div className={`relative p-8 lg:p-10 rounded-3xl ${step.bgColor} border-2 border-white shadow-xl`}>
                                        {/* Version Badge */}
                                        <div className={`absolute -top-4 ${isEven ? '-right-4' : '-left-4'} 
                                    w-12 h-12 bg-gradient-to-r ${step.color} rounded-full 
                                    flex items-center justify-center text-white font-bold text-sm shadow-md`}>
                                            {step.version}
                                        </div>

                                        {/* Icon */}
                                        <div className={`inline-flex items-center justify-center w-16 h-16 
                                    bg-gradient-to-r ${step.color} rounded-2xl mb-6 shadow-lg`}>
                                            <Icon className="h-8 w-8 text-white" />
                                        </div>

                                        {/* Text */}
                                        <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                                            {step.title}
                                        </h3>
                                        <p className="text-gray-700 leading-relaxed text-base">{step.description}</p>
                                    </div>
                                </div>

                                {/* Timeline Node */}
                                <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-8 h-8 
                                bg-gradient-to-r from-red-500 to-pink-500 rounded-full 
                                border-4 border-white shadow-lg z-10"></div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default DenveyLaunchPathway;
