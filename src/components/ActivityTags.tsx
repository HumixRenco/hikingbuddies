import hikingImg from "@/assets/activity-hiking.jpg";
import climbingImg from "@/assets/activity-climbing.jpg";
import cyclingImg from "@/assets/activity-cycling.jpg";
import waterImg from "@/assets/activity-water.jpg";
import allImg from "@/assets/activity-all.jpg";

const activities = [
  { name: "Hiking", image: hikingImg },
  { name: "Climbing", image: climbingImg },
  { name: "Cycling", image: cyclingImg },
  { name: "Water sports", image: waterImg },
  { name: "All activities", image: allImg },
];

const ActivityTags = () => {
  return (
    <section className="py-12 bg-background">
      <div className="container">
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
          {activities.map((activity, index) => (
            <a
              key={activity.name}
              href="#"
              className="group flex-shrink-0 relative w-36 h-28 rounded-xl overflow-hidden hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={activity.image}
                alt={activity.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
              <span className="absolute bottom-3 left-3 text-sm font-semibold text-background">
                {activity.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActivityTags;
