"use client"

import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import DashboardSection from "@/components/dashboard-section"
import AboutSection from "@/components/about-section"
import ProgramsSection from "@/components/programs-section"
import TrainersSection from "@/components/trainers-section"
import ReviewsSection from "@/components/reviews-section"
import GallerySection from "@/components/gallery-section"
import PricingSection from "@/components/pricing-section"
import ContactSection from "@/components/contact-section"
import FooterSection from "@/components/footer-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <DashboardSection />
      <AboutSection />
      <ProgramsSection />
      <TrainersSection />
      <ReviewsSection />
      <GallerySection />
      <PricingSection />
      <ContactSection />
      <FooterSection />
    </main>
  )
}
