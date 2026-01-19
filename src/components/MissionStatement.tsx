import { LinkWithArrow } from "@/components/ui/link-with-arrow";
import { useLanguage } from "@/i18n/LanguageContext";
import missionImg from "@/assets/mission-community.jpg";

const MissionStatement = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 bg-secondary">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image */}
          <div className="rounded-2xl overflow-hidden shadow-card">
            <img
              src={missionImg}
              alt="Group of friends hiking together on a mountain trail"
              className="w-full h-full object-cover aspect-square md:aspect-[4/3]"
            />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              {t("mission.title")}
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {t("mission.description")}
            </p>
            <LinkWithArrow href="#">
              {t("mission.linkText")}
            </LinkWithArrow>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionStatement;