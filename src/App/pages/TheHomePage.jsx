import React, { useState, useEffect, useRef } from 'react';
import { FaCalculator, FaSeedling, FaLightbulb, FaBookOpen, FaRulerCombined, FaSlidersH } from 'react-icons/fa';
import { SlScreenDesktop } from "react-icons/sl";
import { Link, useNavigate, useLocation } from 'react-router';


function TheHomePage() {

  const HeroSection = () => {
    const heroRef = useRef(null); // Reference to the hero section
    const textRef = useRef(null); // Reference to the text container

    useEffect(() => {
      const handleScroll = () => {
        if (heroRef.current && textRef.current) {
          const heroHeight = heroRef.current.offsetHeight; // Get hero section height
          const scrollPosition = window.scrollY; // Get current scroll position
          // Adjust this threshold as needed (60% of hero height)
          const threshold = heroHeight * 0.6;

          if (scrollPosition > threshold) {
            textRef.current.classList.add('move-to-bottom'); // Add class to move text
          } else {
            textRef.current.classList.remove('move-to-bottom'); // Remove class to keep it centered
          }
        }
      };

      window.addEventListener('scroll', handleScroll); // Listen for scroll event
      return () => window.removeEventListener('scroll', handleScroll); // Cleanup on unmount
    }, []);

    return (
      <section
        ref={heroRef}
        className="relative h-[calc(100vh-5rem)] flex justify-center items-center bg-[url('https://images.unsplash.com/photo-1506519056028-d18449e82c6f?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center rounded-xl text-white mx-2 md:mx-4 mb-8 transition-all duration-300"
        aria-label="Hero Section"
      >
        <div ref={textRef} className="container mx-auto px-4 text-center relative z-10 transition-all duration-500">
          <div className="content"> {/* Added content wrapper */}
            <h1 className="text-5xl mb-4 md:text-7xl lg:text-8xl text-shadow-lg leading-tight">
              Grow Your Dream Garden
            </h1>
            <p className="text-xl mb-8 md:text-2xl lg:text-3xl text-shadow-lg">
              Easy Planning & Expert Guidance. Plan your perfect plot, get personalized
              plant recommendations, and discover the latest gardening tech.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-2">
              <Link to="/design" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded transition duration-300 md:text-lg lg:text-xl">
                Start Designing
              </Link>
              <Link to="/introduction" className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded transition duration-300 md:text-lg lg:text-xl">
                Explore Beginner's Guide
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  };

  const FeatureSection = () => {
    const features = [
      // {
      //   icon: <FaSlidersH className="h-12 w-12 mx-auto mb-4 text-yellow-500" />,
      //   title: 'Customizable Layouts',
      //   description: 'Create unique garden designs tailored to your specific needs and preferences.',
      // },
      // {
      //   icon: <FaSeedling className="h-12 w-12 mx-auto mb-4 text-green-500" />,
      //   title: 'Extensive Plant Database',
      //   description: 'Access a comprehensive library of plants with detailed information and care tips.',
      // },
      // {
      //   icon: <FaBookOpen className="h-12 w-12 mx-auto mb-4 text-purple-500" />,
      //   title: 'Expert Gardening Guides',
      //   description: 'Access a wealth of information and resources to help you succeed in your gardening journey.',
      // },
      {
        icon: <FaSlidersH className="h-12 w-12 mx-auto mb-4 text-yellow-500" />,
        title: 'Calculate Planting Area',
        description: 'Accurately determines the plantable space in your garden by considering the total area and the border size. This helps you understand how much space you have for planting.',
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
      // Add more features here...
    ];

    return (
      <section>
        <div className="container mx-auto px-4 mb-8">
          {/* <h2 className="text-3xl font-bold mb-8 text-center">Key Features</h2> */}
          <div className="text-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-md shadow-md p-6">
                {feature.icon}
                <h3 className="text-xl  font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  const DesignPlotSection = () => {
    return (
      <section>
        <div className="container mx-auto px-4 mb-4"> {/* Removed text-center from container */}
          <div className="md:flex md:items-center md:space-x-8"> {/* Flexbox for layout */}
            <div className="h-[50vh] md:h-auto md:w-1/2 flex order-1 mb-2 md:order-2"> {/* Image column */}
              <img
                src='src/public/images/Garden_Plans.jpg' // Replace with your image path
                alt="Design Tool Screenshot"
                className="rounded-md object-cover md:pb-0" // Responsive image
              />
            </div>
            <div className="flex flex-col justify-center md:w-1/2 text-left order-2 md:order-1"> {/* Text column */}
              <h2 className="text-3xl font-bold mb-2 md:mb-4">Plan Your Perfect Plot</h2>
              <p className="text-lg mb-8 text-gray-700">
                Our user-friendly tool helps you plan and visualize your perfect garden layout, even if you're a complete beginner.
              </p>
              <Link to="/design" className="w-fit bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-6 rounded transition duration-300 md:text-lg inline-block self-center md:self-start"> {/* Added inline-block */}
                Design Your Plot
              </Link>
            </div>

          </div>
        </div>
      </section>
    );
  };

  const BeginnersGuide = () => {
    const steps = [
      {
        title: '1. Choose Your Layout',
        excerpt: 'Select a planting pattern: Square, Triangular, or Rectangular. Each layout affects plant spacing and density.',
        imgage: 'src/public/images/draw-garden.jpg',
      },
      {
        title: '2. Enter Your Garden Details',
        excerpt: 'Input your garden dimensions: width, height, and border width. Then, specify plant diameter and spacing.',
        imgage: 'src/public/images/draw-garden.jpg',
      },
      {
        title: '3. Get Instant Results',
        excerpt: 'See real-time calculations, including total plant count and spacing impact. Adjust settings to refine your layout.',
        imgage: 'src/public/images/draw-garden.jpg',
      },
    ];

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
                  src={step.imgage}
                  alt={step.title}
                  className="mx-auto mb-4 rounded-lg shadow-md max-w-full h-auto" // Responsive image
                />
                <h3 className="text-xl font-semibold mb-2 font-serif">{step.title}</h3>
                <p className="text-gray-700 mb-4 flex-grow">{step.excerpt}</p>
              </div>
            ))}
          </div>
          {/* <div className="text-center mt-8">
            <Link
              to="/plot-calculator"
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-6 rounded transition duration-300 md:text-lg"
            >
              Try the Plot Calculator
            </Link>
          </div> */}
        </div>
      </section>
    );
  };

  const WhatWeOffer = () => {
    const sections = [
      {
        title: 'Adaptability',
        image: '/path/to/adaptability-image.jpg', // Replace with your image path
        description:
          'What if our homes could easily evolve with us over time? An extra module that attaches directly onto your home could become a personal greenhouse, studio or workshop.',
      },
      {
        title: 'Self-Sustainability',
        image: '/path/to/self-sustainability-image.jpg', // Replace with your image path
        description:
          'You are the master of your own domain. If going off-grid and growing some vegetables is your thing, then we want to help.',
      },
      {
        title: 'Wellness',
        image: '/path/to/wellness-image.jpg', // Replace with your image path
        description:
          'Allowing yourself regular escapes into the wilderness may be the real key to a good routine. Your body, mind and soul will thank you.',
      },
      {
        title: 'Community',
        image: '/path/to/community-image.jpg', // Replace with your image path
        description:
          'Base is building a community centered on simple, sustainable living. Our values as well as yours are what drive it forward.',
      },
    ];

    return (
      <section className="py-16 bg-gray-100"> {/* Adjust padding and background as needed */}
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8"> {/* Responsive grid */}
            {sections.map((section, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6"> {/* Card styling */}
                <img
                  src={section.image}
                  alt={section.title}
                  className="mx-auto mb-4 max-w-full h-auto rounded-lg"
                />
                <h3 className="text-xl font-semibold mb-2">{section.title}</h3>
                <p className="text-gray-700">{section.description}</p>
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
        link: "/blog/smart-irrigation", // Replace with actual link
      },
      {
        title: "Vertical Farming: Growing Up, Not Out",
        summary:
          "Explore the innovative world of vertical farming, where crops are grown in vertical layers to maximize space and efficiency.",
        link: "/blog/vertical-farming", // Replace with actual link
      },
      {
        title: "AI-Powered Plant Identification Apps: Know Your Plants Instantly",
        summary:
          "Learn about the latest AI-powered apps that can identify plants from a photo, providing valuable information and care tips.",
        link: "/blog/plant-identification-apps", // Replace with actual link
      },
      // Add more blog posts here...
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
                className="bg-white rounded-lg shadow-md p-6 transform transition duration-300 hover:scale-105" // Added hover effect
              >
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-700 mb-4 line-clamp-3">
                  {/* Line clamp for summary */}
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
        src: 'https://images.unsplash.com/photo-1589923188900-85dae523342b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Replace with your image paths
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
      // Add more images here...
    ];

    return (
      <section className="py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-center">Inspiration Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {images.map((image, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-md"> {/* Added overflow-hidden for image clipping */}
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-60 object-cover transform transition duration-300 hover:scale-105" // Added hover effect
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
          <div className="flex flex-col sm:flex-row justify-center gap-4"> {/* Responsive button arrangement */}
            <Link
              to="/design"
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-6 rounded transition duration-300"
            >
              Start Designing Your Plot
            </Link>
            <Link
              to="/introduction" // Replace with your community page route
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
          {/* Optional: Add team member information here */}
          {/* 
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
        <div className="text-center">
          <img src="/path/to/team-member-1.jpg" alt="Team Member 1" className="rounded-full h-24 w-24 mx-auto mb-4" />
          <h3 className="text-lg font-semibold">John Doe</h3>
          <p className="text-gray-700">Lead Gardener</p>
        </div>
        </div>
        */}
        </div>
      </section>
    );
  };

  const TestimonialSection = () => {
    const testimonials = [
      {
        quote: ' This website has completely transformed my gardening experience! The design tool is so easy to use, and the plant recommendations are spot on. ',
        author: 'Jane Doe',
        // optional:
        // image: '/path/to/jane-doe.jpg',
      },
      {
        quote: ' I was a complete beginner, but the guides and resources on this site made gardening so accessible. I\'m now growing my own vegetables with confidence! ',
        author: 'John Smith',
        // optional:
        // image: '/path/to/john-smith.jpg',
      },
      {
        quote: ' I love the community aspect of this site. It\'s great to connect with other gardeners, share tips, and learn from each other. ',
        author: 'Alice Johnson',
        // optional:
        // image: '/path/to/john-smith.jpg',
      },
      // Add more testimonials here...
    ];

    return (
      <section className="py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                {/* Optional: Add image here */}
                {/* <img src={testimonial.image} alt={testimonial.author} className="rounded-full h-16 w-16 mx-auto mb-4" /> */}
                <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
                <p className="text-gray-800 font-semibold">- {testimonial.author}</p>
                {/* Optional: Add social media links here */}
                {/* <div className="mt-4">
                  <a href="#" className="text-blue-500 hover:text-blue-700 mr-2">
                    <i className="fab fa-facebook"></i>
                  </a>
                  <a href="#" className="text-blue-400 hover:text-blue-600 mr-2">
                    <i className="fab fa-twitter"></i>
                  </a>
                </div> */}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  return (
    <div className="bg-cream min-h-screen flex flex-col">
      <HeroSection />
      <FeatureSection />
      <DesignPlotSection />
      <BeginnersGuide />
      <LatestBlogPosts />
      <Gallery />
      <CallToAction />
      <AboutUsSection />
      <TestimonialSection />

      {/* <WhatWeOffer /> */}
      {/* 
      / HeroSection 
      / FeatureSection 
      / DesignSection 
      PlantRecommendationsSection
      / GuideSection 
      ProductReviewsSection
      / BlogSection (Latest from the blog) 
      GallerySection
      CTASection
      / AboutUsSection
      / TestimonialSection
      */}
    </div>
  );
}

export default TheHomePage;
