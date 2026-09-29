import React from "react";
import {
  ArrowUpRight,
  ShieldCheck,
  Wrench,
  Search,
  Droplets,
  CalendarCheck,
  CheckCircle2,
} from "lucide-react";

const CommercialDrainService: React.FC = () => {
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
                  New Jersey Reliable Commercial Drain Solutions
                </span>
              </div>

              <h1 className="text-3xl font-extrabold leading-[1.12] text-white sm:text-4xl lg:text-[46px]">
                Comprehensive Drain Cleaning &amp; Repairs For Northern NJ Businesses
              </h1>

              <p className="mt-7 text-base leading-8 text-white/80">
                We offer specialized drain cleaning and repair services tailored to the unique
                needs of commercial locations throughout Northern New Jersey. In bustling business
                environments, efficient drainage systems are crucial for maintaining operational
                continuity and safeguarding property integrity.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href="/contact/"
                  className="inline-flex items-center gap-2 rounded-full bg-[#c02f2d] px-7 py-3.5 text-sm font-bold text-white transition hover:bg-[#a92527]"
                >
                  Schedule Service
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href="#tailored-solutions"
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-white/10"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE / BADGE */}
          <div className="relative min-h-[460px] lg:min-h-0">
            <img
              src="https://drainsolutionplus.com/wp-content/uploads/2023/09/drainage-commercial.jpg"
              alt="Comprehensive Drain Cleaning & Repairs For Northern NJ Businesses"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/15" />

            {/* Corner Badge */}
            <div className="absolute bottom-8 left-6 flex items-center gap-4 bg-white px-6 py-5 shadow-2xl sm:left-10 sm:px-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#014484] text-white">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div className="border-l border-slate-200 pl-4">
                <span className="block text-xs font-bold uppercase tracking-widest text-[#c02f2d]">
                  Northern NJ
                </span>
                <span className="block text-sm font-bold text-slate-900">
                  Commercial Specialists
                </span>
              </div>
            </div>

            <div className="absolute right-0 top-0 h-24 w-24 bg-[#c02f2d]" />
          </div>
        </div>
      </div>

      {/* ================= SECTION 1: DETAILED HERO CONTENT ================= */}
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#c02f2d]">
              Commercial Expertise
            </span>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
              New Jersey Reliable{" "}
              <span className="text-[#014484]">Commercial Drain Solutions</span>
            </h2>
            <div className="mt-6 h-1 w-20 bg-[#c02f2d]" />
          </div>

          <div className="space-y-6 text-base leading-8 text-slate-600">
            <p>
              We offer specialized drain cleaning and repair services tailored to the unique needs
              of commercial locations throughout Northern New Jersey. In bustling business
              environments, efficient drainage systems are crucial for maintaining operational
              continuity and safeguarding property integrity. Our team understands that commercial
              properties face unique challenges when it comes to drainage, from high volumes of
              usage to complex plumbing systems.
            </p>
            <p>
              Our expert technicians are equipped with cutting-edge tools and extensive experience
              to handle a wide range of issues, ensuring your drainage systems remain in top
              condition. Whether you are dealing with persistent clogs, slow drainage, or other
              drainage problems, we provide prompt and reliable service to minimize disruptions and
              keep your business running smoothly. We approach each job with a focus on thoroughness
              and professionalism, making sure that every aspect of the drainage system is addressed
              with precision and care.
            </p>
          </div>
        </div>
      </div>

      {/* ================= SECTION 2: TAILORED SOLUTIONS ================= */}
      <div id="tailored-solutions" className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
            {/* Visual Box */}
            <div className="relative order-2 lg:order-1">
              <div className="overflow-hidden rounded-sm shadow-xl">
                <img
                  src="https://drainsolutionplus.com/wp-content/uploads/2023/09/commercial-services-drain.webp"
                  alt="Tailored Solutions For Complex Commercial Drainage Challenges"
                  className="h-[440px] w-full object-cover sm:h-[500px]"
                />
              </div>

              <div className="absolute -bottom-6 -right-4 hidden w-72 bg-[#014484] p-6 text-white shadow-2xl sm:block">
                <div className="flex items-center gap-3">
                  <Wrench className="h-6 w-6 text-[#c02f2d]" />
                  <span className="text-xs font-bold uppercase tracking-widest text-white/80">
                    High-Tech Diagnostics
                  </span>
                </div>
                <p className="mt-3 text-sm font-semibold leading-relaxed text-white/90">
                  Video inspection &amp; high-pressure water jetting for exact diagnosis and repairs.
                </p>
              </div>
            </div>

            {/* Content Side */}
            <div className="order-1 lg:order-2">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#c02f2d]">
                Advanced Diagnostic &amp; Resolution
              </span>

              <h2 className="mt-4 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl lg:text-[40px]">
                Tailored Solutions For Complex Commercial Drainage Challenges
              </h2>

              <div className="mt-7 space-y-5 text-base leading-8 text-slate-600">
                <p>
                  we recognize that commercial properties often have more complex drainage systems
                  compared to residential settings. This complexity can lead to a range of issues,
                  including blockages caused by heavy use, grease buildup in kitchen drains, or the
                  need for extensive pipe repairs.
                </p>
                <p>
                  Our team specializes in diagnosing and resolving these intricate problems with
                  tailored solutions that meet the specific needs of your business. We employ
                  advanced technologies such as video inspection and high-pressure water jetting to
                  accurately identify and address blockages or damage within your drainage system.
                </p>
                <p>
                  Our approach allows us to provide targeted repairs and maintenance that not only
                  solve the immediate issue but also help prevent future problems. By offering
                  customized solutions, we ensure that your drainage system is restored to optimal
                  functionality and that your commercial property remains compliant with health and
                  safety standards.
                </p>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                  <Search className="h-5 w-5 shrink-0 text-[#014484]" />
                  <span className="text-sm font-semibold text-slate-800">
                    Video Camera Inspection
                  </span>
                </div>
                <div className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
                  <Droplets className="h-5 w-5 shrink-0 text-[#014484]" />
                  <span className="text-sm font-semibold text-slate-800">
                    High-Pressure Water Jetting
                  </span>
                </div>
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
                Long-Term Reliability
              </span>

              <h2 className="mt-5 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
                Preventive Drain Maintenance For Long-Term Drainage Health
              </h2>

              <p className="mt-6 text-lg font-medium text-white/90">
                Preventive maintenance is a key component of maintaining a healthy drainage system
                and avoiding costly repairs.
              </p>

              <div className="mt-8 h-1 w-20 bg-[#c02f2d]" />
            </div>

            <div className="space-y-6 text-base leading-8 text-white/75">
              <p>
                At Drain Solutions Plus, we emphasize the importance of regular maintenance services
                to keep your commercial drains functioning efficiently. Our preventive maintenance
                programs are designed to identify potential issues before they escalate into major
                problems. We offer routine inspections, cleanings, and system checks to ensure that
                your drainage system operates smoothly and effectively.
              </p>
              <p>
                By addressing minor issues early on, we help you avoid unexpected disruptions and
                extend the lifespan of your plumbing infrastructure. Our commitment to proactive
                maintenance reflects our dedication to helping businesses in Northern New Jersey
                maintain a reliable and trouble-free drainage system. Investing in regular
                maintenance not only protects your property but also enhances your business’s
                operational efficiency and reduces long-term costs.
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
                    Thorough Cleanings
                  </p>
                </div>
                <div className="border border-white/10 bg-white/5 p-4 text-center">
                  <CheckCircle2 className="mx-auto h-6 w-6 text-[#c02f2d]" />
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
                Drain Solutions Plus
              </span>
              <h2 className="mt-3 text-3xl font-extrabold leading-tight text-white sm:text-4xl">
                Comprehensive Drain Cleaning &amp; Repairs For Northern NJ Businesses
              </h2>
              <p className="mt-4 text-sm leading-7 text-white/75">
                New Jersey Reliable Commercial Drain Solutions tailored to your property.
              </p>
            </div>

            <a
              href="/contact/"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#c02f2d] px-8 py-4 text-sm font-bold text-white transition hover:bg-[#a92527]"
            >
              Get Commercial Service
              <ArrowUpRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommercialDrainService;