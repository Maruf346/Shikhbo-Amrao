import HeaderTop from '../components/HeaderTop'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import TopCategorySection from '../components/TopCategorySection'
import CoursesSection from '../components/CoursesSection'
import DiscountSection from '../components/DiscountSection'
import WhyChooseUsSection from '../components/WhyChooseUsSection'
import TeachersSection from '../components/TeachersSection'
import TestimonialsSection from '../components/TestimonialsSection'
import BlogSection from '../components/BlogSection'
import NewsletterSection from '../components/NewsletterSection'
import MarqueeSection from '../components/MarqueeSection'
import Footer from '../components/Footer'

export default function HomePage() {
  return (
    <>
      <HeaderTop />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <TopCategorySection />
        <CoursesSection />
        <DiscountSection />
        <WhyChooseUsSection />
        <TeachersSection />
        <TestimonialsSection />
        <BlogSection />
        <NewsletterSection />
      </main>
      <MarqueeSection />
      <Footer />
    </>
  )
}
