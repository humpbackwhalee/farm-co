import React, { useState, useEffect, useRef, useMemo, lazy } from 'react';
import { FaCalculator, FaSeedling, FaLightbulb, FaBookOpen, FaRulerCombined, FaSlidersH } from 'react-icons/fa';
import { SlScreenDesktop } from "react-icons/sl";
import { Link, useNavigate, useLocation } from 'react-router';
import { useTranslation } from '../components/LanguageContext';
import { BottomMain, BottomSecondary } from '../ui/BottonStyle';

// Import images
import heroImage from '../public/images/Garden_Plans_Calculator.jpg';
import designImage from '../public/images/Garden_Plans.jpg';
import step1Image from '../public/images/calculate_step_1.png';
import step2Image from '../public/images/calculate_step_2.png';
import step3Image from '../public/images/calculate_step_3.png';

function TheHomePage() {
  const t = useTranslation();

  const HeroSection = () => {
    return (
      <section
        style={{ backgroundImage: `url('${heroImage}')` }}
        className={`relative h-[calc(100vh-6rem)] sm:h-[calc(100vh-5rem)] flex justify-center items-center bg-cover bg-center bg-no-repeat rounded-lg mx-4`}
      >
        <div className="absolute inset-0 bg-black/20 rounded-lg"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl sm:text-6xl font-jost font-bold leading-tight mb-4 text-white">
            {t.homeHeroTitle}
          </h1>
          <p className="text-xl sm:text-2xl font-baiJamjuree text-white/90 mb-8">
            {t.homeHeroSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-4">
            <BottomMain to="/design" text={t.startDesigning} />
            <BottomSecondary to="/introduction" text={t.exploreGuide} />
          </div>
        </div>
      </section>
    );
  };

  const FeatureSection = () => {
    const features = useMemo(() => [
      {
        icon: <FaSlidersH className="h-12 w-12 mx-auto mb-4 text-emerald-600" />,
        title: `${t.homeFeature1Title}`,
        description: `${t.homeFeature1Description}`,
      },
      {
        icon: <FaRulerCombined className="h-12 w-12 mx-auto mb-4 text-emerald-500" />,
        title: `${t.homeFeature2Title}`,
        description: `${t.homeFeature2Description}`,
      },
      {
        icon: <SlScreenDesktop className="h-12 w-12 mx-auto mb-4 text-emerald-400" />,
        title: `${t.homeFeature3Title}`,
        description: `${t.homeFeature3Description}`,
      },
    ], []);

    return (
      <section className="container mx-auto my-2 py-2 sm:my-4 sm:py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="w-full sm:w-72 bg-white rounded-lg shadow-md p-6 sm:p-8 transition-transform hover:scale-102"
              >
                <div className="icon-wrapper mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg sm:text-xl text-center font-semibold mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  const DesignPlotSection = () => {
    return (
      <section className="my-2 py-2 sm:my-6 sm:py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
            <div className="w-full flex-1 mb-4 sm:mb-0">
              <img
                src={designImage}
                alt="Design Tool Screenshot"
                className="rounded-lg shadow-lg w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
            <div className="w-full flex-1">
              <h2 className="text-2xl sm:text-3xl font-bold mb-2">
                {t.homeDesignPlotTitle}
              </h2>
              <p className="text-base sm:text-lg text-gray-700">
                {t.homeDesignPlotDescription}
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };

  function BeginnersGuide() {
    return (
      <section className="relative my-2 py-2 sm:my-4 sm:py-4 bg-emerald-50">

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl font-bold text-center my-2">
          {t.homeBeginnersGuideTitle}
        </h2>

        {/* Paragraph */}
        <p className="text-lg text-gray-700 text-center mb-4 px-2">
          {t.homeBeginnersGuideDescription}
        </p>

        {/* Cards Container */}
        <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row gap-6 sm:gap-8 justify-center">
          {/* Step 1 Card */}
          <div className="bg-white rounded-lg overflow-hidden w-full sm:w-1/3">
            <img
              src={step1Image}
              alt="Step 1: Planning"
              className="w-auto h-[40vh] object-cover mx-auto"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {t.homeBeginnersGuideStep1Title}
              </h3>
              <p className="text-gray-600">{t.homeBeginnersGuideStep1Description}</p>
            </div>
          </div>

          {/* Step 2 Card */}
          <div className="bg-white rounded-lg overflow-hidden w-full sm:w-1/3">
            <img
              src={step2Image}
              alt="Step 2: Getting Started"
              className="w-auto h-auto object-cover mx-auto"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {t.homeBeginnersGuideStep2Title}
              </h3>
              <p className="text-gray-600">{t.homeBeginnersGuideStep2Description}</p>
            </div>
          </div>

          {/* Step 3 Card */}
          <div className="bg-white rounded-lg overflow-hidden w-full sm:w-1/3">
            <img
              src={step3Image}
              alt="Step 3: Execution"
              className="w-auto h-[40vh] object-cover mx-auto"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {t.homeBeginnersGuideStep3Title}
              </h3>
              <p className="text-gray-600">{t.homeBeginnersGuideStep3Description}</p>
            </div>
          </div>
        </div>


      </section>
    );
  }

  const GuideBlogPosts = () => {
    const [articles, setArticles] = useState([]); // All articles
    const [isLoading, setIsLoading] = useState(true); // Loading state
    const [error, setError] = useState(null); // Error handling

    const fetchArticles = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("/api/blog");
        const data = await response.json();

        // Check if the response is valid
        if (data && Array.isArray(data.blogs)) {
          setArticles(data.blogs);
        } else {
          throw new Error("Invalid API response format");
        }
      } catch (err) {
        setError(err.message || "Failed to fetch articles");
      } finally {
        setIsLoading(false);
      }
    };

    useEffect(() => {
      fetchArticles();
    }, []);

    if (isLoading) return <p>Loading...</p>;
    if (error) return (
      <div>
        <p className="text-red-500">{error}</p>
        <button onClick={fetchArticles} className="text-blue-500">Retry</button>
      </div>
    );
    // Filter once and store the result
    const filteredArticles = articles.filter((post) =>
      post.tagItems.some((tag) => tag.toLowerCase().includes("guide"))
    );

    return (
      <section className="my-2 py-2 sm:my-4 sm:py-4">
        <h2 className="text-lg sm:text-3xl font-bold text-center mb-4">{t.homeGuideBlogTitle}</h2>
        <p className="text-lg text-gray-700 text-center mb-8 px-2">{t.homeGuideBlogDescription}</p>
        <div className="flex flex-wrap justify-center gap-4">
          {
            // If filteredArticles is not empty, render them
            filteredArticles.length > 0 ? (
              filteredArticles.map((post) => (
                <Link
                  to={`/blog/${post.id}`}
                  key={post.id}
                  className="w-80 bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <img
                    src={post.imageURL || '/default-image.jpg'} // Fallback if imageURL is missing
                    alt={post.imageALT || "Blog Post Image"}
                    className="w-full h-auto max-h-48 object-cover"
                  />
                  <div className="p-4">
                    <h2 className="text-lg font-bold">{post.title || 'Untitled Post'}</h2>
                    {post.tagItems && post.tagItems.length > 0 && (
                      <div className="mt-2">
                        {post.tagItems.map((tag, index) => (
                          <span
                            key={index}
                            className="inline-block bg-gray-200 rounded-full px-2 py-1 text-xs font-medium mr-2"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                    <p className="mt-2 text-sm line-clamp-3">{post.summary || 'No summary available'}</p>
                    <span className="text-blue-500 hover:underline">
                      {t?.blogReadMore || 'Read more'}
                    </span>
                  </div>
                </Link>
              ))
            ) : (
              <p className="text-center text-gray-500">{t?.blogNoArticles || 'No articles found'}</p>
            )
          }
        </div>
      </section>

    );
  };

  const Gallery = () => {
    const images = [
      {
        src: 'https://images.unsplash.com/photo-1589923188900-85dae523342b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Planting Plot Design 1',
      },
      {
        src: 'https://images.unsplash.com/photo-1575527820586-5f350ab37c6f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Planting Plot Design 2',
      },
      {
        src: 'https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Planting Plot Design 3',
      },
      {
        src: 'https://images.unsplash.com/photo-1529313780224-1a12b68bed16?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Planting Plot Design 4',
      }
    ];

    return (
      <section className="my-2 py-2 sm:my-6 sm:py-4">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {images.map((image, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-md">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-60 object-cover transform transition duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  const CallToAction = () => {
    return (
      <section className="py-8">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">{t.homeCallToActionTitle}</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <BottomMain to="/design" text={t.startDesigning} />
          </div>
        </div>
      </section>
    );
  };

  const AboutUsSection = () => {
    return (
      <section className="my-2 py-2 sm:my-4 sm:py-4 bg-emerald-50">
        <div className="container mx-auto px-4 text-center py-2" >
          <Link
            to="/about"
            onClick={() => window.scrollTo(0, 0)}
            className="text-4xl font-bold pb-4 mb-4 "
          >
            {t.homeAboutUsTitle}
          </Link>
          <p className="text-lg text-gray-700 mx-auto pt-4 sm:py-4  text-left sm:text-center">
            {t.homeAboutUsDescription}
          </p>
        </div>
      </section>
    );
  };

  const TestimonialSection = () => {
    const testimonials = [
      {
        quote: ' This website has completely transformed my gardening experience! The design tool is so easy to use, and the plant recommendations are spot on. ',
        author: 'Jane Doe',
      },
      {
        quote: ' I was a complete beginner, but the guides and resources on this site made gardening so accessible. I\'m now growing my own vegetables with confidence! ',
        author: 'John Smith',
      },
      {
        quote: ' I love the community aspect of this site. It\'s great to connect with other gardeners, share tips, and learn from each other. ',
        author: 'Alice Johnson',
      },
    ];

    return (
      <section className="py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
                <p className="text-gray-800 font-semibold">- {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  return (
    <div className=' bg-white'>
      <HeroSection />
      <FeatureSection />
      <DesignPlotSection />
      <BeginnersGuide />
      <GuideBlogPosts />
      <Gallery />
      <CallToAction />
      <AboutUsSection />
      <TestimonialSection />
    </div>
  );
}

export default TheHomePage;
