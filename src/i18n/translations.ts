export type Language = "en" | "fr" | "it" | "es";

export const languageNames: Record<Language, string> = {
  en: "English",
  fr: "Français",
  it: "Italiano",
  es: "Español",
};

export const translations = {
  en: {
    // Page header
    "routes.title": "Explore Routes",
    "routes.subtitle": "Find the perfect hiking route for your next adventure",
    
    // Filter panel
    "filters.title": "Filters",
    "filters.reset": "Reset",
    "filters.difficulty": "Difficulty",
    "filters.distance": "Distance",
    "filters.duration": "Duration",
    "filters.elevationGain": "Elevation Gain",
    "filters.technicalGrade": "Technical Grade",
    "filters.highlights": "Highlights",
    "filters.routeFeatures": "Route Features",
    "filters.facilities": "Facilities",
    "filters.routeType": "Route Type",
    "filters.surface": "Surface / Terrain",
    "filters.dogFriendly": "Dog-friendly",
    "filters.kidFriendly": "Kid-friendly",
    "filters.minRating": "Minimum Rating",
    "filters.any": "Any",
    
    // Difficulty labels
    "difficulty.easy": "Easy",
    "difficulty.moderate": "Moderate",
    "difficulty.hard": "Hard",
    
    // Highlight labels
    "highlight.lakes": "Lakes",
    "highlight.rivers": "Rivers",
    "highlight.waterfalls": "Waterfalls",
    "highlight.coastline": "Coastline",
    "highlight.historical-sites": "Historical Sites",
    "highlight.viewpoints": "Viewpoints",
    "highlight.forest": "Forest",
    "highlight.meadow": "Meadow",
    
    // Feature labels
    "feature.via-ferrata": "Via Ferrata",
    "feature.scrambling": "Scrambling",
    "feature.canyoning": "Canyoning",
    "feature.ridge-walk": "Ridge Walk",
    "feature.mountain-pass": "Mountain Pass",
    "feature.avoid-main-roads": "Avoids Main Roads",
    
    // Facility labels
    "facility.restaurants": "Restaurants",
    "facility.cafes": "Cafés",
    "facility.mountain-huts": "Mountain Huts",
    "facility.potable-water": "Potable Water",
    "facility.toilets": "Toilets",
    "facility.parking": "Parking",
    "facility.public-transport": "Public Transport",
    
    // Route type labels
    "routeType.loop": "Loop",
    "routeType.out-and-back": "Out & Back",
    "routeType.point-to-point": "Point to Point",
    
    // Surface labels
    "surface.dirt": "Dirt",
    "surface.rocky": "Rocky",
    "surface.gravel": "Gravel",
    "surface.paved": "Paved",
    "surface.mixed": "Mixed",
    
    // Sort options
    "sort.relevance": "Relevance",
    "sort.highest-rated": "Highest Rated",
    "sort.shortest": "Shortest Distance",
    "sort.least-elevation": "Least Elevation",
    "sort.duration-asc": "Duration (Low to High)",
    "sort.duration-desc": "Duration (High to Low)",
    "sort.placeholder": "Sort by",
    
    // Results & pagination
    "results.route": "route",
    "results.routes": "routes",
    "results.found": "found",
    "pagination.previous": "Previous",
    "pagination.next": "Next",
    
    // Empty state
    "empty.title": "No routes match your filters",
    "empty.description": "Try adjusting your filter criteria or reset all filters to see all available routes.",
    "empty.resetButton": "Reset Filters",
    
    // Route card
    "routeCard.select": "Select",
    
    // Navbar
    "nav.events": "Events",
    "nav.routes": "Routes",
    "nav.community": "Community",
    "nav.addEvent": "Add event",
  },
  
  fr: {
    // Page header
    "routes.title": "Explorer les Itinéraires",
    "routes.subtitle": "Trouvez l'itinéraire de randonnée parfait pour votre prochaine aventure",
    
    // Filter panel
    "filters.title": "Filtres",
    "filters.reset": "Réinitialiser",
    "filters.difficulty": "Difficulté",
    "filters.distance": "Distance",
    "filters.duration": "Durée",
    "filters.elevationGain": "Dénivelé Positif",
    "filters.technicalGrade": "Cotation Technique",
    "filters.highlights": "Points d'Intérêt",
    "filters.routeFeatures": "Caractéristiques",
    "filters.facilities": "Équipements",
    "filters.routeType": "Type de Parcours",
    "filters.surface": "Surface / Terrain",
    "filters.dogFriendly": "Chiens acceptés",
    "filters.kidFriendly": "Adapté aux enfants",
    "filters.minRating": "Note Minimum",
    "filters.any": "Toutes",
    
    // Difficulty labels
    "difficulty.easy": "Facile",
    "difficulty.moderate": "Modéré",
    "difficulty.hard": "Difficile",
    
    // Highlight labels
    "highlight.lakes": "Lacs",
    "highlight.rivers": "Rivières",
    "highlight.waterfalls": "Cascades",
    "highlight.coastline": "Côte",
    "highlight.historical-sites": "Sites Historiques",
    "highlight.viewpoints": "Points de Vue",
    "highlight.forest": "Forêt",
    "highlight.meadow": "Prairie",
    
    // Feature labels
    "feature.via-ferrata": "Via Ferrata",
    "feature.scrambling": "Escalade Facile",
    "feature.canyoning": "Canyoning",
    "feature.ridge-walk": "Crête",
    "feature.mountain-pass": "Col de Montagne",
    "feature.avoid-main-roads": "Évite les Routes Principales",
    
    // Facility labels
    "facility.restaurants": "Restaurants",
    "facility.cafes": "Cafés",
    "facility.mountain-huts": "Refuges",
    "facility.potable-water": "Eau Potable",
    "facility.toilets": "Toilettes",
    "facility.parking": "Parking",
    "facility.public-transport": "Transports en Commun",
    
    // Route type labels
    "routeType.loop": "Boucle",
    "routeType.out-and-back": "Aller-Retour",
    "routeType.point-to-point": "Point à Point",
    
    // Surface labels
    "surface.dirt": "Terre",
    "surface.rocky": "Rocheux",
    "surface.gravel": "Gravier",
    "surface.paved": "Pavé",
    "surface.mixed": "Mixte",
    
    // Sort options
    "sort.relevance": "Pertinence",
    "sort.highest-rated": "Mieux Notés",
    "sort.shortest": "Distance la Plus Courte",
    "sort.least-elevation": "Dénivelé le Plus Faible",
    "sort.duration-asc": "Durée (Croissante)",
    "sort.duration-desc": "Durée (Décroissante)",
    "sort.placeholder": "Trier par",
    
    // Results & pagination
    "results.route": "itinéraire",
    "results.routes": "itinéraires",
    "results.found": "trouvé(s)",
    "pagination.previous": "Précédent",
    "pagination.next": "Suivant",
    
    // Empty state
    "empty.title": "Aucun itinéraire ne correspond à vos filtres",
    "empty.description": "Essayez d'ajuster vos critères de filtrage ou réinitialisez tous les filtres pour voir tous les itinéraires disponibles.",
    "empty.resetButton": "Réinitialiser les Filtres",
    
    // Route card
    "routeCard.select": "Sélectionner",
    
    // Navbar
    "nav.events": "Événements",
    "nav.routes": "Itinéraires",
    "nav.community": "Communauté",
    "nav.addEvent": "Ajouter un événement",
  },
  
  it: {
    // Page header
    "routes.title": "Esplora i Percorsi",
    "routes.subtitle": "Trova il percorso escursionistico perfetto per la tua prossima avventura",
    
    // Filter panel
    "filters.title": "Filtri",
    "filters.reset": "Reimposta",
    "filters.difficulty": "Difficoltà",
    "filters.distance": "Distanza",
    "filters.duration": "Durata",
    "filters.elevationGain": "Dislivello Positivo",
    "filters.technicalGrade": "Grado Tecnico",
    "filters.highlights": "Punti di Interesse",
    "filters.routeFeatures": "Caratteristiche",
    "filters.facilities": "Servizi",
    "filters.routeType": "Tipo di Percorso",
    "filters.surface": "Superficie / Terreno",
    "filters.dogFriendly": "Cani ammessi",
    "filters.kidFriendly": "Adatto ai bambini",
    "filters.minRating": "Valutazione Minima",
    "filters.any": "Tutte",
    
    // Difficulty labels
    "difficulty.easy": "Facile",
    "difficulty.moderate": "Moderato",
    "difficulty.hard": "Difficile",
    
    // Highlight labels
    "highlight.lakes": "Laghi",
    "highlight.rivers": "Fiumi",
    "highlight.waterfalls": "Cascate",
    "highlight.coastline": "Costa",
    "highlight.historical-sites": "Siti Storici",
    "highlight.viewpoints": "Punti Panoramici",
    "highlight.forest": "Foresta",
    "highlight.meadow": "Prato",
    
    // Feature labels
    "feature.via-ferrata": "Via Ferrata",
    "feature.scrambling": "Arrampicata Facile",
    "feature.canyoning": "Canyoning",
    "feature.ridge-walk": "Cresta",
    "feature.mountain-pass": "Passo di Montagna",
    "feature.avoid-main-roads": "Evita Strade Principali",
    
    // Facility labels
    "facility.restaurants": "Ristoranti",
    "facility.cafes": "Caffè",
    "facility.mountain-huts": "Rifugi",
    "facility.potable-water": "Acqua Potabile",
    "facility.toilets": "Servizi Igienici",
    "facility.parking": "Parcheggio",
    "facility.public-transport": "Trasporto Pubblico",
    
    // Route type labels
    "routeType.loop": "Anello",
    "routeType.out-and-back": "Andata e Ritorno",
    "routeType.point-to-point": "Punto a Punto",
    
    // Surface labels
    "surface.dirt": "Terra",
    "surface.rocky": "Roccioso",
    "surface.gravel": "Ghiaia",
    "surface.paved": "Asfaltato",
    "surface.mixed": "Misto",
    
    // Sort options
    "sort.relevance": "Rilevanza",
    "sort.highest-rated": "Più Votati",
    "sort.shortest": "Distanza Più Breve",
    "sort.least-elevation": "Dislivello Minore",
    "sort.duration-asc": "Durata (Crescente)",
    "sort.duration-desc": "Durata (Decrescente)",
    "sort.placeholder": "Ordina per",
    
    // Results & pagination
    "results.route": "percorso",
    "results.routes": "percorsi",
    "results.found": "trovato/i",
    "pagination.previous": "Precedente",
    "pagination.next": "Successivo",
    
    // Empty state
    "empty.title": "Nessun percorso corrisponde ai tuoi filtri",
    "empty.description": "Prova a modificare i criteri di filtro o reimposta tutti i filtri per vedere tutti i percorsi disponibili.",
    "empty.resetButton": "Reimposta Filtri",
    
    // Route card
    "routeCard.select": "Seleziona",
    
    // Navbar
    "nav.events": "Eventi",
    "nav.routes": "Percorsi",
    "nav.community": "Comunità",
    "nav.addEvent": "Aggiungi evento",
  },
  
  es: {
    // Page header
    "routes.title": "Explorar Rutas",
    "routes.subtitle": "Encuentra la ruta de senderismo perfecta para tu próxima aventura",
    
    // Filter panel
    "filters.title": "Filtros",
    "filters.reset": "Restablecer",
    "filters.difficulty": "Dificultad",
    "filters.distance": "Distancia",
    "filters.duration": "Duración",
    "filters.elevationGain": "Desnivel Positivo",
    "filters.technicalGrade": "Grado Técnico",
    "filters.highlights": "Puntos de Interés",
    "filters.routeFeatures": "Características",
    "filters.facilities": "Instalaciones",
    "filters.routeType": "Tipo de Ruta",
    "filters.surface": "Superficie / Terreno",
    "filters.dogFriendly": "Se admiten perros",
    "filters.kidFriendly": "Apto para niños",
    "filters.minRating": "Puntuación Mínima",
    "filters.any": "Cualquiera",
    
    // Difficulty labels
    "difficulty.easy": "Fácil",
    "difficulty.moderate": "Moderado",
    "difficulty.hard": "Difícil",
    
    // Highlight labels
    "highlight.lakes": "Lagos",
    "highlight.rivers": "Ríos",
    "highlight.waterfalls": "Cascadas",
    "highlight.coastline": "Costa",
    "highlight.historical-sites": "Sitios Históricos",
    "highlight.viewpoints": "Miradores",
    "highlight.forest": "Bosque",
    "highlight.meadow": "Pradera",
    
    // Feature labels
    "feature.via-ferrata": "Vía Ferrata",
    "feature.scrambling": "Escalada Fácil",
    "feature.canyoning": "Barranquismo",
    "feature.ridge-walk": "Cresta",
    "feature.mountain-pass": "Puerto de Montaña",
    "feature.avoid-main-roads": "Evita Carreteras Principales",
    
    // Facility labels
    "facility.restaurants": "Restaurantes",
    "facility.cafes": "Cafeterías",
    "facility.mountain-huts": "Refugios",
    "facility.potable-water": "Agua Potable",
    "facility.toilets": "Aseos",
    "facility.parking": "Aparcamiento",
    "facility.public-transport": "Transporte Público",
    
    // Route type labels
    "routeType.loop": "Circular",
    "routeType.out-and-back": "Ida y Vuelta",
    "routeType.point-to-point": "Punto a Punto",
    
    // Surface labels
    "surface.dirt": "Tierra",
    "surface.rocky": "Rocoso",
    "surface.gravel": "Grava",
    "surface.paved": "Pavimentado",
    "surface.mixed": "Mixto",
    
    // Sort options
    "sort.relevance": "Relevancia",
    "sort.highest-rated": "Mejor Valorados",
    "sort.shortest": "Distancia Más Corta",
    "sort.least-elevation": "Menor Desnivel",
    "sort.duration-asc": "Duración (Menor a Mayor)",
    "sort.duration-desc": "Duración (Mayor a Menor)",
    "sort.placeholder": "Ordenar por",
    
    // Results & pagination
    "results.route": "ruta",
    "results.routes": "rutas",
    "results.found": "encontrada(s)",
    "pagination.previous": "Anterior",
    "pagination.next": "Siguiente",
    
    // Empty state
    "empty.title": "Ninguna ruta coincide con tus filtros",
    "empty.description": "Intenta ajustar tus criterios de filtro o restablece todos los filtros para ver todas las rutas disponibles.",
    "empty.resetButton": "Restablecer Filtros",
    
    // Route card
    "routeCard.select": "Seleccionar",
    
    // Navbar
    "nav.events": "Eventos",
    "nav.routes": "Rutas",
    "nav.community": "Comunidad",
    "nav.addEvent": "Añadir evento",
  },
} as const;

export type TranslationKey = keyof typeof translations.en;
