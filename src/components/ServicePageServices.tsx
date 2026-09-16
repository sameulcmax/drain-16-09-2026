"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ServiceItem {
  id: string;
  tag: string;
  title: string;
  description: string;
  image: string;
  ctaText: string;
  ctaLink: string;
}

const allServicesData: ServiceItem[] = [
  {
    id: "residential-drain-cleaning",
    tag: "Residential Solutions",
    title: "Residential Drain Cleaning",
    description:
      "We specialise in providing top-notch residential drain cleaning services to ensure your home plumbing system runs smoothly and efficiently. Our skilled professionals use advanced techniques and heavy-duty power snaking equipment to tackle even the most stubborn household drain clogs and blockages.",
    image: "/images/residential-drain-clean.jpg",
    ctaText: "Drain Cleaning",
    ctaLink: "/services/residential-drain-cleaning",
  },
  {
    id: "residential-drain-repairs",
    tag: "Home Piping Restorations",
    title: "Residential Drain Repairs",
    description:
      "From cracked under-sink branch lines to misaligned bathroom drain pipes, our team delivers precise, long-lasting residential repairs. We eliminate slow drainage, persistent sewer smells, and recurring backups with minimal disruption to your home.",
    image: "/images/residential-drain-repair.jpg",
    ctaText: "Drain Repairs",
    ctaLink: "/services/residential-drain-repairs",
  },
  {
    id: "commercial-drain-repairs",
    tag: "Commercial & Industrial",
    title: "Commercial Drain Repairs",
    description:
      "High-volume grease traps, restaurant interceptors, and industrial sewer stacks require certified heavy-duty care. We provide trenchless pipe relining, structural reinforcement, and rapid emergency repairs tailored specifically for commercial property managers across New Jersey.",
    image: "/images/commercial-drain-repair.jpg",
    ctaText: "Commercial Repairs",
    ctaLink: "/services/commercial-drain-repairs",
  },
  {
    id: "commercial-drain-cleaning",
    tag: "Heavy-Duty Jetting",
    title: "Commercial Drain Cleaning",
    description:
      "Engineered for municipal buildings, food service kitchens, and industrial complexes. Our specialized high-pressure hydro-jetting rigs strip hardened grease, scale, and heavy debris from commercial pipelines to maintain full compliance and continuous flow.",
    image: "/images/commercial-drain-clean.jpg",
    ctaText: "Commercial Cleaning",
    ctaLink: "/services/commercial-drain-cleaning",
  },
  {
    id: "faucet-leak-repairs",
    tag: "Fixture & Leak Care",
    title: "Faucet & Leak Repairs",
    description:
      "Hidden water leaks and leaking valves damage subfloors and spike utility bills. Our technicians identify subterranean and in-wall pipe bursts quickly, repairing or replacing worn fixtures, valves, and water supply lines with clean precision.",
    image: "/images/leak-repair.jpg",
    ctaText: "Leak Repairs",
    ctaLink: "/services/faucet-leak-repairs",
  },
  {
    id: "main-line-video-sewer-inspection",
    tag: "HD Video Diagnostics",
    title: "Main Line Video Sewer Inspection",
    description:
      "Take the guesswork out of subterranean pipeline issues. Our fiber-optic high-definition sewer cameras travel deep into your main line to locate root intrusions, collapsed channels, and severe blockages with pinpoint depth accuracy.",
    image: "/images/sewer-inspection.jpg",
    ctaText: "Schedule Inspection",
    ctaLink: "/services/sewer-repair-cleaning",
  },
];

export default function ServicePageServices() {
  return (
    <section className="relative w-full overflow-hidden bg-[#fafaf9] py-16 sm:py-20 lg:py-24">
      {/* 80% Screen Centered Container */}
      <div className="relative z-10 mx-auto w-[92%] sm:w-[85%] lg:w-[80%] max-w-[1500px]">
        
        {/* ================= SECTION HEADER ================= */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <div className="flex items-center space-x-2 mb-2.5">
            <span className="h-2 w-2 rounded-full bg-[#c02f2d]" />
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#c02f2d]">
              Our Complete Range
            </span>
            <span className="h-2 w-2 rounded-full bg-[#c02f2d]" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#014485]">
            Services
          </h2>

          <div className="mt-3.5 h-1 w-14 bg-[#c02f2d] rounded-full" />
        </div>

        {/* ================= 6 BALANCED ALTERNATING ROWS ================= */}
        <div className="flex flex-col space-y-12 sm:space-y-16 lg:space-y-20">
          {allServicesData.map((service, index) => {
            const isEven = index % 2 === 1;

            return (
              <div
                key={service.id}
                className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12 xl:gap-14"
              >
                {/* BALANCED IMAGE COLUMN */}
                <div
                  className={`lg:col-span-7 w-full ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="group relative aspect-[16/8.5] w-full max-h-[360px] overflow-hidden rounded-xl bg-stone-100 shadow-[0_8px_22px_rgba(0,0,0,0.07)]">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 1024px) 92vw, 48vw"
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-black/5" />
                  </div>
                </div>

                {/* CONTENT COLUMN */}
                <div
                  className={`flex flex-col items-start lg:col-span-5 space-y-3.5 sm:space-y-4 ${
                    isEven ? "lg:order-1 lg:pr-4" : "lg:order-2 lg:pl-4"
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#c02f2d]" />
                    <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c02f2d]">
                      {service.tag}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-[28px] lg:text-[30px] xl:text-[32px] font-black tracking-tight text-[#014485] leading-[1.2]">
                    {service.title}
                  </h3>

                  <p className="text-[14.5px] sm:text-[15px] leading-relaxed text-stone-600 font-normal">
                    {service.description}
                  </p>

                  <div className="pt-1">
                    <Link
                      href={service.ctaLink}
                      className="inline-flex items-center justify-center rounded-sm bg-[#c02f2d] px-7 py-3 text-xs sm:text-[13px] font-bold tracking-wider uppercase text-white shadow-sm transition-all duration-200 hover:bg-[#a62523] active:scale-95"
                    >
                      {service.ctaText}
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ================= VIEW ALL SERVICES CTA ================= */}
        <div className="mt-14 sm:mt-18 border-t border-stone-200 pt-10 flex flex-col items-center text-center space-y-3.5">
          <span className="text-xs uppercase tracking-[0.25em] font-mono text-[#014485] font-semibold">
            Need a Custom Solution?
          </span>

          <Link
            href="/contact-us"
            className="group inline-flex items-center space-x-3 rounded-lg bg-[#014485] px-9 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-widest text-white shadow-md shadow-blue-900/15 transition-all duration-200 hover:bg-[#013568] hover:shadow-lg active:scale-95"
          >
            <span>Request An Estimate</span>
            <svg
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
}