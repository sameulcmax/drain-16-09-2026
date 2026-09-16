import AboutSection from '@/components/AboutSection'
import CoverageSection from '@/components/CoverageSection'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import RecentWorkSection from '@/components/RecentWorkSection'
import ReviewsSection from '@/components/ReviewsSection'
import ServicesSection from '@/components/ServicesSection'
import TopBar from '@/components/TopBar'
import WhyChooseUsSection from '@/components/WhyChooseUsSection'

const page = () => {
  return (
    <>
    <TopBar />
    <Header />
    <HeroSection />
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