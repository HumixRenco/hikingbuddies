import { useState, useMemo, useCallback } from "react";
import { 
  Route, 
  routesData, 
  Difficulty, 
  TechnicalGrade, 
  RouteType, 
  SurfaceType,
  Highlight,
  RouteFeature,
  Facility
} from "@/data/routesData";

export type SortOption = 
  | "relevance" 
  | "highest-rated" 
  | "shortest" 
  | "least-elevation" 
  | "duration-asc" 
  | "duration-desc";

export interface RouteFilters {
  difficulty: Difficulty[];
  distanceRange: [number, number];
  durationRange: [number, number];
  elevationRange: [number, number];
  technicalGrades: TechnicalGrade[];
  highlights: Highlight[];
  features: RouteFeature[];
  facilities: Facility[];
  routeTypes: RouteType[];
  surfaces: SurfaceType[];
  dogFriendly: boolean | null;
  kidFriendly: boolean | null;
  minRating: number;
}

const defaultFilters: RouteFilters = {
  difficulty: [],
  distanceRange: [0, 30],
  durationRange: [0, 12],
  elevationRange: [0, 2500],
  technicalGrades: [],
  highlights: [],
  features: [],
  facilities: [],
  routeTypes: [],
  surfaces: [],
  dogFriendly: null,
  kidFriendly: null,
  minRating: 0,
};

const ITEMS_PER_PAGE = 24;

export function useRouteFilters() {
  const [filters, setFilters] = useState<RouteFilters>(defaultFilters);
  const [sortBy, setSortBy] = useState<SortOption>("relevance");
  const [currentPage, setCurrentPage] = useState(1);

  const updateFilter = useCallback(<K extends keyof RouteFilters>(
    key: K,
    value: RouteFilters[K]
  ) => {
    setFilters(prev => ({ ...prev, [key]: value }));
    setCurrentPage(1); // Reset to first page when filters change
  }, []);

  const resetFilters = useCallback(() => {
    setFilters(defaultFilters);
    setCurrentPage(1);
  }, []);

  const activeFilterCount = useMemo(() => {
    let count = 0;
    if (filters.difficulty.length > 0) count++;
    if (filters.distanceRange[0] > 0 || filters.distanceRange[1] < 30) count++;
    if (filters.durationRange[0] > 0 || filters.durationRange[1] < 12) count++;
    if (filters.elevationRange[0] > 0 || filters.elevationRange[1] < 2500) count++;
    if (filters.technicalGrades.length > 0) count++;
    if (filters.highlights.length > 0) count++;
    if (filters.features.length > 0) count++;
    if (filters.facilities.length > 0) count++;
    if (filters.routeTypes.length > 0) count++;
    if (filters.surfaces.length > 0) count++;
    if (filters.dogFriendly !== null) count++;
    if (filters.kidFriendly !== null) count++;
    if (filters.minRating > 0) count++;
    return count;
  }, [filters]);

  const filteredRoutes = useMemo(() => {
    return routesData.filter(route => {
      // Difficulty filter
      if (filters.difficulty.length > 0 && !filters.difficulty.includes(route.difficulty)) {
        return false;
      }

      // Distance range
      if (route.distance < filters.distanceRange[0] || route.distance > filters.distanceRange[1]) {
        return false;
      }

      // Duration range
      if (route.duration < filters.durationRange[0] || route.duration > filters.durationRange[1]) {
        return false;
      }

      // Elevation range
      if (route.elevationGain < filters.elevationRange[0] || route.elevationGain > filters.elevationRange[1]) {
        return false;
      }

      // Technical grades
      if (filters.technicalGrades.length > 0 && !filters.technicalGrades.includes(route.technicalGrade)) {
        return false;
      }

      // Highlights (any match)
      if (filters.highlights.length > 0 && !filters.highlights.some(h => route.highlights.includes(h))) {
        return false;
      }

      // Features (any match)
      if (filters.features.length > 0 && !filters.features.some(f => route.features.includes(f))) {
        return false;
      }

      // Facilities (any match)
      if (filters.facilities.length > 0 && !filters.facilities.some(f => route.facilities.includes(f))) {
        return false;
      }

      // Route types
      if (filters.routeTypes.length > 0 && !filters.routeTypes.includes(route.routeType)) {
        return false;
      }

      // Surfaces
      if (filters.surfaces.length > 0 && !filters.surfaces.includes(route.surface)) {
        return false;
      }

      // Dog friendly
      if (filters.dogFriendly !== null && route.dogFriendly !== filters.dogFriendly) {
        return false;
      }

      // Kid friendly
      if (filters.kidFriendly !== null && route.kidFriendly !== filters.kidFriendly) {
        return false;
      }

      // Min rating
      if (filters.minRating > 0 && route.rating < filters.minRating) {
        return false;
      }

      return true;
    });
  }, [filters]);

  const sortedRoutes = useMemo(() => {
    const sorted = [...filteredRoutes];
    
    switch (sortBy) {
      case "highest-rated":
        sorted.sort((a, b) => b.rating - a.rating);
        break;
      case "shortest":
        sorted.sort((a, b) => a.distance - b.distance);
        break;
      case "least-elevation":
        sorted.sort((a, b) => a.elevationGain - b.elevationGain);
        break;
      case "duration-asc":
        sorted.sort((a, b) => a.duration - b.duration);
        break;
      case "duration-desc":
        sorted.sort((a, b) => b.duration - a.duration);
        break;
      case "relevance":
      default:
        // Default order (by rating * reviewCount for relevance)
        sorted.sort((a, b) => (b.rating * Math.log(b.reviewCount + 1)) - (a.rating * Math.log(a.reviewCount + 1)));
        break;
    }
    
    return sorted;
  }, [filteredRoutes, sortBy]);

  const totalPages = Math.ceil(sortedRoutes.length / ITEMS_PER_PAGE);
  
  const paginatedRoutes = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return sortedRoutes.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [sortedRoutes, currentPage]);

  return {
    filters,
    updateFilter,
    resetFilters,
    activeFilterCount,
    sortBy,
    setSortBy,
    currentPage,
    setCurrentPage,
    totalPages,
    totalResults: sortedRoutes.length,
    routes: paginatedRoutes,
  };
}
