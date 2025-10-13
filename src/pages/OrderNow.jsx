import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { FiAlertCircle } from "react-icons/fi";
import orderImg from "../assets/ordernow.jpg";

const OrderNow = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    emailAddress: "",
    mobileNumber: "",
    eventDate: "",
    eventName: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const formRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.emailAddress.trim()) newErrors.emailAddress = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.emailAddress)) newErrors.emailAddress = "Invalid email format";
    if (!formData.mobileNumber.trim()) newErrors.mobileNumber = "Mobile number is required";
    if (!formData.eventDate.trim()) newErrors.eventDate = "Event date is required";
    if (!formData.eventName.trim()) newErrors.eventName = "Event name/type is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const emailParams = {
      fullName: formData.fullName,
      emailAddress: formData.emailAddress,
      mobileNumber: formData.mobileNumber,
      eventDate: formData.eventDate,
      eventName: formData.eventName,
    };

    // Send email to Admin
    emailjs.send("service_34e2hjj", "template_admin", emailParams, "LnXrETlkHrE3YNXHV")
      .then(() => {
        // Send email to Applicant
        emailjs.send("service_34e2hjj", "template_applicant", emailParams, "LnXrETlkHrE3YNXHV")
          .then(() => {
            setSuccessMessage(
              `🎉 Thank you ${formData.fullName}! Your event order has been received. We'll contact you shortly to confirm.`
            );
            setFormData({
              fullName: "",
              emailAddress: "",
              mobileNumber: "",
              eventDate: "",
              eventName: "",
            });
            setTimeout(() => setSuccessMessage(""), 7000);
          }, () => {
            setSuccessMessage("Order received, but failed to send confirmation email.");
          });
      }, () => {
        setSuccessMessage("Failed to send order. Please try again later.");
      });
  };

  const inputClass =
    "w-full px-3 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-lime-400 shadow-md transition-all duration-300 text-sm";
  const errorClass = "border-red-500 bg-red-50";

  return (
    <section className="max-w-7xl mx-auto px-6 py-12 mt-20 font-sans">
      <div className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif italic text-lime-700">
          Order Delicious Meals for Your Event
        </h1>
        <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
          Planning an event? Fill out the form below and let us provide delicious vegetarian meals tailored for your <span className="text-lime-700 font-semibold">special occasion</span>.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-start justify-center gap-10 md:gap-20 mt-6">
        <div className="md:w-5/12 w-full flex flex-col items-center">
          <img
            src={orderImg}
            alt="Order Now"
            className="w-full h-auto max-h-[410px] object-cover rounded-3xl shadow-2xl border-2 border-lime-600 transition-transform duration-500 hover:scale-105"
          />
        </div>

        <div
          ref={formRef}
           className="md:w-5/12 w-full bg-white shadow-xl rounded-3xl p-6 border-2
            border-lime-700 hover:shadow-2xl transition-shadow duration-300 min-h-[410px] overflow-y-auto"
        >
         <h2 className="text-2xl sm:text-3xl font-serif italic text-lime-700 mb-4 text-center">
     Order Form
  </h2>


          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="flex flex-col md:flex-row gap-3">
              <div className="flex-1">
                <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name *</label>
                <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} className={`${inputClass} ${errors.fullName ? errorClass : "border-gray-300 bg-white"}`} />
                {errors.fullName && <p className="text-red-600 text-xs mt-1 flex items-center gap-1"><FiAlertCircle /> {errors.fullName}</p>}
              </div>
              <div className="flex-1">
                <label className="block text-sm font-semibold text-gray-700 mb-1">Email Address *</label>
                <input type="email" name="emailAddress" value={formData.emailAddress} onChange={handleChange} className={`${inputClass} ${errors.emailAddress ? errorClass : "border-gray-300 bg-white"}`} />
                {errors.emailAddress && <p className="text-red-600 text-xs mt-1 flex items-center gap-1"><FiAlertCircle /> {errors.emailAddress}</p>}
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-3">
              <div className="flex-1">
                <label className="block text-sm font-semibold text-gray-700 mb-1">Mobile Number *</label>
                <input type="tel" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} className={`${inputClass} ${errors.mobileNumber ? errorClass : "border-gray-300 bg-white"}`} />
                {errors.mobileNumber && <p className="text-red-600 text-xs mt-1 flex items-center gap-1"><FiAlertCircle /> {errors.mobileNumber}</p>}
              </div>
              <div className="flex-1">
                <label className="block text-sm font-semibold text-gray-700 mb-1">Event Date *</label>
                <input type="date" name="eventDate" value={formData.eventDate} onChange={handleChange} className={`${inputClass} ${errors.eventDate ? errorClass : "border-gray-300 bg-white"}`} />
                {errors.eventDate && <p className="text-red-600 text-xs mt-1 flex items-center gap-1"><FiAlertCircle /> {errors.eventDate}</p>}
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Event Name / Type *</label>
              <input type="text" name="eventName" value={formData.eventName} onChange={handleChange} className={`${inputClass} ${errors.eventName ? errorClass : "border-gray-300 bg-white"}`} placeholder="e.g., Birthday Party, Wedding, Corporate Lunch" />
              {errors.eventName && <p className="text-red-600 text-xs mt-1 flex items-center gap-1"><FiAlertCircle /> {errors.eventName}</p>}
            </div>

            <div className="flex justify-center mt-10 mb-4">
  <button
    type="submit"
    className="bg-gradient-to-r from-lime-500 via-lime-600 to-lime-700 text-white py-2 px-6 rounded-2xl hover:scale-105 hover:shadow-md shadow-md transition-all duration-300 font-semibold text-base"
  >
    Place Order
  </button>
</div>


            {successMessage && <p className="mt-3 text-center text-green-600 font-semibold text-sm animate-fadeIn">{successMessage}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default OrderNow;
