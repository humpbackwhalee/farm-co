import React from "react";

// Team members data
const teamMembers = [
  {
    id: 1,
    name: "John Doe",
    role: "Founder & Garden Expert",
    image: "/images/team/john-doe.jpg"
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Horticulturist",
    image: "/images/team/jane-smith.jpg"
  },
  {
    id: 3,
    name: "Mike Johnson",
    role: "Community Manager",
    image: "/images/team/mike-johnson.jpg"
  }
];

function TheAboutUsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Main Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Hero Section */}
        <section className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-raisin-black mb-4 sm:mb-6">
            About Us
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-onyx max-w-3xl mx-auto px-4">
            Welcome to our community of gardening and farming enthusiasts in Thailand
          </p>
        </section>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto space-y-12 sm:space-y-16 lg:space-y-20">
          {/* Summary Section */}
          <section className="bg-white rounded-xl shadow-sm p-6 sm:p-8 lg:p-10">
            <div className="prose prose-lg lg:prose-xl max-w-none text-onyx">
              <p className="mb-6 text-base sm:text-lg lg:text-xl">
                Welcome to our website! We are a dedicated team of gardening and farming 
                enthusiasts committed to sharing valuable knowledge and insights with 
                individuals interested in cultivating their own green spaces.
              </p>
              <p className="text-base sm:text-lg lg:text-xl">
                This platform is designed to provide practical advice, clear guidelines, 
                and resources to help beginners get started with gardening and farming.
              </p>
            </div>
          </section>

          {/* Mission Section */}
          <section className="bg-white rounded-xl shadow-sm p-6 sm:p-8 lg:p-10 space-y-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-raisin-black">
              Our Mission
            </h2>
            <div className="prose prose-lg lg:prose-xl max-w-none text-onyx">
              <p className="mb-6 text-base sm:text-lg lg:text-xl">
                Our mission is simple: to create valuable and meaningful content that 
                enriches people's lives.
              </p>
              <p className="text-base sm:text-lg lg:text-xl">
                We strive to constantly improve, innovate, and build lasting 
                connections with our audience.
              </p>
            </div>
          </section>

          {/* Team Section */}
          <section className="space-y-6 sm:space-y-8 lg:space-y-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-raisin-black text-center">
              Our Team
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
              {teamMembers.map(member => (
                <div key={member.id} 
                     className="bg-white rounded-xl shadow-sm p-6 sm:p-8 
                              hover:shadow-md transition-shadow duration-300 
                              transform hover:-translate-y-1">
                  <div className="w-24 sm:w-28 lg:w-32 h-24 sm:h-28 lg:h-32 
                                mx-auto mb-4 sm:mb-6 
                                bg-gray-200 rounded-full overflow-hidden">
                    <div className="w-full h-full flex items-center justify-center text-gray-500">
                      <span className="text-3xl sm:text-4xl lg:text-5xl">👤</span>
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-center text-raisin-black">
                    {member.name}
                  </h3>
                  <p className="text-sm sm:text-base lg:text-lg text-gray-600 text-center mt-2">
                    {member.role}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section className="bg-white rounded-xl shadow-sm p-6 sm:p-8 lg:p-10 space-y-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-raisin-black">
              Contact Us
            </h2>
            <div className="prose prose-lg lg:prose-xl max-w-none text-onyx">
              <p className="mb-6 text-base sm:text-lg lg:text-xl">
                Have any questions or want to get in touch?
              </p>
              <ul className="space-y-4 sm:space-y-6 list-none pl-0">
                <li className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                  <span className="font-medium text-base sm:text-lg lg:text-xl">Email:</span>
                  <a href="mailto:contact@ourwebsite.com" 
                     className="text-blue-600 hover:text-blue-800 transition-colors
                              text-base sm:text-lg lg:text-xl">
                    contact@ourwebsite.com
                  </a>
                </li>
                <li className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                  <span className="font-medium text-base sm:text-lg lg:text-xl">Phone:</span>
                  <a href="tel:+66123456789" 
                     className="text-blue-600 hover:text-blue-800 transition-colors
                              text-base sm:text-lg lg:text-xl">
                    +66 123-456-789
                  </a>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default TheAboutUsPage;