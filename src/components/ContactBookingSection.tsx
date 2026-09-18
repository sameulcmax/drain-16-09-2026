"use client";

import React, { useState } from "react";

const serviceOptions = [
  "Drain Cleaning & Rooter",
  "More Sewer / Main Line Repairs",
  "Toilet Repairs & Replacements",
  "Main Line Video Sewer Inspection",
  "Clog & Blockage Clearing",
  "Faucet & Leak Repairs",
  "Commercial Jetting",
  "Other / Emergency Service",
];

const credentials = [
  {
    title: "10% Discount Program",
    desc: "Available for Seniors, Veterans, Law Enforcement, and First Responders.",
    icon: (
      <svg className="h-5 w-5 text-amber-300" viewBox="0 0 20 20" fill="currentColor">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ),
  },
  {
    title: "Rapid 24/7 Dispatch",
    desc: "Immediate regional deployment with upfront pricing and no hidden dispatch fees.",
    icon: (
      <svg className="h-5 w-5 text-emerald-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    title: "Licensed Master Technicians",
    desc: "Fully insured, bonded, and certified for commercial and residential line operations.",
    icon: (
      <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
];

export default function ContactBookingSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    address: "",
    service: serviceOptions[0],
    date: "",
    isUrgent: false,
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="relative w-full bg-[#014485] py-12 sm:py-16 lg:py-20 text-white overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center rounded-full border border-white/25 bg-black/20 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white/90 mb-4">
            Service Request &amp; Priority Booking
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Schedule Sewer &amp; Drain Services
          </h2>
          <p className="mt-3 text-sm sm:text-base text-blue-100/90">
            Submit your appointment details for prompt confirmation, or contact our dispatch team directly for active emergencies.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Dispatch Card & Credentials */}
          <div className="lg:col-span-5 space-y-6">
            {/* Immediate Call Card */}
            <div className="rounded-xl border border-red-500/30 bg-[#c02f2d] p-6 sm:p-7 shadow-xl">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/90">
                <span className="h-2 w-2 rounded-full bg-emerald-300" />
                Urgent Sewer Line or Drain Blockage
              </div>
              <p className="mt-3 text-xl sm:text-2xl font-bold text-white tracking-tight">
                24/7 Immediate Field Dispatch
              </p>
              <p className="mt-1.5 text-xs sm:text-sm text-white/90 leading-relaxed">
                Connect directly with our master operations team to avoid structural and line damage.
              </p>

              <a
                href="tel:2018819622"
                className="mt-6 inline-flex w-full items-center justify-center gap-3 rounded-lg bg-white px-5 py-3 text-sm font-bold text-[#c02f2d] shadow-md transition duration-150 hover:bg-stone-100 active:scale-[0.99]"
              >
                <svg className="h-4 w-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>Call (201) 881-9622</span>
              </a>
            </div>

            {/* Credential Indicators */}
            <div className="rounded-xl border border-white/20 bg-[#00386e] p-6 space-y-5 shadow-md">
              <h3 className="text-xs font-bold uppercase tracking-widest text-blue-200 border-b border-white/15 pb-2">
                Operational Guarantees
              </h3>
              {credentials.map((item) => (
                <div key={item.title} className="flex items-start gap-3.5">
                  <div className="mt-0.5 shrink-0 rounded border border-white/20 bg-[#014485] p-2">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-white">{item.title}</h4>
                    <p className="text-xs text-blue-100/80 mt-0.5 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Booking Form */}
          <div className="lg:col-span-7">
            <div className="rounded-xl border border-white/20 bg-[#00386e] p-6 sm:p-8 shadow-xl">
              {submitted ? (
                <div className="py-12 text-center space-y-3">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/40">
                    <svg className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">Booking Submission Received</h3>
                  <p className="text-xs sm:text-sm text-blue-100/80 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="text-white font-semibold">{formData.fullName}</span>. An assignment coordinator will review your request and contact you at <span className="text-white font-semibold">{formData.phone}</span>.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 inline-flex text-xs font-semibold text-white hover:text-amber-300 underline underline-offset-4"
                  >
                    Submit an additional request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-blue-100 mb-1.5">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="First and Last Name"
                        className="w-full rounded border border-white/20 bg-[#014485] px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-blue-200/60 focus:border-white focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-blue-100 mb-1.5">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(201) 000-0000"
                        className="w-full rounded border border-white/20 bg-[#014485] px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-blue-200/60 focus:border-white focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-blue-100 mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="client@domain.com"
                        className="w-full rounded border border-white/20 bg-[#014485] px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-blue-200/60 focus:border-white focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-blue-100 mb-1.5">
                        City / Zip Code
                      </label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="e.g. Paramus, NJ 07652"
                        className="w-full rounded border border-white/20 bg-[#014485] px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-blue-200/60 focus:border-white focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-blue-100 mb-1.5">
                        Service Category
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full rounded border border-white/20 bg-[#014485] px-3.5 py-2.5 text-xs sm:text-sm text-white focus:border-white focus:outline-none"
                      >
                        {serviceOptions.map((opt) => (
                          <option key={opt} value={opt} className="bg-[#014485] text-white">
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-blue-100 mb-1.5">
                        Requested Date
                      </label>
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full rounded border border-white/20 bg-[#014485] px-3.5 py-2.5 text-xs sm:text-sm text-white focus:border-white focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-blue-100 mb-1.5">
                      Issue Description &amp; Notes
                    </label>
                    <textarea
                      name="notes"
                      rows={3}
                      value={formData.notes}
                      onChange={handleChange}
                      placeholder="Specify relevant symptoms (e.g., mainline backup, fixture blockage, or scope inspection needs)..."
                      className="w-full rounded border border-white/20 bg-[#014485] px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-blue-200/60 focus:border-white focus:outline-none resize-none"
                    />
                  </div>

                  {/* Priority Dispatch Option */}
                  <label className="flex items-center gap-3 cursor-pointer rounded border border-white/20 bg-[#014485]/70 p-3 select-none">
                    <input
                      type="checkbox"
                      name="isUrgent"
                      checked={formData.isUrgent}
                      onChange={handleChange}
                      className="h-4 w-4 rounded border-white/30 bg-[#00386e] text-[#c02f2d] focus:ring-0"
                    />
                    <span className="text-xs text-blue-100">
                      <strong className="text-white">Active Emergency Priority:</strong> Route to the nearest on-call service vehicle.
                    </span>
                  </label>

                  <button
                    type="submit"
                    className="w-full rounded-lg bg-[#c02f2d] hover:bg-[#a82523] py-3 px-6 text-xs sm:text-sm font-bold uppercase tracking-wider text-white shadow-md transition duration-150 active:scale-[0.99] border border-red-400/40"
                  >
                    Confirm Service Booking
                  </button>

                  <p className="text-center text-[11px] text-blue-200/75">
                    Upfront pricing protocol. Standard terms apply without unverified travel surcharges.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}