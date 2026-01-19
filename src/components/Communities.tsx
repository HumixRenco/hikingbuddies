import { MapPin, Users } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const communities = [
  { city: "Munich", country: "Germany", members: 2450 },
  { city: "Zurich", country: "Switzerland", members: 1820 },
  { city: "Geneva", country: "Switzerland", members: 1340 },
  { city: "Vienna", country: "Austria", members: 1560 },
  { city: "Denver", country: "USA", members: 2100 },
  { city: "Vancouver", country: "Canada", members: 1890 },
];

const Communities = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 bg-secondary">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            {t("communities.title")}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("communities.description")}
          </p>
        </div>

        {/* Communities grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {communities.map((community, index) => (
            <a
              key={community.city}
              href="#"
              className="group bg-card rounded-xl p-4 hover-lift border border-border hover:border-primary/30 transition-all"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="h-4 w-4 text-primary" />
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {community.city}
                </h3>
              </div>
              <p className="text-sm text-muted-foreground mb-2">{community.country}</p>
              <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <Users className="h-3.5 w-3.5" />
                <span>{community.members.toLocaleString()} {t("communities.members")}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Communities;