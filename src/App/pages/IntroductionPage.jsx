import React from "react";
import { Link } from "react-router";
import { useTranslation } from '../components/LanguageToggle';

function IntroductionPage() {
    const t = useTranslation();

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
                {/* Hero Section */}
                <section className="text-center mb-12 sm:mb-16 lg:mb-20">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-emerald-700 mb-4 sm:mb-6">
                        {t.introTitle}
                    </h1>
                    <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 max-w-3xl mx-auto">
                        {t.introSubtitle}
                    </p>
                </section>

                {/* Features Section */}
                <section className="bg-white rounded-xl shadow-sm p-6 sm:p-8 lg:p-10 mb-12 sm:mb-16 lg:mb-20">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-emerald-600 mb-6 sm:mb-8">
                        {t.introFeaturesTitle}
                    </h2>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <FeatureItem
                            icon="📏"
                            title={t.introFeature1Title}
                            description={t.introFeature1Description}
                        />
                        <FeatureItem
                            icon="🌱"
                            title={t.introFeature2Title}
                            description={t.introFeature2Description}
                        />
                        <FeatureItem
                            icon="🎯"
                            title={t.introFeature3Title}
                            description={t.introFeature3Description}
                        />
                    </ul>
                </section>

                {/* Steps Section */}
                <section className="bg-white rounded-xl shadow-sm p-6 sm:p-8 lg:p-10 mb-12 sm:mb-16 lg:mb-20">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-emerald-600 mb-6 sm:mb-8">
                        {t.introStepsTitle}
                    </h2>
                    <ol className="space-y-4">
                        <StepItem
                            number="1"
                            title={t.introStep1Title}
                            description={t.introStep1Description}
                        />
                        <StepItem
                            number="2"
                            title={t.introStep2Title}
                            description={t.introStep2Description}
                        />
                        <StepItem
                            number="3"
                            title={t.introStep3Title}
                            description={t.introStep3Description}
                        />
                    </ol>
                </section>

                {/* CTA Section */}
                <section className="text-center">
                    <Link
                        to="/design"
                        className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white 
                                 font-semibold py-3 px-8 rounded-lg text-lg
                                 transform hover:-translate-y-1 transition-all duration-300"
                    >
                        {t.introCtaButton}
                    </Link>
                </section>
            </div>
        </div>
    );
}

const FeatureItem = ({ icon, title, description }) => (
    <li className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
        <span className="text-2xl">{icon}</span>
        <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    </li>
);

const StepItem = ({ number, title, description }) => (
    <li className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
        <span className="flex-shrink-0 w-8 h-8 bg-emerald-600 text-white
                        rounded-full flex items-center justify-center
                        text-lg font-semibold">
            {number}
        </span>
        <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    </li>
);

export default IntroductionPage;
