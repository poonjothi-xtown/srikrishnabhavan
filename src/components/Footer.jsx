// src/components/Footer.jsx
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import logo from "../assets/logo2.png";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-emerald-600 to-lime-600 text-white">
      <div className="px-4 sm:px-8 md:px-16 py-4 sm:py-6">

        {/* Top Section - Three Column Layout */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-6 md:gap-30">

          {/* Left: Heading + Socials */}
          <div className="flex flex-col items-start text-left flex-1">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
              SRI KRISHNA BHAVAN
            </h1>

            <p className="mt-2 text-xs sm:text-sm text-yellow-100 max-w-xs leading-relaxed">
              Experience the joy of flavors with Sri Krishna Bhavan — a place where every dish tells a story.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-3 mt-2 sm:mt-3">
              <a href="#" aria-label="Facebook">
                <FaFacebook className="text-white text-xl sm:text-2xl hover:text-gray-300 hover:scale-110 transition-transform duration-300" />
              </a>
              <a href="#" aria-label="Instagram">
                <FaInstagram className="text-white text-xl sm:text-2xl hover:text-gray-300 hover:scale-110 transition-transform duration-300" />
              </a>
              <a href="#" aria-label="Twitter">
                <FaTwitter className="text-white text-xl sm:text-2xl hover:text-gray-300 hover:scale-110 transition-transform duration-300" />
              </a>
            </div>
          </div>

          {/* Center: Logo + Slogan */}
          <div className="flex flex-col items-center flex-shrink-0">
            <img
              src={logo}
              alt="Sri Krishna Bhavan Logo"
              className="w-20 sm:w-24 lg:w-28 rounded-full"
            />
            <p className="text-xs sm:text-sm italic text-yellow-100 mt-2 text-center">
              "BLESSED FLAVOURS OF KRISHA'S KITCHEN"
            </p>
          </div>

          {/* Right: Contact Info */}
          <div className="flex flex-col items-start text-left flex-1">
            <h2 className="font-semibold text-lg mt-2 mb-2 text-white border-b-2 border-yellow-300 inline-block">
              Contact Us
            </h2>
            <ul className="space-y-1.5 text-sm sm:text-base text-yellow-100">
              <li className="flex items-center space-x-2">
                <FaPhoneAlt className="text-white text-base" />
                <span>+91 9876543221</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaEnvelope className="text-white text-base" />
                <span>support@krishnabhavan.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaMapMarkerAlt className="text-white text-base" />
                <span>123 Flavor Street, Food City</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-white/30 mt-4 pt-2 text-center text-xs sm:text-sm text-yellow-100">
          © {new Date().getFullYear()} Sri Krishna Bhavan. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}