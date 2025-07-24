import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import ChallengeSection from "@/components/challenge-section";
import ImpactMetrics from "@/components/impact-metrics";
import StorySection from "@/components/story-section";
import PhotoGallery from "@/components/photo-gallery";
import BehindScenesGallery from "@/components/behind-scenes-gallery";
import CommunityImpactGallery from "@/components/community-impact-gallery";
import DonationSection from "@/components/donation-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import DonationModal from "@/components/donation-modal";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F7F5F3]">
      <Header />
      <HeroSection />
      <ChallengeSection />
      <ImpactMetrics />
      <StorySection />
      <PhotoGallery />
      <BehindScenesGallery />
      <CommunityImpactGallery />
      <ContactSection />
      <Footer />
      <DonationModal />
    </div>
  );
}
