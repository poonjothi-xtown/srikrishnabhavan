import React from "react";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";

// Dummy Map Component
const DummyMap = () => {
  return (
    <div className="w-full h-full bg-gradient-to-br from-emerald-200 to-lime-200 relative">
      <div className="absolute inset-0 opacity-20">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(0,0,0,0.1)" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="relative">
          <div className="w-16 h-16 bg-red-500 rounded-full animate-pulse flex items-center justify-center shadow-2xl">
            <FaMapMarkerAlt className="text-white text-3xl" />
          </div>
          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-red-500 opacity-30 rounded-full blur-md"></div>
        </div>
      </div>
      {/* <div className="absolute bottom-4 left-4 bg-white rounded-lg px-3 py-2 shadow-lg text-xs font-medium text-gray-700">
        Croydon South, VIC
      </div> */}
    </div>
  );
};

export default function ContactUs() {
  return (
    <section className="relative bg-gradient-to-br from-lime-50 via-white to-emerald-50 py-20 px-6 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-emerald-800 mb-4 mt-5">
            Get in Touch
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We'd love to hear from you! Reach out via any of the options below.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Side: Contact Info */}
          <div className="space-y-6">
            {[
              {
                icon: <FaMapMarkerAlt />,
                title: "Visit us",
                subtext: "Come say hello at our office HQ.",
                text: "67 Wisteria Way Croydon South VIC 3136 AU",
              },
              {
                icon: <FaEnvelope />,
                title: "Chat to us",
                subtext: "Our friendly team is here to help.",
                text: "hello@paysphere.com",
              },
              {
                icon: <FaEnvelope />,
                title: "Social Media",
                subtext: "Connect with us on WhatsApp, Instagram, or Email",
                text: (
                  <div className="flex items-center gap-4 text-xl mt-2">
                    <a
                      href="https://wa.me/your-number"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-green-600 transition-colors duration-200 hover:scale-110 transform"
                    >
                      <FaWhatsapp />
                    </a>
                    <a
                      href="https://instagram.com/your-username"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-pink-500 transition-colors duration-200 hover:scale-110 transform"
                    >
                      <FaInstagram />
                    </a>
                    <a
                      href="mailto:hello@paysphere.com"
                      className="hover:text-blue-500 transition-colors duration-200 hover:scale-110 transform"
                    >
                      <FaEnvelope />
                    </a>
                  </div>
                ),
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-5 bg-white rounded-2xl px-6 py-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex-shrink-0 text-white bg-gradient-to-br from-lime-500 to-emerald-600 p-4 rounded-xl text-xl shadow-md">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <h4 className="text-emerald-800 font-bold text-lg mb-1">
                    {item.title}
                  </h4>
                  <p className="text-gray-500 text-sm mb-2">{item.subtext}</p>
                  <div className="text-gray-800 text-sm font-medium">
                    {item.text}
                  </div>
                </div>
              </div>
            ))}

            {/* Additional CTA */}
            <div className="bg-gradient-to-br from-emerald-600 to-lime-600 rounded-2xl px-8 py-6 text-white shadow-lg mt-8">
              <h3 className="text-xl font-bold mb-2">Need immediate assistance?</h3>
              <p className="text-emerald-50 text-sm mb-4">
                Our support team is available 24/7 to help you with any questions.
              </p>
              <button className="bg-white text-emerald-700 px-6 py-2 rounded-lg font-semibold hover:bg-emerald-50 transition-colors duration-200 shadow-md">
                Contact Support
              </button>
            </div>
          </div>

          {/* Right Side: Map */}
          <div className="lg:sticky lg:top-24 w-full">
            <div className="rounded-2xl overflow-hidden shadow-2xl h-[600px] relative border-4 border-white">
              <DummyMap />
              {/* <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-sm rounded-xl px-6 py-3 shadow-xl border border-gray-200">
                <div className="text-sm font-bold text-gray-800 text-center">
                  📍 Interactive Map
                </div>
                <div className="text-xs text-gray-600 text-center mt-1">
                  Click to explore our location
                </div>
              </div> */}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}