import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
const PrivacyPolicy = () => {
    const policySections = [
        {
            title: "Information We Collect",
            content: [
                "Personal details you provide during registration (name, email, contact information)",
                "Profile data, including social media handles, interests, and collaboration preferences",
                "Usage data including interaction logs, device information, and campaign analytics",
                "Cookies and tracking technologies to enhance your browsing experience"
            ],
        },
        {
            title: "How We Use Your Information",
            content: [
                "To connect brands and influencers with the most relevant matches",
                "To improve our AI-driven matchmaking and campaign optimization",
                "To communicate important updates, offers, and support services",
                "To ensure security, prevent fraud, and comply with legal requirements"
            ],
        },
        {
            title: "Sharing & Disclosure",
            content: [
                "We do not sell or rent your personal information to third parties",
                "We may share limited data with trusted partners to facilitate collaborations",
                "Data shared is governed by strict confidentiality agreements and privacy safeguards"
            ],
        },
        {
            title: "Your Rights",
            content: [
                "Access, update, or delete your personal data at any time via your account settings",
                "Opt out of marketing communications and promotional emails",
                "Request data portability and restriction of processing where applicable"
            ],
        }
    ];

    return (
        <div className="min-h-screen">
            <Header />
            <main>
                <section className="pt-24 pb-16 lg:pt-32 lg:pb-24 bg-hero-gradient">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                            Privacy <span className="text-gradient">Policy</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            At Mevia, your privacy and trust are paramount. We are committed to protecting your personal information and using it responsibly to provide you with a seamless and secure experience.
                        </p>
                    </div>
                </section>

                <section className="py-16 lg:py-24 bg-white">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
                        <div className="grid grid-cols-1 gap-10">
                            {policySections.map((section, index) => (
                                <Card key={index} className="shadow-lg border-0">
                                    <CardContent className="p-6">
                                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">{section.title}</h2>
                                        <ul className="list-disc list-inside space-y-2 text-gray-600 leading-relaxed">
                                            {section.content.map((item, idx) => (
                                                <li key={idx}>{item}</li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default PrivacyPolicy;
