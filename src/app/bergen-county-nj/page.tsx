'use client'
import BergenCountyNj from '@/components/bergen-county-nj-page-components/BergenCountyNj'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import TopBar from '@/components/layout/TopBar'



const page = () => {
  return (
    <>
    <TopBar />
    <Header />
    <BergenCountyNj />
    <Footer />
    </>
  )
}

export default page