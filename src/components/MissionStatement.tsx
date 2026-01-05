import missionImg from "@/assets/mission-community.jpg";

const MissionStatement = () => {
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
              What we stand for
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We are a community of outdoor sports lovers and restless mountain explorers, 
              and we believe it's more fun to do it together. Most of our events are organized 
              by passionate community members, just like you, and therefore free of charge 
              except transportation and personal costs.
            </p>
            <a
              href="#"
              className="inline-flex items-center text-primary font-semibold hover:underline underline-offset-4 transition-all"
            >
              More about community rules and values
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionStatement;
