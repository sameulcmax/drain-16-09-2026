import CommercialSewerService from '@/components/commercial-sewer-service-page-components/CommercialSewerService'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import TopBar from '@/components/layout/TopBar'
const page = () => {
  return (
	<>
	<TopBar />
	<Header />
	<CommercialSewerService />
	<Footer />
	</>
  )
}

export default page