import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ActivityTags from "@/components/ActivityTags";
import MissionStatement from "@/components/MissionStatement";
import PopularRoutes from "@/components/PopularRoutes";
import Communities from "@/components/Communities";
import PastEvents from "@/components/PastEvents";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <ActivityTags />
        <MissionStatement />
        <PopularRoutes />
        <Communities />
        <PastEvents />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
