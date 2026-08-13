/* ==========================================================================
   BEN PELEG'S TRAVEL PLANNER - DATA & ATTRACTIONS DATABASE
   ========================================================================== */

const ATTRACTIONS_DATABASE = [
  // --------------------------------------------------------------------------
  // PARIS 🇫🇷
  // --------------------------------------------------------------------------
  {
    id: 'par-1',
    name: 'מגדל אייפל (Eiffel Tower)',
    city: 'Paris',
    lat: 48.8584,
    lng: 2.2945,
    category: 'attractions',
    rating: 4.8,
    reviewsCount: 142000,
    price: '€28',
    img: 'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?auto=format&fit=crop&w=600&q=80',
    desc: 'סמלה הבלתי מעורער של פריז. מומלץ לעלות לקומה השלישית לתצפית 360 מעלות מרהיבה על העיר.',
    tips: 'להזמין כרטיס מדויק מראש לפחות שבועיים לפני כדי לחסוך תורי ענק של שעות!',
    bookingUrl: 'https://www.toureiffel.paris/en/tickets',
    gmapsUrl: 'https://maps.google.com/?q=Eiffel+Tower+Paris'
  },
  {
    id: 'par-2',
    name: 'מוזיאון הלובר (Louvre Museum)',
    city: 'Paris',
    lat: 48.8606,
    lng: 2.3376,
    category: 'attractions',
    rating: 4.7,
    reviewsCount: 110000,
    price: '€17',
    img: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=600&q=80',
    desc: 'המוזיאון הגדול והמפורסם בתבל, ביתה של המונה ליזה ופסל ונוס ממילו.',
    tips: 'להיכנס דרך כניסת Carrousel du Louvre התחתית למניעת התור בפירמידה הראשית.',
    bookingUrl: 'https://www.louvre.fr/en/visit/tickets-prices',
    gmapsUrl: 'https://maps.google.com/?q=Louvre+Museum+Paris'
  },
  {
    id: 'par-3',
    name: 'פטיסרי קאפיל (Cédric Grolet Opéra)',
    city: 'Paris',
    lat: 48.8687,
    lng: 2.3340,
    category: 'desserts',
    rating: 4.9,
    reviewsCount: 8500,
    price: '€12-€18',
    img: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=600&q=80',
    desc: 'השף פטיסייר הטוב בעולם! מאפים וקינוחי פירות היפר-ריאליסטיים שנראים כמו יצירת אמנות.',
    tips: 'להגיע בשמונה בבוקר או להזמין איסוף מראש באתר. הקרואסון הפיסטוק הוא חובה!',
    bookingUrl: 'https://cedric-grolet.com/',
    gmapsUrl: 'https://maps.google.com/?q=Cedric+Grolet+Opera+Paris'
  },
  {
    id: 'par-4',
    name: 'גלידריית ברתיון (Berthillon)',
    city: 'Paris',
    lat: 48.8517,
    lng: 2.3565,
    category: 'desserts',
    rating: 4.8,
    reviewsCount: 6200,
    price: '€6-€10',
    img: 'https://images.unsplash.com/photo-1560008511-11c63416e52d?auto=format&fit=crop&w=600&q=80',
    desc: 'הגלידה המפורסמת ביותר באי פריז (Île Saint-Louis). גלידות סורבה טבעיות ומפנקות.',
    tips: 'סורבה תות השדה (Fraise des bois) והשוקולד המריר פשוט מדהימים.',
    bookingUrl: 'http://www.berthillon.fr/',
    gmapsUrl: 'https://maps.google.com/?q=Berthillon+Paris'
  },
  {
    id: 'par-5',
    name: 'מסעדת לה רלו דה ל׳אנטרקוט (Le Relais de l\'Entrecôte)',
    city: 'Paris',
    lat: 48.8680,
    lng: 2.3082,
    category: 'restaurants',
    rating: 4.6,
    reviewsCount: 14000,
    price: '€35',
    img: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80',
    desc: 'מסעדת הסטייק וצ׳יפס המיתולוגית של פריז עם הרוטב הירוק הסודי. מגישים מנה אחת בלבד!',
    tips: 'אין הזמנת מקומות! מומלץ להגיע 20 דקות לפני הפתיחה בצהריים או בערב.',
    bookingUrl: 'https://www.relaisentrecote.fr/',
    gmapsUrl: 'https://maps.google.com/?q=Le+Relais+de+l+Entrecote+Paris'
  },
  {
    id: 'par-6',
    name: 'קניון גאלרי לאפייט (Galeries Lafayette Haussmann)',
    city: 'Paris',
    lat: 48.8732,
    lng: 2.3316,
    category: 'shopping',
    rating: 4.7,
    reviewsCount: 45000,
    price: 'Shopping / Free View',
    img: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&w=600&q=80',
    desc: 'קניון היוקרה המפורסם בעולם עם כיפת זכוכית ארט-נובו ותצפית גג מדהימה בחינם.',
    tips: 'עלו לקומה העליונה לתצפית חינמית על האופרה ומגדל אייפל!',
    bookingUrl: 'https://haussmann.galerieslafayette.com/en/',
    gmapsUrl: 'https://maps.google.com/?q=Galeries+Lafayette+Haussmann'
  },
  {
    id: 'par-7',
    name: 'אאוטלט לה ואלה וילאז׳ (La Vallée Village Outlet)',
    city: 'Paris',
    lat: 48.8524,
    lng: 2.7836,
    category: 'shopping',
    rating: 4.6,
    reviewsCount: 22000,
    price: 'Outlet Discounts',
    img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=600&q=80',
    desc: 'מתחם אאוטלט מותגי על באוויר הפתוח ליד דיסנילנד פריז. הנחות של 30%-70% על גוצ׳י, ארמני ועוד.',
    tips: 'ניתן להגיע ברכבת RER A תחנת Val d\'Europe. קחו שובר הנחה נוסף של 10% במרכז המידע.',
    bookingUrl: 'https://www.thebicestercollection.com/la-vallee-village/',
    gmapsUrl: 'https://maps.google.com/?q=La+Vallee+Village+Outlet'
  },
  {
    id: 'par-8',
    name: 'גני לוקסמבורג (Jardin du Luxembourg)',
    city: 'Paris',
    lat: 48.8462,
    lng: 2.3372,
    category: 'nature',
    rating: 4.8,
    reviewsCount: 38000,
    price: 'כניסה חופשית',
    img: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80',
    desc: 'הפארק היפה ביותר בפריז עם מזרקות, כיסאות ירוקים מפורסמים ואווירה פריזאית רומנטית.',
    tips: 'מקום מושלם לפיקניק צהריים עם באגט, גבינות מקומיות ויין קל.',
    bookingUrl: 'https://www.senat.fr/visite/jardin/',
    gmapsUrl: 'https://maps.google.com/?q=Jardin+du+Luxembourg'
  },
  {
    id: 'par-9',
    name: 'בר הרופטופ Le Perchoir Marais',
    city: 'Paris',
    lat: 48.8575,
    lng: 2.3524,
    category: 'nightlife',
    rating: 4.5,
    reviewsCount: 3400,
    price: '€14-€20',
    img: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=600&q=80',
    desc: 'בר גג תוסס על גג כלבו BHV בלב רובע מארה עם נוף לשקיעה ולמגדל אייפל.',
    tips: 'מומלץ להגיע סביב 19:30 לתפוס מקום ליד המעקה לקראת השקיעה.',
    bookingUrl: 'https://leperchoir.fr/',
    gmapsUrl: 'https://maps.google.com/?q=Le+Perchoir+Marais'
  },

  // --------------------------------------------------------------------------
  // LONDON 🇬🇧
  // --------------------------------------------------------------------------
  {
    id: 'lon-1',
    name: 'גלגל הענק לונדון איי (London Eye)',
    city: 'London',
    lat: 51.5033,
    lng: -0.1195,
    category: 'attractions',
    rating: 4.6,
    reviewsCount: 135000,
    price: '£36',
    img: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=600&q=80',
    desc: 'תצפית פנורמית אייקונית מגובה 135 מטר על התימזה, הפרלמנט וביג בן.',
    tips: 'כרטיס Fast Track חוסך את התור הארוך בימי שמש ועומס.',
    bookingUrl: 'https://www.londoneye.com/',
    gmapsUrl: 'https://maps.google.com/?q=London+Eye'
  },
  {
    id: 'lon-2',
    name: 'שוק האוכל בורו מרקט (Borough Market)',
    city: 'London',
    lat: 51.5055,
    lng: -0.0910,
    category: 'restaurants',
    rating: 4.8,
    reviewsCount: 52000,
    price: '£8-£15',
    img: 'https://images.unsplash.com/photo-1533900298318-6b8da08a523e?auto=format&fit=crop&w=600&q=80',
    desc: 'שוק האוכל הוותיק והטעים ביותר בבריטניה! דוכני גבינות, בשרים, תותים בשוקולד נמס ועוד.',
    tips: 'אל תפספסו את כריך הפולביף (Salt Beef Bagel) והתותים בשוקולד חם בחנות Humble Crumble!',
    bookingUrl: 'https://boroughmarket.org.uk/',
    gmapsUrl: 'https://maps.google.com/?q=Borough+Market+London'
  },
  {
    id: 'lon-3',
    name: 'מאפיית פוילאן & Humble Crumble',
    city: 'London',
    lat: 51.5122,
    lng: -0.1205,
    category: 'desserts',
    rating: 4.9,
    reviewsCount: 4100,
    price: '£7-£10',
    img: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80',
    desc: 'קראמבל תפוחים ופירות יער חם ומפנק עם קצפת וקרם וניל עשיר המוגש במקום.',
    tips: 'בחרו את התוספת של מרשמלו מוקרם למעלה לסטורי מושלם!',
    bookingUrl: 'https://www.humblecrumble.com/',
    gmapsUrl: 'https://maps.google.com/?q=Humble+Crumble+London'
  },
  {
    id: 'lon-4',
    name: 'קניון וסטפילד לונדון (Westfield London Shepherds Bush)',
    city: 'London',
    lat: 51.5076,
    lng: -0.2215,
    category: 'shopping',
    rating: 4.7,
    reviewsCount: 41000,
    price: 'Shopping',
    img: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=600&q=80',
    desc: 'קניון המקורה הגדול באירופה! מאות חנויות מותגים, פרימרק ענק, מסעדות וקולנוע.',
    tips: 'תחנת סאבוויי צמודה: Shepherd\'s Bush או Wood Lane.',
    bookingUrl: 'https://www.westfield.com/london',
    gmapsUrl: 'https://maps.google.com/?q=Westfield+London'
  },
  {
    id: 'lon-5',
    name: 'אאוטלט בייסטר וילאז׳ (Bicester Village London)',
    city: 'London',
    lat: 51.8920,
    lng: -1.1578,
    category: 'shopping',
    rating: 4.6,
    reviewsCount: 18500,
    price: 'Outlet Discounts',
    img: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=600&q=80',
    desc: 'אאוטלט היוקרה הבריטי המפורסם במרחק רכבת קצרה מלונדון. מותגי פראדה, ברברי ועוד.',
    tips: 'קחו רכבת ישירה מתחנת Marylebone ל-Bicester Village Station (45 דקות).',
    bookingUrl: 'https://www.bicestervillage.com/',
    gmapsUrl: 'https://maps.google.com/?q=Bicester+Village'
  },
  {
    id: 'lon-6',
    name: 'הגנים הבוטניים קיו גארדנס (Kew Gardens)',
    city: 'London',
    lat: 51.4787,
    lng: -0.2956,
    category: 'nature',
    rating: 4.8,
    reviewsCount: 31000,
    price: '£20',
    img: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=600&q=80',
    desc: 'אתר מורשת עולמית של אונסק"ו עם חממות זכוכית ויקטוריאניות ענקיות וגשר צמרות עצים.',
    tips: 'אל תפספסו את חממת הצימחייה הטרופית Palm House!',
    bookingUrl: 'https://www.kew.org/',
    gmapsUrl: 'https://maps.google.com/?q=Kew+Gardens'
  },

  // --------------------------------------------------------------------------
  // ROME 🇮🇹
  // --------------------------------------------------------------------------
  {
    id: 'rom-1',
    name: 'הקוליסאום (Colosseum)',
    city: 'Rome',
    lat: 41.8902,
    lng: 12.4922,
    category: 'attractions',
    rating: 4.8,
    reviewsCount: 165000,
    price: '€18',
    img: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=600&q=80',
    desc: 'אמפיתיאטרון הגלדיאטורים העתיק בעולם וסמלה של האימפריה הרומית.',
    tips: 'הכרטיס כולל גם כניסה לפורום הרומי ולגבעת הפלאטין! להזמין בדיוק חודש מראש.',
    bookingUrl: 'https://colosseo.it/en/tickets/',
    gmapsUrl: 'https://maps.google.com/?q=Colosseum+Rome'
  },
  {
    id: 'rom-2',
    name: 'פיצרייה בונצ׳י (Pizzarium Bonci)',
    city: 'Rome',
    lat: 41.9074,
    lng: 12.4485,
    category: 'restaurants',
    rating: 4.7,
    reviewsCount: 11200,
    price: '€5-€12',
    img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80',
    desc: 'פיצת המגשים (Pizza al taglio) הטובה ברומא של השף גבריאלה בונצ׳י.',
    tips: 'חוקכים את הפיצה במספריים ושוקלים לפי משקל. נסו את פיצת תפוחי האדמה והמוצרלה!',
    bookingUrl: 'https://www.bonci.it/',
    gmapsUrl: 'https://maps.google.com/?q=Pizzarium+Bonci+Rome'
  },
  {
    id: 'rom-3',
    name: 'גלידריית פראצ׳י ג׳ולטי (Frigidarium & Giolitti)',
    city: 'Rome',
    lat: 41.8998,
    lng: 12.4725,
    category: 'desserts',
    rating: 4.8,
    reviewsCount: 15400,
    price: '€3-€6',
    img: 'https://images.unsplash.com/photo-1570197788417-0e82375c9371?auto=format&fit=crop&w=600&q=80',
    desc: 'ג׳לאטו איטלקי אמיתי. בפריג׳ידריום טובלים את כדור הגלידה בשוקולד חם שקופא ברגע!',
    tips: 'בקשו שוקולד מריר מומס מעל הגלידה בחינם (Con ציפוי שוקולד).',
    bookingUrl: 'http://www.giolitti.it/',
    gmapsUrl: 'https://maps.google.com/?q=Giolitti+Rome'
  },
  {
    id: 'rom-4',
    name: 'מרכז הקניות קסטל רומאנו אאוטלט (Castel Romano Designer Outlet)',
    city: 'Rome',
    lat: 41.7145,
    lng: 12.4455,
    category: 'shopping',
    rating: 4.5,
    reviewsCount: 16800,
    price: 'Outlet Discounts',
    img: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=600&q=80',
    desc: 'מתחם האאוטלט הגדול של רומא מבית מקארתורגלאן עם 150 חנויות מותגים.',
    tips: 'שאטל ייעודי יוצא מתחנת הרכבת מרכזית Termini בכל יום.',
    bookingUrl: 'https://www.mcarthurglen.com/en/outlets/it/designer-outlet-castel-romano/',
    gmapsUrl: 'https://maps.google.com/?q=Castel+Romano+Outlet'
  },

  // --------------------------------------------------------------------------
  // BARCELONA 🇪🇸
  // --------------------------------------------------------------------------
  {
    id: 'bcn-1',
    name: 'כנסיית סגרדה פמיליה (Basílica de la Sagrada Família)',
    city: 'Barcelona',
    lat: 41.4036,
    lng: 2.1744,
    category: 'attractions',
    rating: 4.8,
    reviewsCount: 175000,
    price: '€26',
    img: 'https://images.unsplash.com/photo-1583772289676-4a69d0014596?auto=format&fit=crop&w=600&q=80',
    desc: 'יצירת המופת הבלתי גמורה של אנטוני גאודי. ויטראז׳ים צבעוניים ועמודים דמויי יער.',
    tips: 'מומלץ לבקר בשעות אחה"צ כשהשמש חודרת דרך הוויטראז׳ים האדומים והכתומים.',
    bookingUrl: 'https://sagradafamilia.org/en/tickets',
    gmapsUrl: 'https://maps.google.com/?q=Sagrada+Familia+Barcelona'
  },
  {
    id: 'bcn-2',
    name: 'מסעדת טאפאס סיוטאט אספניול (Ciutat Comtal)',
    city: 'Barcelona',
    lat: 41.3888,
    lng: 2.1648,
    category: 'restaurants',
    rating: 4.7,
    reviewsCount: 19000,
    price: '€15-€30',
    img: 'https://images.unsplash.com/photo-1515443961218-a51367888e4b?auto=format&fit=crop&w=600&q=80',
    desc: 'בר הטאפאס המפורסם והאהוב בברצלונה. פטטאס בראבאס, שיפודי סרטנים וסנגרייה קרה.',
    tips: 'שבו ליד הבר כדי לראות את כל המנות הטריות ולבחור בעיניים!',
    bookingUrl: 'https://ciutatcomtal.com/',
    gmapsUrl: 'https://maps.google.com/?q=Ciutat+Comtal+Barcelona'
  },
  {
    id: 'bcn-3',
    name: 'צ׳וררייה סן רומאן (Churrería San Román & Churreria Trejo)',
    city: 'Barcelona',
    lat: 41.3825,
    lng: 2.1765,
    category: 'desserts',
    rating: 4.8,
    reviewsCount: 3900,
    price: '€4-€7',
    img: 'https://images.unsplash.com/photo-1624300629298-e9de39c13be5?auto=format&fit=crop&w=600&q=80',
    desc: 'צ׳ורוס ספרדי פריך חם וטרי הנטבל בקערת שוקולד סמיך ועשיר.',
    tips: 'קחו צ׳ורוס ממולא בקרם ריבת חלב (Dulce de leche).',
    bookingUrl: 'https://churreriasanroman.es/',
    gmapsUrl: 'https://maps.google.com/?q=Churreria+Barcelona'
  },
  {
    id: 'bcn-4',
    name: 'אאוטלט לה רוקה וילאז׳ (La Roca Village Barcelona Outlet)',
    city: 'Barcelona',
    lat: 41.6105,
    lng: 2.3444,
    category: 'shopping',
    rating: 4.6,
    reviewsCount: 24000,
    price: 'Outlet Discounts',
    img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=600&q=80',
    desc: 'אאוטלט המותגים היוקרתי של קטלוניה במרחק 40 דקות מברצלונה עם הנחות ענקיות.',
    tips: 'שאטל ייעודי (Shopping Express) יוצא מתחנת Estació del Nord.',
    bookingUrl: 'https://www.thebicestercollection.com/la-roca-village/',
    gmapsUrl: 'https://maps.google.com/?q=La+Roca+Village+Outlet'
  },

  // --------------------------------------------------------------------------
  // NEW YORK 🇺🇸
  // --------------------------------------------------------------------------
  {
    id: 'nyc-1',
    name: 'תצפית סאמיט ואנדרבילט (SUMMIT One Vanderbilt)',
    city: 'New York',
    lat: 40.7527,
    lng: -73.9772,
    category: 'attractions',
    rating: 4.9,
    reviewsCount: 32000,
    price: '$42',
    img: 'https://images.unsplash.com/photo-1534430480872-3498386e7856?auto=format&fit=crop&w=600&q=80',
    desc: 'חוויית התצפית המטורפת ביותר במנהטן! חדר מראות ענקי, בלונים כסופים ורצפת זכוכית בגובה 330 מטר.',
    tips: 'חובה להביא משקפי שמש בגלל השתקפות האור מהמראות!',
    bookingUrl: 'https://summitov.com/tickets/',
    gmapsUrl: 'https://maps.google.com/?q=SUMMIT+One+Vanderbilt'
  },
  {
    id: 'nyc-2',
    name: 'פיצרייה ג׳וז פיצה (Joe\'s Pizza Greenwich Village)',
    city: 'New York',
    lat: 40.7305,
    lng: -74.0021,
    category: 'restaurants',
    rating: 4.8,
    reviewsCount: 22000,
    price: '$4-$6',
    img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80',
    desc: 'משולש הפיצה הניו יורקי האייקוני ביותר. בצק דק, רוטב עגבניות עז ומוצרלה נמתחת.',
    tips: 'הזמינו Plain Cheese slice או Pepperoni slice קלאסי.',
    bookingUrl: 'https://www.joespizzanyc.com/',
    gmapsUrl: 'https://maps.google.com/?q=Joes+Pizza+Greenwich+Village'
  },
  {
    id: 'nyc-3',
    name: 'מאפיית לוויין בייקרי (Levain Bakery 74th St)',
    city: 'New York',
    lat: 40.7799,
    lng: -73.9803,
    category: 'desserts',
    rating: 4.9,
    reviewsCount: 16000,
    price: '$5',
    img: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=600&q=80',
    desc: 'עוגיות השוקולד-צ׳יפס הענקיות והמפורסמות בעולם! קריספיות מבחוץ ונמסות מבפנים.',
    tips: 'עוגיית Chocolate Chip Walnut היא מנצחת פעם אחר פעם.',
    bookingUrl: 'https://levainbakery.com/',
    gmapsUrl: 'https://maps.google.com/?q=Levain+Bakery+Upper+West+Side'
  },
  {
    id: 'nyc-4',
    name: 'אאוטלט וודברי קומון (Woodbury Common Premium Outlets)',
    city: 'New York',
    lat: 41.3160,
    lng: -74.1260,
    category: 'shopping',
    rating: 4.7,
    reviewsCount: 29000,
    price: 'Outlet Discounts',
    img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=600&q=80',
    desc: 'אאוטלט המותגים הגדול והטוב בארצות הברית! 250 חנויות מעצבים בהנחות ענק.',
    tips: 'קחו אוטובוס יומי מתחנת Port Authority במנהטן (שעה נסיעה).',
    bookingUrl: 'https://www.premiumoutlets.com/outlet/woodbury-common',
    gmapsUrl: 'https://maps.google.com/?q=Woodbury+Common+Outlets'
  },

  // --------------------------------------------------------------------------
  // AMSTERDAM 🇳🇱
  // --------------------------------------------------------------------------
  {
    id: 'ams-1',
    name: 'מוזיאון ואן גוך (Van Gogh Museum)',
    city: 'Amsterdam',
    lat: 52.3584,
    lng: 4.8811,
    category: 'attractions',
    rating: 4.8,
    reviewsCount: 88000,
    price: '€22',
    img: 'https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?auto=format&fit=crop&w=600&q=80',
    desc: 'אוסף ציוריו היפהפיים של וינסנט ואן גוך כולל החמניות וחדר השינה בארל.',
    tips: 'חובה להזמין כרטיס מראש באתר הרשמי! אין מכירת כרטיסים בקופה.',
    bookingUrl: 'https://www.vangoghmuseum.nl/en/visit/tickets',
    gmapsUrl: 'https://maps.google.com/?q=Van+Gogh+Museum+Amsterdam'
  },
  {
    id: 'ams-2',
    name: 'עוגיות ואן שטארלה (Van Stapele Koekmakerij)',
    city: 'Amsterdam',
    lat: 52.3693,
    lng: 4.8906,
    category: 'desserts',
    rating: 4.9,
    reviewsCount: 14500,
    price: '€3',
    img: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=600&q=80',
    desc: 'חנות המוכרת סוג עוגייה אחד בלבד: עוגיית שוקולד מריר עשירה במילוי שוקולד לבן מומס חם.',
    tips: 'אכלו אותה מיד כשהיא חמה מהתנור!',
    bookingUrl: 'https://vanstapele.com/',
    gmapsUrl: 'https://maps.google.com/?q=Van+Stapele+Amsterdam'
  },
  {
    id: 'ams-3',
    name: 'צ׳יפס הולנדי פלבולאנד (Vleminckx Sausmeesters & Manneken Pis)',
    city: 'Amsterdam',
    lat: 52.3686,
    lng: 4.8899,
    category: 'restaurants',
    rating: 4.7,
    reviewsCount: 9800,
    price: '€5-€8',
    img: 'https://images.unsplash.com/photo-1576107232684-1279f390859f?auto=format&fit=crop&w=600&q=80',
    desc: 'הצ׳יפס הלהוא והפריך ביותר באמסטרדם משנת 1887 עם מעל 25 סוגי רוטב.',
    tips: 'בקשו רוטב מיונז הולנדי קלאסי או רוטב בוטנים סאטה (Sinda/Saté).',
    bookingUrl: 'https://vleminckxsauscafes.nl/',
    gmapsUrl: 'https://maps.google.com/?q=Vleminckx+Amsterdam'
  },
  {
    id: 'ams-4',
    name: 'מרכז הקניות אאוטלט בטאביה סטארט (Batavia Stad Fashion Outlet)',
    city: 'Amsterdam',
    lat: 52.5278,
    lng: 5.4350,
    category: 'shopping',
    rating: 4.5,
    reviewsCount: 14000,
    price: 'Outlet Discounts',
    img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=600&q=80',
    desc: 'אאוטלט מעצבים הולנדי עם 150 חנויות מותגים כגון נייקי, הוגו בוס ועוד.',
    tips: 'נסיעה ברכבת לאמסטרדם אל תחנת Lelystad Centrum ומשם אוטובוס קצר.',
    bookingUrl: 'https://bataviastad.nl/en/',
    gmapsUrl: 'https://maps.google.com/?q=Batavia+Stad+Outlet'
  }
];

// OpenStreetMap / Nominatim Helper Geocoding Functions
const GEOSERVICES = {
  // Search custom location via OpenStreetMap Nominatim
  searchLocation: async function(query) {
    if (!query || query.trim().length < 2) return [];
    try {
      const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&limit=6&accept-language=he,en`);
      if (!response.ok) return [];
      const data = await response.json();
      return data.map(item => ({
        name: item.display_name.split(',')[0],
        fullName: item.display_name,
        lat: parseFloat(item.lat),
        lng: parseFloat(item.lon),
        type: item.type || 'place'
      }));
    } catch (e) {
      console.warn('Geocoding search failed:', e);
      return [];
    }
  }
};
