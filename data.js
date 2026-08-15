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
  // ROME 🇮🇹 (איטליה - רומא)
  // --------------------------------------------------------------------------
  // -- מסעדות וקולינריה ברומא --
  {
    id: 'rom-rest-1',
    name: 'טרטוריה דה אנזו (Trattoria Da Enzo al 29)',
    city: 'Rome',
    lat: 41.8876,
    lng: 12.4774,
    category: 'restaurants',
    rating: 4.8,
    reviewsCount: 14500,
    price: '€18-€30',
    img: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=600&q=80',
    desc: 'הטרטוריה המפורסמת ביותר ברובע טרסטוורה. קרבונרה מושלמת, קאצ׳ו א פפה וארטישוק רומאי מטוגן.',
    tips: 'אין הזמנת מקומות! להגיע כ-25 דקות לפני פתיחת הדלתות בצהריים או בערב כדי לתפוס מקום בסבב הראשון.',
    bookingUrl: 'https://www.daenzoal29.com/',
    gmapsUrl: 'https://maps.google.com/?q=Trattoria+Da+Enzo+al+29+Rome'
  },
  {
    id: 'rom-rest-2',
    name: 'אוסטריה דה פורטונטה (Osteria da Fortunata)',
    city: 'Rome',
    lat: 41.8962,
    lng: 12.4721,
    category: 'restaurants',
    rating: 4.7,
    reviewsCount: 21000,
    price: '€16-€26',
    img: 'https://images.unsplash.com/photo-1621996346565-e3d5d6281691?auto=format&fit=crop&w=600&q=80',
    desc: 'פסטה טרייה בעבודת יד הנעשית מול עיני הסועדים בחלון הראווה. הטליאטלה קרבונרה והניוקי ראגו הם חלום.',
    tips: 'ממוקם ליד קמפו דה פיורי. סניף נוסף נמצא ברחוב ליד פנתיאון.',
    bookingUrl: 'https://osteriadafortunata.it/',
    gmapsUrl: 'https://maps.google.com/?q=Osteria+da+Fortunata+Rome'
  },
  {
    id: 'rom-rest-3',
    name: 'רושיולי מסעדה ומעדנייה (Roscioli Salumeria con Cucina)',
    city: 'Rome',
    lat: 41.8943,
    lng: 12.4735,
    category: 'restaurants',
    rating: 4.8,
    reviewsCount: 18500,
    price: '€30-€55',
    img: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80',
    desc: 'מוסד קולינרי רומאי אגדי – שילוב של מעדניית בוטיק עם מסעדת שף. מגישים את הקרבונרה הנחשבת לטובה בעולם.',
    tips: 'חובה להזמין מקום מראש לפחות שבועיים-שלושה מראש באתר!',
    bookingUrl: 'https://www.salumeriaroscioli.com/',
    gmapsUrl: 'https://maps.google.com/?q=Roscioli+Salumeria+Rome'
  },
  {
    id: 'rom-rest-4',
    name: 'מסעדת טונארלו (Tonnarello)',
    city: 'Rome',
    lat: 41.8898,
    lng: 12.4698,
    category: 'restaurants',
    rating: 4.7,
    reviewsCount: 38000,
    price: '€14-€24',
    img: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80',
    desc: 'המסעדה הפופולרית ביותר ברובע טרסטוורה. פסטה טרייה עשירה המוגשת ישירות במחבתות לוהטות.',
    tips: 'התור מתקדם במהירות, שווה להמתין. נסו את מנת ה-Cacio e Pepe ומנת האמטריצ׳אנה.',
    bookingUrl: 'https://tonnarello.it/',
    gmapsUrl: 'https://maps.google.com/?q=Tonnarello+Rome'
  },
  {
    id: 'rom-rest-5',
    name: 'קנטינה אה קוצ׳ינה (Cantina e Cucina)',
    city: 'Rome',
    lat: 41.8978,
    lng: 12.4705,
    category: 'restaurants',
    rating: 4.7,
    reviewsCount: 19500,
    price: '€15-€25',
    img: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80',
    desc: 'מסעדה שמחה ותוססת ליד פיאצה נבונה עם שירות חם, פיצות רומאיות פריכות (פינסה) ופסטות מעולות.',
    tips: 'בזמן ההמתנה בתור המלצרים מחלקים יין ופוקאצ׳ה חמה על חשבון הבית!',
    bookingUrl: 'https://cantinaecucina.it/',
    gmapsUrl: 'https://maps.google.com/?q=Cantina+e+Cucina+Rome'
  },
  {
    id: 'rom-rest-6',
    name: 'אל אנטיקו וינאיו רומא (All\'Antico Vinaio Roma)',
    city: 'Rome',
    lat: 41.8986,
    lng: 12.4776,
    category: 'restaurants',
    rating: 4.8,
    reviewsCount: 16000,
    price: '€7-€12',
    img: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=600&q=80',
    desc: 'כריכי הסקיאצ׳אטה הפלורנטיניים המפורסמים בעולם עם פרושוטו, קרם פיסטוק, גבינת סטרקינו ועוד.',
    tips: 'ממוקם ממש ליד הפנתיאון. כריך La Paradiso או La Favolosa הם הבחירה המושלמת לארוחת צהריים מהירה.',
    bookingUrl: 'https://www.allanticovinaio.com/',
    gmapsUrl: 'https://maps.google.com/?q=All+Antico+Vinaio+Rome'
  },
  {
    id: 'rom-rest-7',
    name: 'פיצרייה בונצ׳י (Pizzarium Bonci)',
    city: 'Rome',
    lat: 41.9074,
    lng: 12.4485,
    category: 'restaurants',
    rating: 4.7,
    reviewsCount: 11200,
    price: '€6-€14',
    img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80',
    desc: 'פיצת המגשים (Pizza al taglio) הטובה ברומא של השף גבריאלה בונצ׳י, עם בצק שמתפח 72 שעות.',
    tips: 'חותכים את הפיצה במספריים ושוקלים לפי משקל. נסו את פיצת תפוחי האדמה והמוצרלה!',
    bookingUrl: 'https://www.bonci.it/',
    gmapsUrl: 'https://maps.google.com/?q=Pizzarium+Bonci+Rome'
  },
  {
    id: 'rom-rest-8',
    name: 'טרפיצינו טרסטוורה (Trapizzino Trastevere)',
    city: 'Rome',
    lat: 41.8906,
    lng: 12.4711,
    category: 'restaurants',
    rating: 4.8,
    reviewsCount: 9200,
    price: '€5-€9',
    img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80',
    desc: 'המצאת אוכל הרחוב הרומאית הכי אהובה: משולש פיצה חם וקריספי הממולא בתבשילים רומאיים מסורתיים.',
    tips: 'קחו טרפיצינו עם עוף ציידים (Pollo alla Cacciatora) או קציצות ברוטב עגבניות עם כדור סופלי פריך.',
    bookingUrl: 'https://www.trapizzino.it/',
    gmapsUrl: 'https://maps.google.com/?q=Trapizzino+Trastevere+Rome'
  },
  {
    id: 'rom-rest-9',
    name: 'טרטוריה דה צ׳זארה אל קזאלטו (Da Cesare al Casaletto)',
    city: 'Rome',
    lat: 41.8688,
    lng: 12.4402,
    category: 'restaurants',
    rating: 4.8,
    reviewsCount: 7500,
    price: '€20-€35',
    img: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80',
    desc: 'טרטוריה רומאית אותנטית עטורת שבחים, מפורסמת בניוקי ברוטב קודא אלה וצ׳ינארה ובפוליטי קריספיים.',
    tips: 'ניתן להגיע בקלות בחשמלית קו 8 מתחנת Piazza Venezia ישירות לתחנה האחרונה Casaletto.',
    bookingUrl: 'https://www.trattoriadacesare.it/',
    gmapsUrl: 'https://maps.google.com/?q=Trattoria+Da+Cesare+al+Casaletto'
  },
  {
    id: 'rom-rest-10',
    name: 'סופליציו רומא (Supplizio Roma)',
    city: 'Rome',
    lat: 41.8967,
    lng: 12.4678,
    category: 'restaurants',
    rating: 4.7,
    reviewsCount: 4200,
    price: '€4-€8',
    img: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=600&q=80',
    desc: 'בוטיק מוקדש כולו למעדן הרחוב הרומאי: כדורי סופלי (אורז פריך ממולא גבינה נמתחת) ברמת שף.',
    tips: 'סופלי קרבונרה וסופלי קלאסיקו הם חובת טעימה.',
    bookingUrl: 'https://www.supplizio.net/',
    gmapsUrl: 'https://maps.google.com/?q=Supplizio+Rome'
  },

  // -- קינוחים ומאפיות ברומא --
  {
    id: 'rom-des-1',
    name: 'פומפי טירמיסו (Pompi Il Regno del Tiramisù)',
    city: 'Rome',
    lat: 41.9056,
    lng: 12.4819,
    category: 'desserts',
    rating: 4.8,
    reviewsCount: 24000,
    price: '€5',
    img: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=600&q=80',
    desc: 'ממלכת הטירמיסו של רומא משנת 1960. טירמיסו קלאסי, פיסטוק, תותים ושוקולד בננה בקופסאות אישיות.',
    tips: 'סניף מעולה צמוד למדרגות הספרדיות (Via della Croce 82). קחו קופסה ותיהנו ממנה בכיכר.',
    bookingUrl: 'https://barpompi.it/',
    gmapsUrl: 'https://maps.google.com/?q=Pompi+Tiramisu+Rome'
  },
  {
    id: 'rom-des-2',
    name: 'טו סייזס טירמיסו (Two Sizes Tiramisù)',
    city: 'Rome',
    lat: 41.8984,
    lng: 12.4719,
    category: 'desserts',
    rating: 4.9,
    reviewsCount: 9800,
    price: '€3-€4',
    img: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80',
    desc: 'חנות בוטיק קטנה ומטריפה ליד פיאצה נבונה. מגישה טירמיסו נימוח בשני גדלים עם מגוון טעמים כגון פיסטוק וקרמל.',
    tips: 'טירמיסו הפיסטוק הוא המוצר המבוקש ביותר בעיר!',
    bookingUrl: 'https://twosizes.business.site/',
    gmapsUrl: 'https://maps.google.com/?q=Two+Sizes+Tiramisu+Rome'
  },
  {
    id: 'rom-des-3',
    name: 'גלידריית ג׳ולטי ופריג׳ידריום (Giolitti & Frigidarium)',
    city: 'Rome',
    lat: 41.8998,
    lng: 12.4725,
    category: 'desserts',
    rating: 4.8,
    reviewsCount: 32000,
    price: '€3-€6',
    img: 'https://images.unsplash.com/photo-1570197788417-0e82375c9371?auto=format&fit=crop&w=600&q=80',
    desc: 'ג׳לאטו איטלקי אמיתי. בג׳ולטי אווירה היסטורית מהמאה ה-19, ובפריג׳ידריום טובלים את כדור הגלידה בשוקולד חם שקופא מיד.',
    tips: 'בפריג׳ידריום בקשו ציפוי שוקולד מריר מומס מעל הגלידה ללא תוספת תשלום.',
    bookingUrl: 'http://www.giolitti.it/',
    gmapsUrl: 'https://maps.google.com/?q=Giolitti+Rome'
  },
  {
    id: 'rom-des-4',
    name: 'פסטיצ׳ריה רגולי - מריטוצו רומאי (Pasticceria Regoli)',
    city: 'Rome',
    lat: 41.8953,
    lng: 12.5034,
    category: 'desserts',
    rating: 4.8,
    reviewsCount: 6800,
    price: '€3-€6',
    img: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80',
    desc: 'המאפייה ההיסטורית משנת 1916 המכינה את המריטוצו (Maritozzo) הטוב ביותר ברומא – לחמניית בריוש אוורירית מלאה בקצפת עשירה.',
    tips: 'הגיעו בשעות הבוקר כדי ליהנות ממריטוצו טרי וחם מהתנור לצד קפוצ׳ינו איטלקי.',
    bookingUrl: 'https://www.pasticceriaregoli.com/',
    gmapsUrl: 'https://maps.google.com/?q=Pasticceria+Regoli+Rome'
  },

  // -- אטרקציות ומוזיאונים ברומא --
  {
    id: 'rom-att-1',
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
    id: 'rom-att-2',
    name: 'מוזיאוני הוותיקן והקפלה הסיסטינית (Vatican Museums)',
    city: 'Rome',
    lat: 41.9067,
    lng: 12.4534,
    category: 'attractions',
    rating: 4.8,
    reviewsCount: 145000,
    price: '€20-€25',
    img: 'https://images.unsplash.com/photo-1548625361-195fe5795df5?auto=format&fit=crop&w=600&q=80',
    desc: 'אחד מאוספי האמנות הגדולים בעולם, גולת הכותרת היא תקרת הקפלה הסיסטינית של מיכלאנג׳לו ובזיליקת פטרוס הקדוש.',
    tips: 'חובה להזמין כרטיס Skip-The-Line מראש באתר הרשמי לפחות חודש לפני!',
    bookingUrl: 'https://www.museivaticani.va/',
    gmapsUrl: 'https://maps.google.com/?q=Vatican+Museums+Rome'
  },
  {
    id: 'rom-att-3',
    name: 'הפנתיאון (Pantheon)',
    city: 'Rome',
    lat: 41.8986,
    lng: 12.4769,
    category: 'attractions',
    rating: 4.8,
    reviewsCount: 120000,
    price: '€5',
    img: 'https://images.unsplash.com/photo-1583772289676-4a69d0014596?auto=format&fit=crop&w=600&q=80',
    desc: 'המקדש הרומי השמור ביותר בעולם עם כיפת הבטון הלא-מזוינת הגדולה בתבל ואוקולוס פתוח לשמיים.',
    tips: 'חובה לרכוש כרטיס כניסה מראש לסופי שבוע.',
    bookingUrl: 'https://www.pantheonroma.com/',
    gmapsUrl: 'https://maps.google.com/?q=Pantheon+Rome'
  },
  {
    id: 'rom-att-4',
    name: 'מזרקת טרווי (Trevi Fountain)',
    city: 'Rome',
    lat: 41.9009,
    lng: 12.4833,
    category: 'attractions',
    rating: 4.8,
    reviewsCount: 190000,
    price: 'חינם',
    img: 'https://images.unsplash.com/photo-1525874684015-58379d421a52?auto=format&fit=crop&w=600&q=80',
    desc: 'מזרקת הבארוק המפורסמת ביותר בעולם. השליכו מטבע מעבר לכתף שמאל כדי להבטיח את שובכם לרומא.',
    tips: 'הגיעו בשעות הבוקר המוקדמות (7:30-8:30) כדי ליהנות מהמקום ללא המוני תיירים.',
    bookingUrl: '',
    gmapsUrl: 'https://maps.google.com/?q=Trevi+Fountain+Rome'
  },
  {
    id: 'rom-att-5',
    name: 'המדרגות הספרדיות (Piazza di Spagna)',
    city: 'Rome',
    lat: 41.9060,
    lng: 12.4828,
    category: 'attractions',
    rating: 4.7,
    reviewsCount: 95000,
    price: 'חינם',
    img: 'https://images.unsplash.com/photo-1531572753322-ad063cecc140?auto=format&fit=crop&w=600&q=80',
    desc: 'גרם המדרגות המונומנטלי המחבר בין פיאצה די ספניה לכנסיית טריניטה דיי מונטי בראש הגבעה.',
    tips: 'על פי החוק המקומי חל איסור לשבת על המדרגות.',
    bookingUrl: '',
    gmapsUrl: 'https://maps.google.com/?q=Spanish+Steps+Rome'
  },

  // -- טבע, פארקים ותצפיות ברומא --
  {
    id: 'rom-nat-1',
    name: 'גן התפוזים ותצפית האוונטין (Giardino degli Aranci)',
    city: 'Rome',
    lat: 41.8848,
    lng: 12.4802,
    category: 'nature',
    rating: 4.8,
    reviewsCount: 22000,
    price: 'חינם',
    img: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80',
    desc: 'גן של עצי הדר בראש גבעת האוונטין עם מרפסת תצפית פנורמית עוצרת נשימה אל עבר כיפת הוותיקן ושקיעות רומא.',
    tips: 'במרחק 2 דקות הליכה נמצא חור המנעול המפורסם של מסדר מלטה!',
    bookingUrl: '',
    gmapsUrl: 'https://maps.google.com/?q=Giardino+degli+Aranci+Rome'
  },
  {
    id: 'rom-nat-2',
    name: 'גני וילה בורגזה ומרפסת פינצ׳ו (Villa Borghese & Terrazza del Pincio)',
    city: 'Rome',
    lat: 41.9114,
    lng: 12.4862,
    category: 'nature',
    rating: 4.8,
    reviewsCount: 45000,
    price: 'חינם',
    img: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=600&q=80',
    desc: 'הריאה הירוקה של רומא עם אגמים, פסלים, גלריית בורגזה ותצפית הפינצ׳ו המרשימה מעל פיאצה דל פופולו.',
    tips: 'שכרו אופניים ממונעות או סירת משוטים קטנה באגם של הווילה.',
    bookingUrl: '',
    gmapsUrl: 'https://maps.google.com/?q=Terrazza+del+Pincio+Rome'
  },

  // -- קניות ומרכזי קניות ברומא --
  {
    id: 'rom-shop-1',
    name: 'מתחם הקניות ויה דל קורסו וגלריה סורדי (Via del Corso & Galleria Sordi)',
    city: 'Rome',
    lat: 41.9015,
    lng: 12.4805,
    category: 'shopping',
    rating: 4.7,
    reviewsCount: 28000,
    price: 'Shopping',
    img: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&w=600&q=80',
    desc: 'שדרת הקניות הראשית של רומא המחברת בין כיכר ונציה לפיאצה דל פופולו, יחד עם גלריית ארט-נובו משופצת.',
    tips: 'חובבי מותגי יוקרה יפנו לרחוב Via Condotti הצמוד המוביל ישירות למדרגות הספרדיות.',
    bookingUrl: '',
    gmapsUrl: 'https://maps.google.com/?q=Via+del+Corso+Rome'
  },
  {
    id: 'rom-shop-2',
    name: 'מרכז הקניות קסטל רומאנו אאוטלט (Castel Romano Designer Outlet)',
    city: 'Rome',
    lat: 41.7145,
    lng: 12.4455,
    category: 'shopping',
    rating: 4.5,
    reviewsCount: 16800,
    price: 'Outlet Discounts',
    img: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=600&q=80',
    desc: 'מתחם האאוטלט הגדול של רומא מבית מקארתורגלאן עם 150 חנויות מותגים כגון נייקי, גוצ׳י וארמני בהנחות 30%-70%.',
    tips: 'שאטל ייעודי יוצא מתחנת הרכבת מרכזית Termini בכל יום.',
    bookingUrl: 'https://www.mcarthurglen.com/en/outlets/it/designer-outlet-castel-romano/',
    gmapsUrl: 'https://maps.google.com/?q=Castel+Romano+Outlet'
  },

  // -- חיי לילה ופאבים ברומא --
  {
    id: 'rom-night-1',
    name: 'בר ספיקיזי ג׳רי תומאס (The Jerry Thomas Project)',
    city: 'Rome',
    lat: 41.8988,
    lng: 12.4691,
    category: 'nightlife',
    rating: 4.8,
    reviewsCount: 3800,
    price: '€15-€22',
    img: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=600&q=80',
    desc: 'בר הספיקיזי הסודי הראשון ברומא, מדורג בעקביות בין 50 הברים הטובים בעולם. קוקטיילים ברמה עולמית.',
    tips: 'הכניסה מחייבת סיסמה סודית המתחלפת באתר שלהם ומספר מקומות מוגבל!',
    bookingUrl: 'https://thejerrythomasproject.it/',
    gmapsUrl: 'https://maps.google.com/?q=The+Jerry+Thomas+Project+Rome'
  },
  {
    id: 'rom-night-2',
    name: 'פרני אה פריציוני (Freni e Frizioni)',
    city: 'Rome',
    lat: 41.8907,
    lng: 12.4704,
    category: 'nightlife',
    rating: 4.6,
    reviewsCount: 5200,
    price: '€9-€15',
    img: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=600&q=80',
    desc: 'בר אפריטיבו וקוקטיילים תוסס ברובע טרסטוורה בתוך מוסך מכוניות לשעבר, מלא במקומיים וצעירים.',
    tips: 'הזמינו קוקטייל וקחו אותו לפיאצה הקטנה בחוץ כדי ליהנות מהאווירה הרומאית החיה.',
    bookingUrl: 'https://www.freniefrizioni.com/',
    gmapsUrl: 'https://maps.google.com/?q=Freni+e+Frizioni+Rome'
  },

  // -- פנינים נסתרות ברומא --
  {
    id: 'rom-gem-1',
    name: 'חור המנעול של אבירי מלטה (Aventine Keyhole)',
    city: 'Rome',
    lat: 41.8828,
    lng: 12.4786,
    category: 'gems',
    rating: 4.8,
    reviewsCount: 16000,
    price: 'חינם',
    img: 'https://images.unsplash.com/photo-1529655683826-aba9b3e77383?auto=format&fit=crop&w=600&q=80',
    desc: 'הצצה דרך חור המנעול בשער מסדר מלטה מציגה שדרת שיחים המובילה בדיוק מושלם אל כיפת בזיליקת סנט פטרוס.',
    tips: 'מראה מרהיב במיוחד בשעות בין הערביים או בלילה כשהכיפה מוארת.',
    bookingUrl: '',
    gmapsUrl: 'https://maps.google.com/?q=Aventine+Keyhole+Rome'
  },
  {
    id: 'rom-gem-2',
    name: 'רובע קופדה (Quartiere Coppedè)',
    city: 'Rome',
    lat: 41.9189,
    lng: 12.5028,
    category: 'gems',
    rating: 4.7,
    reviewsCount: 8200,
    price: 'חינם',
    img: 'https://images.unsplash.com/photo-1513584684374-8bab748fbf90?auto=format&fit=crop&w=600&q=80',
    desc: 'שכונה אגדית קטנה ברומא הבנויה בסגנון ארט-נובו, בארוק ואגדות פנטזיה עם נברשות תלויות ופסלי צפרדעים.',
    tips: 'התחילו בכיכר Piazza Mincio כדי לחזות במזרקת הצפרדעים Fontana delle Rane.',
    bookingUrl: '',
    gmapsUrl: 'https://maps.google.com/?q=Quartiere+Coppede+Rome'
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
  // AMSTERDAM 🇳🇱 (הולנד - אמסטרדם)
  // --------------------------------------------------------------------------
  // -- מסעדות וקולינריה באמסטרדם --
  {
    id: 'ams-rest-1',
    name: 'מסעדת דה קאס (De Kas Restaurant & Nursery)',
    city: 'Amsterdam',
    lat: 52.3516,
    lng: 4.9304,
    category: 'restaurants',
    rating: 4.8,
    reviewsCount: 8900,
    price: '€45-€75',
    img: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80',
    desc: 'מסעדת מישלן ירוקה בתוך חממת זכוכית ענקית משנת 1926. תפריט חווה לשולחן שמשתנה יומית לפי יבול הבוקר.',
    tips: 'חובה להזמין מקום שבועות מראש באתר הרשמי! ארוחת צהריים משתלמת במיוחד.',
    bookingUrl: 'https://restaurantdekas.com/',
    gmapsUrl: 'https://maps.google.com/?q=Restaurant+De+Kas+Amsterdam'
  },
  {
    id: 'ams-rest-2',
    name: 'קניבל רויאל (Cannibale Royale Handboogstraat)',
    city: 'Amsterdam',
    lat: 52.3681,
    lng: 4.8897,
    category: 'restaurants',
    rating: 4.7,
    reviewsCount: 16500,
    price: '€20-€38',
    img: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80',
    desc: 'בר בראסרי בשרי תוסס ופופולרי בלב העיר. מפורסם בסטייקים מיושנים, צלעות ברביקיו עסיסיות והמבורגרים מעולים.',
    tips: 'פתוח עד שעות הלילה המאוחרות. נסו את המבורגר ה-Le Cannibale Royale.',
    bookingUrl: 'https://cannibaleroyale.nl/',
    gmapsUrl: 'https://maps.google.com/?q=Cannibale+Royale+Handboogstraat+Amsterdam'
  },
  {
    id: 'ams-rest-3',
    name: 'מסעדת מודרס - אמא (Moeders Amsterdam)',
    city: 'Amsterdam',
    lat: 52.3695,
    lng: 4.8767,
    category: 'restaurants',
    rating: 4.7,
    reviewsCount: 11000,
    price: '€18-€30',
    img: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80',
    desc: 'מסעדה הולנדית מסורתית חמימה הקרויה "אמהות". כל הקירות מכוסים באלפי תמונות של אמהות מכל העולם.',
    tips: 'הזמינו את ה-Stamppot ההולנדי המסורתי עם נקניק מעושן וכדורי בשר.',
    bookingUrl: 'https://moeders.com/',
    gmapsUrl: 'https://maps.google.com/?q=Moeders+Amsterdam'
  },
  {
    id: 'ams-rest-4',
    name: 'דה סיפוד בר (The Seafood Bar Spui)',
    city: 'Amsterdam',
    lat: 52.3687,
    lng: 4.8891,
    category: 'restaurants',
    rating: 4.8,
    reviewsCount: 19500,
    price: '€25-€50',
    img: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80',
    desc: 'המסעדה המובילה באמסטרדם לדגים ופירות ים טריים. מגשי פירות ים קפואים או צלויים, לובסטרים ומרק סרטנים עשיר.',
    tips: 'מגש ה-Fruits de Mer ענקי ומספיק לזוג או שלושה סועדים.',
    bookingUrl: 'https://theseafoodbar.com/',
    gmapsUrl: 'https://maps.google.com/?q=The+Seafood+Bar+Spui+Amsterdam'
  },
  {
    id: 'ams-rest-5',
    name: 'צ׳יפס פאבל פריט ו-וולמינקס (Fabel Friet & Vleminckx)',
    city: 'Amsterdam',
    lat: 52.3686,
    lng: 4.8899,
    category: 'restaurants',
    rating: 4.8,
    reviewsCount: 28000,
    price: '€5-€9',
    img: 'https://images.unsplash.com/photo-1576107232684-1279f390859f?auto=format&fit=crop&w=600&q=80',
    desc: 'הצ׳יפס ההולנדי האגדי! ב-Fabel Friet הצ׳יפס מוגש עם גילופי גבינת פרמז׳ן טרייה ומיונז כמהין, וב-Vleminckx עם מעל 25 רטבים מסורתיים.',
    tips: 'שווה להמתין בתור הקצר ברחוב Runstraat, הצ׳יפס מטוגן במקום וקריספי במיוחד.',
    bookingUrl: 'https://fabelfriet.nl/',
    gmapsUrl: 'https://maps.google.com/?q=Fabel+Friet+Amsterdam'
  },
  {
    id: 'ams-rest-6',
    name: 'קפה דה קלוס (Café de Klos)',
    city: 'Amsterdam',
    lat: 52.3639,
    lng: 4.8845,
    category: 'restaurants',
    rating: 4.7,
    reviewsCount: 8200,
    price: '€20-€35',
    img: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80',
    desc: 'טברנת בשרים מיתולוגית הידועה בצלעות הברביקיו (Spare Ribs) הנימוחות ביותר באירופה ובאווירה פאב אותנטית.',
    tips: 'אין הזמנת מקומות מראש! שותים בירה בפאב ממול עד שמתפנה שולחן.',
    bookingUrl: '',
    gmapsUrl: 'https://maps.google.com/?q=Cafe+de+Klos+Amsterdam'
  },
  {
    id: 'ams-rest-7',
    name: 'הפנקייק בייקרי (The Pancake Bakery)',
    city: 'Amsterdam',
    lat: 52.3792,
    lng: 4.8872,
    category: 'restaurants',
    rating: 4.6,
    reviewsCount: 14500,
    price: '€12-€20',
    img: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=600&q=80',
    desc: 'בית פנקייק מסורתי במחסן מהמאה ה-17 על תעלת הפרינסנחראכט. מגיש פנקייקים הולנדיים דקים וענקיים – מלוחים ומתוקים.',
    tips: 'נסו את הפנקייק ההולנדי עם גבינת חאודה, בייקון וסירופ סוכר חום Stroop.',
    bookingUrl: 'https://pancake.nl/',
    gmapsUrl: 'https://maps.google.com/?q=The+Pancake+Bakery+Amsterdam'
  },

  // -- קינוחים ומאפיות באמסטרדם --
  {
    id: 'ams-des-1',
    name: 'עוגיות ואן שטארלה (Van Stapele Koekmakerij)',
    city: 'Amsterdam',
    lat: 52.3693,
    lng: 4.8906,
    category: 'desserts',
    rating: 4.9,
    reviewsCount: 18500,
    price: '€3.5',
    img: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=600&q=80',
    desc: 'העוגייה המפורסמת ביותר בהולנד: עוגיית קקאו ולרונה עשירה עם לב שוקולד לבן מומס שנוזל בביס הראשון.',
    tips: 'הגיעו בשעות הבוקר או הצהריים לפני שהמלאי היומי אוזל. תמיד מוגשת חמה מהתנור!',
    bookingUrl: 'https://vanstapele.com/',
    gmapsUrl: 'https://maps.google.com/?q=Van+Stapele+Amsterdam'
  },
  {
    id: 'ams-des-2',
    name: 'פאי תפוחים וינקל 43 (Winkel 43)',
    city: 'Amsterdam',
    lat: 52.3789,
    lng: 4.8863,
    category: 'desserts',
    rating: 4.8,
    reviewsCount: 21000,
    price: '€5.5',
    img: 'https://images.unsplash.com/photo-1568571780765-9276ac8b75a2?auto=format&fit=crop&w=600&q=80',
    desc: 'פאי התפוחים ההולנדי המושלם ברובע יורדאן: בצק פריך וחמאתי, חתיכות תפוח עסיסיות והר קצפת טרייה מעל.',
    tips: 'מושלם לשבת במרפסת החיצונית המשקיפה לשוק Noordermarkt לצד קפה חם.',
    bookingUrl: 'https://winkel43.nl/',
    gmapsUrl: 'https://maps.google.com/?q=Winkel+43+Amsterdam'
  },
  {
    id: 'ams-des-3',
    name: 'סטרופוופל חם בשוק אלברט קאופ (Rudi\'s Original Stroopwafels)',
    city: 'Amsterdam',
    lat: 52.3556,
    lng: 4.8964,
    category: 'desserts',
    rating: 4.9,
    reviewsCount: 7500,
    price: '€3-€5',
    img: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80',
    desc: 'הסטרופוופל ההולנדי המקורי והחם: שני וופלים פריכים עם קרמל חם ונוטף שנעשה במקום על המחבת.',
    tips: 'הדוכן של רודי בשוק Albert Cuypstraat פעיל מ-1973. בקשו שוקולד חם מרוח בפנים!',
    bookingUrl: '',
    gmapsUrl: 'https://maps.google.com/?q=Rudis+Original+Stroopwafels+Amsterdam'
  },
  {
    id: 'ams-des-4',
    name: 'גלידריית מסימו ג׳לאטו (Massimo Gelato)',
    city: 'Amsterdam',
    lat: 52.3547,
    lng: 4.8912,
    category: 'desserts',
    rating: 4.8,
    reviewsCount: 4800,
    price: '€3-€6',
    img: 'https://images.unsplash.com/photo-1570197788417-0e82375c9371?auto=format&fit=crop&w=600&q=80',
    desc: 'הג׳לאטו האיטלקי הטוב ביותר באמסטרדם. חומרי גלם טבעיים מאיטליה, פיסטוק מסיציליה ושוקולד מריר עז.',
    tips: 'טעמי הפיסטוק והריקוטה-תאנים הם חובת טעימה.',
    bookingUrl: 'https://massimogelato.com/',
    gmapsUrl: 'https://maps.google.com/?q=Massimo+Gelato+Amsterdam'
  },

  // -- אטרקציות ומוזיאונים באמסטרדם --
  {
    id: 'ams-att-1',
    name: 'מוזיאון ואן גוך (Van Gogh Museum)',
    city: 'Amsterdam',
    lat: 52.3584,
    lng: 4.8811,
    category: 'attractions',
    rating: 4.8,
    reviewsCount: 88000,
    price: '€22',
    img: 'https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?auto=format&fit=crop&w=600&q=80',
    desc: 'האוסף הגדול בעולם של יצירות וינסנט ואן גוך, כולל "החמניות", "עץ השקד" ודיוקנאות עצמיים מרהיבים.',
    tips: 'חובה להזמין כרטיס עם שעה מוגדרת מראש באתר הרשמי – אין מכירה במקום!',
    bookingUrl: 'https://www.vangoghmuseum.nl/en/visit/tickets',
    gmapsUrl: 'https://maps.google.com/?q=Van+Gogh+Museum+Amsterdam'
  },
  {
    id: 'ams-att-2',
    name: 'רייקסמוזיאום (Rijksmuseum)',
    city: 'Amsterdam',
    lat: 52.3599,
    lng: 4.8852,
    category: 'attractions',
    rating: 4.8,
    reviewsCount: 95000,
    price: '€22.5',
    img: 'https://images.unsplash.com/photo-1583772289676-4a69d0014596?auto=format&fit=crop&w=600&q=80',
    desc: 'המוזיאון הלאומי של הולנד. ביתם של "משמר הלילה" מאת רמברנדט, יצירות ורמיר וספריית קויפרס המרהיבה.',
    tips: 'אל תפספסו את אולם הכבוד (Gallery of Honour) ואת ספריית המחקר העתיקה.',
    bookingUrl: 'https://www.rijksmuseum.nl/en/tickets',
    gmapsUrl: 'https://maps.google.com/?q=Rijksmuseum+Amsterdam'
  },
  {
    id: 'ams-att-3',
    name: 'בית אנה פרנק (Anne Frank House)',
    city: 'Amsterdam',
    lat: 52.3752,
    lng: 4.8840,
    category: 'attractions',
    rating: 4.7,
    reviewsCount: 78000,
    price: '€16',
    img: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=600&q=80',
    desc: 'האגף הנסתר שבו הסתתרו אנה פרנק ומשפחתה במלחמת העולם השנייה ובו כתבה את יומנה הנודע.',
    tips: 'כרטיסים נפתחים בדיוק 6 שבועות מראש בימי שלישי ב-10:00 בבוקר באתר הרשמי ונחטפים מיד.',
    bookingUrl: 'https://www.annefrank.org/en/museum/tickets/',
    gmapsUrl: 'https://maps.google.com/?q=Anne+Frank+House+Amsterdam'
  },
  {
    id: 'ams-att-4',
    name: 'תצפית אדאם לוקאאוט ונדנדה (A\'DAM Lookout)',
    city: 'Amsterdam',
    lat: 52.3840,
    lng: 4.9022,
    category: 'attractions',
    rating: 4.7,
    reviewsCount: 31000,
    price: '€16.5-€23',
    img: 'https://images.unsplash.com/photo-1534430480872-3498386e7856?auto=format&fit=crop&w=600&q=80',
    desc: 'תצפית פנורמית 360 מעלות על אמסטרדם ונמלה, ובראשה "Over the Edge" – הנדנדה הגבוהה ביותר באירופה.',
    tips: 'קחו את המעבורת החינמית מ-Central Station ל-Buiksloterweg (שתי דקות שיט).',
    bookingUrl: 'https://www.adamlookout.com/',
    gmapsUrl: 'https://maps.google.com/?q=ADAM+Lookout+Amsterdam'
  },
  {
    id: 'ams-att-5',
    name: 'שייט תעלות פנורמי (Amsterdam Canal Cruise)',
    city: 'Amsterdam',
    lat: 52.3776,
    lng: 4.8988,
    category: 'attractions',
    rating: 4.8,
    reviewsCount: 65000,
    price: '€16-€25',
    img: 'https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?auto=format&fit=crop&w=600&q=80',
    desc: 'הדרך המושלמת לחוות את אמסטרדם: שייט בסירה דרך טבעת התעלות שהוכרזה כאתר מורשת עולמית של אונסק"ו.',
    tips: 'שייט בשעות השקיעה או הערב מציג את הגשרים המוארים בצורה רומנטית במיוחד.',
    bookingUrl: 'https://www.lovers.nl/',
    gmapsUrl: 'https://maps.google.com/?q=Canal+Cruise+Amsterdam'
  },

  // -- טבע, פארקים ותצפיות באמסטרדם --
  {
    id: 'ams-nat-1',
    name: 'וונדלפארק (Vondelpark)',
    city: 'Amsterdam',
    lat: 52.3580,
    lng: 4.8686,
    category: 'nature',
    rating: 4.8,
    reviewsCount: 55000,
    price: 'חינם',
    img: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80',
    desc: 'הפארק העירוני הגדול והיפה באמסטרדם. בריכות ברווזים, גני ורדים, שבילי אופניים ובתי קפה ציוריים.',
    tips: 'שכרו אופניים והצטרפו לרכיבה נינוחה, או שבו לפיקניק בדשא המרכזי.',
    bookingUrl: '',
    gmapsUrl: 'https://maps.google.com/?q=Vondelpark+Amsterdam'
  },
  {
    id: 'ams-nat-2',
    name: 'הגנים הבוטניים הורטוס (Hortus Botanicus Amsterdam)',
    city: 'Amsterdam',
    lat: 52.3669,
    lng: 4.9077,
    category: 'nature',
    rating: 4.7,
    reviewsCount: 16000,
    price: '€13',
    img: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=600&q=80',
    desc: 'אחד הגנים הבוטניים העתיקים בתבל משנת 1638. חממת פרפרים טרופית ענקית ועצי דקל בני מאות שנים.',
    tips: 'בית הקפה שבחממה מגיש תה צמחים אורגני באווירה שלווה ורגועה.',
    bookingUrl: 'https://www.dehortus.nl/en/',
    gmapsUrl: 'https://maps.google.com/?q=Hortus+Botanicus+Amsterdam'
  },

  // -- קניות ומרכזי קניות באמסטרדם --
  {
    id: 'ams-shop-1',
    name: 'תשעת הרחובות (De 9 Straatjes - The 9 Streets)',
    city: 'Amsterdam',
    lat: 52.3703,
    lng: 4.8847,
    category: 'shopping',
    rating: 4.8,
    reviewsCount: 26000,
    price: 'Boutiques',
    img: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&w=600&q=80',
    desc: 'אזור הקניות הציורי ביותר באמסטרדם החוצה את התעלות: בוטיקים של מעצבים, חנויות וינטג׳, גלריות ובתי קפה.',
    tips: 'מקום אידיאלי למציאת מזכרות ייחודיות, בגדי וינטג׳ ומוצרי עיצוב לבית.',
    bookingUrl: 'https://de9straatjes.nl/en/home',
    gmapsUrl: 'https://maps.google.com/?q=The+9+Streets+Amsterdam'
  },
  {
    id: 'ams-shop-2',
    name: 'שוק אלברט קאופ (Albert Cuyp Market)',
    city: 'Amsterdam',
    lat: 52.3559,
    lng: 4.8953,
    category: 'shopping',
    rating: 4.6,
    reviewsCount: 38000,
    price: 'Market / Street Food',
    img: 'https://images.unsplash.com/photo-1533900298318-6b8da08a523e?auto=format&fit=crop&w=600&q=80',
    desc: 'שוק הרחוב הגדול והתוסס בהולנד בלב רובע דה פייפ: 260 דוכני גבינות הולנדיות, בגדים, מזכרות ואוכל רחוב.',
    tips: 'טעמו דג הרינג הולנדי כבוש (Haring) עם בצל ומלפפון חמוץ וסטרופוופל חם.',
    bookingUrl: 'https://albertcuyp-markt.amsterdam/',
    gmapsUrl: 'https://maps.google.com/?q=Albert+Cuyp+Market+Amsterdam'
  },
  {
    id: 'ams-shop-3',
    name: 'מרכז הקניות אאוטלט בטאביה סטארט (Batavia Stad Fashion Outlet)',
    city: 'Amsterdam',
    lat: 52.5278,
    lng: 5.4350,
    category: 'shopping',
    rating: 4.5,
    reviewsCount: 14000,
    price: 'Outlet Discounts',
    img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=600&q=80',
    desc: 'אאוטלט מעצבים הולנדי עם 150 חנויות מותגים כגון נייקי, הוגו בוס, מייקל קורס בהנחות של 30%-70%.',
    tips: 'נסיעה ברכבת ישירה מאמסטרדם לתחנת Lelystad Centrum ומשם שאטל קצר.',
    bookingUrl: 'https://bataviastad.nl/en/',
    gmapsUrl: 'https://maps.google.com/?q=Batavia+Stad+Outlet'
  },

  // -- חיי לילה ופאבים באמסטרדם --
  {
    id: 'ams-night-1',
    name: 'בר הקוקטיילים טיילז אנד ספיריטס (Tales & Spirits)',
    city: 'Amsterdam',
    lat: 52.3762,
    lng: 4.8902,
    category: 'nightlife',
    rating: 4.8,
    reviewsCount: 4200,
    price: '€14-€20',
    img: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=600&q=80',
    desc: 'בר קוקטיילים עטור פרסים המדורג בעקביות בין הטובים בעולם. קוקטיילים יצירתיים המוגשים בכלים מפתיעים.',
    tips: 'הזמינו מקום או הגיעו מוקדם סביב 18:00 לתפוס מקום ליד הבר.',
    bookingUrl: 'https://talesandspirits.com/',
    gmapsUrl: 'https://maps.google.com/?q=Tales+and+Spirits+Amsterdam'
  },
  {
    id: 'ams-night-2',
    name: 'מבשלת טחנת הרוח בראווריי טי איי (Brouwerij \'t IJ)',
    city: 'Amsterdam',
    lat: 52.3667,
    lng: 4.9264,
    category: 'nightlife',
    rating: 4.7,
    reviewsCount: 16500,
    price: '€4-€8',
    img: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=600&q=80',
    desc: 'מבשלת בירה מלאכת יד מפורסמת הפועלת למרגלות טחנת הרוח הגדולה De Gooyer. בירות אייל טריות וגבינות הולנדיות.',
    tips: 'שבו במרפסת השמש עם כוס בירת Zatte או Natte לצד נקניק כפרי וחרדל חריף.',
    bookingUrl: 'https://brouwerijtij.nl/',
    gmapsUrl: 'https://maps.google.com/?q=Brouwerij+t+IJ+Amsterdam'
  },

  // -- פנינים נסתרות באמסטרדם --
  {
    id: 'ams-gem-1',
    name: 'חצר בחינהוף הסודית (Begijnhof)',
    city: 'Amsterdam',
    lat: 52.3690,
    lng: 4.8899,
    category: 'gems',
    rating: 4.7,
    reviewsCount: 22000,
    price: 'חינם',
    img: 'https://images.unsplash.com/photo-1529655683826-aba9b3e77383?auto=format&fit=crop&w=600&q=80',
    desc: 'חצר פנימית קסומה ושלווה מהמאה ה-14 החבויה מאחורי דלת עץ כבדה ברחוב סואן. מכילה את הבית העתיק ביותר בעיר.',
    tips: 'הקפידו על שקט מוחלט במהלך הביקור מתוך כבוד לדיירי המקום.',
    bookingUrl: '',
    gmapsUrl: 'https://maps.google.com/?q=Begijnhof+Amsterdam'
  },
  {
    id: 'ams-gem-2',
    name: 'כנסיית עליית הגג הסודית (Ons\' Lieve Heer op Solder)',
    city: 'Amsterdam',
    lat: 52.3753,
    lng: 4.8988,
    category: 'gems',
    rating: 4.8,
    reviewsCount: 9200,
    price: '€16.5',
    img: 'https://images.unsplash.com/photo-1513584684374-8bab748fbf90?auto=format&fit=crop&w=600&q=80',
    desc: 'כנסייה קתולית סודית ומפוארת שנבנתה בשלמותה בתוך עליית הגג של בית תעלה מהמאה ה-17 בתקופת איסור הפולחן.',
    tips: 'מוזיאון מרתק ומרגש שמציג את חיי היומיום ההולנדיים של תקופת תור הזהב.',
    bookingUrl: 'https://opsolder.nl/en/',
    gmapsUrl: 'https://maps.google.com/?q=Ons+Lieve+Heer+op+Solder+Amsterdam'
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
  },

  // Search real nearby places from Photon (OSM), Wikipedia & Overpass without requiring API keys.
  searchNearbyAttractions: async function(waypoints) {
    if (!Array.isArray(waypoints) || waypoints.length === 0) return [];

    const radiusMeters = Math.min(
      25000,
      Math.max(1500, ...waypoints.map(wp => Number(wp.radius) * 1000 || 2000))
    );

    const places = [];
    const seen = new Set();

    // 1. Fast & Reliable Live OSM Search via Photon (Komoot) for all categories
    const photonQueries = [
      { q: 'restaurant', cat: 'restaurants' },
      { q: 'trattoria', cat: 'restaurants' },
      { q: 'pizzeria', cat: 'restaurants' },
      { q: 'bistro', cat: 'restaurants' },
      { q: 'bakery', cat: 'desserts' },
      { q: 'cafe', cat: 'desserts' },
      { q: 'ice cream', cat: 'desserts' },
      { q: 'patisserie', cat: 'desserts' },
      { q: 'museum', cat: 'attractions' },
      { q: 'attraction', cat: 'attractions' },
      { q: 'viewpoint', cat: 'nature' },
      { q: 'park', cat: 'nature' },
      { q: 'garden', cat: 'nature' },
      { q: 'bar', cat: 'nightlife' },
      { q: 'pub', cat: 'nightlife' },
      { q: 'mall', cat: 'shopping' },
      { q: 'market', cat: 'shopping' }
    ];

    for (const wp of waypoints) {
      const searchRadiusKm = Number(wp.radius) || 2.0;
      await Promise.allSettled(
        photonQueries.map(async (item) => {
          try {
            const url = `https://photon.komoot.io/api/?lat=${wp.lat}&lon=${wp.lng}&limit=12&q=${encodeURIComponent(item.q)}`;
            const controller = new AbortController();
            const timer = setTimeout(() => controller.abort(), 3500);
            const res = await fetch(url, { signal: controller.signal });
            clearTimeout(timer);

            if (res.ok) {
              const data = await res.json();
              (data.features || []).forEach(f => {
                const props = f.properties || {};
                const coords = f.geometry?.coordinates;
                if (!props.name || !Array.isArray(coords) || coords.length < 2) return;
                const lon = coords[0];
                const lat = coords[1];
                
                // Calculate distance in KM
                const dLat = (lat - wp.lat) * Math.PI / 180;
                const dLon = (lon - wp.lng) * Math.PI / 180;
                const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
                          Math.cos(wp.lat * Math.PI / 180) * Math.cos(lat * Math.PI / 180) *
                          Math.sin(dLon/2) * Math.sin(dLon/2);
                const distKm = 6371 * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
                
                if (distKm > searchRadiusKm * 1.3) return; // Keep only relevant nearby results

                const key = `photon-${props.osm_type || 'p'}-${props.osm_id || props.name}-${lat.toFixed(4)}-${lon.toFixed(4)}`;
                if (!seen.has(key) && !seen.has(props.name.toLowerCase())) {
                  seen.add(key);
                  seen.add(props.name.toLowerCase());

                  places.push({
                    id: key,
                    name: props.name,
                    city: props.city || props.county || '',
                    lat,
                    lng: lon,
                    category: item.cat,
                    rating: 4.6,
                    reviewsCount: 650,
                    price: 'מקומי',
                    img: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80',
                    desc: `${props.street ? props.street + (props.housenumber ? ' ' + props.housenumber : '') + ', ' : ''}${props.city || ''} (חיפוש חי)`,
                    tips: 'מקום אותנטי הנמצא ברדיוס המסלול.',
                    bookingUrl: '',
                    gmapsUrl: `https://www.google.com/maps/search/?api=1&query=${lat},${lon}`,
                    source: 'OpenStreetMap Live'
                  });
                }
              });
            }
          } catch (e) {
            // Ignore single photon query timeout
          }
        })
      );
    }

    // 2. Fetch fast reliable Wikipedia landmarks around each waypoint
    for (const wp of waypoints) {
      try {
        const wikiRadius = Math.min(10000, radiusMeters);
        const wikiUrl = `https://en.wikipedia.org/w/api.php?action=query&list=geosearch&gscoord=${wp.lat}|${wp.lng}&gsradius=${wikiRadius}&gslimit=35&format=json&origin=*`;
        const controller = new AbortController();
        const timer = setTimeout(() => controller.abort(), 4000);
        
        const res = await fetch(wikiUrl, { signal: controller.signal });
        clearTimeout(timer);

        if (res.ok) {
          const data = await res.json();
          const items = data?.query?.geosearch || [];
          items.forEach(item => {
            const key = `wiki-${item.pageid}`;
            if (!seen.has(key) && item.title) {
              seen.add(key);
              const lowerTitle = item.title.toLowerCase();
              let category = 'attractions';
              if (lowerTitle.includes('park') || lowerTitle.includes('garden') || lowerTitle.includes('hill') || lowerTitle.includes('view') || lowerTitle.includes('river')) {
                category = 'nature';
              } else if (lowerTitle.includes('restaurant') || lowerTitle.includes('cafe') || lowerTitle.includes('trattoria') || lowerTitle.includes('market') || lowerTitle.includes('pizzeria')) {
                category = 'restaurants';
              } else if (lowerTitle.includes('bakery') || lowerTitle.includes('gelato') || lowerTitle.includes('pastry')) {
                category = 'desserts';
              } else if (lowerTitle.includes('mall') || lowerTitle.includes('market') || lowerTitle.includes('bazaar')) {
                category = 'shopping';
              } else if (lowerTitle.includes('theatre') || lowerTitle.includes('bar') || lowerTitle.includes('club')) {
                category = 'nightlife';
              }

              places.push({
                id: key,
                name: item.title,
                city: '',
                lat: item.lat,
                lng: item.lon,
                category: category,
                rating: 4.7,
                reviewsCount: 1500,
                price: 'אתר מבוקש',
                img: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=600&q=80',
                desc: 'אתר מורשת ותרבות בעל ערך היסטורי ותיירותי.',
                tips: 'מומלץ לבקר ולשלב במסלול.',
                bookingUrl: `https://en.wikipedia.org/?curid=${item.pageid}`,
                gmapsUrl: `https://www.google.com/maps/search/?api=1&query=${item.lat},${item.lon}`,
                source: 'Wikipedia'
              });
            }
          });
        }
      } catch (err) {
        // Wikipedia fallback silent
      }
    }

    // 3. Fetch Overpass API with a single fast combined query
    try {
      const firstWp = waypoints[0];
      const searchRadius = Math.min(12000, radiusMeters);
      const combinedOverpassQuery = `[out:json][timeout:6];
(
  node["amenity"~"restaurant|cafe|fast_food|ice_cream|bar|pub"](around:${searchRadius},${firstWp.lat},${firstWp.lng});
  node["tourism"~"attraction|museum|gallery|viewpoint"](around:${searchRadius},${firstWp.lat},${firstWp.lng});
  node["historic"~"monument|memorial|castle|archaeological_site"](around:${searchRadius},${firstWp.lat},${firstWp.lng});
  node["shop"~"mall|department_store|bakery"](around:${searchRadius},${firstWp.lat},${firstWp.lng});
);
out center tags 60;`;

      const endpoints = [
        'https://overpass-api.de/api/interpreter',
        'https://overpass.kumi.systems/api/interpreter'
      ];

      for (const ep of endpoints) {
        try {
          const controller = new AbortController();
          const timer = setTimeout(() => controller.abort(), 4000);
          const response = await fetch(ep, {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' },
            body: `data=${encodeURIComponent(combinedOverpassQuery)}`,
            signal: controller.signal
          });
          clearTimeout(timer);

          if (response.ok) {
            const data = await response.json();
            if (Array.isArray(data?.elements)) {
              data.elements.forEach(el => {
                const tags = el.tags || {};
                const lat = el.lat ?? el.center?.lat;
                const lng = el.lon ?? el.center?.lon;
                if (!tags.name || !Number.isFinite(lat) || !Number.isFinite(lng)) return;

                const category = GEOSERVICES.getCategory(tags);
                if (!category) return;

                const key = `osm-${el.type}-${el.id}`;
                if (!seen.has(key)) {
                  seen.add(key);
                  places.push({
                    id: key,
                    name: tags.name,
                    city: tags['addr:city'] || '',
                    lat,
                    lng,
                    category,
                    rating: 4.6,
                    reviewsCount: 850,
                    price: tags.price_range || 'מקומי',
                    img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&q=80',
                    desc: tags.description || tags.cuisine || 'מקום אותנטי שנמצא בחיפוש בסביבת המסלול.',
                    tips: 'מומלץ לבדוק שעות פתיחה מקומיות.',
                    bookingUrl: tags.website || tags['contact:website'] || '',
                    gmapsUrl: `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`,
                    source: 'OpenStreetMap'
                  });
                }
              });
            }
            break; // Stop after first successful endpoint
          }
        } catch (e) {
          // Try next endpoint
        }
      }
    } catch (e) {
      console.warn('Overpass live search error:', e);
    }

    return places;
  },

  getCategory: function(tags) {
    if (['mall', 'department_store', 'outlet'].includes(tags.shop)) return 'shopping';
    if (['park', 'nature_reserve', 'garden'].includes(tags.leisure)) return 'nature';
    if (['attraction', 'museum', 'gallery', 'viewpoint', 'zoo', 'theme_park'].includes(tags.tourism)) return 'attractions';
    if (['monument', 'memorial', 'castle', 'archaeological_site'].includes(tags.historic)) return 'attractions';
    if (tags.amenity === 'ice_cream' || tags.amenity === 'cafe' || tags.shop === 'bakery') return 'desserts';
    if (tags.amenity === 'bar' || tags.amenity === 'pub' || tags.amenity === 'nightclub') return 'nightlife';
    if (['restaurant', 'fast_food'].includes(tags.amenity)) return 'restaurants';
    return null;
  }
};
