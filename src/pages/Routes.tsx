import { useState, useCallback } from "react";
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
import { toast } from "@/hooks/use-toast";

const Routes = () => {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
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

  const handleSelectRoute = useCallback((routeId: string) => {
    toast({
      title: "Route Selected",
      description: `Route ID: ${routeId}`,
    });
    console.log("Selected route ID:", routeId);
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
            <div className="sticky top-20 border border-border rounded-lg bg-card overflow-hidden max-h-[calc(100vh-6rem)]">
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
    </PageLayout>
  );
};

export default Routes;
