import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import bannerImage from "../assets/welcomebanner2.png";
import rice from "../assets/rice.mp4";
import aloo from "../assets/aloo.mp4";
import maidadough from "../assets/maida-dough.mp4";
import fry from "../assets/fry.mp4";
import sweet from "../assets/sweet.mp4";
import masalas from "../assets/masalas.mp4";
import { FaUtensils, FaMapMarkerAlt, FaPhoneAlt, FaClock } from "react-icons/fa";
import DummyMap from "../components/DummyMap";

export default function Welcome() {
  const navigate = useNavigate();
  const videos = [rice, aloo, maidadough, fry, sweet, masalas];
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const scrollRef = useRef(null);

  // Scroll animation observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Auto scroll videos
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollPos = 0;
    let direction = 1;
    const speed = 0.5;

    const interval = setInterval(() => {
      if (!scrollContainer || isHovering) return;

      scrollPos += speed * direction;
      const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;

      if (scrollPos >= maxScroll) direction = -1;
      else if (scrollPos <= 0) direction = 1;

      scrollContainer.scrollLeft = scrollPos;
    }, 30);

    return () => clearInterval(interval);
  }, [isHovering]);

  return (
    <div className="w-full bg-white overflow-x-hidden overflow-y-scroll scrollbar-hide pt-[100px]">
      <style>{`
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInDown { animation: fadeInDown 1s ease-out; }
        .animate-fadeInUp { animation: fadeInUp 1s ease-out; }
        .gradient-text-animated {
          background: linear-gradient(90deg, #84cc16, #65a30d, #84cc16);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradient 3s linear infinite;
        }
        @keyframes gradient {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* ---------- Banner Section ---------- */}
      <section className="relative w-full h-[78vh] flex flex-col justify-center items-center text-center overflow-hidden mb-16">
        <img
          src={bannerImage}
          alt="Tasty Tales Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-white px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 tracking-wide animate-fadeInDown flex items-center justify-center gap-3">
            <FaUtensils className="text-yellow-400" />
            Sri Krishna Bhavan
          </h1>
          <p className="text-lg md:text-xl mb-6 font-medium animate-fadeInUp">
            Every Bite Tells a Story
          </p>
          <button
            onClick={() => navigate("/menu")}
            className="px-8 py-3 text-lg bg-lime-700 text-white rounded-full shadow-lg hover:scale-105 transition-transform duration-300 animate-fadeInUp"
          >
            View Menu
          </button>
        </div>
      </section>

      {/* ---------- Welcome Section ---------- */}
     <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl text-center mb-10 leading-relaxed sm:leading-snug font-serif italic text-lime-700 flex items-center justify-center gap-3 font-normal">
  Welcome to Our Kitchen <FaUtensils className="text-lime-700" />
</h2>


      <section className="relative  px-6 md:px-20 text-center overflow-hidden">
        <div className="animate-on-scroll visible">
          <p className="max-w-3xl mx-auto text-xl md:text-2xl text-black leading-relaxed font-medium mb-10">
            "At Sri Krishna Bhavan, every dish tells a story! From sizzling street-food favorites to hearty traditional meals, we bring flavors to life."
          </p>

          <div className="flex flex-wrap justify-center gap-8 mt-6">
            {[
              // { num: "500+", label: "Happy Customers", color: "text-yellow-400" },
              // { num: "50+", label: "Delicious Dishes", color: "text-fuchsia-400" },
              // { num: "5+", label: "Years Experience", color: "text-purple-400" },
            ].map((item, i) => (
              <div key={i} className="text-center group cursor-pointer">
                <div
                  className={`text-4xl font-bold ${item.color} group-hover:text-lime-400 transition-colors duration-300`}
                >
                  {item.num}
                </div>
                <div className="text-lime-800 text-sm">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Video Gallery ---------- */}
     <section className="py-16 px-6 md:px-20 relative">
  <div className="text-center mb-12 animate-on-scroll">
    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl mb-4 font-serif italic text-lime-700 flex items-center justify-center gap-3 font-normal">
      Watch Our Cooking Videos <FaUtensils className="text-yellow-500" />
    </h2>
    <p className="text-base sm:text-lg text-gray-800 max-w-2xl mx-auto">
      Learn the secrets behind our delicious recipes with our step-by-step cooking tutorials
    </p>
  </div>

        <div
          ref={scrollRef}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          className="flex space-x-6 pb-4 overflow-x-scroll scrollbar-hide scroll-smooth"
        >
          {videos.map((video, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-80 transition-all duration-[600ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
              style={{
                animationDelay: `${idx * 0.2}s`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(50px)",
              }}
            >
              <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <video
                  src={video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-[450px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>
      </section>

      </div>
  );
}
