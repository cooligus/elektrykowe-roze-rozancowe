import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import LivingRosarySection from "@/components/LivingRosarySection";
import NewsSection from "@/components/NewsSection";
import Rosary24Section from "@/components/Rosary24Section";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <LivingRosarySection />
      <NewsSection />
      <Rosary24Section />
      <Footer />
    </div>
  );
};

export default Index;