import { useLanguage } from "@/i18n/LanguageContext";
import { TranslationKey } from "@/i18n/translations";
import hikingImg from "@/assets/activity-hiking.jpg";
import climbingImg from "@/assets/activity-climbing.jpg";
import cyclingImg from "@/assets/activity-cycling.jpg";
import waterImg from "@/assets/activity-water.jpg";
import allImg from "@/assets/activity-all.jpg";

const activities: { nameKey: TranslationKey; image: string }[] = [
  { nameKey: "activity.hiking", image: hikingImg },
  { nameKey: "activity.climbing", image: climbingImg },
  { nameKey: "activity.cycling", image: cyclingImg },
  { nameKey: "activity.waterSports", image: waterImg },
  { nameKey: "activity.allActivities", image: allImg },
];

const ActivityTags = () => {
  const { t } = useLanguage();

  return (
    <section className="py-12 bg-background">
      <div className="container">
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
          {activities.map((activity, index) => (
            <a
              key={activity.nameKey}
              href="#"
              className="group flex-shrink-0 relative w-36 h-28 rounded-xl overflow-hidden hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={activity.image}
                alt={t(activity.nameKey)}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
              <span className="absolute bottom-3 left-3 text-sm font-semibold text-background">
                {t(activity.nameKey)}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActivityTags;