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
                "Personal details you share with us, such as your name, email address, company information, and contact details.",
                "Project and campaign-related data that help us understand your business goals and marketing needs.",
                "Website usage data including analytics, device information, and browsing activity to enhance our services.",
                "Cookies and tracking technologies used to improve website performance and personalize your experience."
            ],
        },
        {
            title: "How We Use Your Information",
            content: [
                "To deliver and manage marketing, branding, and content creation services tailored to your business needs.",
                "To maintain client communication, share proposals, and provide performance reports.",
                "To improve our services, analyze trends, and develop new offerings that align with client goals.",
                "To comply with legal obligations, ensure security, and prevent fraud or misuse of our platform."
            ],
        },
        {
            title: "Sharing & Disclosure",
            content: [
                "We do not sell or rent your personal information to any third party.",
                "Information may be shared with trusted vendors or creative partners solely for project execution purposes.",
                "All partners and service providers are bound by strict confidentiality and data protection agreements.",
                "We may disclose information if required by law, regulation, or legal process."
            ],
        },
        {
            title: "Data Retention & Security",
            content: [
                "We retain personal data only as long as necessary to fulfill our contractual or legal obligations.",
                "Your data is protected using industry-standard encryption, access controls, and security protocols.",
                "We regularly review our practices to ensure the highest level of data protection."
            ],
        },
        {
            title: "Your Rights",
            content: [
                "You can access, update, or request deletion of your personal data at any time by contacting us directly.",
                "You may opt out of receiving marketing communications or newsletters.",
                "You can request a copy of the data we hold about you or restrict its processing under applicable privacy laws."
            ],
        },
        {
            title: "Updates to This Policy",
            content: [
                "We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements.",
                "Any major updates will be communicated via our website or email notifications."
            ],
        },
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
                            At <strong>Mevia Agency</strong>, your privacy and trust are our top priorities.
                            We are committed to protecting your personal and business information,
                            ensuring transparency in how we collect, use, and safeguard your data.
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

                        <div className="mt-12 text-center">
                            <p className="text-gray-500 text-sm">
                                For any questions regarding this policy or your personal data, please contact us at{" "}
                                <a href="mailto:privacy@meviaagency.com" className="text-cherry-600 font-medium hover:underline">
                                    privacy@meviaagency.com
                                </a>.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default PrivacyPolicy;
