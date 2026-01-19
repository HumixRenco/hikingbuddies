export type Language = "en" | "fr" | "it" | "es";

export const languageNames: Record<Language, string> = {
  en: "English",
  fr: "Français",
  it: "Italiano",
  es: "Español",
};

export const translations = {
  en: {
    // Navbar
    "nav.events": "Events",
    "nav.routes": "Routes",
    "nav.community": "Community",
    "nav.addEvent": "Add event",
    
    // Hero Section
    "hero.title": "Adventures are better",
    "hero.titleHighlight": "with buddies",
    "hero.description": "Hiking Buddies is a non-profit community of outdoor and sport lovers. Join an upcoming hiking, climbing, cycling – you name it – event or organize your own and enjoy your adventures with like-minded people!",
    "hero.searchPlaceholder": "Search events, routes, or communities...",
    
    // Activity Tags
    "activity.hiking": "Hiking",
    "activity.climbing": "Climbing",
    "activity.cycling": "Cycling",
    "activity.waterSports": "Water sports",
    "activity.allActivities": "All activities",
    "activity.skiTouring": "Ski Touring",
    "activity.bouldering": "Bouldering",
    "activity.social": "Social",
    
    // Mission Statement
    "mission.title": "What we stand for",
    "mission.description": "We are a community of outdoor sports lovers and restless mountain explorers, and we believe it's more fun to do it together. Most of our events are organized by passionate community members, just like you, and therefore free of charge except transportation and personal costs.",
    "mission.linkText": "More about community rules and values",
    
    // Popular Routes
    "popularRoutes.title": "Explore hiking routes",
    "popularRoutes.linkText": "Explore more routes",
    "popularRoutes.routeCount": "routes",
    
    // Communities
    "communities.title": "Join a local community",
    "communities.description": "Connect with outdoor enthusiasts in your area and discover new adventures together",
    "communities.members": "members",
    
    // Past Events
    "pastEvents.title": "Past events",
    "pastEvents.linkText": "View all events",
    "pastEvents.attendees": "attendees",
    
    // Events Page
    "events.pageTitle": "Events",
    "events.upcomingEvents": "Upcoming events",
    "events.yourUpcomingEvents": "Your upcoming events",
    "events.yourPastEvents": "Your past events",
    "events.allLocations": "All locations",
    "events.allActivities": "All activities",
    "events.fromMunich": "From Munich",
    "events.fromZurich": "From Zurich",
    "events.fromGeneva": "From Geneva",
    "events.fromVienna": "From Vienna",
    
    // Events Table
    "eventsTable.departingFrom": "Departing from",
    "eventsTable.activity": "Activity",
    "eventsTable.participants": "Participants",
    "eventsTable.by": "by",
    "eventsTable.noTransport": "No transport",
    "eventsTable.byTransport": "by",
    "eventsTable.elevation": "elevation",
    "eventsTable.totalHeight": "total height",
    "eventsTable.descent": "descent",
    "eventsTable.coming": "coming",
    "eventsTable.inWaitlist": "in waitlist",
    "eventsTable.available": "available",
    
    // Routes Page
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
    "difficulty.medium": "Medium",
    
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
  },
  
  fr: {
    // Navbar
    "nav.events": "Événements",
    "nav.routes": "Itinéraires",
    "nav.community": "Communauté",
    "nav.addEvent": "Ajouter un événement",
    
    // Hero Section
    "hero.title": "Les aventures sont meilleures",
    "hero.titleHighlight": "entre amis",
    "hero.description": "Hiking Buddies est une communauté à but non lucratif d'amateurs de plein air et de sport. Rejoignez un événement de randonnée, d'escalade, de vélo – ou autre – ou organisez le vôtre et profitez de vos aventures avec des personnes partageant les mêmes idées !",
    "hero.searchPlaceholder": "Rechercher des événements, itinéraires ou communautés...",
    
    // Activity Tags
    "activity.hiking": "Randonnée",
    "activity.climbing": "Escalade",
    "activity.cycling": "Cyclisme",
    "activity.waterSports": "Sports nautiques",
    "activity.allActivities": "Toutes les activités",
    "activity.skiTouring": "Ski de randonnée",
    "activity.bouldering": "Bloc",
    "activity.social": "Social",
    
    // Mission Statement
    "mission.title": "Ce que nous défendons",
    "mission.description": "Nous sommes une communauté d'amateurs de sports de plein air et d'explorateurs de montagne, et nous croyons que c'est plus amusant de le faire ensemble. La plupart de nos événements sont organisés par des membres passionnés de la communauté, comme vous, et donc gratuits sauf les frais de transport et personnels.",
    "mission.linkText": "En savoir plus sur les règles et valeurs de la communauté",
    
    // Popular Routes
    "popularRoutes.title": "Explorer les itinéraires de randonnée",
    "popularRoutes.linkText": "Explorer plus d'itinéraires",
    "popularRoutes.routeCount": "itinéraires",
    
    // Communities
    "communities.title": "Rejoignez une communauté locale",
    "communities.description": "Connectez-vous avec des passionnés de plein air dans votre région et découvrez de nouvelles aventures ensemble",
    "communities.members": "membres",
    
    // Past Events
    "pastEvents.title": "Événements passés",
    "pastEvents.linkText": "Voir tous les événements",
    "pastEvents.attendees": "participants",
    
    // Events Page
    "events.pageTitle": "Événements",
    "events.upcomingEvents": "Événements à venir",
    "events.yourUpcomingEvents": "Vos événements à venir",
    "events.yourPastEvents": "Vos événements passés",
    "events.allLocations": "Tous les lieux",
    "events.allActivities": "Toutes les activités",
    "events.fromMunich": "De Munich",
    "events.fromZurich": "De Zurich",
    "events.fromGeneva": "De Genève",
    "events.fromVienna": "De Vienne",
    
    // Events Table
    "eventsTable.departingFrom": "Départ de",
    "eventsTable.activity": "Activité",
    "eventsTable.participants": "Participants",
    "eventsTable.by": "par",
    "eventsTable.noTransport": "Sans transport",
    "eventsTable.byTransport": "en",
    "eventsTable.elevation": "dénivelé",
    "eventsTable.totalHeight": "hauteur totale",
    "eventsTable.descent": "descente",
    "eventsTable.coming": "inscrits",
    "eventsTable.inWaitlist": "en liste d'attente",
    "eventsTable.available": "disponibles",
    
    // Routes Page
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
    "difficulty.medium": "Moyen",
    
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
  },
  
  it: {
    // Navbar
    "nav.events": "Eventi",
    "nav.routes": "Percorsi",
    "nav.community": "Comunità",
    "nav.addEvent": "Aggiungi evento",
    
    // Hero Section
    "hero.title": "Le avventure sono migliori",
    "hero.titleHighlight": "con gli amici",
    "hero.description": "Hiking Buddies è una comunità senza scopo di lucro di amanti dell'outdoor e dello sport. Unisciti a un evento di escursionismo, arrampicata, ciclismo – o altro – oppure organizza il tuo e goditi le avventure con persone che la pensano come te!",
    "hero.searchPlaceholder": "Cerca eventi, percorsi o comunità...",
    
    // Activity Tags
    "activity.hiking": "Escursionismo",
    "activity.climbing": "Arrampicata",
    "activity.cycling": "Ciclismo",
    "activity.waterSports": "Sport acquatici",
    "activity.allActivities": "Tutte le attività",
    "activity.skiTouring": "Sci alpinismo",
    "activity.bouldering": "Boulder",
    "activity.social": "Sociale",
    
    // Mission Statement
    "mission.title": "I nostri valori",
    "mission.description": "Siamo una comunità di amanti degli sport all'aria aperta e instancabili esploratori di montagna, e crediamo che sia più divertente farlo insieme. La maggior parte dei nostri eventi è organizzata da membri appassionati della comunità, proprio come te, e quindi gratuiti tranne i costi di trasporto e personali.",
    "mission.linkText": "Scopri di più sulle regole e i valori della comunità",
    
    // Popular Routes
    "popularRoutes.title": "Esplora i percorsi escursionistici",
    "popularRoutes.linkText": "Esplora altri percorsi",
    "popularRoutes.routeCount": "percorsi",
    
    // Communities
    "communities.title": "Unisciti a una comunità locale",
    "communities.description": "Connettiti con gli appassionati di outdoor nella tua zona e scopri nuove avventure insieme",
    "communities.members": "membri",
    
    // Past Events
    "pastEvents.title": "Eventi passati",
    "pastEvents.linkText": "Vedi tutti gli eventi",
    "pastEvents.attendees": "partecipanti",
    
    // Events Page
    "events.pageTitle": "Eventi",
    "events.upcomingEvents": "Eventi in programma",
    "events.yourUpcomingEvents": "I tuoi prossimi eventi",
    "events.yourPastEvents": "I tuoi eventi passati",
    "events.allLocations": "Tutte le località",
    "events.allActivities": "Tutte le attività",
    "events.fromMunich": "Da Monaco",
    "events.fromZurich": "Da Zurigo",
    "events.fromGeneva": "Da Ginevra",
    "events.fromVienna": "Da Vienna",
    
    // Events Table
    "eventsTable.departingFrom": "Partenza da",
    "eventsTable.activity": "Attività",
    "eventsTable.participants": "Partecipanti",
    "eventsTable.by": "di",
    "eventsTable.noTransport": "Nessun trasporto",
    "eventsTable.byTransport": "con",
    "eventsTable.elevation": "dislivello",
    "eventsTable.totalHeight": "altezza totale",
    "eventsTable.descent": "discesa",
    "eventsTable.coming": "iscritti",
    "eventsTable.inWaitlist": "in lista d'attesa",
    "eventsTable.available": "disponibili",
    
    // Routes Page
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
    "difficulty.medium": "Medio",
    
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
  },
  
  es: {
    // Navbar
    "nav.events": "Eventos",
    "nav.routes": "Rutas",
    "nav.community": "Comunidad",
    "nav.addEvent": "Añadir evento",
    
    // Hero Section
    "hero.title": "Las aventuras son mejores",
    "hero.titleHighlight": "con amigos",
    "hero.description": "Hiking Buddies es una comunidad sin ánimo de lucro de amantes del aire libre y el deporte. ¡Únete a un evento de senderismo, escalada, ciclismo – lo que sea – u organiza el tuyo y disfruta de tus aventuras con personas afines!",
    "hero.searchPlaceholder": "Buscar eventos, rutas o comunidades...",
    
    // Activity Tags
    "activity.hiking": "Senderismo",
    "activity.climbing": "Escalada",
    "activity.cycling": "Ciclismo",
    "activity.waterSports": "Deportes acuáticos",
    "activity.allActivities": "Todas las actividades",
    "activity.skiTouring": "Esquí de travesía",
    "activity.bouldering": "Búlder",
    "activity.social": "Social",
    
    // Mission Statement
    "mission.title": "Lo que defendemos",
    "mission.description": "Somos una comunidad de amantes de los deportes al aire libre y exploradores incansables de montaña, y creemos que es más divertido hacerlo juntos. La mayoría de nuestros eventos son organizados por miembros apasionados de la comunidad, como tú, y por lo tanto gratuitos excepto los costes de transporte y personales.",
    "mission.linkText": "Más sobre las reglas y valores de la comunidad",
    
    // Popular Routes
    "popularRoutes.title": "Explora rutas de senderismo",
    "popularRoutes.linkText": "Explorar más rutas",
    "popularRoutes.routeCount": "rutas",
    
    // Communities
    "communities.title": "Únete a una comunidad local",
    "communities.description": "Conéctate con entusiastas del aire libre en tu zona y descubre nuevas aventuras juntos",
    "communities.members": "miembros",
    
    // Past Events
    "pastEvents.title": "Eventos pasados",
    "pastEvents.linkText": "Ver todos los eventos",
    "pastEvents.attendees": "asistentes",
    
    // Events Page
    "events.pageTitle": "Eventos",
    "events.upcomingEvents": "Próximos eventos",
    "events.yourUpcomingEvents": "Tus próximos eventos",
    "events.yourPastEvents": "Tus eventos pasados",
    "events.allLocations": "Todas las ubicaciones",
    "events.allActivities": "Todas las actividades",
    "events.fromMunich": "Desde Múnich",
    "events.fromZurich": "Desde Zúrich",
    "events.fromGeneva": "Desde Ginebra",
    "events.fromVienna": "Desde Viena",
    
    // Events Table
    "eventsTable.departingFrom": "Salida desde",
    "eventsTable.activity": "Actividad",
    "eventsTable.participants": "Participantes",
    "eventsTable.by": "por",
    "eventsTable.noTransport": "Sin transporte",
    "eventsTable.byTransport": "en",
    "eventsTable.elevation": "desnivel",
    "eventsTable.totalHeight": "altura total",
    "eventsTable.descent": "descenso",
    "eventsTable.coming": "inscritos",
    "eventsTable.inWaitlist": "en lista de espera",
    "eventsTable.available": "disponibles",
    
    // Routes Page
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
    "difficulty.medium": "Medio",
    
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
  },
} as const;

export type TranslationKey = keyof typeof translations.en;
