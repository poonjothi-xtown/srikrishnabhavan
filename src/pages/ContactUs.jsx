import React from "react";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaWhatsapp,
  FaInstagram,
  FaPhoneAlt,
} from "react-icons/fa";

/* Dummy Map Component */
const DummyMap = () => {
  return (
    <div className="w-full h-full bg-gradient-to-br from-emerald-200 to-lime-200 relative">
      <div className="absolute inset-0 opacity-20">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="rgba(0,0,0,0.1)"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative">
          <div className="w-16 h-16 bg-red-500 rounded-full animate-pulse flex items-center justify-center shadow-2xl">
            <FaMapMarkerAlt className="text-white text-3xl" />
          </div>
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-8 bg-red-500 opacity-30 rounded-full blur-md" />
        </div>
      </div>
    </div>
  );
};

export default function ContactUs() {
  /* 🔁 CHANGE DUMMY MOBILE NUMBER HERE */
  const MOBILE_NUMBER = "+919876543210";

  return (
    <section className="bg-gradient-to-br from-lime-50 via-white to-emerald-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-emerald-800 mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-600 text-lg">
            We'd love to hear from you! Reach out anytime.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Left Section */}
          <div className="space-y-6">

            {/* Address */}
            <div className="flex gap-5 bg-white p-6 rounded-2xl shadow-md">
              <div className="bg-gradient-to-br from-lime-500 to-emerald-600 p-4 rounded-xl text-white">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h4 className="font-bold text-emerald-800">Visit Us</h4>
                <p className="text-sm text-gray-600 mt-1">
                  24, Kadaieswarar Garden,<br />
                  Backside of Velavan Nagar,<br />
                  Senthottam, Sivanandhapuram,<br />
                  Saravanampatti,<br />
                  Coimbatore – 641035,<br />
                  Tamil Nadu
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-5 bg-white p-6 rounded-2xl shadow-md">
              <div className="bg-gradient-to-br from-lime-500 to-emerald-600 p-4 rounded-xl text-white">
                <FaEnvelope />
              </div>
              <div>
                <h4 className="font-bold text-emerald-800">Email Us</h4>
                <a
                  href="c.madhuperumal@gmail.com"
                  className="text-emerald-700 hover:underline text-sm"
                >
                  c.madhuperumal@gmail.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-5 bg-white p-6 rounded-2xl shadow-md">
              <div className="bg-gradient-to-br from-lime-500 to-emerald-600 p-4 rounded-xl text-white">
                <FaPhoneAlt />
              </div>
              <div className="flex flex-col">
                <h4 className="font-bold text-emerald-800">Call / WhatsApp</h4>

                <a
                  href={`tel:${MOBILE_NUMBER}`}
                  className="text-emerald-700 font-semibold hover:underline"
                >
                  {MOBILE_NUMBER}
                </a>

                <a
                  href={`https://wa.me/${MOBILE_NUMBER.replace("+", "")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-green-600 text-sm hover:underline"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* Social */}
            {/* <div className="flex gap-5 bg-white p-6 rounded-2xl shadow-md">
              {/* <div className="bg-gradient-to-br from-lime-500 to-emerald-600 p-4 rounded-xl text-white">
                <FaInstagram />
              </div> */}
              {/* <div className="flex gap-4 text-xl text-gray-700">
                <a href={`https://wa.me/${MOBILE_NUMBER.replace("+", "")}`} target="_blank">
                  <FaWhatsapp className="hover:text-green-600" />
                </a>
                <a href="mailto:hello@paysphere.com">
                  <FaEnvelope className="hover:text-blue-600" />
                </a>
              </div> */}
            {/* </div> */}

          </div>

          {/* Map */}
          <div className="h-[600px] rounded-2xl overflow-hidden shadow-xl">
            <DummyMap />
          </div>

        </div>
      </div>
    </section>
  );
}
