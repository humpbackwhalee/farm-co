import React, { useState, useEffect, useRef, useMemo, lazy } from 'react';
import { FaCalculator, FaSeedling, FaLightbulb, FaBookOpen, FaRulerCombined, FaSlidersH } from 'react-icons/fa';
import { SlScreenDesktop } from "react-icons/sl";
import { Link, useNavigate, useLocation } from 'react-router';
import { ErrorBoundary } from 'react-error-boundary';
import { useTranslation } from '../components/LanguageContext';
import { Helmet } from 'react-helmet';
import { BottomMain, BottomSecondary } from '../ui/BottonStyle';

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

// Import images
import heroImage from '../public/images/Garden_Plans_Calculator.jpg';
import designImage from '../public/images/Garden_Plans.jpg';
import step1Image from '../public/images/calculate_step_1.png';
import step2Image from '../public/images/calculate_step_2.png';
import step3Image from '../public/images/calculate_step_3.png';

import calculate_tools from '../public/images/calculate_tools.png';

function TheHomePage() {
  const t = useTranslation();

  const HeroSection = () => {
    return (
      <section
        style={{ backgroundImage: `url('${heroImage}')` }}
        className="relative h-[calc(100vh-6rem)] sm:h-[calc(100vh-5rem)] flex justify-center items-center bg-cover bg-center bg-no-repeat rounded-lg mx-4"
      >
        <div className="absolute inset-0 bg-black/20 rounded-lg"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl sm:text-6xl font-jost font-bold leading-tight mb-4 text-white">
            {t.homeHeroTitle}
          </h1>
          <p className="text-xl sm:text-2xl font-poppins text-white/90 mb-8">
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
        icon: <FaSlidersH className="h-12 w-12 mx-auto mb-4 text-blue-600" />,
        title: `${t.homeFeature1Title}`,
        description: `${t.homeFeature1Description}`,
      },
      {
        icon: <FaRulerCombined className="h-12 w-12 mx-auto mb-4 text-blue-600" />,
        title: `${t.homeFeature2Title}`,
        description: `${t.homeFeature2Description}`,
      },
      {
        icon: <SlScreenDesktop className="h-12 w-12 mx-auto mb-4 text-blue-600" />,
        title: `${t.homeFeature3Title}`,
        description: `${t.homeFeature3Description}`,
      },
    ], []);

    return (
      <section className="my-2 py-2 sm:my-4 sm:py-4">
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
      <section className="my-2 py-2 sm:my-4 sm:py-4">
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
                Plan Your Perfect Plot
              </h2>
              <p className="text-base sm:text-lg text-gray-700">
                Our user-friendly tool makes it easy to plan and visualize your ideal garden layout, whether you're an experienced gardener or a complete beginner. With this intuitive platform, you can explore various garden designs, plant arrangements, and spacing options to ensure everything fits perfectly. Simply choose your preferred layout, add your plants, and see how they’ll grow together. The tool helps you avoid overcrowding and poor spacing, making it easy to create a healthy and thriving garden. No matter your experience level, you’ll be able to design a beautiful, functional garden that reflects your unique style!
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };

  function BeginnersGuide() {
    return (
      <section className="relative my-2 py-2 sm:my-4 sm:py-4">

        <div className={`h-[50vh]`}></div>

        <h2 className=" sticky h-[50vh] top-0 sm:top-8 text-lg sm:text-3xl font-bold text-center font-serif">Your Gardening Journey Starts Here</h2>

        <p className="sticky h-[50vh] top-18 sm:top-20 text-lg text-gray-700 text-center">
          Plan your perfect garden with our easy-to-use Plot Calculator.
        </p>

        <div className={`sticky h-screen top-26 left-0 grid grid-cols-10 grid-rows-8 gap-2 p-4`}>
          <div className=' col-start-2 col-end-4 row-start-1 row-end-3 rounded'>
            <img src={step1Image} alt="Step1" className='w-full h-full object-contain' />
          </div>
        </div>

        <div className={`sticky h-screen top-0 left-0 right-0 grid grid-cols-10 grid-rows-8 gap-2 p-4`}>
          <div className=' col-start-2 col-end-4 row-start-3 row-end-8 rounded'>
            <img src={step2Image} alt="Step2" className='w-full h-full object-contain' />
          </div>
        </div>

        <div className={`sticky h-screen top-26 left-0 right-0 grid grid-cols-10 grid-rows-8 gap-2 p-4`}>
          <div className=' col-start-4 col-end-10 row-start-1 row-end-8 rounded'>
            <img src={step3Image} alt="Step3" className='w-full h-full object-contain' />
          </div>
        </div>

        <div className='h-[50vh]'></div>
      </section >
    );
  };

  // time out animation version
  // const BeginnersGuide = () => {
  //   const [activeStep, setActiveStep] = useState(0);
  //   const totalSteps = 5;

  //   useEffect(() => {
  //     const timer = setInterval(() => {
  //       setActiveStep((prev) => (prev < totalSteps - 1 ? prev + 1 : prev));
  //     }, 700);

  //     return () => clearInterval(timer);
  //   }, []);

  //   const getStepStyle = (stepNumber) => {
  //     const isActive = activeStep >= stepNumber;
  //     return `transition-all duration-1000 ease-in-out ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'
  //       }`;
  //   };

  //   return (
  //     <section className="my-2 py-2 sm:my-4 sm:py-4">
  //       <div className={`h-[50vh]`}></div>

  //       <div className={`sticky top-0 rounded ${getStepStyle(0)}`}>
  //         <h2 className="text-3xl font-bold text-center font-serif">
  //           Your Gardening Journey Starts Here
  //         </h2>
  //       </div>

  //       <div className={`sticky top-12 rounded ${getStepStyle(1)}`}>
  //         <p className="text-lg mb-8 text-gray-700 text-center">
  //           Plan your perfect garden with our easy-to-use Plot Calculator.
  //         </p>
  //       </div>

  //       <div className="h-screen relative grid grid-cols-8 grid-rows-5 gap-2 p-4">
  //         <div className={`sticky top-30 col-start-2 col-end-3 row-start-1 row-end-2 rounded ${getStepStyle(2)}`}>
  //           <img src={step1Image} alt="Step1" className='w-full h-full object-contain' />
  //         </div>


  //         <div className={`sticky top-30 col-start-2 col-end-3 row-start-1 row-end-5  p-4 rounded ${getStepStyle(3)}`}>
  //           <img src={step2Image} alt="Step2" className='w-full h-full object-contain' />
  //         </div>



  //         <div className={`sticky top-30 col-start-3 col-end-8 row-start-1 row-end-5  p-4 rounded ${getStepStyle(4)}`}>
  //           <img src={step3Image} alt="Step3" className='w-full h-full object-contain' />
  //         </div>
  //       </div>
  //       <div className='h-[120vh]'></div>



  //     </section >
  //   );
  // };

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
            <BottomMain to="/design" text={t.startDesigning} />
            {/* <Link
              to="/design"
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-6 rounded transition duration-300"
            >
              Start Designing Your Plot
            </Link> */}
            {/* <Link
              to="/introduction"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded transition duration-300"
            >
              Start Growing Your Garden
            </Link> */}
          </div>
        </div>
      </section>
    );
  };

  const AboutUsSection = () => {
    return (
      <section className="py-8 bg-emerald-50">
        <div className="container mx-auto px-4 text-center">
          <Link to="/about"
            className="text-4xl font-bold mb-4"
            onClick={() => window.scrollTo(0, 0)}
          >
            Our Story
          </Link>
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
        <main className=' bg-white'>
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
