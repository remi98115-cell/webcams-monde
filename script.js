/* ==================================================================
   WEBCAMS DU MONDE — 337 flux live vérifiés le 2026-04-24
   ------------------------------------------------------------------
   Chaque videoId a été vérifié comme étant actuellement LIVE via yt-dlp.
   Si une webcam tombe hors ligne plus tard, modifiez son videoId ici.
   ================================================================== */

const WEBCAMS = [
    { name: "Soleil", city: "Espace", country: "NASA", region: "space", flag: "☀️", emoji: "🌞", videoId: "ToUVD_JdKvM", desc: "Le Soleil via SDO." },
    { name: "Mars Perseverance", city: "Mars", country: "NASA", region: "space", flag: "🔴", emoji: "🚜", videoId: "noNxQn9P8_U", desc: "Le rover sur Mars." },
    { name: "ISS Live", city: "Orbite", country: "NASA", region: "space", flag: "🌍", emoji: "🛰️", videoId: "vytmBNhc9ig", desc: "La Terre depuis l'ISS." },
    { name: "Lune en direct", city: "Orbite", country: "NASA", region: "space", flag: "🌙", emoji: "🌕", videoId: "0FBiyFpV__g", desc: "La Lune observée." },
    { name: "Vue de la Terre ISS", city: "Orbite", country: "NASA", region: "space", flag: "🌍", emoji: "🌎", videoId: "fO9e9jnhYK8", desc: "La Terre en direct depuis l'espace." },
    { name: "SpaceX", city: "Cape Canaveral", country: "USA", region: "space", flag: "🇺🇸", emoji: "🛸", videoId: "mhJRzQsLZGg", desc: "Lancements Falcon." },
    { name: "Observatoire", city: "Hawaï", country: "USA", region: "space", flag: "🇺🇸", emoji: "🔭", videoId: "6g4Fh8K-MhY", desc: "Le télescope de Mauna Kea." },
    { name: "Porte de Brandebourg", city: "Berlin", country: "Allemagne", region: "europe", flag: "🇩🇪", emoji: "🏛️", videoId: "IRqboacDNFg", desc: "Le monument emblématique." },
    { name: "Cathédrale de Cologne", city: "Cologne", country: "Allemagne", region: "europe", flag: "🇩🇪", emoji: "⛪", videoId: "kodtgRure8Y", desc: "Le chef-d'œuvre gothique." },
    { name: "Port de Hambourg", city: "Hambourg", country: "Allemagne", region: "europe", flag: "🇩🇪", emoji: "⚓", videoId: "OmyDLXvaus4", desc: "Le grand port allemand." },
    { name: "Marienplatz", city: "Munich", country: "Allemagne", region: "europe", flag: "🇩🇪", emoji: "🍺", videoId: "KxWuwC7R5kY", desc: "La place centrale et l'hôtel de ville." },
    { name: "Vienne", city: "Vienne", country: "Autriche", region: "europe", flag: "🇦🇹", emoji: "🎻", videoId: "NIuO6hrFTrg", desc: "La capitale impériale." },
    { name: "Bruges", city: "Bruges", country: "Belgique", region: "europe", flag: "🇧🇪", emoji: "🏘️", videoId: "BorjZEkeoMM", desc: "La Venise du Nord." },
    { name: "Grand-Place", city: "Bruxelles", country: "Belgique", region: "europe", flag: "🇧🇪", emoji: "🏛️", videoId: "5Uqw_G_IdjE", desc: "La plus belle place du monde." },
    { name: "Dubrovnik", city: "Dubrovnik", country: "Croatie", region: "europe", flag: "🇭🇷", emoji: "🏰", videoId: "idr71oXmhdc", desc: "La perle de l'Adriatique." },
    { name: "Split", city: "Split", country: "Croatie", region: "europe", flag: "🇭🇷", emoji: "🏛️", videoId: "0wHWHAFnNh0", desc: "Le palais de Dioclétien." },
    { name: "Tenerife", city: "Canaries", country: "Espagne", region: "europe", flag: "🇪🇸", emoji: "🌋", videoId: "yrx0fvj-4QI", desc: "Le Teide et la plage." },
    { name: "Ibiza", city: "Ibiza", country: "Espagne", region: "europe", flag: "🇪🇸", emoji: "🎉", videoId: "nFEk_SfznsY", desc: "L'île de la fête." },
    { name: "Puerta del Sol", city: "Madrid", country: "Espagne", region: "europe", flag: "🇪🇸", emoji: "🏛️", videoId: "NHRDdaH4LpU", desc: "Le kilomètre zéro de l'Espagne." },
    { name: "Palma de Majorque", city: "Majorque", country: "Espagne", region: "europe", flag: "🇪🇸", emoji: "⛵", videoId: "hRw1_JQMQoE", desc: "La capitale des Baléares." },
    { name: "Séville", city: "Séville", country: "Espagne", region: "europe", flag: "🇪🇸", emoji: "💃", videoId: "0dKNLFFcHFU", desc: "Le cœur de l'Andalousie." },
    { name: "Tallinn", city: "Tallinn", country: "Estonie", region: "europe", flag: "🇪🇪", emoji: "🏰", videoId: "VhVgZi2lGv0", desc: "La vieille ville médiévale." },
    { name: "Moutons", city: "Campagne", country: "Europe", region: "europe", flag: "🇬🇧", emoji: "🐑", videoId: "SnHke968zAA", desc: "Les moutons paissant." },
    { name: "Cigognes", city: "Europe", country: "Europe", region: "europe", flag: "🇪🇺", emoji: "🪶", videoId: "AO5I5nNbbnE", desc: "Les cigognes au nid." },
    { name: "Hérissons", city: "Jardin", country: "Europe", region: "europe", flag: "🇬🇧", emoji: "🦔", videoId: "4kRzwJXaeIM", desc: "Les hérissons nocturnes." },
    { name: "Helsinki", city: "Helsinki", country: "Finlande", region: "europe", flag: "🇫🇮", emoji: "❄️", videoId: "CvOB-Is_yYU", desc: "La capitale finlandaise." },
    { name: "Bordeaux", city: "Bordeaux", country: "France", region: "europe", flag: "🇫🇷", emoji: "🍷", videoId: "epob2jcRe_Q", desc: "La capitale du vin." },
    { name: "Cannes", city: "Cannes", country: "France", region: "europe", flag: "🇫🇷", emoji: "🎬", videoId: "z6BNMoj9Pyo", desc: "La Croisette et la baie." },
    { name: "Mont Blanc", city: "Chamonix", country: "France", region: "europe", flag: "🇫🇷", emoji: "🏔️", videoId: "elGbyX0KCMg", desc: "Le toit de l'Europe." },
    { name: "Courchevel", city: "Courchevel", country: "France", region: "europe", flag: "🇫🇷", emoji: "⛷️", videoId: "B0vZX9GnpxI", desc: "La station des Trois Vallées." },
    { name: "Plage française", city: "France", country: "France", region: "europe", flag: "🇫🇷", emoji: "🏖️", videoId: "8cff6yAO9bw", desc: "Les plages hexagonales." },
    { name: "Lyon", city: "Lyon", country: "France", region: "europe", flag: "🇫🇷", emoji: "🍷", videoId: "EBhCrTPpdBI", desc: "La capitale gastronomique." },
    { name: "Vieux-Port", city: "Marseille", country: "France", region: "europe", flag: "🇫🇷", emoji: "⚓", videoId: "KmpCbWyTvpY", desc: "Le port historique." },
    { name: "Côte d'Azur", city: "Nice", country: "France", region: "europe", flag: "🇫🇷", emoji: "🏖️", videoId: "asO_10T0k2k", desc: "La Promenade des Anglais." },
    { name: "Mont Saint-Michel", city: "Normandie", country: "France", region: "europe", flag: "🇫🇷", emoji: "⛪", videoId: "y1P2kxRTN3I", desc: "L'abbaye sur la baie." },
    { name: "Tour Eiffel", city: "Paris", country: "France", region: "europe", flag: "🇫🇷", emoji: "🗼", videoId: "OzYp4NRZlwQ", desc: "Panorama sur la Dame de Fer." },
    { name: "Saint-Tropez", city: "Saint-Tropez", country: "France", region: "europe", flag: "🇫🇷", emoji: "⛱️", videoId: "RbgLmQjw0Nk", desc: "Le port chic de la Côte." },
    { name: "Les 3 Vallées", city: "Savoie", country: "France", region: "europe", flag: "🇫🇷", emoji: "⛷️", videoId: "mRvnqqoxyg0", desc: "Le plus grand domaine skiable." },
    { name: "Val d'Isère", city: "Val d'Isère", country: "France", region: "europe", flag: "🇫🇷", emoji: "⛷️", videoId: "7SheNmPKU9E", desc: "La station alpine française." },
    { name: "Acropole", city: "Athènes", country: "Grèce", region: "europe", flag: "🇬🇷", emoji: "🏛️", videoId: "5p-s-1453Us", desc: "Le Parthénon antique." },
    { name: "Rhodes", city: "Rhodes", country: "Grèce", region: "europe", flag: "🇬🇷", emoji: "🏰", videoId: "sFCofJMI4ew", desc: "La cité des Chevaliers." },
    { name: "Danube", city: "Budapest", country: "Hongrie", region: "europe", flag: "🇭🇺", emoji: "🌉", videoId: "HfgIFGbdGJ0", desc: "Le Parlement sur le Danube." },
    { name: "Temple Bar", city: "Dublin", country: "Irlande", region: "europe", flag: "🇮🇪", emoji: "🍺", videoId: "3nyPER2kzqk", desc: "Le quartier festif et coloré." },
    { name: "Geysir", city: "Islande", country: "Islande", region: "europe", flag: "🇮🇸", emoji: "♨️", videoId: "Kc_RTWRENug", desc: "Les geysers islandais." },
    { name: "Volcan islandais", city: "Islande", country: "Islande", region: "europe", flag: "🇮🇸", emoji: "🌋", videoId: "OdSrTNv7-vM", desc: "Éruption en direct." },
    { name: "Reykjavik", city: "Reykjavik", country: "Islande", region: "europe", flag: "🇮🇸", emoji: "❄️", videoId: "tYgGEC-ESTw", desc: "La capitale la plus septentrionale." },
    { name: "Assise", city: "Assise", country: "Italie", region: "europe", flag: "🇮🇹", emoji: "⛪", videoId: "CkNeltsc5ps", desc: "La ville de Saint François." },
    { name: "Capri", city: "Capri", country: "Italie", region: "europe", flag: "🇮🇹", emoji: "🏝️", videoId: "EFum1rGUdkk", desc: "L'île chic de la Méditerranée." },
    { name: "Dolomites", city: "Dolomites", country: "Italie", region: "europe", flag: "🇮🇹", emoji: "🏔️", videoId: "Y1qp-EVF_oU", desc: "Les montagnes italiennes." },
    { name: "Ponte Vecchio", city: "Florence", country: "Italie", region: "europe", flag: "🇮🇹", emoji: "🌉", videoId: "qWlry5rSTBo", desc: "Le pont médiéval sur l'Arno." },
    { name: "Gênes", city: "Gênes", country: "Italie", region: "europe", flag: "🇮🇹", emoji: "⚓", videoId: "k49PEeKgWbU", desc: "Le port ligure." },
    { name: "Lac Majeur", city: "Italie", country: "Italie", region: "europe", flag: "🇮🇹", emoji: "🏞️", videoId: "cTq3XA7pCv8", desc: "Le lac italo-suisse." },
    { name: "Cinque Terre", city: "Ligurie", country: "Italie", region: "europe", flag: "🇮🇹", emoji: "🏘️", videoId: "QpqsJKI0Wfk", desc: "Les cinq villages colorés." },
    { name: "Lac de Côme", city: "Lombardie", country: "Italie", region: "europe", flag: "🇮🇹", emoji: "🏞️", videoId: "d0-a8UJAyvY", desc: "Le lac glamour italien." },
    { name: "Duomo de Milan", city: "Milan", country: "Italie", region: "europe", flag: "🇮🇹", emoji: "⛪", videoId: "dsoM6TYIkOI", desc: "La cathédrale gothique." },
    { name: "Vésuve", city: "Naples", country: "Italie", region: "europe", flag: "🇮🇹", emoji: "🌋", videoId: "RbI8JwrBZQA", desc: "Le volcan et la baie." },
    { name: "Palerme", city: "Palerme", country: "Italie", region: "europe", flag: "🇮🇹", emoji: "🏛️", videoId: "O3-KWNc1VQw", desc: "La capitale sicilienne." },
    { name: "Fontaine de Trevi", city: "Rome", country: "Italie", region: "europe", flag: "🇮🇹", emoji: "⛲", videoId: "wMT2aNcP4Wg", desc: "La majestueuse fontaine baroque." },
    { name: "Sardaigne", city: "Sardaigne", country: "Italie", region: "europe", flag: "🇮🇹", emoji: "🏖️", videoId: "-uNBRt3Wuh8", desc: "Les plages émeraude." },
    { name: "Etna", city: "Sicile", country: "Italie", region: "europe", flag: "🇮🇹", emoji: "🌋", videoId: "EGk3Mr0OshE", desc: "Le plus haut volcan actif d'Europe." },
    { name: "Stromboli", city: "Sicile", country: "Italie", region: "europe", flag: "🇮🇹", emoji: "🌋", videoId: "S5M-qDFyYxs", desc: "Le volcan éternellement actif." },
    { name: "Sienne", city: "Sienne", country: "Italie", region: "europe", flag: "🇮🇹", emoji: "🐎", videoId: "d6IstgeKiiU", desc: "La ville du Palio." },
    { name: "Sorrente", city: "Sorrente", country: "Italie", region: "europe", flag: "🇮🇹", emoji: "🌊", videoId: "AWEPIltiX6A", desc: "La ville d'Enrico Caruso." },
    { name: "Turin", city: "Turin", country: "Italie", region: "europe", flag: "🇮🇹", emoji: "🏔️", videoId: "y7JJUFPXOlo", desc: "La capitale du Piémont." },
    { name: "Piazza San Marco", city: "Venise", country: "Italie", region: "europe", flag: "🇮🇹", emoji: "🛶", videoId: "x4AlaibltlA", desc: "La place Saint-Marc de Venise." },
    { name: "Monaco", city: "Monte-Carlo", country: "Monaco", region: "europe", flag: "🇲🇨", emoji: "🎰", videoId: "Yl4ICscy8aY", desc: "La principauté et son casino." },
    { name: "Bergen", city: "Bergen", country: "Norvège", region: "europe", flag: "🇳🇴", emoji: "⛵", videoId: "tAWFO8_O_7M", desc: "Le port hanséatique." },
    { name: "Oslo", city: "Oslo", country: "Norvège", region: "europe", flag: "🇳🇴", emoji: "🗻", videoId: "7VXn9NpuSZk", desc: "La capitale des fjords." },
    { name: "Tromsø", city: "Tromsø", country: "Norvège", region: "europe", flag: "🇳🇴", emoji: "🌌", videoId: "3y7_fkAzzps", desc: "La porte de l'Arctique." },
    { name: "Dam Square", city: "Amsterdam", country: "Pays-Bas", region: "europe", flag: "🇳🇱", emoji: "🚲", videoId: "Gd9d4q6WvUY", desc: "La place centrale d'Amsterdam." },
    { name: "Port de Rotterdam", city: "Rotterdam", country: "Pays-Bas", region: "europe", flag: "🇳🇱", emoji: "🏗️", videoId: "M09NaBVPjAI", desc: "Le plus grand port d'Europe." },
    { name: "Cracovie", city: "Cracovie", country: "Pologne", region: "europe", flag: "🇵🇱", emoji: "🏰", videoId: "Rn_ga4yXkME", desc: "La vieille ville historique." },
    { name: "Varsovie", city: "Varsovie", country: "Pologne", region: "europe", flag: "🇵🇱", emoji: "🏙️", videoId: "AJGLajSFggk", desc: "La capitale polonaise." },
    { name: "Algarve", city: "Algarve", country: "Portugal", region: "europe", flag: "🇵🇹", emoji: "🏖️", videoId: "GeQVAs9N490", desc: "Les plages dorées." },
    { name: "Açores", city: "Açores", country: "Portugal", region: "europe", flag: "🇵🇹", emoji: "🌋", videoId: "f6D3Zq6J5A8", desc: "L'archipel volcanique." },
    { name: "Lisbonne", city: "Lisbonne", country: "Portugal", region: "europe", flag: "🇵🇹", emoji: "🚋", videoId: "VbDwJxGlZ5k", desc: "Les collines et tramways." },
    { name: "Porto", city: "Porto", country: "Portugal", region: "europe", flag: "🇵🇹", emoji: "🍷", videoId: "I0KTkT8ZhX4", desc: "Les caves de porto sur le Douro." },
    { name: "Abbey Road", city: "Londres", country: "Royaume-Uni", region: "europe", flag: "🇬🇧", emoji: "🎸", videoId: "M3EYAY2MftI", desc: "Le passage piéton mythique des Beatles." },
    { name: "Canary Wharf", city: "Londres", country: "Royaume-Uni", region: "europe", flag: "🇬🇧", emoji: "🏢", videoId: "8JCk5M_xrBs", desc: "Le quartier financier." },
    { name: "Oxford", city: "Oxford", country: "Royaume-Uni", region: "europe", flag: "🇬🇧", emoji: "🎓", videoId: "h8glPXsnezU", desc: "L'université historique." },
    { name: "Stonehenge", city: "Wiltshire", country: "Royaume-Uni", region: "europe", flag: "🇬🇧", emoji: "🗿", videoId: "AiNCbGzabVo", desc: "Le site préhistorique mystérieux." },
    { name: "Saint-Pétersbourg", city: "Saint-Pétersbourg", country: "Russie", region: "europe", flag: "🇷🇺", emoji: "🏛️", videoId: "h1wly909BYw", desc: "La Venise du Nord russe." },
    { name: "Lac Léman", city: "Genève", country: "Suisse", region: "europe", flag: "🇨🇭", emoji: "⛲", videoId: "3HsL6AA6rPM", desc: "Le Jet d'eau de Genève." },
    { name: "Saint-Moritz", city: "Saint-Moritz", country: "Suisse", region: "europe", flag: "🇨🇭", emoji: "⛷️", videoId: "ALZU0HGq-1c", desc: "La station chic des Alpes." },
    { name: "Verbier", city: "Verbier", country: "Suisse", region: "europe", flag: "🇨🇭", emoji: "⛷️", videoId: "LVlzqBs0r6g", desc: "La station des 4 Vallées." },
    { name: "Cervin", city: "Zermatt", country: "Suisse", region: "europe", flag: "🇨🇭", emoji: "🏔️", videoId: "enYFXf8u7Lc", desc: "La montagne emblématique des Alpes." },
    { name: "Zurich", city: "Zurich", country: "Suisse", region: "europe", flag: "🇨🇭", emoji: "🏙️", videoId: "QIt1FaDMnQc", desc: "Le centre-ville et le lac." },
    { name: "Stockholm", city: "Stockholm", country: "Suède", region: "europe", flag: "🇸🇪", emoji: "🏝️", videoId: "agY6ZaM1G_o", desc: "La capitale sur l'eau." },
    { name: "Vieille Ville", city: "Prague", country: "Tchéquie", region: "europe", flag: "🇨🇿", emoji: "🏰", videoId: "IFnbDmgP69Q", desc: "La place de la vieille ville." },
    { name: "Bosphore", city: "Istanbul", country: "Turquie", region: "europe", flag: "🇹🇷", emoji: "🕌", videoId: "Veq52FdYk0s", desc: "Le détroit Europe/Asie." },
    { name: "Édimbourg", city: "Édimbourg", country: "Écosse", region: "europe", flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", emoji: "🏰", videoId: "d2Ii5ybhbQY", desc: "La capitale écossaise." },
    { name: "Condors des Andes", city: "Andes", country: "Amérique", region: "americas", flag: "🦅", emoji: "🦅", videoId: "2u4GnVNtlsY", desc: "Les condors sauvages." },
    { name: "Perroquets", city: "Jungle", country: "Amérique", region: "americas", flag: "🇧🇷", emoji: "🦜", videoId: "6faVGNcTRdM", desc: "Les perroquets tropicaux." },
    { name: "Ushuaia", city: "Ushuaia", country: "Argentine", region: "americas", flag: "🇦🇷", emoji: "🐧", videoId: "rVcK0QUC4SU", desc: "La fin du monde." },
    { name: "Iguazu", city: "Iguazu", country: "Brésil", region: "americas", flag: "🇧🇷", emoji: "💦", videoId: "AeMUdOPFcXI", desc: "Les plus grandes chutes du monde." },
    { name: "Copacabana", city: "Rio de Janeiro", country: "Brésil", region: "americas", flag: "🇧🇷", emoji: "🏖️", videoId: "l8El-eM_sTk", desc: "La plage mythique." },
    { name: "Salvador de Bahia", city: "Salvador", country: "Brésil", region: "americas", flag: "🇧🇷", emoji: "🎭", videoId: "DxZziUUr6CY", desc: "La ville afro-brésilienne." },
    { name: "São Paulo", city: "São Paulo", country: "Brésil", region: "americas", flag: "🇧🇷", emoji: "🏙️", videoId: "tMYtrEBNVAU", desc: "La mégapole brésilienne." },
    { name: "Banff", city: "Alberta", country: "Canada", region: "americas", flag: "🇨🇦", emoji: "🏞️", videoId: "EENeRuDqS48", desc: "Les lacs turquoise." },
    { name: "Calgary", city: "Alberta", country: "Canada", region: "americas", flag: "🇨🇦", emoji: "🏔️", videoId: "MwcqP3ta6RI", desc: "La ville des cow-boys." },
    { name: "Jasper", city: "Alberta", country: "Canada", region: "americas", flag: "🇨🇦", emoji: "🏞️", videoId: "_0wPODlF9wU", desc: "Le parc national de Jasper." },
    { name: "Victoria", city: "Colombie-Britannique", country: "Canada", region: "americas", flag: "🇨🇦", emoji: "🌺", videoId: "ZvqDwjNoN7Y", desc: "La capitale britannique." },
    { name: "Whistler", city: "Colombie-Britannique", country: "Canada", region: "americas", flag: "🇨🇦", emoji: "⛷️", videoId: "IEhDUXECe_k", desc: "La station olympique." },
    { name: "Montréal", city: "Montréal", country: "Canada", region: "americas", flag: "🇨🇦", emoji: "🍁", videoId: "Sr_jX-yYkNY", desc: "La métropole québécoise." },
    { name: "Halifax", city: "Nouvelle-Écosse", country: "Canada", region: "americas", flag: "🇨🇦", emoji: "⚓", videoId: "Utk7BN9X1Dk", desc: "Le port atlantique." },
    { name: "Chutes du Niagara", city: "Ontario", country: "Canada", region: "americas", flag: "🇨🇦", emoji: "💧", videoId: "cf4YkyGk6Tk", desc: "Les chutes en HD." },
    { name: "Chutes du Niagara Canada", city: "Ontario", country: "Canada", region: "americas", flag: "🇨🇦", emoji: "💧", videoId: "qx7gry390YA", desc: "Côté canadien des chutes." },
    { name: "Ottawa", city: "Ontario", country: "Canada", region: "americas", flag: "🇨🇦", emoji: "🍁", videoId: "lLYosWv_AwQ", desc: "La capitale canadienne." },
    { name: "Québec", city: "Québec", country: "Canada", region: "americas", flag: "🇨🇦", emoji: "🏰", videoId: "I-7mv4-BJ7M", desc: "Le Château Frontenac." },
    { name: "CN Tower", city: "Toronto", country: "Canada", region: "americas", flag: "🇨🇦", emoji: "🏢", videoId: "EPKWu223XEg", desc: "La skyline de Toronto." },
    { name: "Vancouver", city: "Vancouver", country: "Canada", region: "americas", flag: "🇨🇦", emoji: "🏔️", videoId: "rxyNjFKwzJA", desc: "Entre océan et Rocheuses." },
    { name: "Santiago", city: "Santiago", country: "Chili", region: "americas", flag: "🇨🇱", emoji: "🏔️", videoId: "RhdmP5017VM", desc: "La capitale chilienne." },
    { name: "Valparaíso", city: "Valparaíso", country: "Chili", region: "americas", flag: "🇨🇱", emoji: "🎨", videoId: "5jPpMkg5daM", desc: "La ville des collines colorées." },
    { name: "La Havane", city: "La Havane", country: "Cuba", region: "americas", flag: "🇨🇺", emoji: "🚗", videoId: "HZV93zAIYjo", desc: "Le Malecón et les voitures vintage." },
    { name: "Cancún", city: "Cancún", country: "Mexique", region: "americas", flag: "🇲🇽", emoji: "🏖️", videoId: "fv0Qlo_IofY", desc: "Les plages caribéennes." },
    { name: "Zócalo", city: "Mexico", country: "Mexique", region: "americas", flag: "🇲🇽", emoji: "🏛️", videoId: "uV3wWHSvkfs", desc: "La place centrale mexicaine." },
    { name: "Cuzco", city: "Cuzco", country: "Pérou", region: "americas", flag: "🇵🇪", emoji: "🏛️", videoId: "nllueA0D7TY", desc: "La capitale inca." },
    { name: "Alaska glacier", city: "Alaska", country: "USA", region: "americas", flag: "🇺🇸", emoji: "🧊", videoId: "jJI5w_RVGtQ", desc: "Les glaciers d'Alaska." },
    { name: "Grand Canyon", city: "Arizona", country: "USA", region: "americas", flag: "🇺🇸", emoji: "🏞️", videoId: "o4fKtgPVpoU", desc: "La merveille naturelle." },
    { name: "Sedona", city: "Arizona", country: "USA", region: "americas", flag: "🇺🇸", emoji: "🏜️", videoId: "JlxDI6rGH-U", desc: "Les roches rouges de Sedona." },
    { name: "Aspen", city: "Aspen", country: "USA", region: "americas", flag: "🇺🇸", emoji: "⛷️", videoId: "wKLLYZaz1xo", desc: "La station de ski chic." },
    { name: "Austin", city: "Austin", country: "USA", region: "americas", flag: "🇺🇸", emoji: "🎤", videoId: "4qiWy7ohNUI", desc: "La capitale musicale du Texas." },
    { name: "Boston", city: "Boston", country: "USA", region: "americas", flag: "🇺🇸", emoji: "⚓", videoId: "49WtyN1V1ZQ", desc: "La ville historique." },
    { name: "Coney Island", city: "Brooklyn", country: "USA", region: "americas", flag: "🇺🇸", emoji: "🎡", videoId: "H67j7H-7QD0", desc: "La plage et la fête foraine." },
    { name: "Yosemite", city: "Californie", country: "USA", region: "americas", flag: "🇺🇸", emoji: "🏔️", videoId: "Q5oZboEhUIA", desc: "El Capitan et Half Dome." },
    { name: "Outer Banks", city: "Caroline du Nord", country: "USA", region: "americas", flag: "🇺🇸", emoji: "🏖️", videoId: "WEhuDqlxHmM", desc: "Les plages des Outer Banks." },
    { name: "Charleston", city: "Caroline du Sud", country: "USA", region: "americas", flag: "🇺🇸", emoji: "🏛️", videoId: "hXqjUfQJf9U", desc: "La perle du Sud." },
    { name: "Myrtle Beach", city: "Caroline du Sud", country: "USA", region: "americas", flag: "🇺🇸", emoji: "🏖️", videoId: "UKtfCDXhCq0", desc: "La plage familiale." },
    { name: "Chicago", city: "Chicago", country: "USA", region: "americas", flag: "🇺🇸", emoji: "🏙️", videoId: "O0UGT7AT3aw", desc: "Les gratte-ciels sur le lac Michigan." },
    { name: "Mont Rushmore", city: "Dakota", country: "USA", region: "americas", flag: "🇺🇸", emoji: "🗿", videoId: "Nc_kMy-Au_8", desc: "Les 4 présidents sculptés." },
    { name: "Denver", city: "Denver", country: "USA", region: "americas", flag: "🇺🇸", emoji: "🏔️", videoId: "X7m2dN-wcbU", desc: "La Mile High City." },
    { name: "Fort Lauderdale", city: "Floride", country: "USA", region: "americas", flag: "🇺🇸", emoji: "🛥️", videoId: "pXx3YQVSUGg", desc: "La Venise d'Amérique." },
    { name: "Naples Floride", city: "Floride", country: "USA", region: "americas", flag: "🇺🇸", emoji: "🌴", videoId: "FKTVZq0rQ70", desc: "La côte ouest floridienne." },
    { name: "Orlando", city: "Floride", country: "USA", region: "americas", flag: "🇺🇸", emoji: "🎢", videoId: "67zqaidhq-U", desc: "La capitale des parcs." },
    { name: "Plage de Floride", city: "Floride", country: "USA", region: "americas", flag: "🇺🇸", emoji: "🏖️", videoId: "rdeoEeJ00xA", desc: "Les plages floridiennes." },
    { name: "Saint Augustine", city: "Floride", country: "USA", region: "americas", flag: "🇺🇸", emoji: "🏰", videoId: "ZksWoEAhmTU", desc: "La plus vieille ville US." },
    { name: "Tampa Bay", city: "Floride", country: "USA", region: "americas", flag: "🇺🇸", emoji: "🏖️", videoId: "QvNWCIOaB4Y", desc: "La baie de Tampa." },
    { name: "Atlanta", city: "Géorgie", country: "USA", region: "americas", flag: "🇺🇸", emoji: "🍑", videoId: "7k7RTdANPqM", desc: "La capitale du Sud." },
    { name: "Houston", city: "Houston", country: "USA", region: "americas", flag: "🇺🇸", emoji: "🚀", videoId: "wUQc3RoLAPs", desc: "NASA Johnson Space Center." },
    { name: "Key West", city: "Key West", country: "USA", region: "americas", flag: "🇺🇸", emoji: "🌅", videoId: "1Gn9gG9U2iM", desc: "Le point le plus au sud des USA." },
    { name: "Bourbon Street", city: "La Nouvelle-Orléans", country: "USA", region: "americas", flag: "🇺🇸", emoji: "🎷", videoId: "Ksrleaxxxhw", desc: "Le quartier du jazz." },
    { name: "Las Vegas Strip", city: "Las Vegas", country: "USA", region: "americas", flag: "🇺🇸", emoji: "🎰", videoId: "_rmUXOHSf0w", desc: "Le boulevard le plus illuminé." },
    { name: "Hollywood Boulevard", city: "Los Angeles", country: "USA", region: "americas", flag: "🇺🇸", emoji: "🎬", videoId: "cmkAbDUEoyA", desc: "Le Walk of Fame." },
    { name: "Venice Beach", city: "Los Angeles", country: "USA", region: "americas", flag: "🇺🇸", emoji: "🏖️", videoId: "EO_1LWqsCNE", desc: "La plage culte de Californie." },
    { name: "Bar Harbor", city: "Maine", country: "USA", region: "americas", flag: "🇺🇸", emoji: "🦞", videoId: "OteVW3af3BU", desc: "La côte du Maine." },
    { name: "Ocean City", city: "Maryland", country: "USA", region: "americas", flag: "🇺🇸", emoji: "🎡", videoId: "zGima24vRHM", desc: "Le boardwalk de l'Est." },
    { name: "Cape Cod", city: "Massachusetts", country: "USA", region: "americas", flag: "🇺🇸", emoji: "⛵", videoId: "_OeFhA2XqqA", desc: "La péninsule du Nord-Est." },
    { name: "Detroit", city: "Michigan", country: "USA", region: "americas", flag: "🇺🇸", emoji: "🚗", videoId: "lo5OtAdWC2s", desc: "Motor City." },
    { name: "Minneapolis", city: "Minnesota", country: "USA", region: "americas", flag: "🇺🇸", emoji: "🏙️", videoId: "NL3DQm0B5wM", desc: "La ville des lacs." },
    { name: "Kansas City", city: "Missouri", country: "USA", region: "americas", flag: "🇺🇸", emoji: "🎺", videoId: "9fzUjSTK5F8", desc: "La ville du jazz." },
    { name: "Nashville", city: "Nashville", country: "USA", region: "americas", flag: "🇺🇸", emoji: "🎸", videoId: "h5Grd2w7HQM", desc: "La capitale du country." },
    { name: "Lac Tahoe", city: "Nevada", country: "USA", region: "americas", flag: "🇺🇸", emoji: "🏔️", videoId: "Lk0Z5ExUWL0", desc: "Le lac alpin cristallin." },
    { name: "Atlantic City", city: "New Jersey", country: "USA", region: "americas", flag: "🇺🇸", emoji: "🎰", videoId: "vVyBOU9Huvo", desc: "Le boardwalk et les casinos." },
    { name: "Jersey Shore", city: "New Jersey", country: "USA", region: "americas", flag: "🇺🇸", emoji: "🏖️", videoId: "FYOGiFH60uM", desc: "Les plages du Jersey Shore." },
    { name: "Brooklyn Bridge", city: "New York", country: "USA", region: "americas", flag: "🇺🇸", emoji: "🌉", videoId: "OgqbZLzEbQU", desc: "Le pont emblématique." },
    { name: "Buffalo", city: "New York", country: "USA", region: "americas", flag: "🇺🇸", emoji: "❄️", videoId: "ErmhQZepFlc", desc: "La ville près des chutes." },
    { name: "Central Park", city: "New York", country: "USA", region: "americas", flag: "🇺🇸", emoji: "🌳", videoId: "VGnFLdQW39A", desc: "Le poumon vert de Manhattan." },
    { name: "Statue de la Liberté", city: "New York", country: "USA", region: "americas", flag: "🇺🇸", emoji: "🗽", videoId: "cWR8KGKftUw", desc: "Le symbole de la liberté." },
    { name: "Times Square", city: "New York", country: "USA", region: "americas", flag: "🇺🇸", emoji: "🗽", videoId: "rnXIjl_Rzy4", desc: "Le carrefour le plus célèbre du monde, illuminé 24h/24." },
    { name: "Portland", city: "Oregon", country: "USA", region: "americas", flag: "🇺🇸", emoji: "🌲", videoId: "5HAvjdpkaQ4", desc: "La ville verte." },
    { name: "Pittsburgh", city: "Pennsylvanie", country: "USA", region: "americas", flag: "🇺🇸", emoji: "🏗️", videoId: "cTi5sCsUSfc", desc: "La ville de l'acier." },
    { name: "Philadelphie", city: "Philadelphie", country: "USA", region: "americas", flag: "🇺🇸", emoji: "🔔", videoId: "qstdC8kBvaY", desc: "La cloche de la Liberté." },
    { name: "San Diego", city: "San Diego", country: "USA", region: "americas", flag: "🇺🇸", emoji: "🏖️", videoId: "edz0ux7JClE", desc: "La ville californienne du Sud." },
    { name: "Golden Gate Bridge", city: "San Francisco", country: "USA", region: "americas", flag: "🇺🇸", emoji: "🌉", videoId: "BSWhGNXxT9A", desc: "Le pont rouge emblématique." },
    { name: "Space Needle", city: "Seattle", country: "USA", region: "americas", flag: "🇺🇸", emoji: "🏗️", videoId: "4cgSE12k9Sc", desc: "Le monument futuriste." },
    { name: "Plage du Texas", city: "Texas", country: "USA", region: "americas", flag: "🇺🇸", emoji: "🏖️", videoId: "HkHhXsWci7Q", desc: "Galveston et South Padre." },
    { name: "Park City", city: "Utah", country: "USA", region: "americas", flag: "🇺🇸", emoji: "⛷️", videoId: "Y2VfyLoTO0c", desc: "La station olympique." },
    { name: "Washington DC", city: "Washington", country: "USA", region: "americas", flag: "🇺🇸", emoji: "🏛️", videoId: "1wV9lLe14aU", desc: "La capitale fédérale." },
    { name: "Jackson Hole Town Square", city: "Wyoming", country: "USA", region: "americas", flag: "🇺🇸", emoji: "🤠", videoId: "1EiC9bvVGnk", desc: "La petite ville mythique du Far West américain." },
    { name: "Autoroute", city: "—", country: "USA", region: "americas", flag: "🇺🇸", emoji: "🚗", videoId: "1xl0hX-nF2E", desc: "Le trafic en direct." },
    { name: "Galápagos", city: "Galápagos", country: "Équateur", region: "americas", flag: "🇪🇨", emoji: "🐢", videoId: "L3iKvwoXZ38", desc: "Les îles Darwin." },
    { name: "Quito", city: "Quito", country: "Équateur", region: "americas", flag: "🇪🇨", emoji: "🏔️", videoId: "kTHWaAbmxyM", desc: "La capitale équatorienne." },
    { name: "La Mecque", city: "La Mecque", country: "Arabie Saoudite", region: "asia", flag: "🇸🇦", emoji: "🕋", videoId: "oa_NW-wCIMk", desc: "La Kaaba en direct." },
    { name: "Riyad", city: "Riyad", country: "Arabie Saoudite", region: "asia", flag: "🇸🇦", emoji: "🕌", videoId: "JboXN7CuKxc", desc: "La capitale saoudienne." },
    { name: "Erevan", city: "Erevan", country: "Arménie", region: "asia", flag: "🇦🇲", emoji: "🏔️", videoId: "HUspCrNXUKs", desc: "La capitale arménienne." },
    { name: "Dacca", city: "Dacca", country: "Bangladesh", region: "asia", flag: "🇧🇩", emoji: "🏙️", videoId: "dbUXhHToBYU", desc: "La capitale bengalie." },
    { name: "Bhoutan", city: "Bhoutan", country: "Bhoutan", region: "asia", flag: "🇧🇹", emoji: "🏯", videoId: "OxzHQ546YQY", desc: "Le royaume des monastères." },
    { name: "Phnom Penh", city: "Phnom Penh", country: "Cambodge", region: "asia", flag: "🇰🇭", emoji: "🏛️", videoId: "6MMXJrzT5c0", desc: "La capitale cambodgienne." },
    { name: "Chengdu", city: "Chengdu", country: "Chine", region: "asia", flag: "🇨🇳", emoji: "🐼", videoId: "SUXPnIEpbn4", desc: "La base des pandas." },
    { name: "Baie de Hong Kong", city: "Hong Kong", country: "Chine", region: "asia", flag: "🇭🇰", emoji: "🌆", videoId: "YpmiEiUJ5nI", desc: "La skyline spectaculaire." },
    { name: "Macao", city: "Macao", country: "Chine", region: "asia", flag: "🇲🇴", emoji: "🎰", videoId: "K79E6JnKOGA", desc: "Le Las Vegas de l'Asie." },
    { name: "Shenzhen", city: "Shenzhen", country: "Chine", region: "asia", flag: "🇨🇳", emoji: "🏙️", videoId: "ygC5wni2DMQ", desc: "La Silicon Valley chinoise." },
    { name: "Busan", city: "Busan", country: "Corée du Sud", region: "asia", flag: "🇰🇷", emoji: "🌊", videoId: "3p2ZVNPPyd4", desc: "La ville portuaire coréenne." },
    { name: "Jeju", city: "Jeju", country: "Corée du Sud", region: "asia", flag: "🇰🇷", emoji: "🌋", videoId: "1AUCJbyKoMo", desc: "L'île volcanique coréenne." },
    { name: "Myeong-dong", city: "Séoul", country: "Corée du Sud", region: "asia", flag: "🇰🇷", emoji: "🛍️", videoId: "-JhoMGoAfFc", desc: "Le quartier commercial." },
    { name: "Calcutta", city: "Calcutta", country: "Inde", region: "asia", flag: "🇮🇳", emoji: "🛕", videoId: "nDHM96Oe_r4", desc: "L'ancienne capitale." },
    { name: "Chennai", city: "Chennai", country: "Inde", region: "asia", flag: "🇮🇳", emoji: "🌊", videoId: "W8nThq62Vb4", desc: "La capitale du Tamil Nadu." },
    { name: "Jaipur", city: "Jaipur", country: "Inde", region: "asia", flag: "🇮🇳", emoji: "🏰", videoId: "_pplsMPNVmQ", desc: "La Ville rose." },
    { name: "Mumbai", city: "Mumbai", country: "Inde", region: "asia", flag: "🇮🇳", emoji: "🏙️", videoId: "VR-x3HdhKLQ", desc: "La capitale économique indienne." },
    { name: "Mumbai Beach", city: "Mumbai", country: "Inde", region: "asia", flag: "🇮🇳", emoji: "🌊", videoId: "iSeH45R-8R0", desc: "Les plages de Mumbai." },
    { name: "Rajasthan", city: "Rajasthan", country: "Inde", region: "asia", flag: "🇮🇳", emoji: "🐪", videoId: "qatlHd2OFGI", desc: "Le désert du Thar." },
    { name: "Bali", city: "Bali", country: "Indonésie", region: "asia", flag: "🇮🇩", emoji: "🌴", videoId: "FBYUkqutqzE", desc: "L'île des dieux." },
    { name: "Jakarta", city: "Jakarta", country: "Indonésie", region: "asia", flag: "🇮🇩", emoji: "🏙️", videoId: "L1duJDAqbJY", desc: "La capitale indonésienne." },
    { name: "Téhéran", city: "Téhéran", country: "Iran", region: "asia", flag: "🇮🇷", emoji: "🏙️", videoId: "-zGuR1qVKrU", desc: "La capitale iranienne." },
    { name: "Mur des Lamentations", city: "Jérusalem", country: "Israël", region: "asia", flag: "🇮🇱", emoji: "🕎", videoId: "77akujLn4k8", desc: "Le lieu sacré juif." },
    { name: "Tel Aviv", city: "Tel Aviv", country: "Israël", region: "asia", flag: "🇮🇱", emoji: "🏖️", videoId: "nvtv8CQksdI", desc: "La ville cosmopolite israélienne." },
    { name: "Fukuoka", city: "Fukuoka", country: "Japon", region: "asia", flag: "🇯🇵", emoji: "🏮", videoId: "yETDDgrE2E4", desc: "La ville de Kyushu." },
    { name: "Hiroshima", city: "Hiroshima", country: "Japon", region: "asia", flag: "🇯🇵", emoji: "🕊️", videoId: "oW2Gb8YoGAg", desc: "Le mémorial de la paix." },
    { name: "Mont Fuji", city: "Honshu", country: "Japon", region: "asia", flag: "🇯🇵", emoji: "🗻", videoId: "F2NbYrc-gBU", desc: "Le volcan sacré du Japon." },
    { name: "Kamakura", city: "Kamakura", country: "Japon", region: "asia", flag: "🇯🇵", emoji: "🗿", videoId: "ZeI0dnHjX6w", desc: "Le grand Bouddha." },
    { name: "Kyoto", city: "Kyoto", country: "Japon", region: "asia", flag: "🇯🇵", emoji: "⛩️", videoId: "bK9vpKisRnQ", desc: "L'ancienne capitale." },
    { name: "Nagoya", city: "Nagoya", country: "Japon", region: "asia", flag: "🇯🇵", emoji: "🏯", videoId: "pHFh8pbPO10", desc: "La ville industrielle japonaise." },
    { name: "Nara", city: "Nara", country: "Japon", region: "asia", flag: "🇯🇵", emoji: "🦌", videoId: "gCu45mPX77Y", desc: "La ville aux cerfs sacrés." },
    { name: "Okinawa", city: "Okinawa", country: "Japon", region: "asia", flag: "🇯🇵", emoji: "🏝️", videoId: "WIYUrH4luck", desc: "L'île subtropicale." },
    { name: "Dotonbori", city: "Osaka", country: "Japon", region: "asia", flag: "🇯🇵", emoji: "🦀", videoId: "bzn2QWfOLFY", desc: "Le quartier gastronomique." },
    { name: "Sapporo", city: "Sapporo", country: "Japon", region: "asia", flag: "🇯🇵", emoji: "❄️", videoId: "HiNFpNlSAbg", desc: "La capitale d'Hokkaido." },
    { name: "Akihabara", city: "Tokyo", country: "Japon", region: "asia", flag: "🇯🇵", emoji: "🎮", videoId: "pcPhqxOUv8A", desc: "Le quartier électronique." },
    { name: "Shibuya Crossing", city: "Tokyo", country: "Japon", region: "asia", flag: "🇯🇵", emoji: "🗾", videoId: "dfVK7ld38Ys", desc: "Le passage piéton le plus fréquenté du monde." },
    { name: "Shinjuku", city: "Tokyo", country: "Japon", region: "asia", flag: "🇯🇵", emoji: "🏮", videoId: "DjdUEyjx8GM", desc: "Le quartier illuminé." },
    { name: "Yokohama", city: "Yokohama", country: "Japon", region: "asia", flag: "🇯🇵", emoji: "⚓", videoId: "DO7kvAb_Ano", desc: "Le port de Yokohama." },
    { name: "Beyrouth", city: "Beyrouth", country: "Liban", region: "asia", flag: "🇱🇧", emoji: "🌊", videoId: "gmtlJ_m2r5A", desc: "La perle du Moyen-Orient." },
    { name: "Bornéo", city: "Bornéo", country: "Malaisie", region: "asia", flag: "🇲🇾", emoji: "🦧", videoId: "QhahoVG0BfI", desc: "La jungle de Bornéo." },
    { name: "Kuala Lumpur", city: "Kuala Lumpur", country: "Malaisie", region: "asia", flag: "🇲🇾", emoji: "🏗️", videoId: "Fw9hgttWzIg", desc: "Les Petronas Towers." },
    { name: "Maldives", city: "Maldives", country: "Maldives", region: "asia", flag: "🇲🇻", emoji: "🏝️", videoId: "_BMi3usEwi8", desc: "Les lagons turquoise." },
    { name: "Yangon", city: "Yangon", country: "Myanmar", region: "asia", flag: "🇲🇲", emoji: "🛕", videoId: "yTe-61w9hmk", desc: "L'ancienne Rangoun." },
    { name: "Everest", city: "Himalaya", country: "Népal", region: "asia", flag: "🇳🇵", emoji: "🏔️", videoId: "SXsPeIqGJMA", desc: "Le toit du monde." },
    { name: "Katmandou", city: "Katmandou", country: "Népal", region: "asia", flag: "🇳🇵", emoji: "🏔️", videoId: "hgtuNHwBOrw", desc: "La capitale népalaise." },
    { name: "Mascate", city: "Mascate", country: "Oman", region: "asia", flag: "🇴🇲", emoji: "⛵", videoId: "lgQ8-E3rJ_4", desc: "La capitale omanaise." },
    { name: "Manille", city: "Manille", country: "Philippines", region: "asia", flag: "🇵🇭", emoji: "🏙️", videoId: "CmtuOVxcKRo", desc: "La capitale philippine." },
    { name: "Palawan", city: "Palawan", country: "Philippines", region: "asia", flag: "🇵🇭", emoji: "🏝️", videoId: "u8CbGedbI08", desc: "L'île aux mille merveilles." },
    { name: "Doha", city: "Doha", country: "Qatar", region: "asia", flag: "🇶🇦", emoji: "🏙️", videoId: "oxT5R6I0N6E", desc: "La capitale qatarie moderne." },
    { name: "Kamtchatka", city: "Kamtchatka", country: "Russie", region: "asia", flag: "🇷🇺", emoji: "🌋", videoId: "e2gC37ILQmk", desc: "Les volcans russes." },
    { name: "Marina Bay", city: "Singapour", country: "Singapour", region: "asia", flag: "🇸🇬", emoji: "🏊", videoId: "9cfkyMzanbc", desc: "La baie futuriste." },
    { name: "Colombo", city: "Colombo", country: "Sri Lanka", region: "asia", flag: "🇱🇰", emoji: "🌊", videoId: "V-ERTb6JXrc", desc: "La capitale cingalaise." },
    { name: "Taipei 101", city: "Taipei", country: "Taïwan", region: "asia", flag: "🇹🇼", emoji: "🏢", videoId: "z_fY1pj1VBw", desc: "Le gratte-ciel emblématique." },
    { name: "Bangkok", city: "Bangkok", country: "Thaïlande", region: "asia", flag: "🇹🇭", emoji: "🛕", videoId: "UemFRPrl1hk", desc: "La capitale thaïlandaise." },
    { name: "Phuket", city: "Phuket", country: "Thaïlande", region: "asia", flag: "🇹🇭", emoji: "🏝️", videoId: "IVa59mpPJTg", desc: "Les plages thaïlandaises." },
    { name: "Plage thaï", city: "Thaïlande", country: "Thaïlande", region: "asia", flag: "🇹🇭", emoji: "🏖️", videoId: "Tpj0cmMVOd0", desc: "Les plages paradisiaques." },
    { name: "Antalya", city: "Antalya", country: "Turquie", region: "asia", flag: "🇹🇷", emoji: "🌊", videoId: "3qcUa1Ozdlk", desc: "La Riviera turque." },
    { name: "Pamukkale", city: "Pamukkale", country: "Turquie", region: "asia", flag: "🇹🇷", emoji: "💧", videoId: "yJdU37PAWkE", desc: "Le château de coton." },
    { name: "Dubai Marina", city: "Dubaï", country: "UAE", region: "asia", flag: "🇦🇪", emoji: "🏙️", videoId: "-p1Xnt9n0yg", desc: "La marina futuriste." },
    { name: "Hanoi", city: "Hanoi", country: "Vietnam", region: "asia", flag: "🇻🇳", emoji: "🏛️", videoId: "eveR520xI6w", desc: "La capitale vietnamienne." },
    { name: "Hô Chi Minh-Ville", city: "Hô Chi Minh-Ville", country: "Vietnam", region: "asia", flag: "🇻🇳", emoji: "🏙️", videoId: "T414WDLRvB8", desc: "L'ancienne Saigon." },
    { name: "Baie d'Ha Long", city: "Quang Ninh", country: "Vietnam", region: "asia", flag: "🇻🇳", emoji: "🗿", videoId: "p1IbYzNwWDQ", desc: "Les pitons karstiques." },
    { name: "Brisbane", city: "Brisbane", country: "Australie", region: "oceania", flag: "🇦🇺", emoji: "☀️", videoId: "xVTqTwPLhOU", desc: "La ville ensoleillée du Queensland." },
    { name: "Melbourne", city: "Melbourne", country: "Australie", region: "oceania", flag: "🇦🇺", emoji: "🎨", videoId: "l_8DrACHpwY", desc: "La capitale culturelle." },
    { name: "Perth", city: "Perth", country: "Australie", region: "oceania", flag: "🇦🇺", emoji: "🏖️", videoId: "uakxJIafWcw", desc: "La capitale ouest-australienne." },
    { name: "Gold Coast", city: "Queensland", country: "Australie", region: "oceania", flag: "🇦🇺", emoji: "🏄", videoId: "hm9iAviOZ20", desc: "Surfers Paradise." },
    { name: "Sydney Harbour", city: "Sydney", country: "Australie", region: "oceania", flag: "🇦🇺", emoji: "🎭", videoId: "5uZa3-RMFos", desc: "L'Opéra et le Harbour Bridge." },
    { name: "Fidji", city: "Fidji", country: "Fidji", region: "oceania", flag: "🇫🇯", emoji: "🏝️", videoId: "loHbMM9JfCs", desc: "Le paradis du Pacifique." },
    { name: "Auckland", city: "Auckland", country: "Nouvelle-Zélande", region: "oceania", flag: "🇳🇿", emoji: "⛵", videoId: "BQR800Gu28g", desc: "Le port d'Auckland." },
    { name: "Wellington", city: "Wellington", country: "Nouvelle-Zélande", region: "oceania", flag: "🇳🇿", emoji: "🏙️", videoId: "v7xySvhug0Y", desc: "La capitale néo-zélandaise." },
    { name: "Bora Bora", city: "Bora Bora", country: "Polynésie française", region: "oceania", flag: "🇵🇫", emoji: "🏝️", videoId: "kj-emUICvUM", desc: "Le lagon turquoise." },
    { name: "Tahiti", city: "Tahiti", country: "Polynésie française", region: "oceania", flag: "🇵🇫", emoji: "🌺", videoId: "y0XPkjM9-P4", desc: "L'île mythique polynésienne." },
    { name: "Kilauea", city: "Hawaï", country: "USA", region: "oceania", flag: "🇺🇸", emoji: "🌋", videoId: "iws3rh5vLAQ", desc: "Le volcan actif." },
    { name: "Waikiki Beach", city: "Honolulu", country: "USA", region: "oceania", flag: "🇺🇸", emoji: "🌺", videoId: "WIUg8wzhq1g", desc: "La plage d'Oahu." },
    { name: "Maui", city: "Maui", country: "USA", region: "oceania", flag: "🇺🇸", emoji: "🌺", videoId: "iWCeBAxRCBo", desc: "L'île du road to Hana." },
    { name: "Johannesburg", city: "Johannesburg", country: "Afrique du Sud", region: "africa", flag: "🇿🇦", emoji: "🏙️", videoId: "4Zu64CmAjMo", desc: "La Cité d'Or." },
    { name: "Éléphants Tembe", city: "KwaZulu-Natal", country: "Afrique du Sud", region: "africa", flag: "🇿🇦", emoji: "🐘", videoId: "gdrNUUf-cQw", desc: "Point d'eau des éléphants." },
    { name: "Le Cap", city: "Le Cap", country: "Afrique du Sud", region: "africa", flag: "🇿🇦", emoji: "🏔️", videoId: "iUjpHz9_qaM", desc: "Table Mountain et la baie." },
    { name: "Table Mountain", city: "Le Cap", country: "Afrique du Sud", region: "africa", flag: "🇿🇦", emoji: "🏔️", videoId: "jOqASqt3vVI", desc: "La montagne plate emblématique." },
    { name: "Safari Kruger", city: "Mpumalanga", country: "Afrique du Sud", region: "africa", flag: "🇿🇦", emoji: "🦁", videoId: "NapztoCaKFY", desc: "Safari en direct." },
    { name: "Alger", city: "Alger", country: "Algérie", region: "africa", flag: "🇩🇿", emoji: "🏙️", videoId: "gCNeDWCI0vo", desc: "La Blanche." },
    { name: "Delta de l'Okavango", city: "Botswana", country: "Botswana", region: "africa", flag: "🇧🇼", emoji: "🦛", videoId: "mk02pEy3FdA", desc: "Le delta sauvage." },
    { name: "La Réunion", city: "La Réunion", country: "France", region: "africa", flag: "🇷🇪", emoji: "🌋", videoId: "QzI1AT-ooK4", desc: "L'île volcanique française." },
    { name: "Masai Mara", city: "Kenya", country: "Kenya", region: "africa", flag: "🇰🇪", emoji: "🦁", videoId: "xXZqU5vnEug", desc: "La grande migration." },
    { name: "Nairobi", city: "Nairobi", country: "Kenya", region: "africa", flag: "🇰🇪", emoji: "🦒", videoId: "XsOU8JnEpNM", desc: "La capitale kenyane." },
    { name: "Marrakech", city: "Marrakech", country: "Maroc", region: "africa", flag: "🇲🇦", emoji: "🕌", videoId: "AAlo3eCPVbk", desc: "La place Jemaa el-Fna." },
    { name: "Île Maurice", city: "Île Maurice", country: "Maurice", region: "africa", flag: "🇲🇺", emoji: "🌊", videoId: "Thtj8Ht7Z_c", desc: "L'île tropicale." },
    { name: "Lagos", city: "Lagos", country: "Nigeria", region: "africa", flag: "🇳🇬", emoji: "🏙️", videoId: "EEM7a3mHMR4", desc: "La mégapole africaine." },
    { name: "Kigali", city: "Kigali", country: "Rwanda", region: "africa", flag: "🇷🇼", emoji: "🏙️", videoId: "XtwNWKkOc-w", desc: "La capitale rwandaise." },
    { name: "Serengeti", city: "Serengeti", country: "Tanzanie", region: "africa", flag: "🇹🇿", emoji: "🦓", videoId: "BmOLK7LTKbY", desc: "La savane mythique." },
    { name: "Kilimandjaro", city: "Tanzanie", country: "Tanzanie", region: "africa", flag: "🇹🇿", emoji: "🏔️", videoId: "XyPU5-pNg5E", desc: "Le toit de l'Afrique." },
    { name: "Zanzibar", city: "Zanzibar", country: "Tanzanie", region: "africa", flag: "🇹🇿", emoji: "🌴", videoId: "kkVrj2cr9Ko", desc: "L'archipel paradisiaque." },
    { name: "Victoria Falls", city: "Livingstone", country: "Zambie", region: "africa", flag: "🇿🇲", emoji: "💦", videoId: "f9uqHbXChno", desc: "Les plus grandes chutes d'Afrique." },
    { name: "Chimpanzés", city: "Afrique", country: "Afrique", region: "nature", flag: "🌍", emoji: "🐒", videoId: "672cUSe69J0", desc: "Nos cousins primates." },
    { name: "Hippos", city: "Afrique", country: "Afrique", region: "nature", flag: "🌍", emoji: "🦛", videoId: "FC1da-yFN5I", desc: "Les hippos dans l'eau." },
    { name: "Lions", city: "Afrique", country: "Afrique", region: "nature", flag: "🦁", emoji: "🦁", videoId: "MiQe9ob9aDc", desc: "La troupe de lions." },
    { name: "Troupeau éléphants", city: "Afrique", country: "Afrique", region: "nature", flag: "🌍", emoji: "🐘", videoId: "QJe1tGI1EZc", desc: "Les pachydermes en troupeau." },
    { name: "Zèbres", city: "Savane", country: "Afrique", region: "nature", flag: "🌍", emoji: "🦓", videoId: "6GINvRvBGGs", desc: "La harde de zèbres." },
    { name: "Rhinocéros", city: "Afrique", country: "Afrique du Sud", region: "nature", flag: "🇿🇦", emoji: "🦏", videoId: "wtylzrJvCKU", desc: "Les rhinos menacés." },
    { name: "Grand requin blanc", city: "Afrique du Sud", country: "Afrique du Sud", region: "nature", flag: "🇿🇦", emoji: "🦈", videoId: "Kw8uKR1q7y4", desc: "Les grands blancs en direct." },
    { name: "Toucans", city: "Amazonie", country: "Brésil", region: "nature", flag: "🇧🇷", emoji: "🦜", videoId: "tgmrC0rDrc4", desc: "Les toucans colorés." },
    { name: "Iguanes", city: "Amérique centrale", country: "Costa Rica", region: "nature", flag: "🇨🇷", emoji: "🦎", videoId: "6YNbfQllAKk", desc: "Les iguanes tropicaux." },
    { name: "Paresseux", city: "Costa Rica", country: "Costa Rica", region: "nature", flag: "🇨🇷", emoji: "🦥", videoId: "HSYxKV7NWKM", desc: "Les paresseux en direct." },
    { name: "Tortues de mer", city: "Océan", country: "Costa Rica", region: "nature", flag: "🇨🇷", emoji: "🐢", videoId: "IA28S7y5rvI", desc: "La ponte des tortues." },
    { name: "Aurores Boréales", city: "Laponie", country: "Finlande", region: "nature", flag: "🇫🇮", emoji: "🌌", videoId: "a0i1Kg6fROg", desc: "Les aurores dans le ciel arctique." },
    { name: "Aurores Finlande", city: "Laponie", country: "Finlande", region: "nature", flag: "🇫🇮", emoji: "🌌", videoId: "ccTVAhJU5lg", desc: "Les aurores finlandaises." },
    { name: "Tigres", city: "Inde", country: "Inde", region: "nature", flag: "🇮🇳", emoji: "🐅", videoId: "eeMDlq_kQpQ", desc: "Les tigres du Bengale." },
    { name: "Macareux", city: "Islande", country: "Islande", region: "nature", flag: "🇮🇸", emoji: "🐧", videoId: "1pFTuCQGVZ0", desc: "Les macareux islandais." },
    { name: "Aurores d'Islande", city: "Reykjavik", country: "Islande", region: "nature", flag: "🇮🇸", emoji: "🌌", videoId: "AvKdtZIb-6c", desc: "Les aurores boréales islandaises." },
    { name: "Colonie de phoques", city: "Côte", country: "Monde", region: "nature", flag: "🌊", emoji: "🦭", videoId: "Cj4bM-OoW9g", desc: "Les phoques en colonie." },
    { name: "Mouettes", city: "Côte", country: "Monde", region: "nature", flag: "🌊", emoji: "🪶", videoId: "Q3MRRVmHNUw", desc: "Les mouettes en vol." },
    { name: "Albatros", city: "Océan", country: "Monde", region: "nature", flag: "🌊", emoji: "🪶", videoId: "Mm_zVDDUeNA", desc: "Le plus grand oiseau de mer." },
    { name: "Poissons clown", city: "Récif", country: "Monde", region: "nature", flag: "🌊", emoji: "🐠", videoId: "1zcIUk66HX4", desc: "Les Nemos en direct." },
    { name: "Cascade", city: "—", country: "Monde", region: "nature", flag: "🌍", emoji: "💦", videoId: "4BrvMGznLTo", desc: "Une cascade en direct." },
    { name: "Feu de camp", city: "—", country: "Monde", region: "nature", flag: "🔥", emoji: "🔥", videoId: "mKCieTImjvU", desc: "Un feu de camp relaxant." },
    { name: "Volcan", city: "—", country: "Monde", region: "nature", flag: "🌋", emoji: "🌋", videoId: "4B-xBkUX4jM", desc: "Un volcan en direct." },
    { name: "Aurores Norvège", city: "Tromsø", country: "Norvège", region: "nature", flag: "🇳🇴", emoji: "🌌", videoId: "MfLGYf3XRy8", desc: "Les aurores norvégiennes." },
    { name: "Gorilles", city: "Congo", country: "RDC", region: "nature", flag: "🇨🇩", emoji: "🦍", videoId: "YaDkA5CkFXk", desc: "Les gorilles des montagnes." },
    { name: "Gnous", city: "Serengeti", country: "Tanzanie", region: "nature", flag: "🇹🇿", emoji: "🐃", videoId: "2EZavJUNdLI", desc: "La grande migration." },
    { name: "Orignaux", city: "Alaska", country: "USA", region: "nature", flag: "🇺🇸", emoji: "🫎", videoId: "61pi8UjLOlo", desc: "Les grands cervidés." },
    { name: "Ours Katmai 2", city: "Alaska", country: "USA", region: "nature", flag: "🇺🇸", emoji: "🐻", videoId: "YXji6UQ0bwY", desc: "Les ours pêchent en direct." },
    { name: "Ours de Katmai", city: "Alaska", country: "USA", region: "nature", flag: "🇺🇸", emoji: "🐻", videoId: "5e4lsEe4Vew", desc: "Les ours pêchent le saumon." },
    { name: "Ratons laveurs", city: "Amérique", country: "USA", region: "nature", flag: "🇺🇸", emoji: "🦝", videoId: "s2UzCtfmdao", desc: "Les ratons nocturnes." },
    { name: "Manchots", city: "Aquarium", country: "USA", region: "nature", flag: "🇺🇸", emoji: "🐧", videoId: "HHp4rjhJsWI", desc: "Les manchots." },
    { name: "Poulpe", city: "Aquarium", country: "USA", region: "nature", flag: "🇺🇸", emoji: "🐙", videoId: "_5zWp0bMgcI", desc: "Le poulpe géant." },
    { name: "Requins", city: "Aquarium", country: "USA", region: "nature", flag: "🇺🇸", emoji: "🦈", videoId: "8WTFWvePutc", desc: "Les requins." },
    { name: "Pandas Géants", city: "Atlanta", country: "USA", region: "nature", flag: "🇺🇸", emoji: "🐼", videoId: "NqOmHpwMUxs", desc: "Les pandas du zoo." },
    { name: "Ouragan", city: "Atlantique", country: "USA", region: "nature", flag: "🇺🇸", emoji: "🌀", videoId: "IV3Fnoaljfs", desc: "Les ouragans atlantiques." },
    { name: "Monterey Aquarium", city: "Californie", country: "USA", region: "nature", flag: "🇺🇸", emoji: "🐠", videoId: "NUnJc82ptd4", desc: "L'aquarium légendaire." },
    { name: "Otaries", city: "Californie", country: "USA", region: "nature", flag: "🇺🇸", emoji: "🦭", videoId: "-uooI2satIQ", desc: "Les otaries rugissantes." },
    { name: "Alligators", city: "Everglades", country: "USA", region: "nature", flag: "🇺🇸", emoji: "🐊", videoId: "LHtzZf4T7xw", desc: "Les marais floridiens." },
    { name: "Aurores Alaska", city: "Fairbanks", country: "USA", region: "nature", flag: "🇺🇸", emoji: "🌌", videoId: "O52zDyxg5QI", desc: "Les northern lights alaskiennes." },
    { name: "Chèvres", city: "Ferme", country: "USA", region: "nature", flag: "🇺🇸", emoji: "🐐", videoId: "GY1LjIjUnAc", desc: "Les chèvres curieuses." },
    { name: "Poulailler", city: "Ferme", country: "USA", region: "nature", flag: "🇺🇸", emoji: "🐔", videoId: "c2SXDkaNOU4", desc: "Les poules au poulailler." },
    { name: "Ranch de chevaux", city: "Ferme", country: "USA", region: "nature", flag: "🇺🇸", emoji: "🐎", videoId: "3UzgSRYzDEQ", desc: "Les chevaux en liberté." },
    { name: "Vaches de ferme", city: "Ferme", country: "USA", region: "nature", flag: "🇺🇸", emoji: "🐄", videoId: "CvhjgMSzKWI", desc: "La vie à la ferme." },
    { name: "Lamantins", city: "Floride", country: "USA", region: "nature", flag: "🇺🇸", emoji: "🐋", videoId: "Fz6sl9YJZE0", desc: "Les vaches marines." },
    { name: "Cerfs", city: "Forêt", country: "USA", region: "nature", flag: "🇺🇸", emoji: "🦌", videoId: "F0GOOP82094", desc: "La vie forestière." },
    { name: "Écureuils", city: "Forêt", country: "USA", region: "nature", flag: "🇺🇸", emoji: "🐿️", videoId: "dJVVcv9-ndg", desc: "Les écureuils curieux." },
    { name: "Chasse aux tempêtes", city: "Kansas", country: "USA", region: "nature", flag: "🇺🇸", emoji: "⛈️", videoId: "XOc93NVX_Eo", desc: "Les tornades des plaines." },
    { name: "Hérons", city: "Marais", country: "USA", region: "nature", flag: "🇺🇸", emoji: "🦢", videoId: "69T6gRN5vAk", desc: "Les hérons pêcheurs." },
    { name: "Dauphins", city: "Océan", country: "USA", region: "nature", flag: "🇺🇸", emoji: "🐬", videoId: "ghg9lhFDouM", desc: "Les dauphins en liberté." },
    { name: "Orques", city: "Pacifique", country: "USA", region: "nature", flag: "🇺🇸", emoji: "🐋", videoId: "hTOmWcmr2Tc", desc: "Les épaulards sauvages." },
    { name: "Récif corallien", city: "Pacifique", country: "USA", region: "nature", flag: "🌊", emoji: "🐢", videoId: "7i8ARjIeM2k", desc: "Plongée en direct." },
    { name: "Bisons", city: "Prairies", country: "USA", region: "nature", flag: "🇺🇸", emoji: "🦬", videoId: "WjxG5mHc3kg", desc: "Le troupeau sauvage." },
    { name: "Saumons", city: "Rivière", country: "USA", region: "nature", flag: "🇺🇸", emoji: "🐟", videoId: "jB4Iwn2GJS4", desc: "La remontée des saumons." },
    { name: "Girafes", city: "San Diego", country: "USA", region: "nature", flag: "🇺🇸", emoji: "🦒", videoId: "ydYDqZQpim8", desc: "La savane du zoo." },
    { name: "Hippopotames", city: "San Diego", country: "USA", region: "nature", flag: "🇺🇸", emoji: "🦛", videoId: "BSUnBPvX9K4", desc: "Les hippos sous l'eau." },
    { name: "Nid d'aigles", city: "USA", country: "USA", region: "nature", flag: "🇺🇸", emoji: "🦅", videoId: "tQ-QvErC48w", desc: "Les aigles pêcheurs." },
    { name: "Radar météo", city: "USA", country: "USA", region: "nature", flag: "🇺🇸", emoji: "🌩️", videoId: "DPFuc5G-cw0", desc: "La météo en direct." },
    { name: "Yellowstone", city: "Yellowstone", country: "USA", region: "nature", flag: "🇺🇸", emoji: "🦬", videoId: "BWnloy8r0qU", desc: "La faune du parc." },
    { name: "Flamants roses", city: "Zoo", country: "USA", region: "nature", flag: "🇺🇸", emoji: "🦩", videoId: "C_4Yy-QbQTQ", desc: "Les flamants en groupe." },
    { name: "Panda roux", city: "Zoo", country: "USA", region: "nature", flag: "🇺🇸", emoji: "🦝", videoId: "dkFYrv1NFPg", desc: "Le petit panda." },
    { name: "Canards", city: "Étang", country: "USA", region: "nature", flag: "🇺🇸", emoji: "🦆", videoId: "cWfPMTuzjzA", desc: "Les canards à l'étang." },
    { name: "Loutres", city: "Étang", country: "USA", region: "nature", flag: "🇺🇸", emoji: "🦦", videoId: "DHUnz4dyb54", desc: "Les loutres joueuses." },
    { name: "Chouette", city: "—", country: "USA", region: "nature", flag: "🇺🇸", emoji: "🦉", videoId: "RbPzFQiZ-Sc", desc: "La chouette à l'affût." },
    { name: "Fourmilière", city: "—", country: "USA", region: "nature", flag: "🇺🇸", emoji: "🐜", videoId: "e9hm3axPPB4", desc: "Les fourmis au travail." },
    { name: "Lapins", city: "—", country: "USA", region: "nature", flag: "🇺🇸", emoji: "🐰", videoId: "QhxCVRJrVHs", desc: "Les lapins en liberté." },
    { name: "Mangeoire oiseaux", city: "—", country: "USA", region: "nature", flag: "🇺🇸", emoji: "🦜", videoId: "x10vL6_47Dw", desc: "Oiseaux colorés." },
    { name: "Migration", city: "—", country: "USA", region: "nature", flag: "🇺🇸", emoji: "🪶", videoId: "RWv2nYHMquI", desc: "La migration printanière." },
    { name: "Nid de balbuzards", city: "—", country: "USA", region: "nature", flag: "🇺🇸", emoji: "🦅", videoId: "FlUHmB0QPIU", desc: "Le nid en direct." },
    { name: "Refuge de chats", city: "—", country: "USA", region: "nature", flag: "🇺🇸", emoji: "🐈", videoId: "NQrmlwqsxP4", desc: "Les chats en adoption." },
    { name: "Refuge de chiens", city: "—", country: "USA", region: "nature", flag: "🇺🇸", emoji: "🐕", videoId: "Qeq2Kax0v64", desc: "Les chiens en adoption." },
    { name: "Rivière naturelle", city: "—", country: "USA", region: "nature", flag: "🇺🇸", emoji: "💧", videoId: "2_ovWpVE9es", desc: "Une rivière en direct." },
    { name: "Ruche d'abeilles", city: "—", country: "USA", region: "nature", flag: "🇺🇸", emoji: "🐝", videoId: "ogyomiei294", desc: "L'activité de la ruche." },
];

/* ==================================================================
   RENDU ET INTERACTIONS
   ================================================================== */

const grid = document.getElementById('webcam-grid');
const searchInput = document.getElementById('search');
const filterButtons = document.querySelectorAll('.filter-btn');
const noResults = document.getElementById('no-results');
const countEl = document.getElementById('count');

let currentRegion = 'all';
let currentSearch = '';

const thumbUrl = (id) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
const livePreviewUrl = (id) => `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&mute=1&controls=0&loop=1&playlist=${id}&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&disablekb=1&playsinline=1`;
const fullEmbedUrl = (id) => `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`;
const sourceUrl = (id) => `https://www.youtube.com/watch?v=${id}`;

const MAX_ACTIVE_IFRAMES = 10;
const activeCards = new Set();

function loadIframe(card) {
    if (card.dataset.loaded === '1') return;
    if (activeCards.size >= MAX_ACTIVE_IFRAMES) {
        const oldest = activeCards.values().next().value;
        if (oldest && oldest !== card) unloadIframe(oldest);
    }
    const videoId = card.dataset.videoId;
    const thumb = card.querySelector('.card-thumb');
    const iframe = document.createElement('iframe');
    iframe.className = 'thumb-iframe';
    iframe.src = livePreviewUrl(videoId);
    iframe.setAttribute('allow', 'autoplay; encrypted-media; picture-in-picture');
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('tabindex', '-1');
    thumb.appendChild(iframe);
    card.dataset.loaded = '1';
    activeCards.add(card);
}

function unloadIframe(card) {
    const iframe = card.querySelector('.thumb-iframe');
    if (iframe) iframe.remove();
    card.dataset.loaded = '0';
    activeCards.delete(card);
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) loadIframe(entry.target);
        else unloadIframe(entry.target);
    });
}, { rootMargin: '200px 0px', threshold: 0.1 });

function renderCard(webcam, index) {
    const card = document.createElement('div');
    card.className = 'card';
    card.style.animationDelay = `${Math.min(index * 0.015, 0.6)}s`;
    card.dataset.region = webcam.region;
    card.dataset.videoId = webcam.videoId;
    card.dataset.loaded = '0';

    card.innerHTML = `
        <div class="card-thumb">
            <span class="live-badge">LIVE</span>
            <img class="thumb-img" src="${thumbUrl(webcam.videoId)}" alt="${webcam.name}" loading="lazy"
                 onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
            <div class="card-thumb-fallback" style="display:none;">${webcam.emoji || '📹'}</div>
            <div class="card-overlay">
                <div class="play-btn">▶</div>
            </div>
        </div>
        <div class="card-body">
            <div class="card-title">
                <span class="card-flag">${webcam.flag}</span>
                <span>${webcam.name}</span>
            </div>
            <div class="card-location">${webcam.city} · ${webcam.country}</div>
            <div class="card-desc">${webcam.desc}</div>
            <span class="card-tag">${regionLabel(webcam.region)}</span>
        </div>
    `;
    card.addEventListener('click', () => openModal(webcam));
    return card;
}

function regionLabel(r) {
    const labels = { europe: 'Europe', americas: 'Amériques', asia: 'Asie', oceania: 'Océanie', africa: 'Afrique', nature: 'Nature', space: 'Espace' };
    return labels[r] || r;
}

function renderGrid() {
    const search = currentSearch.toLowerCase().trim();
    activeCards.forEach(card => observer.unobserve(card));
    activeCards.clear();

    const filtered = WEBCAMS.filter(w => {
        const matchesRegion = currentRegion === 'all' || w.region === currentRegion;
        const matchesSearch = !search ||
            w.name.toLowerCase().includes(search) ||
            w.city.toLowerCase().includes(search) ||
            w.country.toLowerCase().includes(search) ||
            w.desc.toLowerCase().includes(search);
        return matchesRegion && matchesSearch;
    });

    grid.innerHTML = '';
    filtered.forEach((w, i) => {
        const card = renderCard(w, i);
        grid.appendChild(card);
        observer.observe(card);
    });

    countEl.textContent = filtered.length;
    noResults.classList.toggle('hidden', filtered.length > 0);
}

filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentRegion = btn.dataset.region;
        renderGrid();
    });
});

let searchTimeout;
searchInput.addEventListener('input', (e) => {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
        currentSearch = e.target.value;
        renderGrid();
    }, 200);
});

const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalLocation = document.getElementById('modal-location');
const modalDesc = document.getElementById('modal-desc');
const modalVideo = document.getElementById('modal-video');
const modalSource = document.getElementById('modal-source');
const modalClose = document.getElementById('modal-close');

function openModal(webcam) {
    modalTitle.textContent = `${webcam.flag} ${webcam.name}`;
    modalLocation.textContent = `${webcam.city} · ${webcam.country}`;
    modalDesc.textContent = webcam.desc;
    modalSource.href = sourceUrl(webcam.videoId);
    modalVideo.innerHTML = `<iframe src="${fullEmbedUrl(webcam.videoId)}"
        title="${webcam.name}"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen></iframe>`;
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.add('hidden');
    modalVideo.innerHTML = '';
    document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);
modal.querySelector('.modal-backdrop').addEventListener('click', closeModal);
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
});

renderGrid();
