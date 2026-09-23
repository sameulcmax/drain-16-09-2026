"use client";

import React, { useState, useEffect } from "react";

export default function TopBar() {
  const [dateTime, setDateTime] = useState<string>("");

  useEffect(() => {
    // Function to update local time and date based on user's device settings
    const updateDateTime = () => {
      const now = new Date();
      
      const options: Intl.DateTimeFormatOptions = {
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };

      setDateTime(new Intl.DateTimeFormat(undefined, options).format(now));
    };

    updateDateTime();
    const timer = setInterval(updateDateTime, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full bg-[#014485] text-white border-b border-white/10 select-none">
      <div className="w-full px-4 sm:px-6 lg:px-10 h-12 grid grid-cols-2 sm:grid-cols-3 items-center">
        
        {/* LEFT SECTION: Digital Timing, Location & 5-Star Rating */}
        <div className="flex items-center space-x-3 lg:space-x-5 overflow-hidden">
          {/* Live Local Date & Time */}
          <div className="flex items-center space-x-1.5 font-medium text-[12px] sm:text-[13px] text-white/90 whitespace-nowrap">
            <svg
              className="w-4 h-4 text-white shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span suppressHydrationWarning>{dateTime || "Loading time..."}</span>
          </div>

          {/* 5-Star Rating */}
          <div className="hidden xl:flex items-center space-x-1.5 whitespace-nowrap border-l border-white/20 pl-4">
            <div className="flex text-amber-400 space-x-0.5">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-3.5 h-3.5 fill-current drop-shadow-sm"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-[13px] text-white/90 font-medium">(5.0 Star Rated)</span>
          </div>
        </div>

        {/* MIDDLE SECTION: Locked dead center (Social Media Icons) */}
        <div className="hidden sm:flex items-center justify-center space-x-3">
          {/* Facebook */}
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-7 h-7 rounded-full bg-[#1877f2] flex items-center justify-center hover:scale-110 transition-transform shadow-sm"
            aria-label="Facebook"
          >
            <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
              <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
            </svg>
          </a>

          {/* Yelp */}
          <a
            href="https://yelp.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-7 h-7 rounded-full bg-[#d32323] flex items-center justify-center hover:scale-110 transition-transform shadow-sm"
            aria-label="Yelp"
          >
            <svg className="w-4 h-4 fill-white" viewBox="0 0 384 512">
              <path d="M42.6 288.9l104.3-33.1c11.7-3.7 22.3 8.3 16.3 18.5l-54 92.4c-6.8 11.7-22.3 14.5-33.1 5.8l-37-30c-10.7-8.6-11.4-24.5-3.5-36.4l7-7.2zm148.6-69l29.4-106.6c3.4-12.4-7.5-23.7-19.8-20.6L99.2 118c-13.6 3.4-20.7 18.2-14.7 30.6l21.4 44.5c6.2 12.8 22.8 16.4 34.1 7.7l51.2-40.9zm27.8 77.1l65.8 84.4c8.1 10.4 24.3 10.2 32.2-.4l25.8-34.9c7.9-10.7 5.1-25.7-5.8-33.2l-91.8-63.4c-11.1-7.7-25.2 2.6-21.7 15.6l-4.5 31.9zm135.9-96.1l-105-24.6c-12.8-3-19.1-17.7-11.8-27.9l58.1-80.9c7.7-10.8 23.3-13.3 34-5.2l34.8 26.2c10.7 8.1 13.5 23.1 6.1 34.1l-16.2 38.3zM212.1 480c10.3 9.4 26.2 7.7 34.6-3.6l26.8-36.1c8.4-11.3 6-27.3-5.2-35.4l-89.9-65c-11.4-8.2-26.6 1.7-23.5 15.3l17.4 97.5c2 11.2 10.9 19.3 19.8 27.3z"/>
            </svg>
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center hover:scale-110 transition-transform shadow-sm"
            aria-label="Instagram"
          >
            <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
        </div>

        {/* RIGHT SECTION: Flush to the far-right end */}
        <div className="flex items-center justify-end">
          <a
            href="tel:2018819622"
            className="flex items-center space-x-2 text-[15px] font-bold text-white hover:text-red-300 transition whitespace-nowrap"
          >
            <svg
              className="w-5 h-5 text-white shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <span className="hidden sm:inline font-medium text-white/90">Same Day Service:</span>
            <span className="text-[16px] tracking-wide font-extrabold">(201) 881-9622</span>
          </a>
        </div>

      </div>
    </div>
  );
}