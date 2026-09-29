import CommercialDrainAndSewer from '@/components/commercial-drain-and-sewer-page-components/CommercialDrainAndSewer'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import TopBar from '@/components/layout/TopBar'
import React from 'react'

const page = () => {
  return (
	<>
	<TopBar />
	<Header />
	<CommercialDrainAndSewer />
	<Footer />
	</>
  )
}

export default page