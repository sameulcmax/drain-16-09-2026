export interface ServiceItem {
  id: string;
  tag: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  ctaText: string;
  ctaLink: string;
  bulletPoints: string[];
  footerHeading: string;
  footerText: string;
}

export const allServicesData: ServiceItem[] = [
  {
    id: "residential-drain-cleaning",
    tag: "Residential Solutions",
    title: "Residential Drain Cleaning",
    description:
      "We specialise in providing top-notch residential drain cleaning services to ensure your home plumbing system runs smoothly and efficiently.",
    longDescription:
      "Household clogs can build up over time from hair, grease, soap scum, and foreign objects. Our skilled professionals use advanced techniques and heavy-duty power snaking equipment to tackle even the most stubborn household drain clogs and blockages, restoring full flow to your sinks, showers, and tubs without damaging your pipes.",
    image: "/images/residential-drain-clean.jpg",
    ctaText: "Drain Cleaning",
    ctaLink: "/our-services/residential-drain-cleaning",
    bulletPoints: [
      "Advanced power snaking and mechanical augering equipment",
      "Eco-friendly treatments safe for household piping networks",
      "Thorough line flushing to prevent immediate recurring clogs",
      "Prevention of costly emergency water damage across sinks and showers"
    ],
    footerHeading: "Experiencing Slow Drainage at Home?",
    footerText: "Don't let a minor clog turn into a major plumbing emergency. Our professional technicians are ready to restore your home's water flow quickly and cleanly."
  },
  {
    id: "residential-drain-repairs",
    tag: "Home Piping Restorations",
    title: "Residential Drain Repairs",
    description:
      "From cracked under-sink branch lines to misaligned bathroom drain pipes, our team delivers precise, long-lasting residential repairs.",
    longDescription:
      "Damaged or misaligned pipes can lead to slow drainage, unpleasant sewer smells, and recurring backups that threaten your home's foundation. We eliminate these issues with minimal disruption to your walls, floors, and daily routine.",
    image: "/images/residential-drain-repair.jpg",
    ctaText: "Drain Repairs",
    ctaLink: "/our-services/residential-drain-repairs",
    bulletPoints: [
      "Under-sink branch line restorations and PVC/metal piping fixes",
      "Sewer odor diagnostics to pinpoint hidden cracks and gas leaks",
      "Precision pipe alignment correcting sagging lines and pooling water",
      "Protection against structural wood or drywall rot from minor leaks"
    ],
    footerHeading: "Notice Unpleasant Odors or Leaks?",
    footerText: "Protect your property from hidden water damage and persistent smells. Contact our expert residential repair team for a thorough evaluation today."
  },
  {
    id: "commercial-drain-repairs",
    tag: "Commercial & Industrial",
    title: "Commercial Drain Repairs",
    description:
      "High-volume grease traps, restaurant interceptors, and industrial sewer stacks require certified heavy-duty care.",
    longDescription:
      "Commercial plumbing failures can halt business operations and lead to regulatory fines. We provide trenchless pipe relining, structural reinforcement, and rapid emergency repairs tailored specifically for commercial property managers across New Jersey.",
    image: "/images/commercial-drain-repair.jpg",
    ctaText: "Commercial Repairs",
    ctaLink: "/our-services/commercial-drain-repairs",
    bulletPoints: [
      "Trenchless pipe relining without digging up parking lots or floors",
      "Grease trap and interceptor fixes ensuring code compliance",
      "Structural stack reinforcement for multi-story buildings",
      "Minimal downtime solutions customized for active businesses"
    ],
    footerHeading: "Need Commercial Plumbing Support?",
    footerText: "Avoid costly business interruptions and health code violations. Partner with our certified heavy-duty commercial repair specialists."
  },
  {
    id: "commercial-drain-cleaning",
    tag: "Heavy-Duty Jetting",
    title: "Commercial Drain Cleaning",
    description:
      "Engineered for municipal buildings, food service kitchens, and industrial complexes.",
    longDescription:
      "Our specialized high-pressure hydro-jetting rigs strip hardened grease, scale, and heavy debris from commercial pipelines to maintain full compliance and continuous flow under heavy operational demands.",
    image: "/images/commercial-drain-clean.jpg",
    ctaText: "Commercial Cleaning",
    ctaLink: "/our-services/commercial-drain-cleaning",
    bulletPoints: [
      "High-pressure hydro-jetting blasting away accumulated grease and scale",
      "Scheduled maintenance programs preventing unexpected facility shutdowns",
      "Large diameter pipe clearing for industrial complexes and kitchens",
      "Restoration of pipelines back to 100% inner diameter capacity"
    ],
    footerHeading: "Keep Your Facility Flowing Freely",
    footerText: "Schedule routine heavy-duty hydro-jetting to ensure continuous pipeline performance and protect your commercial enterprise."
  },
  {
    id: "faucet-leak-repairs",
    tag: "Fixture & Leak Care",
    title: "Faucet & Leak Repairs",
    description:
      "Hidden water leaks and leaking valves damage subfloors and spike utility bills.",
    longDescription:
      "Our technicians identify subterranean and in-wall pipe bursts quickly, repairing or replacing worn fixtures, valves, and water supply lines with clean precision to protect your property and lower water bills.",
    image: "/images/leak-repair.jpg",
    ctaText: "Leak Repairs",
    ctaLink: "/our-services/faucet-leak-repairs",
    bulletPoints: [
      "Advanced acoustic and thermal imaging leak detection",
      "Premium valve and fixture replacement resisting future wear",
      "Surgical in-wall line repairs with minimal wall damage",
      "Lower monthly utility bills and prevention of structural rot"
    ],
    footerHeading: "Spotted a Hidden Leak or Drip?",
    footerText: "Stop water waste and prevent destructive mold growth before it starts. Reach out to our fixture and leak care professionals."
  },
  {
    id: "main-line-video-sewer-inspection",
    tag: "HD Video Diagnostics",
    title: "Main Line Video Sewer Inspection",
    description:
      "Take the guesswork out of subterranean pipeline issues with advanced fiber-optic technology.",
    longDescription:
      "Our fiber-optic high-definition sewer cameras travel deep into your main line to locate root intrusions, collapsed channels, and severe blockages with pinpoint depth accuracy before any digging begins.",
    image: "/images/sewer-inspection.jpg",
    ctaText: "Schedule Inspection",
    ctaLink: "/our-services/main-line-video-sewer-inspection",
    bulletPoints: [
      "HD fiber-optic cameras providing real-time interior footage",
      "Pinpoint depth locators to find exact problem spots underground",
      "Digital video recordings provided for your records or insurance",
      "Elimination of guesswork and unnecessary exploratory digging"
    ],
    footerHeading: "Unsure What’s Hiding in Your Pipes?",
    footerText: "Take the guesswork out of subterranean pipeline issues with our high-definition sewer camera inspection services."
  },
];