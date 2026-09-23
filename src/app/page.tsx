import AboutSection from "@/components/home-page/AboutSection"
import CoverageSection from "@/components/home-page/CoverageSection"
import Footer from "@/components/layout/Footer"
import Header from "@/components/layout/Header"
import HeroSection from "@/components/home-page/HeroSection"
import RecentWorkSection from "@/components/home-page/RecentWorkSection"
import ReviewsSection from "@/components/home-page/ReviewsSection"
import ServicesMarquee from "@/components/home-page/ServicesMarquee"
import ServicesSection from "@/components/home-page/ServicesSection"
import TopBar from "@/components/layout/TopBar"
import WhyChooseUsSection from "@/components/home-page/WhyChooseUsSection"
import WhatToExpectSection from "@/components/home-page/WhatToExpectSection"

const page = () => {
  return (
    <>
    <TopBar />
    <Header />
    <HeroSection />
    <ServicesMarquee />
    <WhatToExpectSection />
    <AboutSection />
    <CoverageSection />
    <ServicesSection />
    <WhyChooseUsSection />
    <RecentWorkSection />
    <ReviewsSection />
    <Footer />
    </>
  )
}

export default page