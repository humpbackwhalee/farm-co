import React, { useState, useEffect, useRef, useMemo, lazy } from 'react';
import { FaCalculator, FaSeedling, FaLightbulb, FaBookOpen, FaRulerCombined, FaSlidersH } from 'react-icons/fa';
import { SlScreenDesktop } from "react-icons/sl";
import { Link, useNavigate, useLocation } from 'react-router';
import { Helmet } from 'react-helmet';
import { ErrorBoundary } from 'react-error-boundary';

// Add ErrorComponent definition
const ErrorComponent = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-red-600 mb-4">
          Oops! Something went wrong
        </h2>
        <p className="text-gray-600 mb-4">
          We're sorry, but there was an error loading this page.
        </p>
        <button 
          onClick={() => window.location.reload()} 
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
        >
          Refresh Page
        </button>
      </div>
    </div>
  );
};

import heroImage from '../public/images/Garden_Plans_Calculator.jpg';
import designImage from '../public/images/Garden_Plans.jpg';
import step1Image from '../public/images/Garden_Plans_Calculator_Step_1.jpg';
import step2Image from '../public/images/Garden_Plans_Calculator_Step_2.jpg';
import step3Image from '../public/images/Garden_Plans_Calculator_Step_1.jpg';

function TheHomePage() {
  const HeroSection = () => {
    return (
      <section
        style={{ backgroundImage: `url('${heroImage}')` }}
        className="relative h-[calc(100vh-4rem)] flex justify-center items-center bg-cover bg-center bg-no-repeat rounded-lg mx-4"
      >
        <div className="absolute inset-0 bg-black/40 rounded-lg"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
            Grow Your Dream Garden
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-8">
            Easy Planning & Expert Guidance
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <Link 
              to="/design" 
              className="px-6 py-2 sm:py-3 text-sm sm:text-base bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors"
            >
              Start Designing
            </Link>
            <Link 
              to="/introduction" 
              className="px-6 py-2 sm:py-3 text-sm sm:text-base bg-white/20 hover:bg-white/30 text-white rounded-lg transition-colors"
            >
              Explore Guide
            </Link>
          </div>
        </div>
      </section>
    );
  };

  const FeatureSection = () => {
    const features = useMemo(() => [
      {
        icon: <FaSlidersH className="h-12 w-12 mx-auto mb-4 text-blue-500" />,
        title: 'Calculate Planting Area',
        description: 'Accurately determines the plantable space in your garden.',
      },
      {
        icon: <FaRulerCombined className="h-12 w-12 mx-auto mb-4 text-blue-500" />,
        title: 'Optimize Plant Spacing',
        description: 'Helps you determine the optimal spacing between plants based on their size and your chosen layout. Proper spacing ensures healthy growth and prevents overcrowding.',
      },
      {
        icon: <SlScreenDesktop className="h-12 w-12 mx-auto mb-4 text-blue-500" />,
        title: ' Visualize Your Garden',
        description: 'Provides a visual representation of your garden layout, showing the placement of plants based on your chosen settings. This allows you to see how your garden will look and make adjustments as needed.',
      },
    ], []);

    return (
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-md p-6 sm:p-8 transition-transform hover:scale-105"
              >
                <div className="icon-wrapper mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">
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
      <section className="py-8 sm:py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:space-x-8 lg:space-x-12">
            <div className="w-full md:w-1/2 mb-6 md:mb-0">
              <img
                src={designImage}
                alt="Design Tool Screenshot"
                className="rounded-lg shadow-lg w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                Plan Your Perfect Plot
              </h2>
              <p className="text-base sm:text-lg text-gray-700 mb-6">
                Our user-friendly tool helps you plan and visualize your perfect garden layout, even if you're a complete beginner.
              </p>
              <Link 
                to="/design" 
                className="inline-block px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors text-sm sm:text-base"
              >
                Design Your Plot
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  };

  const BeginnersGuide = () => {
    const steps = useMemo(() => [
      {
        title: '1. Choose Your Layout',
        excerpt: 'Select a planting pattern...',
        image: `${step1Image}`,
        loading: "lazy"
      },
      {
        title: '2. Enter Your Garden Details',
        excerpt: 'Input your garden dimensions: width, height, and border width. Then, specify plant diameter and spacing.',
        image: `${step2Image}`,
        loading: "lazy"
      },
      {
        title: '3. Get Instant Results',
        excerpt: 'See real-time calculations, including total plant count and spacing impact. Adjust settings to refine your layout.',
        image: `${step3Image}`,
        loading: "lazy"
      },
    ], []);

    return (
      <section className="py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center font-serif">Your Gardening Journey Starts Here</h2>
          <p className="text-lg mb-8 text-gray-700 text-center">
            Plan your perfect garden with our easy-to-use Plot Calculator.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 flex flex-col h-full">
                <img
                  src={step.image}
                  alt={step.title}
                  className="mx-auto mb-4 rounded-lg shadow-md max-w-full h-auto"
                  loading={step.loading}
                />
                <h3 className="text-xl font-semibold mb-2 font-serif">{step.title}</h3>
                <p className="text-gray-700 mb-4 flex-grow">{step.excerpt}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  const LatestBlogPosts = () => {
    const blogPosts = [
      {
        title: "Smart Irrigation: Saving Water and Boosting Yields",
        summary:
          "Discover how smart irrigation systems use sensors and automation to optimize water usage for healthier plants and a more sustainable garden.",
        link: "/blog/smart-irrigation",
      },
      {
        title: "Vertical Farming: Growing Up, Not Out",
        summary:
          "Explore the innovative world of vertical farming, where crops are grown in vertical layers to maximize space and efficiency.",
        link: "/blog/vertical-farming",
      },
      {
        title: "AI-Powered Plant Identification Apps: Know Your Plants Instantly",
        summary:
          "Learn about the latest AI-powered apps that can identify plants from a photo, providing valuable information and care tips.",
        link: "/blog/plant-identification-apps",
      },
    ];

    return (
      <section className="py-8 bg-emerald-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center">
            Stay Up-to-Date on Gardening Tech
          </h2>
          <p className="text-lg mb-8 text-gray-700 text-center">
            Learn about the latest innovations in agriculture and how they can help
            you grow smarter.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 transform transition duration-300 hover:scale-105"
              >
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-700 mb-4 line-clamp-3">
                  {post.summary}
                </p>
                <Link
                  to={post.link}
                  className="text-emerald-600 hover:text-emerald-800 transition duration-300"
                >
                  Read More
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/blog"
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-6 rounded transition duration-300 md:text-lg"
            >
              Read the Blog
            </Link>
          </div>
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
      <section className="py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center">Inspiration Gallery</h2>
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
          <h2 className="text-3xl font-bold mb-4">Ready to Get Your Perfect Garden?</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/design"
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-6 rounded transition duration-300"
            >
              Start Designing Your Plot
            </Link>
            <Link
              to="/introduction"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded transition duration-300"
            >
              Start Growing Your Garden
            </Link>
          </div>
        </div>
      </section>
    );
  };

  const AboutUsSection = () => {
    return (
      <section className="py-8 bg-emerald-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Our Story</h2>
          <p className="text-lg text-gray-700 mx-auto">
            We're a team of passionate gardeners and tech enthusiasts who believe that everyone has the potential to grow their own food and create beautiful green spaces. Our mission is to empower both novice and experienced gardeners by providing the tools, resources, and inspiration needed to thrive in their gardening journey.
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
    <>
      <Helmet>
        <title>Garden Planner - Design Your Dream Garden</title>
        <meta name="description" content="Plan your perfect garden with our easy-to-use tools" />
      </Helmet>
      <ErrorBoundary FallbackComponent={ErrorComponent}>
        <main className="min-h-screen bg-white">
          <HeroSection />
          <FeatureSection />
          <DesignPlotSection />
          <BeginnersGuide />
          <LatestBlogPosts />
          <Gallery />
          <CallToAction />
          <AboutUsSection />
          <TestimonialSection />
        </main>
      </ErrorBoundary>
    </>
  );
}

export default TheHomePage;
