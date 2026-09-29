import React from "react";
import {
  ArrowUpRight,
  Check,
  Droplets,
  Search,
  Wrench,
  ShieldCheck,
  Home,
  CheckCircle2,
} from "lucide-react";

const ResidentialDrainService: React.FC = () => {
  return (
    <section className="overflow-hidden bg-white text-slate-900">
      {/* ================= HERO SECTION ================= */}
      <div className="relative">
        <div className="grid min-h-[640px] lg:grid-cols-[46%_54%]">
          {/* LEFT BLUE PANEL */}
          <div className="relative flex items-center overflow-hidden bg-[#014484] px-6 py-20 sm:px-10 lg:px-16">
            {/* Decorative background circles */}
            <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full border-[45px] border-white/5" />
            <div className="absolute -bottom-32 -right-32 h-80 w-80 rounded-full border-[45px] border-white/5" />

            <div className="relative z-10 max-w-xl">
              <div className="mb-7 flex items-center gap-3">
                <span className="h-[2px] w-12 bg-[#c02f2d]" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/70">
                  New Jersey Reliable Drain Solutions For Every Home
                </span>
              </div>

              <h1 className="text-3xl font-extrabold leading-[1.12] text-white sm:text-4xl lg:text-[44px]">
                Comprehensive Drain Cleaning For Residential In Northern NJ
              </h1>

              <p className="mt-7 text-base leading-8 text-white/80">
                we understand that a well-maintained drainage system is essential for the comfort
                and functionality of your home. Our drain cleaning services for residential
                properties in Northern New Jersey are designed to address a wide range of issues
                that homeowners may encounter.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href="/contact/"
                  className="inline-flex items-center gap-2 rounded-full bg-[#c02f2d] px-7 py-3.5 text-sm font-bold text-white transition hover:bg-[#a92527]"
                >
                  Schedule Residential Service
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href="#expert-drain-repairs"
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-white/10"
                >
                  Repairs &amp; Maintenance
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE / BADGE */}
          <div className="relative min-h-[460px] lg:min-h-0">
            <img
              src="https://drainsolutionplus.com/wp-content/uploads/2023/09/drainage-commercial.jpg"
              alt="Comprehensive Drain Cleaning For Residential In Northern NJ"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/15" />

            {/* Experience / Residential Card */}
            <div className="absolute bottom-8 left-6 flex items-center gap-4 bg-white px-6 py-5 shadow-2xl sm:left-10 sm:px-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#014484] text-white">
                <Home className="h-6 w-6" />
              </div>
              <div className="border-l border-slate-200 pl-4">
                <span className="block text-xs font-bold uppercase tracking-widest text-[#c02f2d]">
                  Residential Care
                </span>
                <span className="block text-sm font-bold text-slate-900">
                  Northern NJ Homes
                </span>
              </div>
            </div>

            <div className="absolute right-0 top-0 h-24 w-24 bg-[#c02f2d]" />
          </div>
        </div>
      </div>

      {/* ================= SECTION 1: COMPREHENSIVE CLEANING ================= */}
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#c02f2d]">
              Home Drainage Care
            </span>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
              Comprehensive Drain Cleaning For{" "}
              <span className="text-[#014484]">Residential In Northern NJ</span>
            </h2>
            <div className="mt-6 h-1 w-20 bg-[#c02f2d]" />
          </div>

          <div className="space-y-6 text-base leading-8 text-slate-600">
            <p>
              we understand that a well-maintained drainage system is essential for the comfort and
              functionality of your home. Our drain cleaning services for residential properties in
              Northern New Jersey are designed to address a wide range of issues that homeowners may
              encounter.
            </p>
            <p>
              Whether you’re dealing with slow drains, unpleasant odors, or complete blockages, our
              team of skilled professionals is equipped with the latest technology to provide
              effective solutions. We utilize advanced techniques such as high-pressure water
              jetting and video camera inspections to thoroughly clean and inspect your drains.
            </p>
            <p>
              This thorough approach ensures that we remove all debris, buildup, and obstructions
              that could potentially cause problems in the future. Our goal is to restore your drains
              to optimal condition, preventing minor issues from escalating into major
              inconveniences. With Drain Solutions Plus, you can trust that your home’s drainage
              system will be in excellent hands, allowing you to enjoy a hassle-free living
              environment.
            </p>

            <div className="grid gap-4 pt-2 sm:grid-cols-2">
              <div className="flex items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 p-4">
                <Droplets className="h-5 w-5 shrink-0 text-[#014484]" />
                <span className="text-sm font-semibold text-slate-800">
                  High-Pressure Water Jetting
                </span>
              </div>
              <div className="flex items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 p-4">
                <Search className="h-5 w-5 shrink-0 text-[#014484]" />
                <span className="text-sm font-semibold text-slate-800">
                  Video Camera Inspections
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= SECTION 2: EXPERT DRAIN REPAIR ================= */}
      <div id="expert-drain-repairs" className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
            {/* Visual Box */}
            <div className="relative order-2 lg:order-1">
              <div className="overflow-hidden rounded-sm shadow-xl">
                <img
                  src="https://drainsolutionplus.com/wp-content/uploads/2023/09/commercial-services-drain.webp"
                  alt="Expert Residential Drain Repair Services to Solve Complex Problems"
                  className="h-[440px] w-full object-cover sm:h-[500px]"
                />
              </div>

              <div className="absolute -bottom-6 -right-4 hidden w-72 bg-[#014484] p-6 text-white shadow-2xl sm:block">
                <div className="flex items-center gap-3">
                  <Wrench className="h-6 w-6 text-[#c02f2d]" />
                  <span className="text-xs font-bold uppercase tracking-widest text-white/80">
                    Trench-Less Methods
                  </span>
                </div>
                <p className="mt-3 text-sm font-semibold leading-relaxed text-white/90">
                  Address pipe issues without extensive excavation, preserving your landscaping.
                </p>
              </div>
            </div>

            {/* Content Side */}
            <div className="order-1 lg:order-2">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#c02f2d]">
                Targeted Diagnostics &amp; Repair
              </span>

              <h2 className="mt-4 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-[40px]">
                Expert Residential Drain Repair Services to Solve Complex Problems
              </h2>

              <div className="mt-7 space-y-5 text-base leading-8 text-slate-600">
                <p>
                  When it comes to drain repair, we offer expert solutions tailored to the specific
                  needs of residential properties. Over time, drains can suffer from a variety of
                  issues, including leaks, cracks, or misalignment that can compromise their
                  performance.
                </p>
                <p>
                  Our team is trained to diagnose and repair these problems with precision and
                  efficiency. We employ cutting-edge technologies and techniques to ensure that
                  repairs are carried out effectively and with minimal disruption to your home. For
                  example, our trench-less repair methods allow us to address pipe issues without the
                  need for extensive excavation, preserving your landscaping and minimizing mess.
                </p>
                <p>
                  Whether the problem is caused by old, deteriorated pipes or damage from external
                  factors, we provide reliable repairs that restore the functionality and integrity
                  of your drainage system. By choosing to work with us, you can expect high-quality
                  repairs that prevent further damage and ensure long-term reliability.
                </p>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "Leaks, Cracks & Misalignment",
                  "Trench-Less Repair Methods",
                  "Landscaping Preservation",
                  "Restored System Integrity",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#014484] text-white">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-sm font-semibold text-slate-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= SECTION 3: PREVENTIVE MAINTENANCE ================= */}
      <div className="bg-[#111c2b] text-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#c02f2d]">
                Proactive Home Protection
              </span>

              <h2 className="mt-5 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
                Preventive Maintenance for Long-Term Home Drain Health
              </h2>

              <p className="mt-6 text-lg font-medium text-white/90">
                Preventive maintenance is crucial for maintaining the health of your home’s
                drainage system and avoiding costly repairs.
              </p>

              <div className="mt-8 h-1 w-20 bg-[#c02f2d]" />
            </div>

            <div className="space-y-6 text-base leading-8 text-white/75">
              <p>
                We emphasize the importance of regular maintenance to keep your drains functioning
                smoothly. Our preventive maintenance services include routine inspections,
                cleanings, and system checks designed to identify and address potential issues
                before they become major problems.
              </p>
              <p>
                We recommend scheduling regular maintenance to ensure that your drains remain clear
                and free of obstructions, reducing the risk of clogs and backups. By investing in
                preventive care, you can extend the lifespan of your drainage system and avoid
                unexpected disruptions. Our commitment to proactive maintenance reflects our
                dedication to providing reliable and long-lasting solutions for homeowners in
                Northern New Jersey.
              </p>
              <p>
                With Drain Solutions Plus on your side, you can have peace of mind knowing that
                your drainage system is well-cared for and operating at its best.
              </p>

              <div className="grid gap-4 pt-4 sm:grid-cols-3">
                <div className="border border-white/10 bg-white/5 p-4 text-center">
                  <CheckCircle2 className="mx-auto h-6 w-6 text-[#c02f2d]" />
                  <p className="mt-2 text-xs font-bold uppercase tracking-wider text-white">
                    Routine Inspections
                  </p>
                </div>
                <div className="border border-white/10 bg-white/5 p-4 text-center">
                  <CheckCircle2 className="mx-auto h-6 w-6 text-[#c02f2d]" />
                  <p className="mt-2 text-xs font-bold uppercase tracking-wider text-white">
                    Cleanings
                  </p>
                </div>
                <div className="border border-white/10 bg-white/5 p-4 text-center">
                  <ShieldCheck className="mx-auto h-6 w-6 text-[#c02f2d]" />
                  <p className="mt-2 text-xs font-bold uppercase tracking-wider text-white">
                    System Checks
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= FINAL CTA ================= */}
      <div className="relative overflow-hidden bg-[#014484]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/60">
                New Jersey Reliable Drain Solutions For Every Home
              </span>
              <h2 className="mt-3 text-3xl font-extrabold leading-tight text-white sm:text-4xl">
                Comprehensive Drain Cleaning For Residential In Northern NJ
              </h2>
              <p className="mt-4 text-sm leading-7 text-white/75">
                With Drain Solutions Plus on your side, you can have peace of mind knowing that your
                drainage system is well-cared for and operating at its best.
              </p>
            </div>

            <a
              href="/contact/"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#c02f2d] px-8 py-4 text-sm font-bold text-white transition hover:bg-[#a92527]"
            >
              Get Residential Service
              <ArrowUpRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResidentialDrainService;