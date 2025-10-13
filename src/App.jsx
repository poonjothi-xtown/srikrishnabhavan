// App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Correct page imports
import Welcome from "./pages/Welcome";
import AboutUs from "./pages/AboutUs";
import ContactUs from './pages/ContactUs'; 
import Menu from "./pages/Menu";
import OrderNow from "./pages/OrderNow";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/order-now" element={<OrderNow />} />
          <Route path="/contactus" element={<ContactUs />} /> 
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
