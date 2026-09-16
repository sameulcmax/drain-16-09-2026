import AboutSection from '@/components/AboutSection'
import CoverageSection from '@/components/CoverageSection'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import TopBar from '@/components/TopBar'
import React from 'react'

const page = () => {
  return (
    <>
    <TopBar />
    <Header />
    <AboutSection />
    <CoverageSection />
    <Footer />
    </>
  )
}

export default page