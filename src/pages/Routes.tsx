import { useState, useCallback, useMemo } from "react";
import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { SlidersHorizontal } from "lucide-react";
import { useRouteFilters } from "@/hooks/useRouteFilters";
import { RouteCard } from "@/components/routes/RouteCard";
import { RouteFiltersPanel } from "@/components/routes/RouteFiltersPanel";
import { RouteSortSelect } from "@/components/routes/RouteSortSelect";
import { RoutesPagination } from "@/components/routes/RoutesPagination";
import { RoutesEmptyState } from "@/components/routes/RoutesEmptyState";
import { RouteDetails } from "@/components/details";
import { Route, difficultyLabels } from "@/data/routesData";
import routeSwissAlps from "@/assets/route-swiss-alps.jpg";

const Routes = () => {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [selectedRouteId, setSelectedRouteId] = useState<string | null>(null);
  
  const {
    filters,
    updateFilter,
    resetFilters,
    activeFilterCount,
    sortBy,
    setSortBy,
    currentPage,
    setCurrentPage,
    totalPages,
    totalResults,
    routes,
  } = useRouteFilters();

  const selectedRoute = useMemo(() => {
    return routes.find((r) => r.id === selectedRouteId) || null;
  }, [routes, selectedRouteId]);

  // Transform route data to RouteDetails format
  const routeDetailsData = useMemo(() => {
    if (!selectedRoute) return null;
    
    return {
      id: selectedRoute.id,
      title: selectedRoute.name,
      activity: "Hiking",
      difficulty: difficultyLabels[selectedRoute.difficulty],
      region: selectedRoute.region,
      transport: "Public Transport",
      description: `Explore the beautiful ${selectedRoute.name} route in ${selectedRoute.region}. This ${selectedRoute.distance}km trail offers stunning views and takes approximately ${selectedRoute.duration} hours to complete. With an elevation gain of ${selectedRoute.elevationGain}m, it's rated as ${difficultyLabels[selectedRoute.difficulty].toLowerCase()} difficulty with a technical grade of ${selectedRoute.technicalGrade}.`,
      mainImage: selectedRoute.image,
      thumbnails: [routeSwissAlps, selectedRoute.image, routeSwissAlps, selectedRoute.image],
      suggestedMeetingLocation: "Main trailhead parking",
      suggestedTransport: "Train + Bus",
      equipment: ["Hiking boots", "Water bottle", "Snacks", "Rain jacket", "Sun protection", "First aid kit"],
      distance: `${selectedRoute.distance}km`,
      ascent: `${selectedRoute.elevationGain}m`,
      descent: `${Math.round(selectedRoute.elevationGain * 0.85)}m`,
      highestPoint: `${1500 + selectedRoute.elevationGain}m`,
      duration: `${selectedRoute.duration}h`,
      rating: selectedRoute.rating.toString(),
      creator: {
        name: "Community",
        badge: "Verified Route",
      },
      pastEvents: [
        {
          id: "past-1",
          title: `${selectedRoute.name} Group Hike`,
          date: "May 15, 2024",
          participantCount: 12,
          organizerName: "Anna",
        },
        {
          id: "past-2",
          title: `Sunrise ${selectedRoute.name}`,
          date: "April 22, 2024",
          participantCount: 8,
          organizerName: "Max",
        },
      ],
      comments: [
        {
          id: "c1",
          author: "Victor",
          content: "Amazing route! The views from the top were incredible.",
          timestamp: "2d ago",
        },
        {
          id: "c2",
          author: "Sarah",
          content: "Well marked trail, suitable for intermediate hikers.",
          timestamp: "1w ago",
        },
      ],
      totalComments: 5,
    };
  }, [selectedRoute]);

  const handleSelectRoute = useCallback((routeId: string) => {
    setSelectedRouteId(routeId);
  }, []);

  return (
    <PageLayout>
      <div className="container py-6">
        {/* Page Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold mb-1">Explore Routes</h1>
          <p className="text-muted-foreground">
            Find the perfect hiking route for your next adventure
          </p>
        </div>

        <div className="flex gap-6">
          {/* Desktop Filters Sidebar */}
          <aside className="hidden lg:block w-80 shrink-0">
            <div className="sticky top-20 border border-border rounded-lg bg-card max-h-[calc(100vh-6rem)] flex flex-col">
              <RouteFiltersPanel
                filters={filters}
                updateFilter={updateFilter}
                resetFilters={resetFilters}
                activeFilterCount={activeFilterCount}
              />
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1 min-w-0">
            {/* Toolbar */}
            <div className="flex items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-3">
                {/* Mobile Filter Button */}
                <Sheet open={mobileFiltersOpen} onOpenChange={setMobileFiltersOpen}>
                  <SheetTrigger asChild>
                    <Button 
                      variant="outline" 
                      className="lg:hidden gap-2"
                      aria-label="Open filters"
                    >
                      <SlidersHorizontal className="h-4 w-4" />
                      Filters
                      {activeFilterCount > 0 && (
                        <Badge variant="secondary" className="rounded-full ml-1">
                          {activeFilterCount}
                        </Badge>
                      )}
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="w-full sm:w-96 p-0">
                    <RouteFiltersPanel
                      filters={filters}
                      updateFilter={updateFilter}
                      resetFilters={resetFilters}
                      activeFilterCount={activeFilterCount}
                      onClose={() => setMobileFiltersOpen(false)}
                    />
                  </SheetContent>
                </Sheet>

                {/* Results Count */}
                <span className="text-sm text-muted-foreground">
                  {totalResults} {totalResults === 1 ? "route" : "routes"} found
                </span>
              </div>

              {/* Sort */}
              <RouteSortSelect value={sortBy} onChange={setSortBy} />
            </div>

            {/* Routes Grid */}
            {routes.length > 0 ? (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                  {routes.map((route) => (
                    <RouteCard
                      key={route.id}
                      route={route}
                      onSelect={handleSelectRoute}
                    />
                  ))}
                </div>

                {/* Pagination */}
                <RoutesPagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={setCurrentPage}
                />
              </>
            ) : (
              <RoutesEmptyState onReset={resetFilters} />
            )}
          </div>
        </div>
      </div>

      {/* Route Details Modal */}
      {routeDetailsData && (
        <RouteDetails
          open={!!selectedRouteId}
          onOpenChange={(open) => !open && setSelectedRouteId(null)}
          route={routeDetailsData}
          onCreateEvent={() => console.log("Create event for route:", selectedRouteId)}
          onViewPastEvent={(eventId) => console.log("View past event:", eventId)}
          onSendMessage={(msg) => console.log("Send message:", msg)}
        />
      )}
    </PageLayout>
  );
};

export default Routes;
