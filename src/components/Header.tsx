"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface NavItem {
  name: string;
  href: string;
  hasDropdown?: boolean;
}

// All services route to the existing /services page
const serviceGroups = [
  {
    title: "Residential",
    items: [
      { name: "Drain Cleaning", desc: "Sinks, tubs, showers & lines", href: "/services" },
      { name: "Drain Repairs", desc: "Pipe patches & line restores", href: "/services" },
      { name: "Sewer Camera Inspection", desc: "HD diagnostic video scans", href: "/services" },
    ],
  },
  {
    title: "Commercial & Specialized",
    items: [
      { name: "Commercial Jetting", desc: "Heavy-duty grease removal", href: "/services" },
      { name: "Trenchless Repairs", desc: "Sewer lining without digging", href: "/services" },
      { name: "24/7 Power Snake", desc: "High-torque emergency service", href: "/services" },
    ],
  },
];

// Only About Us and Services keep dedicated routes; all other pages route to "/"
const navLinks: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services", hasDropdown: true },
  { name: "Renovation", href: "/" },
  { name: "Emergency", href: "/" },
  { name: "Reviews", href: "/" },
  { name: "Project Gallery", href: "/" },
  { name: "FAQ's", href: "/" },
  { name: "Blog", href: "/" },
  { name: "Contact Us", href: "/" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const tabShape = "polygon(0 0, 100% 0, 100% 68%, 0 100%)";

  return (
    <header className="relative z-40 w-full bg-[#c02f2d] shadow-lg">
      <div className="w-full flex h-[58px] items-center justify-between pr-4 sm:pr-6 lg:pr-8">
        
        {/* ================= LOGO TAB ================= */}
        <div className="relative self-start top-0 z-40 shrink-0 select-none filter drop-shadow-[0_12px_18px_rgba(0,0,0,0.38)]">
          <div
            className="bg-[#014485] p-[3px] sm:p-[4px]"
            style={{ clipPath: tabShape }}
          >
            <div
              className="bg-[#c02f2d] p-[2.5px] sm:p-[3px]"
              style={{ clipPath: tabShape }}
            >
              <div
                className="flex items-center justify-center transition-all duration-300
                  w-[190px] h-[95px] 
                  sm:w-[230px] sm:h-[115px] 
                  md:w-[270px] md:h-[130px] 
                  lg:w-[320px] lg:h-[145px] 
                  2xl:w-[350px] 2xl:h-[155px]
                  pl-3 pr-5 sm:pl-5 sm:pr-8 lg:pl-6 lg:pr-10
                  pt-1 sm:pt-2
                  pb-6 sm:pb-8 lg:pb-10"
                style={{
                  clipPath: tabShape,
                  background:
                    "linear-gradient(105deg, #014485 0%, #014485 20%, #ffffff 20.1%, #ffffff 80%, #c02f2d 80.1%, #c02f2d 100%)",
                }}
              >
                <Link href="/" className="inline-block relative z-10">
                  <Image
                    src="/images/logo.png"
                    alt="Logo"
                    width={320}
                    height={120}
                    priority
                    className="object-contain transition-transform duration-200 hover:scale-105 drop-shadow-md
                      w-[135px] max-h-[55px]
                      sm:w-[175px] sm:max-h-[70px]
                      md:w-[200px] md:max-h-[80px]
                      lg:w-[245px] lg:max-h-[95px]
                      2xl:w-[270px] 2xl:max-h-[105px]"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* ================= DESKTOP NAVIGATION LINKS ================= */}
        <nav className="hidden xl:flex flex-1 items-center justify-around ml-4 2xl:ml-8">
          {navLinks.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/" && item.name === "Home"
                : pathname.startsWith(item.href);

            const isBlog = item.name === "Blog";

            if (item.hasDropdown) {
              return (
                <div key={item.name} className="relative group py-5">
                  <Link
                    href={item.href}
                    className={`flex items-center text-[13px] 2xl:text-[14px] font-semibold uppercase tracking-wider text-white transition-all hover:text-white/80 ${
                      isActive ? "text-white" : "text-white/95"
                    }`}
                  >
                    <span>{item.name}</span>
                    <svg
                      className="ml-1.5 h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>

                    {isActive && (
                      <span className="absolute bottom-3 left-0 h-[2.5px] w-full rounded-full bg-white shadow-sm" />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-[52px] hidden group-hover:block transition-all duration-200 pt-2 z-50">
                    <div className="w-[520px] rounded-2xl bg-[#a82422] border-t-2 border-[#014485] p-5 shadow-[0_16px_36px_rgba(0,0,0,0.45)]">
                      <div className="grid grid-cols-2 gap-4">
                        {serviceGroups.map((grp) => (
                          <div key={grp.title} className="space-y-2">
                            <div className="flex items-center space-x-1.5 border-b border-white/20 pb-1.5">
                              <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                              <h4 className="text-[11px] font-extrabold uppercase tracking-wider text-white">
                                {grp.title}
                              </h4>
                            </div>

                            <div className="space-y-1.5">
                              {grp.items.map((svc) => (
                                <Link
                                  key={svc.name}
                                  href={svc.href}
                                  className="group/item block rounded-lg bg-white/10 p-2 transition-all duration-150 hover:bg-white hover:text-slate-900 shadow-xs"
                                >
                                  <div className="flex items-center justify-between">
                                    <span className="text-xs font-bold uppercase tracking-wide text-white group-hover/item:text-[#c02f2d] transition-colors">
                                      {svc.name}
                                    </span>
                                    <span className="text-xs text-white/70 group-hover/item:text-[#c02f2d] group-hover/item:translate-x-0.5 transition-transform">
                                      →
                                    </span>
                                  </div>
                                  <p className="text-[10.5px] text-white/75 group-hover/item:text-slate-600 transition-colors line-clamp-1">
                                    {svc.desc}
                                  </p>
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="mt-3.5 pt-2.5 border-t border-white/15 flex items-center justify-between text-[11px] text-white/80">
                        <span>Available 24/7 across New Jersey</span>
                        <Link
                          href="/services"
                          className="font-bold underline underline-offset-2 hover:text-white"
                        >
                          View All Services
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            if (isBlog) {
              return (
                <div key={item.name} className="relative py-4">
                  <Link
                    href={item.href}
                    className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full border border-white/40 bg-white/10 hover:bg-white hover:text-[#c02f2d] transition-all duration-200 text-[12.5px] 2xl:text-[13.5px] font-bold uppercase tracking-wider text-white"
                  >
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400"></span>
                    </span>
                    <span>{item.name}</span>
                  </Link>
                </div>
              );
            }

            return (
              <div key={item.name} className="relative py-5">
                <Link
                  href={item.href}
                  className={`text-[13px] 2xl:text-[14px] font-semibold uppercase tracking-wider transition-all hover:text-white/80 ${
                    isActive ? "text-white" : "text-white/95"
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute bottom-3 left-0 h-[2.5px] w-full rounded-full bg-white shadow-sm" />
                  )}
                </Link>
              </div>
            );
          })}
        </nav>

        {/* ================= MOBILE CONTROLS ================= */}
        <div className="flex items-center space-x-3 sm:space-x-4 xl:hidden">
          <a
            href="tel:2018819622"
            className="flex items-center justify-center w-9 h-9 rounded-full bg-white/15 text-white hover:bg-white/25 transition"
            aria-label="Call Us"
          >
            <svg
              className="h-5 w-5 fill-none stroke-current stroke-2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </a>

          <Link
            href="/"
            className="flex items-center justify-center w-9 h-9 rounded-full bg-white/15 text-white hover:bg-white/25 transition"
            aria-label="Home"
          >
            <svg
              className="h-5 w-5 fill-none stroke-current stroke-2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          </Link>

          <button
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open Navigation"
            className="flex items-center justify-center w-10 h-10 text-white focus:outline-none"
          >
            <svg
              className="h-7 w-7 stroke-current stroke-2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="7" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </div>

      {/* ================= BLUR BACKDROP OVERLAY ================= */}
      <div
        onClick={() => setMobileMenuOpen(false)}
        className={`fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity duration-300 xl:hidden ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* ================= MOBILE SLIDE DRAWER ================= */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-[70%] max-w-sm bg-[#c02f2d] shadow-2xl transition-transform duration-300 ease-out flex flex-col xl:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 h-[60px] border-b border-red-800/60 shrink-0">
          <span className="text-white font-bold tracking-wider text-base uppercase">Menu</span>
          <button
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close Menu"
            className="text-white p-2 hover:bg-white/10 rounded-full transition"
          >
            <svg
              className="w-6 h-6 stroke-current stroke-2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4">
          <ul className="flex flex-col space-y-3.5">
            {navLinks.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/" && item.name === "Home"
                  : pathname.startsWith(item.href);

              const isBlog = item.name === "Blog";

              if (item.hasDropdown) {
                return (
                  <li key={item.name} className="flex flex-col border-b border-red-800/40 pb-2">
                    <button
                      onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                      className="flex items-center justify-between py-1 text-left text-sm font-semibold text-white uppercase tracking-wider"
                    >
                      <span>{item.name}</span>
                      <svg
                        className={`h-4 w-4 transition-transform duration-200 ${
                          mobileDropdownOpen ? "rotate-180" : ""
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>

                    {mobileDropdownOpen && (
                      <div className="mt-2 space-y-2 pl-3 border-l-2 border-white/30">
                        {serviceGroups.map((grp) => (
                          <div key={grp.title} className="space-y-1">
                            <span className="text-[10px] font-extrabold uppercase text-white/60 tracking-wider">
                              {grp.title}
                            </span>
                            {grp.items.map((svc) => (
                              <Link
                                key={svc.name}
                                href={svc.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="block py-1 text-xs font-medium text-white/90 hover:text-white"
                              >
                                {svc.name}
                              </Link>
                            ))}
                          </div>
                        ))}
                      </div>
                    )}
                  </li>
                );
              }

              return (
                <li key={item.name} className="border-b border-red-800/40 pb-2">
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between py-1 text-sm font-semibold uppercase tracking-wider text-white ${
                      isActive ? "text-white underline decoration-2 underline-offset-4" : "text-white/95"
                    }`}
                  >
                    <span>{item.name}</span>
                    {isBlog && (
                      <span className="text-[10px] bg-white text-[#c02f2d] font-bold px-2 py-0.5 rounded-full">
                        UPDATED
                      </span>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="p-5 border-t border-red-800/60 shrink-0 bg-[#a62523]">
          <a
            href="tel:2018819622"
            className="flex items-center justify-center space-x-2 w-full py-2.5 bg-white text-[#c02f2d] font-bold rounded shadow hover:bg-gray-100 transition text-sm"
          >
            <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span>Call (201) 881-9622</span>
          </a>
        </div>
      </div>
    </header>
  );
}