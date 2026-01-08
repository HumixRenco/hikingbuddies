import { SectionHeader } from "@/components/ui/section-header";
import { LinkWithArrow } from "@/components/ui/link-with-arrow";
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
        <SectionHeader
          title="Explore hiking routes"
          linkText="Explore more routes"
          linkHref="#"
          hideLinkOnMobile
        />

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
        <LinkWithArrow href="#" className="sm:hidden mt-6">
          Explore more routes
        </LinkWithArrow>
      </div>
    </section>
  );
};

export default PopularRoutes;
