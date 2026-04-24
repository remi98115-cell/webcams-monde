/* ==================================================================
   WEBCAMS DU MONDE — 214 flux live vérifiés le 2026-04-24
   ------------------------------------------------------------------
   Pour ajouter/modifier une webcam : éditez simplement ce tableau.
   videoId = identifiant YouTube (la partie après v= dans l'URL)
   ================================================================== */

const WEBCAMS = [
    { name: "Jackson Hole Town Square", city: "Wyoming", country: "USA", region: "americas", flag: "🇺🇸", emoji: "🤠", videoId: "1EiC9bvVGnk", desc: "La petite ville mythique du Far West américain." },
    { name: "Shibuya Crossing", city: "Tokyo", country: "Japon", region: "asia", flag: "🇯🇵", emoji: "🗾", videoId: "dfVK7ld38Ys", desc: "Le passage piéton le plus fréquenté du monde." },
    { name: "Abbey Road", city: "Londres", country: "Royaume-Uni", region: "europe", flag: "🇬🇧", emoji: "🎸", videoId: "M3EYAY2MftI", desc: "Le passage piéton mythique des Beatles." },
    { name: "Times Square", city: "New York", country: "USA", region: "americas", flag: "🇺🇸", emoji: "🗽", videoId: "rnXIjl_Rzy4", desc: "Le carrefour le plus célèbre du monde, illuminé 24h/24." },
    { name: "Venice Beach", city: "Los Angeles", country: "USA", region: "americas", flag: "🇺🇸", emoji: "🏖️", videoId: "EO_1LWqsCNE", desc: "La plage culte de Californie." },
    { name: "Fontaine de Trevi", city: "Rome", country: "Italie", region: "europe", flag: "🇮🇹", emoji: "⛲", videoId: "wMT2aNcP4Wg", desc: "La majestueuse fontaine baroque." },
    { name: "Temple Bar", city: "Dublin", country: "Irlande", region: "europe", flag: "🇮🇪", emoji: "🍺", videoId: "3nyPER2kzqk", desc: "Le quartier festif et coloré." },
    { name: "Piazza San Marco", city: "Venise", country: "Italie", region: "europe", flag: "🇮🇹", emoji: "🛶", videoId: "x4AlaibltlA", desc: "La place Saint-Marc de Venise." },
    { name: "Sagrada Familia", city: "Barcelone", country: "Espagne", region: "europe", flag: "🇪🇸", emoji: "⛪", videoId: "NHRDdaH4LpU", desc: "La basilique de Gaudí." },
    { name: "Vieille Ville", city: "Prague", country: "Tchéquie", region: "europe", flag: "🇨🇿", emoji: "🏰", videoId: "IFnbDmgP69Q", desc: "La place de la vieille ville." },
    { name: "Dam Square", city: "Amsterdam", country: "Pays-Bas", region: "europe", flag: "🇳🇱", emoji: "🚲", videoId: "Gd9d4q6WvUY", desc: "La place centrale d'Amsterdam." },
    { name: "Cervin", city: "Zermatt", country: "Suisse", region: "europe", flag: "🇨🇭", emoji: "🏔️", videoId: "enYFXf8u7Lc", desc: "La montagne emblématique des Alpes." },
    { name: "Reykjavik", city: "Reykjavik", country: "Islande", region: "europe", flag: "🇮🇸", emoji: "❄️", videoId: "tYgGEC-ESTw", desc: "La capitale la plus septentrionale." },
    { name: "Acropole", city: "Athènes", country: "Grèce", region: "europe", flag: "🇬🇷", emoji: "🏛️", videoId: "5p-s-1453Us", desc: "Le Parthénon antique." },
    { name: "Aurores Boréales", city: "Laponie", country: "Finlande", region: "nature", flag: "🇫🇮", emoji: "🌌", videoId: "O52zDyxg5QI", desc: "Les aurores dans le ciel arctique." },
    { name: "Mont Blanc", city: "Chamonix", country: "France", region: "europe", flag: "🇫🇷", emoji: "🏔️", videoId: "elGbyX0KCMg", desc: "Le toit de l'Europe." },
    { name: "Tour Eiffel", city: "Paris", country: "France", region: "europe", flag: "🇫🇷", emoji: "🗼", videoId: "OzYp4NRZlwQ", desc: "Panorama sur la Dame de Fer." },
    { name: "Ponte Vecchio", city: "Florence", country: "Italie", region: "europe", flag: "🇮🇹", emoji: "🌉", videoId: "qWlry5rSTBo", desc: "Le pont médiéval sur l'Arno." },
    { name: "Côte d'Azur", city: "Nice", country: "France", region: "europe", flag: "🇫🇷", emoji: "🏖️", videoId: "asO_10T0k2k", desc: "La Promenade des Anglais." },
    { name: "Dubrovnik", city: "Dubrovnik", country: "Croatie", region: "europe", flag: "🇭🇷", emoji: "🏰", videoId: "idr71oXmhdc", desc: "La perle de l'Adriatique." },
    { name: "Bosphore", city: "Istanbul", country: "Turquie", region: "europe", flag: "🇹🇷", emoji: "🕌", videoId: "Veq52FdYk0s", desc: "Le détroit Europe/Asie." },
    { name: "Lac de Côme", city: "Lombardie", country: "Italie", region: "europe", flag: "🇮🇹", emoji: "🏞️", videoId: "d0-a8UJAyvY", desc: "Le lac glamour italien." },
    { name: "Zurich", city: "Zurich", country: "Suisse", region: "europe", flag: "🇨🇭", emoji: "🏙️", videoId: "QIt1FaDMnQc", desc: "Le centre-ville et le lac." },
    { name: "Miami Beach", city: "Miami", country: "USA", region: "americas", flag: "🇺🇸", emoji: "🌴", videoId: "cmkAbDUEoyA", desc: "Les plages tropicales." },
    { name: "Chutes du Niagara", city: "Ontario", country: "Canada", region: "americas", flag: "🇨🇦", emoji: "💧", videoId: "cf4YkyGk6Tk", desc: "Les chutes en HD." },
    { name: "Las Vegas Strip", city: "Las Vegas", country: "USA", region: "americas", flag: "🇺🇸", emoji: "🎰", videoId: "_rmUXOHSf0w", desc: "Le boulevard le plus illuminé." },
    { name: "Space Needle", city: "Seattle", country: "USA", region: "americas", flag: "🇺🇸", emoji: "🏗️", videoId: "4cgSE12k9Sc", desc: "Le monument futuriste." },
    { name: "Key West", city: "Key West", country: "USA", region: "americas", flag: "🇺🇸", emoji: "🌅", videoId: "1Gn9gG9U2iM", desc: "Le point le plus au sud des USA." },
    { name: "Golden Gate Bridge", city: "San Francisco", country: "USA", region: "americas", flag: "🇺🇸", emoji: "🌉", videoId: "BSWhGNXxT9A", desc: "Le pont rouge emblématique." },
    { name: "Bourbon Street", city: "La Nouvelle-Orléans", country: "USA", region: "americas", flag: "🇺🇸", emoji: "🎷", videoId: "Ksrleaxxxhw", desc: "Le quartier du jazz." },
    { name: "CN Tower", city: "Toronto", country: "Canada", region: "americas", flag: "🇨🇦", emoji: "🏢", videoId: "EPKWu223XEg", desc: "La skyline de Toronto." },
    { name: "Chicago", city: "Chicago", country: "USA", region: "americas", flag: "🇺🇸", emoji: "🏙️", videoId: "O0UGT7AT3aw", desc: "Les gratte-ciels sur le lac Michigan." },
    { name: "Vancouver", city: "Vancouver", country: "Canada", region: "americas", flag: "🇨🇦", emoji: "🏔️", videoId: "rxyNjFKwzJA", desc: "Entre océan et Rocheuses." },
    { name: "Waikiki Beach", city: "Honolulu", country: "USA", region: "oceania", flag: "🇺🇸", emoji: "🌺", videoId: "WIUg8wzhq1g", desc: "La plage d'Oahu." },
    { name: "Copacabana", city: "Rio de Janeiro", country: "Brésil", region: "americas", flag: "🇧🇷", emoji: "🏖️", videoId: "l8El-eM_sTk", desc: "La plage mythique." },
    { name: "Baie de Hong Kong", city: "Hong Kong", country: "Chine", region: "asia", flag: "🇭🇰", emoji: "🌆", videoId: "YpmiEiUJ5nI", desc: "La skyline spectaculaire." },
    { name: "Mont Fuji", city: "Honshu", country: "Japon", region: "asia", flag: "🇯🇵", emoji: "🗻", videoId: "F2NbYrc-gBU", desc: "Le volcan sacré du Japon." },
    { name: "Bangkok", city: "Bangkok", country: "Thaïlande", region: "asia", flag: "🇹🇭", emoji: "🛕", videoId: "UemFRPrl1hk", desc: "La capitale thaïlandaise." },
    { name: "Shinjuku", city: "Tokyo", country: "Japon", region: "asia", flag: "🇯🇵", emoji: "🏮", videoId: "DjdUEyjx8GM", desc: "Le quartier illuminé." },
    { name: "Marina Bay", city: "Singapour", country: "Singapour", region: "asia", flag: "🇸🇬", emoji: "🏊", videoId: "9cfkyMzanbc", desc: "La baie futuriste." },
    { name: "Dubai Marina", city: "Dubaï", country: "UAE", region: "asia", flag: "🇦🇪", emoji: "🏙️", videoId: "-p1Xnt9n0yg", desc: "La marina futuriste." },
    { name: "Kyoto", city: "Kyoto", country: "Japon", region: "asia", flag: "🇯🇵", emoji: "⛩️", videoId: "bK9vpKisRnQ", desc: "L'ancienne capitale." },
    { name: "Bali", city: "Bali", country: "Indonésie", region: "asia", flag: "🇮🇩", emoji: "🌴", videoId: "FBYUkqutqzE", desc: "L'île des dieux." },
    { name: "Sydney Harbour", city: "Sydney", country: "Australie", region: "oceania", flag: "🇦🇺", emoji: "🎭", videoId: "5uZa3-RMFos", desc: "L'Opéra et le Harbour Bridge." },
    { name: "Auckland", city: "Auckland", country: "Nouvelle-Zélande", region: "oceania", flag: "🇳🇿", emoji: "⛵", videoId: "BQR800Gu28g", desc: "Le port d'Auckland." },
    { name: "Melbourne", city: "Melbourne", country: "Australie", region: "oceania", flag: "🇦🇺", emoji: "🎨", videoId: "l_8DrACHpwY", desc: "La capitale culturelle." },
    { name: "Le Cap", city: "Le Cap", country: "Afrique du Sud", region: "africa", flag: "🇿🇦", emoji: "🏔️", videoId: "iUjpHz9_qaM", desc: "Table Mountain et la baie." },
    { name: "Safari Kruger", city: "Mpumalanga", country: "Afrique du Sud", region: "africa", flag: "🇿🇦", emoji: "🦁", videoId: "NapztoCaKFY", desc: "Safari en direct." },
    { name: "Éléphants Tembe", city: "KwaZulu-Natal", country: "Afrique du Sud", region: "africa", flag: "🇿🇦", emoji: "🐘", videoId: "gdrNUUf-cQw", desc: "Point d'eau des éléphants." },
    { name: "Marrakech", city: "Marrakech", country: "Maroc", region: "africa", flag: "🇲🇦", emoji: "🕌", videoId: "HfgIFGbdGJ0", desc: "La place Jemaa el-Fna." },
    { name: "Ours de Katmai", city: "Alaska", country: "USA", region: "nature", flag: "🇺🇸", emoji: "🐻", videoId: "5e4lsEe4Vew", desc: "Les ours pêchent le saumon." },
    { name: "Pandas Géants", city: "Atlanta", country: "USA", region: "nature", flag: "🇺🇸", emoji: "🐼", videoId: "NqOmHpwMUxs", desc: "Les pandas du zoo." },
    { name: "Old Faithful", city: "Yellowstone", country: "USA", region: "nature", flag: "🇺🇸", emoji: "♨️", videoId: "BWnloy8r0qU", desc: "Le geyser toutes les 90 min." },
    { name: "Girafes", city: "San Diego", country: "USA", region: "nature", flag: "🇺🇸", emoji: "🦒", videoId: "ydYDqZQpim8", desc: "La savane du zoo." },
    { name: "Manchots", city: "Aquarium", country: "USA", region: "nature", flag: "🇺🇸", emoji: "🐧", videoId: "HHp4rjhJsWI", desc: "Les manchots." },
    { name: "Hippopotames", city: "San Diego", country: "USA", region: "nature", flag: "🇺🇸", emoji: "🦛", videoId: "BSUnBPvX9K4", desc: "Les hippos sous l'eau." },
    { name: "Requins", city: "Aquarium", country: "USA", region: "nature", flag: "🇺🇸", emoji: "🦈", videoId: "8WTFWvePutc", desc: "Les requins." },
    { name: "Monterey Aquarium", city: "Californie", country: "USA", region: "nature", flag: "🇺🇸", emoji: "🐠", videoId: "NUnJc82ptd4", desc: "L'aquarium légendaire." },
    { name: "Récif corallien", city: "Pacifique", country: "USA", region: "nature", flag: "🌊", emoji: "🐢", videoId: "7i8ARjIeM2k", desc: "Plongée en direct." },
    { name: "Nid d'aigles", city: "USA", country: "USA", region: "nature", flag: "🇺🇸", emoji: "🦅", videoId: "tQ-QvErC48w", desc: "Les aigles pêcheurs." },
    { name: "Mangeoire oiseaux", city: "—", country: "USA", region: "nature", flag: "🇺🇸", emoji: "🦜", videoId: "y9t1g8Ike6g", desc: "Oiseaux colorés." },
    { name: "ISS Live", city: "Orbite", country: "NASA", region: "space", flag: "🌍", emoji: "🛰️", videoId: "vytmBNhc9ig", desc: "La Terre depuis l'ISS." },
    { name: "SpaceX", city: "Cape Canaveral", country: "USA", region: "space", flag: "🇺🇸", emoji: "🛸", videoId: "PQ2wzesrc9E", desc: "Lancements Falcon." },
    { name: "NASA TV", city: "—", country: "NASA", region: "space", flag: "🚀", emoji: "👨‍🚀", videoId: "sWasdbDVNvc", desc: "Missions et lancements." },
    { name: "Phuket", city: "Phuket", country: "Thaïlande", region: "asia", flag: "🇹🇭", emoji: "🏝️", videoId: "IVa59mpPJTg", desc: "Les plages thaïlandaises." },
    { name: "Maldives", city: "Maldives", country: "Maldives", region: "asia", flag: "🇲🇻", emoji: "🏝️", videoId: "_BMi3usEwi8", desc: "Les lagons turquoise." },
    { name: "Soleil", city: "Espace", country: "NASA", region: "space", flag: "☀️", emoji: "🌞", videoId: "6g4Fh8K-MhY", desc: "Le Soleil via SDO." },
    { name: "Lisbonne", city: "Lisbonne", country: "Portugal", region: "europe", flag: "🇵🇹", emoji: "🚋", videoId: "VbDwJxGlZ5k", desc: "Les collines et tramways." },
    { name: "Stonehenge", city: "Wiltshire", country: "Royaume-Uni", region: "europe", flag: "🇬🇧", emoji: "🗿", videoId: "AiNCbGzabVo", desc: "Le site préhistorique mystérieux." },
    { name: "Banff", city: "Alberta", country: "Canada", region: "americas", flag: "🇨🇦", emoji: "🏞️", videoId: "EENeRuDqS48", desc: "Les lacs turquoise." },
    { name: "Sedona", city: "Arizona", country: "USA", region: "americas", flag: "🇺🇸", emoji: "🏜️", videoId: "JlxDI6rGH-U", desc: "Les roches rouges de Sedona." },
    { name: "Porte de Brandebourg", city: "Berlin", country: "Allemagne", region: "europe", flag: "🇩🇪", emoji: "🏛️", videoId: "IRqboacDNFg", desc: "Le monument emblématique." },
    { name: "Édimbourg", city: "Édimbourg", country: "Écosse", region: "europe", flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿", emoji: "🏰", videoId: "d2Ii5ybhbQY", desc: "La capitale écossaise." },
    { name: "Oxford", city: "Oxford", country: "Royaume-Uni", region: "europe", flag: "🇬🇧", emoji: "🎓", videoId: "h8glPXsnezU", desc: "L'université historique." },
    { name: "Canary Wharf", city: "Londres", country: "Royaume-Uni", region: "europe", flag: "🇬🇧", emoji: "🏢", videoId: "8JCk5M_xrBs", desc: "Le quartier financier." },
    { name: "Port de Hambourg", city: "Hambourg", country: "Allemagne", region: "europe", flag: "🇩🇪", emoji: "⚓", videoId: "OmyDLXvaus4", desc: "Le grand port allemand." },
    { name: "Marienplatz", city: "Munich", country: "Allemagne", region: "europe", flag: "🇩🇪", emoji: "🍺", videoId: "KxWuwC7R5kY", desc: "La place centrale et l'hôtel de ville." },
    { name: "Oktoberfest", city: "Munich", country: "Allemagne", region: "europe", flag: "🇩🇪", emoji: "🍻", videoId: "NIuO6hrFTrg", desc: "La fête de la bière (saisonnier)." },
    { name: "Cathédrale de Cologne", city: "Cologne", country: "Allemagne", region: "europe", flag: "🇩🇪", emoji: "⛪", videoId: "kodtgRure8Y", desc: "Le chef-d'œuvre gothique." },
    { name: "Salzbourg", city: "Salzbourg", country: "Autriche", region: "europe", flag: "🇦🇹", emoji: "🎼", videoId: "uZV_CZCAf8g", desc: "La ville de Mozart." },
    { name: "Lac Léman", city: "Genève", country: "Suisse", region: "europe", flag: "🇨🇭", emoji: "⛲", videoId: "3HsL6AA6rPM", desc: "Le Jet d'eau de Genève." },
    { name: "Monaco", city: "Monte-Carlo", country: "Monaco", region: "europe", flag: "🇲🇨", emoji: "🎰", videoId: "Yl4ICscy8aY", desc: "La principauté et son casino." },
    { name: "Cannes", city: "Cannes", country: "France", region: "europe", flag: "🇫🇷", emoji: "🎬", videoId: "z6BNMoj9Pyo", desc: "La Croisette et la baie." },
    { name: "Lyon", city: "Lyon", country: "France", region: "europe", flag: "🇫🇷", emoji: "🍷", videoId: "EBhCrTPpdBI", desc: "La capitale gastronomique." },
    { name: "Mont Saint-Michel", city: "Normandie", country: "France", region: "europe", flag: "🇫🇷", emoji: "⛪", videoId: "y1P2kxRTN3I", desc: "L'abbaye sur la baie." },
    { name: "Bordeaux", city: "Bordeaux", country: "France", region: "europe", flag: "🇫🇷", emoji: "🍷", videoId: "epob2jcRe_Q", desc: "La capitale du vin." },
    { name: "Vieux-Port", city: "Marseille", country: "France", region: "europe", flag: "🇫🇷", emoji: "⚓", videoId: "KmpCbWyTvpY", desc: "Le port historique." },
    { name: "Canaux d'Amsterdam", city: "Amsterdam", country: "Pays-Bas", region: "europe", flag: "🇳🇱", emoji: "🛥️", videoId: "ZnOoxCd7BGU", desc: "Les canaux UNESCO." },
    { name: "Port de Rotterdam", city: "Rotterdam", country: "Pays-Bas", region: "europe", flag: "🇳🇱", emoji: "🏗️", videoId: "M09NaBVPjAI", desc: "Le plus grand port d'Europe." },
    { name: "Grand-Place", city: "Bruxelles", country: "Belgique", region: "europe", flag: "🇧🇪", emoji: "🏛️", videoId: "5Uqw_G_IdjE", desc: "La plus belle place du monde." },
    { name: "Bruges", city: "Bruges", country: "Belgique", region: "europe", flag: "🇧🇪", emoji: "🏘️", videoId: "BorjZEkeoMM", desc: "La Venise du Nord." },
    { name: "Stockholm", city: "Stockholm", country: "Suède", region: "europe", flag: "🇸🇪", emoji: "🏝️", videoId: "agY6ZaM1G_o", desc: "La capitale sur l'eau." },
    { name: "Oslo", city: "Oslo", country: "Norvège", region: "europe", flag: "🇳🇴", emoji: "🗻", videoId: "7VXn9NpuSZk", desc: "La capitale des fjords." },
    { name: "Helsinki", city: "Helsinki", country: "Finlande", region: "europe", flag: "🇫🇮", emoji: "❄️", videoId: "CvOB-Is_yYU", desc: "La capitale finlandaise." },
    { name: "Bergen", city: "Bergen", country: "Norvège", region: "europe", flag: "🇳🇴", emoji: "⛵", videoId: "tAWFO8_O_7M", desc: "Le port hanséatique." },
    { name: "Varsovie", city: "Varsovie", country: "Pologne", region: "europe", flag: "🇵🇱", emoji: "🏙️", videoId: "AJGLajSFggk", desc: "La capitale polonaise." },
    { name: "Tallinn", city: "Tallinn", country: "Estonie", region: "europe", flag: "🇪🇪", emoji: "🏰", videoId: "VhVgZi2lGv0", desc: "La vieille ville médiévale." },
    { name: "Cracovie", city: "Cracovie", country: "Pologne", region: "europe", flag: "🇵🇱", emoji: "🏰", videoId: "Rn_ga4yXkME", desc: "La vieille ville historique." },
    { name: "Place Rouge", city: "Moscou", country: "Russie", region: "europe", flag: "🇷🇺", emoji: "⛪", videoId: "h1wly909BYw", desc: "Saint-Basile en direct." },
    { name: "Vésuve", city: "Naples", country: "Italie", region: "europe", flag: "🇮🇹", emoji: "🌋", videoId: "RbI8JwrBZQA", desc: "Le volcan et la baie." },
    { name: "Etna", city: "Sicile", country: "Italie", region: "europe", flag: "🇮🇹", emoji: "🌋", videoId: "EGk3Mr0OshE", desc: "Le plus haut volcan actif d'Europe." },
    { name: "Stromboli", city: "Sicile", country: "Italie", region: "europe", flag: "🇮🇹", emoji: "🌋", videoId: "S5M-qDFyYxs", desc: "Le volcan éternellement actif." },
    { name: "Duomo de Milan", city: "Milan", country: "Italie", region: "europe", flag: "🇮🇹", emoji: "⛪", videoId: "dsoM6TYIkOI", desc: "La cathédrale gothique." },
    { name: "Pompéi", city: "Pompéi", country: "Italie", region: "europe", flag: "🇮🇹", emoji: "🏛️", videoId: "LO2Fvujwc8M", desc: "Le site antique figé." },
    { name: "Cinque Terre", city: "Ligurie", country: "Italie", region: "europe", flag: "🇮🇹", emoji: "🏘️", videoId: "QpqsJKI0Wfk", desc: "Les cinq villages colorés." },
    { name: "Capri", city: "Capri", country: "Italie", region: "europe", flag: "🇮🇹", emoji: "🏝️", videoId: "EFum1rGUdkk", desc: "L'île chic de la Méditerranée." },
    { name: "Split", city: "Split", country: "Croatie", region: "europe", flag: "🇭🇷", emoji: "🏛️", videoId: "0wHWHAFnNh0", desc: "Le palais de Dioclétien." },
    { name: "Rhodes", city: "Rhodes", country: "Grèce", region: "europe", flag: "🇬🇷", emoji: "🏰", videoId: "c9XTpzuSNo0", desc: "La cité des Chevaliers." },
    { name: "Lacs de Plitvice", city: "Croatie", country: "Croatie", region: "europe", flag: "🇭🇷", emoji: "💦", videoId: "D4MdHQOILdw", desc: "Les cascades turquoise." },
    { name: "Ibiza", city: "Ibiza", country: "Espagne", region: "europe", flag: "🇪🇸", emoji: "🎉", videoId: "nFEk_SfznsY", desc: "L'île de la fête." },
    { name: "Palma de Majorque", city: "Majorque", country: "Espagne", region: "europe", flag: "🇪🇸", emoji: "⛵", videoId: "L1Wct73SCLQ", desc: "La capitale des Baléares." },
    { name: "Tenerife", city: "Canaries", country: "Espagne", region: "europe", flag: "🇪🇸", emoji: "🌋", videoId: "yrx0fvj-4QI", desc: "Le Teide et la plage." },
    { name: "Séville", city: "Séville", country: "Espagne", region: "europe", flag: "🇪🇸", emoji: "💃", videoId: "0dKNLFFcHFU", desc: "Le cœur de l'Andalousie." },
    { name: "Porto", city: "Porto", country: "Portugal", region: "europe", flag: "🇵🇹", emoji: "🍷", videoId: "I0KTkT8ZhX4", desc: "Les caves de porto sur le Douro." },
    { name: "Algarve", city: "Algarve", country: "Portugal", region: "europe", flag: "🇵🇹", emoji: "🏖️", videoId: "GeQVAs9N490", desc: "Les plages dorées." },
    { name: "Geysir", city: "Islande", country: "Islande", region: "europe", flag: "🇮🇸", emoji: "♨️", videoId: "Kc_RTWRENug", desc: "Les geysers islandais." },
    { name: "Açores", city: "Açores", country: "Portugal", region: "europe", flag: "🇵🇹", emoji: "🌋", videoId: "f6D3Zq6J5A8", desc: "L'archipel volcanique." },
    { name: "Volcan islandais", city: "Islande", country: "Islande", region: "europe", flag: "🇮🇸", emoji: "🌋", videoId: "OdSrTNv7-vM", desc: "Éruption en direct." },
    { name: "Tromsø", city: "Tromsø", country: "Norvège", region: "europe", flag: "🇳🇴", emoji: "🌌", videoId: "3y7_fkAzzps", desc: "La porte de l'Arctique." },
    { name: "Grand Canyon", city: "Arizona", country: "USA", region: "americas", flag: "🇺🇸", emoji: "🏞️", videoId: "o4fKtgPVpoU", desc: "La merveille naturelle." },
    { name: "Yosemite", city: "Californie", country: "USA", region: "americas", flag: "🇺🇸", emoji: "🏔️", videoId: "Q5oZboEhUIA", desc: "El Capitan et Half Dome." },
    { name: "Boston", city: "Boston", country: "USA", region: "americas", flag: "🇺🇸", emoji: "⚓", videoId: "49WtyN1V1ZQ", desc: "La ville historique." },
    { name: "Mont Rushmore", city: "Dakota", country: "USA", region: "americas", flag: "🇺🇸", emoji: "🗿", videoId: "Nc_kMy-Au_8", desc: "Les 4 présidents sculptés." },
    { name: "Philadelphie", city: "Philadelphie", country: "USA", region: "americas", flag: "🇺🇸", emoji: "🔔", videoId: "0Vu5PYxdTpE", desc: "La cloche de la Liberté." },
    { name: "Washington DC", city: "Washington", country: "USA", region: "americas", flag: "🇺🇸", emoji: "🏛️", videoId: "1wV9lLe14aU", desc: "La capitale fédérale." },
    { name: "Statue de la Liberté", city: "New York", country: "USA", region: "americas", flag: "🇺🇸", emoji: "🗽", videoId: "cWR8KGKftUw", desc: "Le symbole de la liberté." },
    { name: "Coney Island", city: "Brooklyn", country: "USA", region: "americas", flag: "🇺🇸", emoji: "🎡", videoId: "H67j7H-7QD0", desc: "La plage et la fête foraine." },
    { name: "Brooklyn Bridge", city: "New York", country: "USA", region: "americas", flag: "🇺🇸", emoji: "🌉", videoId: "OgqbZLzEbQU", desc: "Le pont emblématique." },
    { name: "Atlantic City", city: "New Jersey", country: "USA", region: "americas", flag: "🇺🇸", emoji: "🎰", videoId: "vVyBOU9Huvo", desc: "Le boardwalk et les casinos." },
    { name: "Central Park", city: "New York", country: "USA", region: "americas", flag: "🇺🇸", emoji: "🌳", videoId: "VGnFLdQW39A", desc: "Le poumon vert de Manhattan." },
    { name: "San Diego", city: "San Diego", country: "USA", region: "americas", flag: "🇺🇸", emoji: "🏖️", videoId: "edz0ux7JClE", desc: "La ville californienne du Sud." },
    { name: "Austin", city: "Austin", country: "USA", region: "americas", flag: "🇺🇸", emoji: "🎤", videoId: "3jkNswkm_60", desc: "La capitale musicale du Texas." },
    { name: "Nashville", city: "Nashville", country: "USA", region: "americas", flag: "🇺🇸", emoji: "🎸", videoId: "h5Grd2w7HQM", desc: "La capitale du country." },
    { name: "Houston", city: "Houston", country: "USA", region: "americas", flag: "🇺🇸", emoji: "🚀", videoId: "SDK_m1_BVJ4", desc: "NASA Johnson Space Center." },
    { name: "Dallas", city: "Dallas", country: "USA", region: "americas", flag: "🇺🇸", emoji: "🏙️", videoId: "wUQc3RoLAPs", desc: "La skyline texane." },
    { name: "Park City", city: "Utah", country: "USA", region: "americas", flag: "🇺🇸", emoji: "⛷️", videoId: "Y2VfyLoTO0c", desc: "La station olympique." },
    { name: "Aspen", city: "Aspen", country: "USA", region: "americas", flag: "🇺🇸", emoji: "⛷️", videoId: "wKLLYZaz1xo", desc: "La station de ski chic." },
    { name: "Denver", city: "Denver", country: "USA", region: "americas", flag: "🇺🇸", emoji: "🏔️", videoId: "X7m2dN-wcbU", desc: "La Mile High City." },
    { name: "Alaska glacier", city: "Alaska", country: "USA", region: "americas", flag: "🇺🇸", emoji: "🧊", videoId: "jJI5w_RVGtQ", desc: "Les glaciers d'Alaska." },
    { name: "Lac Tahoe", city: "Nevada", country: "USA", region: "americas", flag: "🇺🇸", emoji: "🏔️", videoId: "Lk0Z5ExUWL0", desc: "Le lac alpin cristallin." },
    { name: "Cuzco", city: "Cuzco", country: "Pérou", region: "americas", flag: "🇵🇪", emoji: "🏛️", videoId: "nllueA0D7TY", desc: "La capitale inca." },
    { name: "Ushuaia", city: "Ushuaia", country: "Argentine", region: "americas", flag: "🇦🇷", emoji: "🐧", videoId: "rVcK0QUC4SU", desc: "La fin du monde." },
    { name: "Salvador de Bahia", city: "Salvador", country: "Brésil", region: "americas", flag: "🇧🇷", emoji: "🎭", videoId: "IitNHCLLeA8", desc: "La ville afro-brésilienne." },
    { name: "São Paulo", city: "São Paulo", country: "Brésil", region: "americas", flag: "🇧🇷", emoji: "🏙️", videoId: "tMYtrEBNVAU", desc: "La mégapole brésilienne." },
    { name: "Iguazu", city: "Iguazu", country: "Brésil", region: "americas", flag: "🇧🇷", emoji: "💦", videoId: "AeMUdOPFcXI", desc: "Les plus grandes chutes du monde." },
    { name: "Cancún", city: "Cancún", country: "Mexique", region: "americas", flag: "🇲🇽", emoji: "🏖️", videoId: "fv0Qlo_IofY", desc: "Les plages caribéennes." },
    { name: "La Havane", city: "La Havane", country: "Cuba", region: "americas", flag: "🇨🇺", emoji: "🚗", videoId: "HZV93zAIYjo", desc: "Le Malecón et les voitures vintage." },
    { name: "Québec", city: "Québec", country: "Canada", region: "americas", flag: "🇨🇦", emoji: "🏰", videoId: "I-7mv4-BJ7M", desc: "Le Château Frontenac." },
    { name: "Zócalo", city: "Mexico", country: "Mexique", region: "americas", flag: "🇲🇽", emoji: "🏛️", videoId: "uV3wWHSvkfs", desc: "La place centrale mexicaine." },
    { name: "Akihabara", city: "Tokyo", country: "Japon", region: "asia", flag: "🇯🇵", emoji: "🎮", videoId: "pcPhqxOUv8A", desc: "Le quartier électronique." },
    { name: "Montréal", city: "Montréal", country: "Canada", region: "americas", flag: "🇨🇦", emoji: "🍁", videoId: "waDFkGGIIdA", desc: "La métropole québécoise." },
    { name: "Dotonbori", city: "Osaka", country: "Japon", region: "asia", flag: "🇯🇵", emoji: "🦀", videoId: "bzn2QWfOLFY", desc: "Le quartier gastronomique." },
    { name: "Hiroshima", city: "Hiroshima", country: "Japon", region: "asia", flag: "🇯🇵", emoji: "🕊️", videoId: "oW2Gb8YoGAg", desc: "Le mémorial de la paix." },
    { name: "Nagoya", city: "Nagoya", country: "Japon", region: "asia", flag: "🇯🇵", emoji: "🏯", videoId: "pHFh8pbPO10", desc: "La ville industrielle japonaise." },
    { name: "Sapporo", city: "Sapporo", country: "Japon", region: "asia", flag: "🇯🇵", emoji: "❄️", videoId: "HiNFpNlSAbg", desc: "La capitale d'Hokkaido." },
    { name: "Okinawa", city: "Okinawa", country: "Japon", region: "asia", flag: "🇯🇵", emoji: "🏝️", videoId: "WIYUrH4luck", desc: "L'île subtropicale." },
    { name: "Cité Interdite", city: "Pékin", country: "Chine", region: "asia", flag: "🇨🇳", emoji: "🏯", videoId: "VR-x3HdhKLQ", desc: "Le palais impérial." },
    { name: "Myeong-dong", city: "Séoul", country: "Corée du Sud", region: "asia", flag: "🇰🇷", emoji: "🛍️", videoId: "-JhoMGoAfFc", desc: "Le quartier commercial." },
    { name: "Kuala Lumpur", city: "Kuala Lumpur", country: "Malaisie", region: "asia", flag: "🇲🇾", emoji: "🏗️", videoId: "Fw9hgttWzIg", desc: "Les Petronas Towers." },
    { name: "Taipei 101", city: "Taipei", country: "Taïwan", region: "asia", flag: "🇹🇼", emoji: "🏢", videoId: "z_fY1pj1VBw", desc: "Le gratte-ciel emblématique." },
    { name: "Manille", city: "Manille", country: "Philippines", region: "asia", flag: "🇵🇭", emoji: "🏙️", videoId: "CmtuOVxcKRo", desc: "La capitale philippine." },
    { name: "Hô Chi Minh-Ville", city: "Hô Chi Minh-Ville", country: "Vietnam", region: "asia", flag: "🇻🇳", emoji: "🏙️", videoId: "T414WDLRvB8", desc: "L'ancienne Saigon." },
    { name: "Baie d'Ha Long", city: "Quang Ninh", country: "Vietnam", region: "asia", flag: "🇻🇳", emoji: "🗿", videoId: "p1IbYzNwWDQ", desc: "Les pitons karstiques." },
    { name: "Hanoi", city: "Hanoi", country: "Vietnam", region: "asia", flag: "🇻🇳", emoji: "🏛️", videoId: "eveR520xI6w", desc: "La capitale vietnamienne." },
    { name: "Taj Mahal", city: "Agra", country: "Inde", region: "asia", flag: "🇮🇳", emoji: "🕌", videoId: "1qbKRA4PEq0", desc: "Le monument d'amour." },
    { name: "Jérusalem", city: "Jérusalem", country: "Israël", region: "asia", flag: "🇮🇱", emoji: "🕌", videoId: "77akujLn4k8", desc: "La vieille ville sacrée." },
    { name: "Everest", city: "Himalaya", country: "Népal", region: "asia", flag: "🇳🇵", emoji: "🏔️", videoId: "SXsPeIqGJMA", desc: "Le toit du monde." },
    { name: "Katmandou", city: "Katmandou", country: "Népal", region: "asia", flag: "🇳🇵", emoji: "🏔️", videoId: "hgtuNHwBOrw", desc: "La capitale népalaise." },
    { name: "Tel Aviv", city: "Tel Aviv", country: "Israël", region: "asia", flag: "🇮🇱", emoji: "🏖️", videoId: "nvtv8CQksdI", desc: "La ville cosmopolite israélienne." },
    { name: "Beyrouth", city: "Beyrouth", country: "Liban", region: "asia", flag: "🇱🇧", emoji: "🌊", videoId: "kS1xnIjMCtw", desc: "La perle du Moyen-Orient." },
    { name: "Riyad", city: "Riyad", country: "Arabie Saoudite", region: "asia", flag: "🇸🇦", emoji: "🕌", videoId: "JboXN7CuKxc", desc: "La capitale saoudienne." },
    { name: "La Mecque", city: "La Mecque", country: "Arabie Saoudite", region: "asia", flag: "🇸🇦", emoji: "🕋", videoId: "oa_NW-wCIMk", desc: "La Kaaba en direct." },
    { name: "Doha", city: "Doha", country: "Qatar", region: "asia", flag: "🇶🇦", emoji: "🏙️", videoId: "oxT5R6I0N6E", desc: "La capitale qatarie moderne." },
    { name: "Île Maurice", city: "Île Maurice", country: "Maurice", region: "africa", flag: "🇲🇺", emoji: "🌊", videoId: "Thtj8Ht7Z_c", desc: "L'île tropicale." },
    { name: "Madagascar", city: "Madagascar", country: "Madagascar", region: "africa", flag: "🇲🇬", emoji: "🐒", videoId: "XsOU8JnEpNM", desc: "Les lémuriens sauvages." },
    { name: "Masai Mara", city: "Kenya", country: "Kenya", region: "africa", flag: "🇰🇪", emoji: "🦁", videoId: "xXZqU5vnEug", desc: "La grande migration." },
    { name: "Serengeti", city: "Serengeti", country: "Tanzanie", region: "africa", flag: "🇹🇿", emoji: "🦓", videoId: "BmOLK7LTKbY", desc: "La savane mythique." },
    { name: "Victoria Falls", city: "Livingstone", country: "Zambie", region: "africa", flag: "🇿🇲", emoji: "💦", videoId: "f9uqHbXChno", desc: "Les plus grandes chutes d'Afrique." },
    { name: "Pyramides de Gizeh", city: "Le Caire", country: "Égypte", region: "africa", flag: "🇪🇬", emoji: "🐪", videoId: "t8dZeRGZgV4", desc: "Les pyramides millénaires." },
    { name: "Zanzibar", city: "Zanzibar", country: "Tanzanie", region: "africa", flag: "🇹🇿", emoji: "🌴", videoId: "kkVrj2cr9Ko", desc: "L'archipel paradisiaque." },
    { name: "Table Mountain", city: "Le Cap", country: "Afrique du Sud", region: "africa", flag: "🇿🇦", emoji: "🏔️", videoId: "jOqASqt3vVI", desc: "La montagne plate emblématique." },
    { name: "Lagos", city: "Lagos", country: "Nigeria", region: "africa", flag: "🇳🇬", emoji: "🏙️", videoId: "b-Yzp0l8cAM", desc: "La mégapole africaine." },
    { name: "Milford Sound", city: "Fiordland", country: "Nouvelle-Zélande", region: "oceania", flag: "🇳🇿", emoji: "⛰️", videoId: "4X9dtsZmSw8", desc: "Le fjord mythique." },
    { name: "Dakar", city: "Dakar", country: "Sénégal", region: "africa", flag: "🇸🇳", emoji: "🌊", videoId: "ZC73GxVhCwM", desc: "La pointe ouest de l'Afrique." },
    { name: "Wellington", city: "Wellington", country: "Nouvelle-Zélande", region: "oceania", flag: "🇳🇿", emoji: "🏙️", videoId: "v7xySvhug0Y", desc: "La capitale néo-zélandaise." },
    { name: "Fidji", city: "Fidji", country: "Fidji", region: "oceania", flag: "🇫🇯", emoji: "🏝️", videoId: "loHbMM9JfCs", desc: "Le paradis du Pacifique." },
    { name: "Tahiti", city: "Tahiti", country: "Polynésie française", region: "oceania", flag: "🇵🇫", emoji: "🌺", videoId: "y0XPkjM9-P4", desc: "L'île mythique polynésienne." },
    { name: "Kilauea", city: "Hawaï", country: "USA", region: "oceania", flag: "🇺🇸", emoji: "🌋", videoId: "pbjaNZAVW90", desc: "Le volcan actif." },
    { name: "Bora Bora", city: "Bora Bora", country: "Polynésie française", region: "oceania", flag: "🇵🇫", emoji: "🏝️", videoId: "bxmuUL0Zrxs", desc: "Le lagon turquoise." },
    { name: "Brisbane", city: "Brisbane", country: "Australie", region: "oceania", flag: "🇦🇺", emoji: "☀️", videoId: "xVTqTwPLhOU", desc: "La ville ensoleillée du Queensland." },
    { name: "Gold Coast", city: "Queensland", country: "Australie", region: "oceania", flag: "🇦🇺", emoji: "🏄", videoId: "hm9iAviOZ20", desc: "Surfers Paradise." },
    { name: "Maui", city: "Maui", country: "USA", region: "oceania", flag: "🇺🇸", emoji: "🌺", videoId: "iWCeBAxRCBo", desc: "L'île du road to Hana." },
    { name: "Perth", city: "Perth", country: "Australie", region: "oceania", flag: "🇦🇺", emoji: "🏖️", videoId: "uakxJIafWcw", desc: "La capitale ouest-australienne." },
    { name: "Tasmanie", city: "Tasmanie", country: "Australie", region: "oceania", flag: "🇦🇺", emoji: "🐨", videoId: "L3iKvwoXZ38", desc: "La faune unique." },
    { name: "Orques", city: "Pacifique", country: "USA", region: "nature", flag: "🇺🇸", emoji: "🐋", videoId: "hTOmWcmr2Tc", desc: "Les épaulards sauvages." },
    { name: "Dauphins", city: "Océan", country: "USA", region: "nature", flag: "🇺🇸", emoji: "🐬", videoId: "ghg9lhFDouM", desc: "Les dauphins en liberté." },
    { name: "Lamantins", city: "Floride", country: "USA", region: "nature", flag: "🇺🇸", emoji: "🐋", videoId: "Fz6sl9YJZE0", desc: "Les vaches marines." },
    { name: "Alligators", city: "Everglades", country: "USA", region: "nature", flag: "🇺🇸", emoji: "🐊", videoId: "LHtzZf4T7xw", desc: "Les marais floridiens." },
    { name: "Bisons", city: "Prairies", country: "USA", region: "nature", flag: "🇺🇸", emoji: "🦬", videoId: "WjxG5mHc3kg", desc: "Le troupeau sauvage." },
    { name: "Cerfs", city: "Forêt", country: "USA", region: "nature", flag: "🇺🇸", emoji: "🦌", videoId: "F0GOOP82094", desc: "La vie forestière." },
    { name: "Tortues de mer", city: "Océan", country: "Costa Rica", region: "nature", flag: "🇨🇷", emoji: "🐢", videoId: "IA28S7y5rvI", desc: "La ponte des tortues." },
    { name: "Orignaux", city: "Alaska", country: "USA", region: "nature", flag: "🇺🇸", emoji: "🫎", videoId: "v189zZhZv38", desc: "Les grands cervidés." },
    { name: "Chouette", city: "—", country: "USA", region: "nature", flag: "🇺🇸", emoji: "🦉", videoId: "1W_bsCxbhOI", desc: "La chouette à l'affût." },
    { name: "Colibris", city: "Amérique", country: "USA", region: "nature", flag: "🇺🇸", emoji: "🌺", videoId: "c3KfiiBTIvA", desc: "Les colibris butineurs." },
    { name: "Poulpe", city: "Aquarium", country: "USA", region: "nature", flag: "🇺🇸", emoji: "🐙", videoId: "_5zWp0bMgcI", desc: "Le poulpe géant." },
    { name: "Gorilles", city: "Congo", country: "RDC", region: "nature", flag: "🇨🇩", emoji: "🦍", videoId: "YaDkA5CkFXk", desc: "Les gorilles des montagnes." },
    { name: "Panda roux", city: "Zoo", country: "USA", region: "nature", flag: "🇺🇸", emoji: "🦝", videoId: "dkFYrv1NFPg", desc: "Le petit panda." },
    { name: "Otaries", city: "Californie", country: "USA", region: "nature", flag: "🇺🇸", emoji: "🦭", videoId: "-uooI2satIQ", desc: "Les otaries rugissantes." },
    { name: "Vue de la Terre ISS", city: "Orbite", country: "NASA", region: "space", flag: "🌍", emoji: "🌎", videoId: "fO9e9jnhYK8", desc: "La Terre en direct depuis l'espace." },
    { name: "Mars Perseverance", city: "Mars", country: "NASA", region: "space", flag: "🔴", emoji: "🚜", videoId: "noNxQn9P8_U", desc: "Le rover sur Mars." },
    { name: "Aurores du Canada", city: "Yukon", country: "Canada", region: "nature", flag: "🇨🇦", emoji: "🌌", videoId: "a0i1Kg6fROg", desc: "Les northern lights canadiennes." },
    { name: "Saint-Moritz", city: "Saint-Moritz", country: "Suisse", region: "europe", flag: "🇨🇭", emoji: "⛷️", videoId: "ALZU0HGq-1c", desc: "La station chic des Alpes." },
    { name: "Courchevel", city: "Courchevel", country: "France", region: "europe", flag: "🇫🇷", emoji: "⛷️", videoId: "B0vZX9GnpxI", desc: "La station des Trois Vallées." },
    { name: "Val d'Isère", city: "Val d'Isère", country: "France", region: "europe", flag: "🇫🇷", emoji: "⛷️", videoId: "7SheNmPKU9E", desc: "La station alpine française." },
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
    card.style.animationDelay = `${Math.min(index * 0.02, 0.6)}s`;
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
