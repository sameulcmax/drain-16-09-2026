"use client";

import React, { useState, useEffect } from "react";

// 4 Background Images
const backgroundSlides = [
  "/images/3.png",
  "/images/2.png",
  "/images/4.png",
  "/images/1.png",
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Form State (Desktop only)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    zipCode: "",
    typeOfWork: "",
    service: "",
    details: "",
  });

  // Cycle through 4 background images every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % backgroundSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + backgroundSlides.length) % backgroundSlides.length);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <section className="relative min-h-[420px] sm:min-h-[480px] lg:min-h-[720px] w-full overflow-hidden py-10 sm:py-14 lg:py-20 flex items-center">
      
      {/* ================= 4-IMAGE BACKGROUND SLIDER ================= */}
      <div className="absolute inset-0 z-0">
        {backgroundSlides.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100 scale-105" : "opacity-0 scale-100"
            }`}
            style={{
              backgroundImage: `url(${image})`,
            }}
          />
        ))}

        {/* Ultra-low 5% tint overlay */}
        <div className="absolute inset-0 bg-black/5" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
          
          {/* ================= LEFT COLUMN: HERO HEADLINE & CTA ================= */}
          <div className="lg:col-span-7 flex flex-col items-start text-white space-y-3 sm:space-y-4 lg:space-y-5">
            
            {/* Round Icon Badge */}
            <div className="flex h-11 w-11 sm:h-14 sm:w-14 lg:h-16 lg:w-16 items-center justify-center rounded-full bg-[#014485] border-2 border-white shadow-xl">
              <svg
                className="h-6 w-6 sm:h-8 sm:w-8 lg:h-9 lg:w-9 text-white stroke-current fill-none stroke-2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                <path d="M4 4h4v4H4z" />
              </svg>
            </div>

            {/* Headline */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
              The Drain &amp; Sewer <br className="hidden sm:inline" />
              Experts That Put You First
            </h1>

            {/* Discount Sub-headline */}
            <p className="text-xs sm:text-base lg:text-xl font-medium text-white max-w-xl leading-relaxed drop-shadow-[0_3px_8px_rgba(0,0,0,0.9)]">
              10% Discount For Veterans, Law Enforcement, First Responders, &amp; Seniors
            </p>

            {/* Emergency CTA Button */}
            <div className="pt-1 sm:pt-2">
              <a
                href="tel:2018819622"
                className="group relative inline-flex items-center space-x-2 sm:space-x-3 px-4 py-2.5 sm:px-6 sm:py-3.5 rounded-xl text-white font-bold text-xs sm:text-base tracking-wide shadow-2xl transition-all duration-200 hover:scale-105 active:scale-95"
                style={{
                  background: "linear-gradient(180deg, #d33230 0%, #9e1b19 100%)",
                  border: "1px solid rgba(255, 255, 255, 0.4)",
                  boxShadow: "0 8px 22px rgba(0, 0, 0, 0.6)",
                }}
              >
                <div className="flex h-5 w-5 sm:h-7 sm:w-7 items-center justify-center rounded-full bg-white/20">
                  <svg
                    className="h-3.5 w-3.5 sm:h-4 sm:w-4 fill-none stroke-white stroke-2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <span>Call For 24/7 Emergency Service</span>
              </a>
            </div>

          </div>

          {/* ================= RIGHT COLUMN: ESTIMATE FORM (DESKTOP ONLY) ================= */}
          <div className="hidden lg:block lg:col-span-5 w-full">
            <div className="relative rounded-lg bg-white shadow-2xl overflow-hidden border-t-4 border-[#c02f2d]">
              
              {/* Form Header */}
              <div className="px-6 pt-5 pb-3 text-center border-b border-gray-100">
                <h2 className="text-2xl font-bold text-[#c02f2d]">
                  Book Now
                </h2>
              </div>

              {/* Form Body */}
              <form onSubmit={handleSubmit} className="p-6 space-y-3.5">
                
                {/* Names */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[12px] font-semibold text-gray-700 mb-1">
                      First Name <span className="text-[#c02f2d]">*</span>
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full h-9 rounded bg-[#e8ecef] px-3 text-xs text-gray-900 focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#014485] transition"
                    />
                  </div>

                  <div>
                    <label className="block text-[12px] font-semibold text-gray-700 mb-1">
                      Last Name <span className="text-[#c02f2d]">*</span>
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full h-9 rounded bg-[#e8ecef] px-3 text-xs text-gray-900 focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#014485] transition"
                    />
                  </div>
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[12px] font-semibold text-gray-700 mb-1">
                      Email <span className="text-[#c02f2d]">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full h-9 rounded bg-[#e8ecef] px-3 text-xs text-gray-900 focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#014485] transition"
                    />
                  </div>

                  <div>
                    <label className="block text-[12px] font-semibold text-gray-700 mb-1">
                      Phone <span className="text-[#c02f2d]">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full h-9 rounded bg-[#e8ecef] px-3 text-xs text-gray-900 focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#014485] transition"
                    />
                  </div>
                </div>

                {/* Zip & Work Type */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[12px] font-semibold text-gray-700 mb-1">
                      Zip Code <span className="text-[#c02f2d]">*</span>
                    </label>
                    <input
                      type="text"
                      name="zipCode"
                      required
                      value={formData.zipCode}
                      onChange={handleChange}
                      className="w-full h-9 rounded bg-[#e8ecef] px-3 text-xs text-gray-900 focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#014485] transition"
                    />
                  </div>

                  <div>
                    <label className="block text-[12px] font-semibold text-gray-700 mb-1">
                      Type of Work <span className="text-[#c02f2d]">*</span>
                    </label>
                    <select
                      name="typeOfWork"
                      required
                      value={formData.typeOfWork}
                      onChange={handleChange}
                      className="w-full h-9 rounded bg-[#e8ecef] px-2 text-xs text-gray-700 focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#014485] transition"
                    >
                      <option value="">Select Type</option>
                      <option value="Residential">Residential</option>
                      <option value="Commercial">Commercial</option>
                      <option value="Emergency">Emergency</option>
                    </select>
                  </div>
                </div>

                {/* Service Selection */}
                <div>
                  <label className="block text-[12px] font-semibold text-gray-700 mb-1">
                    Service <span className="text-[#c02f2d]">*</span>
                  </label>
                  <select
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full h-9 rounded bg-[#e8ecef] px-2 text-xs text-gray-700 focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#014485] transition"
                  >
                    <option value="">Select Service</option>
                    <option value="Drain Cleaning">Drain Cleaning</option>
                    <option value="Drain Repairs">Drain Repairs</option>
                    <option value="Sewer Repair & Cleaning">Sewer Repair & Cleaning</option>
                    <option value="Faucet & Leak Repairs">Faucet & Leak Repairs</option>
                  </select>
                </div>

                {/* Details */}
                <div>
                  <label className="block text-[12px] font-semibold text-gray-700 mb-1">
                    Please Leave Details:
                  </label>
                  <textarea
                    rows={2}
                    name="details"
                    value={formData.details}
                    onChange={handleChange}
                    className="w-full rounded bg-[#e8ecef] p-2.5 text-xs text-gray-900 focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#014485] transition resize-none"
                  />
                </div>

                {/* reCAPTCHA */}
                <div className="flex items-center justify-between border border-gray-300 rounded bg-[#f9f9f9] p-2.5 max-w-[260px]">
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      required
                      className="h-5 w-5 rounded border-gray-300 text-[#014485] focus:ring-0"
                    />
                    <span className="text-xs text-gray-700 font-medium select-none">
                      I&apos;m not a robot
                    </span>
                  </label>
                  <div className="flex flex-col items-center pl-2">
                    <svg className="h-5 w-5 text-[#4285f4]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 14.5h-2v-2h2zm0-4h-2V7h2z" />
                    </svg>
                    <span className="text-[8px] text-gray-400 font-bold tracking-tighter">reCAPTCHA</span>
                  </div>
                </div>

                {/* Submit */}
                <div className="pt-2 flex justify-center">
                  <button
                    type="submit"
                    className="w-48 py-2.5 rounded-full text-white font-bold text-sm tracking-wide shadow-md transition-all duration-200 hover:opacity-90 active:scale-95 cursor-pointer"
                    style={{
                      background: "linear-gradient(180deg, #c02f2d 0%, #8a1d1b 100%)",
                    }}
                  >
                    Submit
                  </button>
                </div>

              </form>
            </div>
          </div>

        </div>
      </div>

      {/* ================= PAGINATION CONTROLS ================= */}
      <div className="absolute bottom-2 sm:bottom-4 left-0 right-0 z-30 flex justify-center items-center pointer-events-none">
        <div className="pointer-events-auto flex items-center space-x-2 sm:space-x-4 bg-black/40 backdrop-blur-md px-3.5 py-1.5 sm:px-5 sm:py-2 rounded-full border border-white/15 shadow-xl">
          
          {/* Previous Button */}
          <button
            onClick={prevSlide}
            aria-label="Previous Slide"
            className="text-white/70 hover:text-white transition focus:outline-none p-0.5 sm:p-1"
          >
            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex items-center space-x-1.5 sm:space-x-2">
            {backgroundSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 focus:outline-none ${
                  i === currentSlide
                    ? "w-5 sm:w-7 bg-[#c02f2d] shadow-sm"
                    : "w-1.5 sm:w-2 bg-white/40 hover:bg-white/75"
                }`}
              />
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            aria-label="Next Slide"
            className="text-white/70 hover:text-white transition focus:outline-none p-0.5 sm:p-1"
          >
            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Slide Counter */}
          <span className="text-[10px] sm:text-[11px] font-mono text-white/70 border-l border-white/20 pl-2 sm:pl-3 select-none">
            0{currentSlide + 1} / 0{backgroundSlides.length}
          </span>
        </div>
      </div>

    </section>
  );
}