import { MapPin, Calendar, Users } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { LinkWithArrow } from "@/components/ui/link-with-arrow";
import eventSummit from "@/assets/event-summit.jpg";
import eventTrailRun from "@/assets/event-trail-run.jpg";
import eventSunrise from "@/assets/event-sunrise.jpg";
import eventKayak from "@/assets/event-kayak.jpg";

const events = [
  {
    title: "Alpine Summit Challenge",
    location: "Bavarian Alps, Germany",
    date: "Dec 15, 2025",
    attendees: 28,
    image: eventSummit,
  },
  {
    title: "Forest Trail Run",
    location: "Black Forest, Germany",
    date: "Dec 8, 2025",
    attendees: 45,
    image: eventTrailRun,
  },
  {
    title: "Sunrise Hike & Breakfast",
    location: "Swiss Alps",
    date: "Nov 30, 2025",
    attendees: 16,
    image: eventSunrise,
  },
  {
    title: "Sunset Kayaking Tour",
    location: "Lake Lucerne, Switzerland",
    date: "Nov 22, 2025",
    attendees: 12,
    image: eventKayak,
  },
];

const PastEvents = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container">
        {/* Header */}
        <SectionHeader
          title="Past events"
          linkText="View all events"
          linkHref="#"
          hideLinkOnMobile
        />

        {/* Events scroll container */}
        <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
          {events.map((event, index) => (
            <a
              key={event.title}
              href="#"
              className="group flex-shrink-0 w-72 hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="aspect-[16/10] rounded-xl overflow-hidden mb-4">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>{event.date}</span>
                </div>
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                  {event.title}
                </h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span className="truncate">{event.location}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Users className="h-4 w-4" />
                  <span>{event.attendees} attendees</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Mobile link */}
        <LinkWithArrow href="#" className="sm:hidden mt-6">
          View all events
        </LinkWithArrow>
      </div>
    </section>
  );
};

export default PastEvents;
