import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EventFilters from "@/components/events/EventFilters";
import EventsList from "@/components/events/EventsList";
import EventsSidePanel from "@/components/events/EventsSidePanel";
import { useState } from "react";

const Events = () => {
  const [locationFilter, setLocationFilter] = useState("munich");
  const [activityFilter, setActivityFilter] = useState("all");

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1 container py-8">
        <h1 className="text-4xl font-bold text-foreground mb-6">Events</h1>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1 min-w-0">
            <EventFilters
              locationFilter={locationFilter}
              setLocationFilter={setLocationFilter}
              activityFilter={activityFilter}
              setActivityFilter={setActivityFilter}
            />
            <EventsList 
              locationFilter={locationFilter}
              activityFilter={activityFilter}
            />
          </div>
          
          {/* Side Panel */}
          <aside className="w-full lg:w-80 shrink-0">
            <EventsSidePanel />
          </aside>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Events;
