import PageLayout from "@/components/layout/PageLayout";
import HeroSection from "@/components/HeroSection";
import ActivityTags from "@/components/ActivityTags";
import MissionStatement from "@/components/MissionStatement";
import PopularRoutes from "@/components/PopularRoutes";
import Communities from "@/components/Communities";
import PastEvents from "@/components/PastEvents";

const Index = () => {
  return (
    <PageLayout>
      <HeroSection />
      <ActivityTags />
      <MissionStatement />
      <PopularRoutes />
      <Communities />
      <PastEvents />
    </PageLayout>
  );
};

export default Index;
