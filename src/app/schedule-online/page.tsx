import ContactBookingSection from "@/components/contact-page/ContactBookingSection"
import CoverageSection from "@/components/home-page/CoverageSection"
import Footer from "@/components/layout/Footer"
import Header from "@/components/layout/Header"
import TopBar from "@/components/layout/TopBar"
import React from "react"

const page = () => {
  return (
    <>
    <TopBar />
    <Header />
    <ContactBookingSection />
    <CoverageSection/>
    <Footer />
    </>
  )
}

export default page