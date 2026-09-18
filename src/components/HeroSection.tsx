"use client";

import React, { useEffect, useState } from "react";

const backgroundSlides = [
  "/images/1.png",
  "/images/2.png",
  "/images/3.png",
  "/images/4.png",
];

const highlights = [
  {
    label: "Available 24/7",
    sub: "Rapid Emergency Response",
  },
  {
    label: "Licensed & Insured",
    sub: "Certified Master Plumbers",
  },
  {
    label: "Upfront Pricing",
    sub: "No Hidden Dispatch Fees",
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

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
    setCurrentSlide(
      (prev) => (prev - 1 + backgroundSlides.length) % backgroundSlides.length
    );
  };

  return (
    <section className="relative isolate flex min-h-[380px] sm:min-h-[480px] lg:min-h-[580px] w-full items-center overflow-hidden">
      {/* ================= BACKGROUND IMAGE SLIDER ================= */}
      <div className="absolute inset-0 -z-20">
        {backgroundSlides.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${image})`,
            }}
          />
        ))}

        {/* Very light clean overlay to keep the photo bright */}
        <div className="absolute inset-0 bg-black/15" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-black/10 to-transparent" />
      </div>

      {/* ================= MAIN HERO CONTAINER ================= */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-8 sm:px-8 sm:py-12 lg:px-10 lg:py-16">
        <div className="max-w-3xl text-left">
          {/* ================= 10 YEAR AWARD BADGE ================= */}
          <div className="mb-3 flex items-center justify-start">
            <img
              src="/images/batch.png"
              alt="10 Years of Experience"
              className="h-[132px] w-[122px] xs:h-[134px] xs:w-[134px] sm:h-[140px] sm:w-[140px] lg:h-[150px] lg:w-[150px] object-contain drop-shadow-[0_4px_10px_rgba(0,0,0,0.35)] transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* ================= STATUS PILLS ROW ================= */}

          {/* ================= MAIN HEADING ================= */}
          <h1 className="max-w-3xl text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            The Drain &amp; Sewer Experts{" "}
            <span className="inline text-[#e24442] font-black drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
              That Put You First
            </span>
          </h1>

          {/* ================= CTA BUTTONS ================= */}
          <div className="mt-5 flex w-full flex-col items-stretch justify-start gap-2.5 sm:w-auto sm:flex-row sm:items-center">
            {/* CALL BUTTON */}
            <a
              href="tel:2018819622"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-lg border border-[#e24442] bg-[#c02f2d] hover:bg-[#a82523] px-5 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-sm font-extrabold text-white shadow-md transition-all active:scale-[0.98]"
            >
              <svg
                className="h-4 w-4 shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>Call (201) 881-9622</span>
            </a>

          </div>
        </div>
      </div>

      {/* ================= SLIDER CONTROLS ================= */}
      <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-6 z-30">
        <div className="flex items-center gap-1 rounded-full border border-white/20 bg-black/40 px-2 py-1 backdrop-blur-xs">
          <button
            onClick={prevSlide}
            aria-label="Previous slide"
            className="rounded-full p-1 text-white/70 hover:text-white"
          >
            <svg
              className="h-3 w-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="flex items-center gap-1">
            {backgroundSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "w-4 bg-[#c02f2d]"
                    : "w-1.5 bg-white/50 hover:bg-white/80"
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            aria-label="Next slide"
            className="rounded-full p-1 text-white/70 hover:text-white"
          >
            <svg
              className="h-3 w-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <span className="border-l border-white/20 pl-1.5 text-[8px] font-mono text-white/60 select-none">
            0{currentSlide + 1}/0{backgroundSlides.length}
          </span>
        </div>
      </div>
    </section>
  );
}