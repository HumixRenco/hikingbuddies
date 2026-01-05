import dolomitesImg from "@/assets/route-dolomites.jpg";
import swissAlpsImg from "@/assets/route-swiss-alps.jpg";
import pyreneesImg from "@/assets/route-pyrenees.jpg";
import bavariaImg from "@/assets/route-bavaria.jpg";
import lakeDistrictImg from "@/assets/route-lake-district.jpg";
import tyrolImg from "@/assets/route-tyrol.jpg";

const routes = [
  { name: "Bavaria, Germany", routes: 823, image: bavariaImg },
  { name: "Dolomites, Italy", routes: 342, image: dolomitesImg },
  { name: "Swiss Alps", routes: 912, image: swissAlpsImg },
  { name: "Lake District, England", routes: 256, image: lakeDistrictImg },
  { name: "Pyrenees, France", routes: 487, image: pyreneesImg },
  { name: "Tyrol, Austria", routes: 634, image: tyrolImg },
];

const PopularRoutes = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Explore hiking routes
          </h2>
          <a
            href="#"
            className="text-primary font-semibold hover:underline underline-offset-4 transition-all hidden sm:inline-flex items-center"
          >
            Explore more routes
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

        {/* Routes grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {routes.map((route, index) => (
            <a
              key={route.name}
              href="#"
              className="group block hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-[3/4] rounded-xl overflow-hidden mb-3">
                <img
                  src={route.image}
                  alt={route.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors">
                {route.name}
              </h3>
              <p className="text-sm text-muted-foreground">{route.routes} routes</p>
            </a>
          ))}
        </div>

        {/* Mobile link */}
        <a
          href="#"
          className="text-primary font-semibold hover:underline underline-offset-4 transition-all sm:hidden mt-6 inline-flex items-center"
        >
          Explore more routes
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
    </section>
  );
};

export default PopularRoutes;
