"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const servicedLocations = [
  "Bergen County, NJ",
  "Essex County, NJ",
  "Hudson County, NJ",
  "Passaic County, NJ",
];

const companyLinks = [
  { name: "Blog", href: "/blog" },
  { name: "About Us", href: "/about-us" },
  { name: "Our Projects", href: "/project-gallery" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

const serviceLinks = [
  { name: "More sewer", href: "/services/residential-drain-cleaning" },
  { name: "Draining", href: "/services/residential-drain-repairs" },
  { name: "Faucet and leak repairs", href: "/services/commercial-drain-cleaning" },
  { name: "Clog, clog cleaning", href: "/services/commercial-drain-repairs" },
  { name: "Drain lines", href: "/services/sewer-repair-cleaning" },
  { name: "Toilet repairs", href: "/services/faucet-leak-repairs" },
];

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#014485] text-white">
      {/* Top Red Accent Horizon Line */}
      <div className="h-1.5 w-full bg-[#c02f2d]" />

      {/* Main Content Container */}
      <div className="mx-auto w-[92%] sm:w-[88%] lg:w-[84%] max-w-[1440px] pt-14 pb-10 lg:pt-18 lg:pb-12">
        
        {/* ================= 5-COLUMN HARMONIC GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12 border-b border-white/15">
          
          {/* 1. BRAND & LOGO (3 cols) */}
          <div className="lg:col-span-3 flex flex-col items-start space-y-4">
            <div className="rounded-xl bg-white px-5 py-3.5 shadow-md flex items-center justify-center w-full max-w-[210px] transition-transform duration-200 hover:scale-[1.02]">
              <Image
                src="/images/logo.png"
                alt="Drain Solutions Plus"
                width={190}
                height={80}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
            <p className="text-xs sm:text-[13px] leading-relaxed text-white/80 max-w-[240px] font-normal">
              Prompt, licensed, and specialized sewer &amp; drain professionals delivering trusted emergency care throughout Northern New Jersey.
            </p>
          </div>

          {/* 2. LOCATIONS (2 cols) */}
          <div className="lg:col-span-2 space-y-3.5">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/60 block">
              Locations
            </span>
            <ul className="space-y-2.5 text-xs sm:text-[13px] text-white/90">
              {servicedLocations.map((loc) => (
                <li key={loc} className="flex items-center space-x-1.5 transition-colors hover:text-white">
                  <span className="h-1 w-1 rounded-full bg-[#c02f2d]" />
                  <span>{loc}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. COMPANY (2 cols) */}
          <div className="lg:col-span-2 space-y-3.5">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/60 block">
              Company
            </span>
            <ul className="space-y-2.5 text-xs sm:text-[13px] text-white/90">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-white hover:underline underline-offset-4"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. SERVICES (2 cols) */}
          <div className="lg:col-span-2 space-y-3.5">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/60 block">
              Services
            </span>
            <ul className="space-y-2.5 text-xs sm:text-[13px] text-white/90">
              {serviceLinks.map((svc) => (
                <li key={svc.name}>
                  <Link
                    href={svc.href}
                    className="transition-colors hover:text-white hover:underline underline-offset-4 block leading-snug"
                  >
                    {svc.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 5. INQUIRIES & ACTIONS (3 cols) */}
          <div className="lg:col-span-3 space-y-4 lg:pl-2">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/60 block">
              Inquiries
            </span>

            <p className="text-xs sm:text-[13px] text-white/90 leading-snug">
              P.O. Box 353<br />
              Hawthorne, NJ 07507
            </p>

            {/* CTAs */}
            <div className="space-y-2 w-full max-w-[240px]">
              {/* Schedule Online Button */}
              <Link
                href="/contact"
                className="flex items-center justify-center w-full py-2.5 px-4 rounded-md border border-white/40 bg-white/10 hover:bg-white hover:text-[#014485] text-xs font-bold uppercase tracking-wider text-white transition-all duration-200 active:scale-95 shadow-xs"
              >
                Schedule Online
              </Link>

              {/* Call Today Button */}
              <a
                href="tel:2018819622"
                className="flex items-center justify-center space-x-2 w-full py-2.5 px-4 rounded-md bg-[#c02f2d] hover:bg-[#a62523] text-xs font-bold uppercase tracking-wider text-white transition-all duration-200 active:scale-95 shadow-md"
              >
                <svg className="h-3.5 w-3.5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>(201) 881-9622</span>
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center space-x-2.5 pt-1 text-white/80">
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 hover:bg-white hover:text-[#014485] transition-colors"
              >
                <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.8c4.56-.93 8-4.96 8-9.8z"/>
                </svg>
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 hover:bg-white hover:text-[#014485] transition-colors"
              >
                <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.6 1.6 0 1 0 0-3.2 1.6 1.6 0 0 0 0 3.2m1.39 9.74v-8.37H5.07v8.37z"/>
                </svg>
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 hover:bg-white hover:text-[#c02f2d] transition-colors"
              >
                <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

        </div>

        {/* ================= BOTTOM BAR ================= */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-white/50 space-y-2 sm:space-y-0">
          <p>© 2026 Drain Solutions Plus. All Rights Reserved.</p>
          <div className="flex items-center space-x-4">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span>•</span>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}