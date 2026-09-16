import CoverageSection from '@/components/CoverageSection'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import ServicePageServices from '@/components/ServicePageServices'
import TopBar from '@/components/TopBar'
import React from 'react'

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