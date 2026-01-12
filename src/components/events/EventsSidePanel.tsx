import { SidePanelHeader } from "./side-panel/SidePanelHeader";
import { SidePanelEventsList } from "./side-panel/SidePanelEventsList";

function EventsSidePanel() {
  const upcomingEvents = [
    {
      date: "Jun 30",
      day: "Sat",
      title: "Full-carpool After Work hike to Kampenwand",
      time: "at 6:45",
      location: "Munich",
      transport: "Train",
      level: "Medium",
      activityType: "Cycling",
      distance: "18km",
      elevation: "560m",
      participantCount: "+14",
      organizerName: "Jean-Chrisian",
      status: "full"
    },
    {
      date: "Jun 30",
      day: "Sat",
      title: "Full-carpool After Work hike to Kampenwand",
      time: "at 6:45",
      location: "Munich",
      transport: "Train",
      level: "Medium",
      activityType: "Cycling",
      distance: "18km",
      elevation: "560m",
      participantCount: "+14",
      organizerName: "Jean-Chrisian",
      status: "full"
    }
  ];

  const pastEvents = [
    {
      date: "Jun 30",
      day: "Sat",
      title: "Full-carpool After Work hike to Kampenwand",
      time: "at 6:45",
      location: "Munich",
      transport: "Train",
      level: "Medium",
      activityType: "Cycling",
      distance: "18km",
      elevation: "560m",
      participantCount: "+14",
      organizerName: "Jean-Chrisian",
      showReviewButton: true,
      isPastEvent: true,
      photos: [
        "https://api.builder.io/api/v1/image/assets/TEMP/f115487ff6fbccffa78469dbb40bd9e88a458ee3?placeholderIfAbsent=true&apiKey=e94f22c2b2ff4da7886091970c9846de",
        "https://api.builder.io/api/v1/image/assets/TEMP/7de84dc1331865e3392493cea33fdd89ae558bd6?placeholderIfAbsent=true&apiKey=e94f22c2b2ff4da7886091970c9846de",
        "https://api.builder.io/api/v1/image/assets/TEMP/b1a08f165e20a5f2bcbb8e9581215c3180ad121a?placeholderIfAbsent=true&apiKey=e94f22c2b2ff4da7886091970c9846de",
        "https://api.builder.io/api/v1/image/assets/TEMP/a488c44dbf045513a87225542c1d305f7485bcfb?placeholderIfAbsent=true&apiKey=e94f22c2b2ff4da7886091970c9846de"
      ]
    }
  ];

  return (
    <aside className="px-6 py-8 rounded-xl max-w-[363px]">
      <SidePanelHeader title="Your upcoming events" />
      <SidePanelEventsList events={upcomingEvents} />

      <div className="mt-8">
        <SidePanelHeader title="Your past events" />
        <SidePanelEventsList events={pastEvents} />
      </div>
    </aside>
  );
}

export default EventsSidePanel;
