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

const ResidentialSewerService: React.FC = () => {
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
                  New Jersey Reliable Sewer Solutions For Every Home
                </span>
              </div>

              <h1 className="text-3xl font-extrabold leading-[1.12] text-white sm:text-4xl lg:text-[44px]">
                Efficient Sewer Cleaning Service For Residentials Northern NJ
              </h1>

              <p className="mt-7 text-base leading-8 text-white/80">
                Drain Solutions Plus offers top-notch sewer cleaning services for residential
                properties in Northern New Jersey, ensuring that your home’s sewer system operates
                efficiently and effectively. A well-maintained sewer system is crucial for the
                overall comfort and hygiene of your home.
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
                  href="#expert-repairs"
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-white/10"
                >
                  Repair &amp; Installation
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE / BADGE */}
          <div className="relative min-h-[460px] lg:min-h-0">
            <img
              src="https://drainsolutionplus.com/wp-content/uploads/2023/09/drainage-commercial.jpg"
              alt="Residential sewer cleaning and repair in Northern New Jersey"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/15" />

            {/* Experience / Reliability Card */}
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

      {/* ================= SECTION 1: CLEANING SERVICE ================= */}
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#c02f2d]">
              Hygiene &amp; Comfort
            </span>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
              Efficient Sewer Cleaning Service For{" "}
              <span className="text-[#014484]">Residentials Northern NJ</span>
            </h2>
            <div className="mt-6 h-1 w-20 bg-[#c02f2d]" />
          </div>

          <div className="space-y-6 text-base leading-8 text-slate-600">
            <p>
              offers top-notch sewer cleaning services for residential properties in Northern New
              Jersey, ensuring that your home’s sewer system operates efficiently and effectively.
              A well-maintained sewer system is crucial for the overall comfort and hygiene of your
              home, and our professional team is dedicated to providing thorough and reliable
              cleaning solutions.
            </p>
            <p>
              Our advanced cleaning techniques, such as hydro-jetting and video inspections, allow
              us to remove stubborn clogs, grease buildup, and debris from your sewer lines.
              Hydro-jetting uses high-pressure water jets to clear out blockages and restore optimal
              flow, while video inspections enable us to pinpoint the exact location and cause of
              issues, allowing for precise and effective cleaning. By choosing to work with us, you
              can prevent common sewer problems, such as slow drainage and unpleasant odors,
              ensuring that your home remains a clean and comfortable environment for you and your
              family.
            </p>

            <div className="grid gap-4 pt-2 sm:grid-cols-2">
              <div className="flex items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 p-4">
                <Droplets className="h-5 w-5 shrink-0 text-[#014484]" />
                <span className="text-sm font-semibold text-slate-800">
                  High-Pressure Hydro-Jetting
                </span>
              </div>
              <div className="flex items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 p-4">
                <Search className="h-5 w-5 shrink-0 text-[#014484]" />
                <span className="text-sm font-semibold text-slate-800">
                  Precision Video Camera Inspections
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= SECTION 2: EXPERT REPAIR SERVICES ================= */}
      <div id="expert-repairs" className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
            {/* Visual Box */}
            <div className="relative order-2 lg:order-1">
              <div className="overflow-hidden rounded-sm shadow-xl">
                <img
                  src="https://drainsolutionplus.com/wp-content/uploads/2023/09/commercial-services-drain.webp"
                  alt="Expert Sewer Repair Services for Residential Issues"
                  className="h-[440px] w-full object-cover sm:h-[500px]"
                />
              </div>

              <div className="absolute -bottom-6 -right-4 hidden w-72 bg-[#014484] p-6 text-white shadow-2xl sm:block">
                <div className="flex items-center gap-3">
                  <Wrench className="h-6 w-6 text-[#c02f2d]" />
                  <span className="text-xs font-bold uppercase tracking-widest text-white/80">
                    Trenchless Repairs
                  </span>
                </div>
                <p className="mt-3 text-sm font-semibold leading-relaxed text-white/90">
                  Minimizes disruption to your property and preserves your landscaping.
                </p>
              </div>
            </div>

            {/* Content Side */}
            <div className="order-1 lg:order-2">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#c02f2d]">
                Minimally Disruptive Solutions
              </span>

              <h2 className="mt-4 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-[40px]">
                Expert Sewer Repair Services for Residential Issues
              </h2>

              <div className="mt-7 space-y-5 text-base leading-8 text-slate-600">
                <p>
                  When it comes to sewer repairs, we provide expert solutions designed to address a
                  wide range of issues that can affect residential properties.
                </p>
                <p>
                  Sewer lines can suffer from various problems, including cracks, leaks, and
                  blockages, which can compromise the functionality and safety of your home’s sewer
                  system. Our skilled technicians are equipped with the latest tools and
                  technologies to diagnose and repair these issues with precision. We use methods
                  such as trenchless pipe repair, which minimizes disruption to your property by
                  allowing us to fix problems without extensive digging.
                </p>
                <p>
                  This approach not only preserves your landscaping but also reduces the overall
                  cost and time required for repairs. Our focus on high-quality, long-lasting repairs
                  ensures that your sewer system remains reliable and efficient, preventing
                  recurring issues and protecting your home’s infrastructure. With{" "}
                  <strong className="text-slate-900">Drain Solutions Plus</strong>, you can trust
                  that your sewer repairs will be handled professionally and effectively.
                </p>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "Cracks, Leaks & Blockages",
                  "Trenchless Pipe Repair",
                  "Landscaping Preservation",
                  "Long-Lasting Solutions",
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

      {/* ================= SECTION 3: INSTALLATION ================= */}
      <div className="bg-[#111c2b] text-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#c02f2d]">
                Built For Longevity
              </span>

              <h2 className="mt-5 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
                Comprehensive Sewer Installation for Long-Term Performance
              </h2>

              <p className="mt-6 text-lg font-medium text-white/90">
                We also specialize in sewer installation services for residential properties in
                Northern New Jersey, offering comprehensive solutions for new construction or system
                upgrades.
              </p>

              <div className="mt-8 h-1 w-20 bg-[#c02f2d]" />
            </div>

            <div className="space-y-6 text-base leading-8 text-white/75">
              <p>
                Proper installation of a sewer system is essential for ensuring long-term
                performance and compliance with local regulations.
              </p>
              <p>
                Our team provides expert guidance on designing and installing sewer systems that
                meet your home’s specific needs. We work closely with homeowners, contractors, and
                builders to ensure that the sewer system is installed correctly, using high-quality
                materials and adhering to industry standards. Our installation process includes
                thorough planning and execution to ensure that the system is efficient, durable, and
                capable of handling the demands of your household.
              </p>
              <p>
                By choosing our company for your sewer installation needs, you invest in a reliable
                and high-performing sewer system that will serve your home effectively for years to
                come.
              </p>

              <div className="grid gap-4 pt-4 sm:grid-cols-3">
                <div className="border border-white/10 bg-white/5 p-4 text-center">
                  <CheckCircle2 className="mx-auto h-6 w-6 text-[#c02f2d]" />
                  <p className="mt-2 text-xs font-bold uppercase tracking-wider text-white">
                    New Construction
                  </p>
                </div>
                <div className="border border-white/10 bg-white/5 p-4 text-center">
                  <CheckCircle2 className="mx-auto h-6 w-6 text-[#c02f2d]" />
                  <p className="mt-2 text-xs font-bold uppercase tracking-wider text-white">
                    System Upgrades
                  </p>
                </div>
                <div className="border border-white/10 bg-white/5 p-4 text-center">
                  <ShieldCheck className="mx-auto h-6 w-6 text-[#c02f2d]" />
                  <p className="mt-2 text-xs font-bold uppercase tracking-wider text-white">
                    Code Compliance
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
                New Jersey Reliable Sewer Solutions For Every Home
              </span>
              <h2 className="mt-3 text-3xl font-extrabold leading-tight text-white sm:text-4xl">
                Efficient Sewer Cleaning Servcie For Residentials Northern NJ
              </h2>
              <p className="mt-4 text-sm leading-7 text-white/75">
                Trust Drain Solutions Plus for expert residential cleaning, trenchless repairs, and
                long-term sewer installation.
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

export default ResidentialSewerService;