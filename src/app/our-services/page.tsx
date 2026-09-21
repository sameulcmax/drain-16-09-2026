import CoverageSection from "@/components/home-page/CoverageSection"
import Footer from "@/components/layout/Footer"
import Header from "@/components/layout/Header"
import ServicePageServices from "@/components/our-services-page/ServicePageServices"
import TopBar from "@/components/layout/TopBar"
import React from "react"

const page = () => {
  return (
    <>
    <TopBar />
    <Header />
    <ServicePageServices />
    <CoverageSection/>
    <Footer />
    </>
  )
}

export default page