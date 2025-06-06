import React from "react";
import { Smartphone, Brain, BarChart3 } from "lucide-react";

const timelineData = [
    {
        version: "1.1",
        title: "Mobile App for Influencers",
        description:
            "A sleek, intuitive app empowering creators to showcase profiles, track campaigns, and access exclusive brand opportunities.",
        features: ["Profile Management", "Campaign Tracking", "Real-time Analytics", "Push Notifications"],
        icon: <Smartphone className="h-6 w-6 text-white" />,
        color: "bg-gradient-to-r from-red-500 to-red-700",
    },
    {
        version: "1.2",
        title: "AI-Powered Matchmaking",
        description:
            "Integration of Denvey's proprietary AI Engine to revolutionize brand-influencer connections through smart matchmaking.",
        features: ["Smart Matching", "Audience Analysis", "Fraud Detection", "Performance Prediction"],
        icon: <Brain className="h-6 w-6 text-white" />,
        color: "bg-gradient bg-gradient-to-r from-red-500 to-red-700",
    },
    {
        version: "1.3",
        title: "Advanced Analytics Dashboard",
        description:
            "Deployment of advanced data analytics and real-time performance dashboards with comprehensive insights.",
        features: ["Real-time Dashboards", "Sentiment Analysis", "ROI Tracking", "Adaptive Optimization"],
        icon: <BarChart3 className="h-6 w-6 text-white" />,
        color: "bg-gradient-to-r from-red-500 to-red-700",
    },
];

const DenveyLaunchPathway = () => {
    return (
        <section className="w-screen min-h-screen bg-gradient-to-b from-pink-50 to-red-50 py-20 overflow-hidden">
            <div className="text-center mb-16">
                <h2 className="text-5xl font-bold text-gray-900">
                    Strategic <span className="text-red-700">Denvey</span> Launch
                </h2>
                <p className="text-md text-gray-600 mt-2 max-w-xl mx-auto">
                    Our innovative roadmap to revolutionize influencer marketing through cutting-edge technology and data-driven insights.
                </p>
            </div>

            <div className="relative w-full flex flex-col items-center">
                {/* Vertical Line */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-1 bg-red-300"></div>

                {/* Timeline Items */}
                {timelineData.map((item, idx) => (
                    <div
                        key={item.version}
                        className={`w-full max-w-5xl flex ${idx % 2 === 0 ? "justify-start" : "justify-end"} mb-28 relative`}
                    >
                        <div
                            className={`absolute top-0 left-1/2 transform -translate-x-1/2 bg-white border-4 border-white rounded-full z-10 w-12 h-12 flex items-center justify-center shadow-lg ${item.color}`}
                        >
                            {item.icon}
                        </div>

                        <div
                            className={`w-96 mt-6 bg-white shadow-lg rounded-xl overflow-hidden ${idx % 2 === 0 ? "ml-16" : "mr-16"}`}
                        >
                            <div className={`${item.color} px-6 py-5 text-white rounded-t-xl font-semibold text-2x1`}>
                                Version {item.version} <br /> <span className="font-bold">{item.title}</span>
                            </div>
                            <div className="px-6 py-6">
                                <p className="text-base text-gray-600 mb-4 leading-relaxed font-light">
                                    {item.description}
                                </p>
                                <ul className="list-disc list-inside text-base text-gray-700 space-y-1">
                                    {item.features.map((feature, i) => (
                                        <li key={i}>{feature}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default DenveyLaunchPathway;
