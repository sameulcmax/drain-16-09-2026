import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import TopBar from '@/components/layout/TopBar'
import ResidentialDrainService from '@/components/residential-drain-service-page-components/ResidentialDrainService'
const page = () => {
  return (
	<>
	<TopBar />
	<Header />
	<ResidentialDrainService />
	<Footer />
	</>
  )
}

export default page