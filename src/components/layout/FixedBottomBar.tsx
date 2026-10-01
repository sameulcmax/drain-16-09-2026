import React from 'react';

interface FixedBottomBarProps {
  /** Phone number for the Call Now action (e.g., "+1234567890") */
  phoneNumber: string;
  /** Link or anchor for the Services button (default: "#services") */
  servicesHref?: string;
  /** Link or anchor for the Location button (default: "#location") */
  locationHref?: string;
  /** Optional custom class name for styling container extensions */
  className?: string;
}

export const FixedBottomBar: React.FC<FixedBottomBarProps> = ({
  phoneNumber,
  servicesHref = '#services',
  locationHref = '#location',
  className = '',
}) => {
  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-red-100 shadow-[0_-4px_20px_rgba(239,68,68,0.08)] md:hidden pb-[env(safe-area-inset-bottom)] ${className}`}
    >
      <div className="grid grid-cols-3 h-16 px-2 py-1 gap-1">
        
        {/* Call Now Button (Primary CTA) */}
        <a
          href={`tel:${phoneNumber}`}
          className="flex flex-col items-center justify-center rounded-xl bg-red-50 text-red-600 hover:bg-red-100 active:scale-95 transition-all group"
          aria-label="Call Now"
        >
          <svg className="w-5 h-5 mb-0.5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          <span className="text-[11px] font-bold tracking-wide">Call Now</span>
        </a>

        {/* Services Button */}
        <a
          href={servicesHref}
          className="flex flex-col items-center justify-center rounded-xl text-gray-700 hover:text-red-600 hover:bg-red-50/50 active:scale-95 transition-all group"
          aria-label="View Services"
        >
          <svg className="w-5 h-5 mb-0.5 text-red-500 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          <span className="text-[11px] font-medium">Services</span>
        </a>

        {/* Location Button */}
        <a
          href={locationHref}
          className="flex flex-col items-center justify-center rounded-xl text-gray-700 hover:text-red-600 hover:bg-red-50/50 active:scale-95 transition-all group"
          aria-label="View Location"
        >
          <svg className="w-5 h-5 mb-0.5 text-red-500 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <span className="text-[11px] font-medium">Location</span>
        </a>

      </div>
    </div>
  );
};