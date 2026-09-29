import CustomerReviews from '@/components/customer-review-page-components/CustomerReviews'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import TopBar from '@/components/layout/TopBar'

const page = () => {
  return (
	<>
	<TopBar />
	<Header />
	<CustomerReviews />
	<Footer />
	</>
  )
}

export default page