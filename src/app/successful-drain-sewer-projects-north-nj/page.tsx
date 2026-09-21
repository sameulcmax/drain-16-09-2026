"use client";

import React, { useState } from "react";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { allGalleryProjects, GalleryItem } from "@/data/galleryData";

export default function SuccessfulProjectsPage() {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  return (
    <>
      <Header />

      <section className="relative w-full bg-[#fafaf9] py-16 sm:py-20 lg:py-24 min-h-screen">
        <div className="mx-auto w-[92%] sm:w-[85%] lg:w-[80%] max-w-[1500px]">
          
          {/* ================= SECTION HEADER ================= */}
          <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
            <div className="flex items-center space-x-2 mb-2.5">
              <span className="h-2 w-2 rounded-full bg-[#c02f2d]" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#c02f2d]">
                Northern New Jersey Portfolio
              </span>
              <span className="h-2 w-2 rounded-full bg-[#c02f2d]" />
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#014485]">
              Successful Drain & Sewer Projects
            </h1>

            <div className="mt-3.5 h-1 w-14 bg-[#c02f2d] rounded-full" />
            
            <p className="mt-4 text-base text-stone-600 max-w-2xl font-normal">
              Explore our extensive archive of successful residential and commercial drain cleaning, piping restoration, and hydro-jetting operations completed across North NJ.
            </p>
          </div>

          {/* ================= COMPACT THUMBNAIL GRID ================= */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4">
            {allGalleryProjects.map((project, index) => (
              <div
                key={project.id}
                onClick={() => setSelectedImage(project)}
                className="group relative aspect-square w-full overflow-hidden rounded-lg bg-stone-200 shadow-sm cursor-pointer border border-stone-200 transition-transform duration-200 hover:-translate-y-1"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  loading={index < 12 ? "eager" : "lazy"}
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 16vw"
                  className="object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                />
                
                <div className="absolute inset-0 bg-black/30 opacity-0 transition-opacity duration-200 group-hover:opacity-100 flex items-center justify-center">
                  <span className="text-white text-xs font-bold uppercase tracking-wider bg-black/60 px-2.5 py-1 rounded">
                    View
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* ================= FULL IMAGE LIGHTBOX MODAL ================= */}
        {selectedImage && (
          <div
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/85 backdrop-blur-md p-4 sm:p-8"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-20 flex items-center justify-center w-10 h-10 rounded-full bg-black/70 text-white font-bold hover:bg-black transition shadow-lg"
                aria-label="Close Modal"
              >
                ✕
              </button>

              {/* Full Image Container */}
              <div className="relative w-full h-[70vh] sm:h-[75vh] bg-stone-950 flex items-center justify-center">
                <Image
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  fill
                  sizes="90vw"
                  className="object-contain"
                  priority
                />
              </div>

              {/* Modal Info Footer */}
              <div className="p-4 sm:p-6 bg-white flex items-center justify-between border-t border-stone-200">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#c02f2d]">
                    Project Showcase
                  </span>
                  <h3 className="text-base sm:text-lg font-black uppercase text-[#014485] mt-0.5">
                    {selectedImage.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="rounded-sm bg-[#c02f2d] px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#a62523] transition"
                >
                  Close Preview
                </button>
              </div>
            </div>
          </div>
        )}
      </section>

      <Footer />
    </>
  );
}