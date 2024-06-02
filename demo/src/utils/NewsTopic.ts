export const NEWS_TOPIC = {
  techCrunch: [
    "startup",
    "security",
    "venture",
    "artificialIntelligence",
    "cryptocurrency",
    "apps",
    "events",
    "startupBattlefield",
    "general",
    "fintech",
    "hardware",
    "transportation",
    "mediaEntertainment",
    "sponsored",
    "jobs",
  ],
  theGuardian: [
    "europe",
    "word",
    "uk",
    "climateCrisis",
    "ukraine",
    "environment",
    "science",
    "globalDevelopment",
    "technology",
    "business",
    "obituaries",
    "comments",
    "theGuardianView",
    "columnists",
    "cartoons",
    "opinionCideos",
    "letters",
    "mixSports",
    "football",
    "cricket",
    "rugbyUnion",
    "tennis",
    "cycling",
    "formulaOne",
    "golf",
    "usSports",
    "mixCultures",
    "books",
    "music",
    "tvRadio",
    "artDesign",
    "film",
    "games",
    "classicalMusicOpera",
    "stage",
    "mixLifestyle",
    "fashion",
    "food",
    "recipes",
    "loveSex",
    "healthFitness",
    "homesGarden",
    "women",
    "men",
    "family",
    "travel",
    "money",
    "jobs",
  ],
  europeanParliament: [
    "priorities",
    "weeklyAgendas",
    "newsletters",
    "allPressReleases",
    "plenaryPressReleases",
    "committeesPressReleases",
    "recordingsOfPressConferencesAndOtherEvents",
    "parliamentInFocus",
    "theEUAndItsInstitutions",
    "justiceAndCitizenship",
    "externalRelations",
    "agricultureAndFisheries",
    "budget",
    "cultureAndEducation",
    "economicAndMonetaryAffairs",
    "employmentAndSocialAffairs",
    "internalMarketAndIndustry",
    "regionsAndTransport",
    "healthAndEnvironment",
  ],
  nyTimes: [
    "world",
    "africa",
    "americas",
    "asiaPacific",
    "europe",
    "middleEast",
    "us",
    "education",
    "politics",
    "theUpshot",
    "nyRegion",
    "business",
    "energyEnvironment",
    "smallBusiness",
    "economy",
    "dealBook",
    "mediaAdvertising",
    "yourMoney",
    "technology",
    "personalTech",
    "sports",
    "baseball",
    "collegeBasketball",
    "collegeFootball",
    "golf",
    "hockey",
    "proBasketball",
    "proFootball",
    "soccer",
    "tennis",
    "science",
    "environment",
    "spaceCosmos",
    "health",
    "wellBlog",
    "arts",
    "artDesign",
    "bookReview",
    "dance",
    "movies",
    "music",
    "television",
    "theater",
    "fashionStyle",
    "diningWine",
    "love",
    "tMagazine",
    "travel",
    "jobs",
    "realEstate",
    "autos",
    "lensBlog",
    "obituaries",
    "timesWire",
    "mostEmailed",
    "mostShared",
    "mostViewed",
    "charlesMBlowOpinion",
    "jamelleBouieOpinion",
    "davidBrooksOpinion",
    "frankBruniOpinion",
    "gailCollinsOpinion",
    "rossDouthatOpinion",
    "maureenDowdOpinion",
    "thomasLFriedmanOpinion",
    "michelleGoldbergOpinion",
    "ezraKleiOpinion",
    "nicholasDKristofOpinion",
    "paulKrugmanOpinion",
    "farhadManjooOpinion",
    "bretStephensOpinion",
    "sundayOpinion",
  ],
};
interface NewsRSS {
  [key: string]: { [key: string]: { rss: string } };
}

export const NEWS_RSS: NewsRSS = {
  googleDailyMix: {
    news: {
      rss: "https://news.google.com/rss?hl=en-US&gl=US&ceid=US:en",
    },
  },
  techCrunch: {
    startup: {
      rss: "https://techcrunch.com/category/startups/feed/",
    },
    security: {
      rss: "https://techcrunch.com/category/security/feed/",
    },
    venture: {
      rss: "https://techcrunch.com/category/venture/feed/",
    },
    artificialIntelligence: {
      rss: "https://techcrunch.com/category/artificial-intelligence/feed/",
    },
    cryptocurrency: {
      rss: "https://techcrunch.com/category/cryptocurrency/feed/",
    },
    apps: {
      rss: "https://techcrunch.com/category/apps/feed/",
    },
    events: {
      rss: "https://techcrunch.com/events/feed/",
    },
    startupBattlefield: {
      rss: "https://techcrunch.com/startup-battlefield/feed/",
    },
    general: {
      rss: "https://techcrunch.com/feed/",
    },
    fintech: {
      rss: "https://techcrunch.com/category/fintech/feed/",
    },
    hardware: {
      rss: "https://techcrunch.com/category/hardware/feed/",
    },
    transportation: {
      rss: "https://techcrunch.com/category/transportation/feed/",
    },
    mediaEntertainment: {
      rss: "https://techcrunch.com/category/media-entertainment/feed/",
    },
    sponsored: {
      rss: "https://techcrunch.com/sponsored/feed/",
    },
    jobs: {
      rss: "https://www.crunchboard.com/jobs.rss",
    },
  },
  theGuardian: {
    europe: {
      rss: "https://www.theguardian.com/europe/rss",
    },
    word: {
      rss: "https://www.theguardian.com/world/rss",
    },
    uk: {
      rss: "https://www.theguardian.com/uk-news/rss",
    },
    climateCrisis: {
      rss: "https://www.theguardian.com/environment/climate-crisis/rss",
    },
    ukraine: {
      rss: "https://www.theguardian.com/world/ukraine/rss",
    },
    environment: {
      rss: "https://www.theguardian.com/uk/environment/rss",
    },
    science: {
      rss: "https://www.theguardian.com/science/rss",
    },
    globalDevelopment: {
      rss: "https://www.theguardian.com/global-development/rss",
    },
    technology: {
      rss: "https://www.theguardian.com/uk/technology/rss",
    },
    business: {
      rss: "https://www.theguardian.com/uk/business/rss",
    },
    obituaries: {
      rss: "https://www.theguardian.com/obituaries/rss",
    },
    comments: {
      rss: "https://www.theguardian.com/uk/commentisfree/rss",
    },
    theGuardianView: {
      rss: "https://www.theguardian.com/profile/editorial/rss",
    },
    columnists: {
      rss: "https://www.theguardian.com/index/contributors/rss",
    },
    cartoons: {
      rss: "https://www.theguardian.com/tone/cartoons/rss",
    },
    opinionCideos: {
      rss: "https://www.theguardian.com/type/video+tone/comment/rss",
    },
    letters: {
      rss: "https://www.theguardian.com/tone/letters/rss",
    },
    mixSports: {
      rss: "https://www.theguardian.com/uk/sport/rss",
    },
    football: {
      rss: "https://www.theguardian.com/football/rss",
    },
    cricket: {
      rss: "https://www.theguardian.com/sport/cricket/rss",
    },
    rugbyUnion: {
      rss: "https://www.theguardian.com/sport/rugby-union/rss",
    },
    tennis: {
      rss: "https://www.theguardian.com/sport/tennis/rss",
    },
    cycling: {
      rss: "https://www.theguardian.com/sport/cycling/rss",
    },
    formulaOne: {
      rss: "https://www.theguardian.com/sport/formulaone/rss",
    },
    golf: {
      rss: "https://www.theguardian.com/sport/golf/rss",
    },
    usSports: {
      rss: "https://www.theguardian.com/sport/us-sport/rss",
    },
    mixCultures: {
      rss: "https://www.theguardian.com/uk/culture/rss",
    },
    books: {
      rss: "https://www.theguardian.com/books/rss",
    },
    music: {
      rss: "https://www.theguardian.com/music/rss",
    },
    tvRadio: {
      rss: "https://www.theguardian.com/uk/tv-and-radio/rss",
    },
    artDesign: {
      rss: "https://www.theguardian.com/artanddesign/rss",
    },
    film: {
      rss: "https://www.theguardian.com/uk/film",
    },
    games: {
      rss: "https://www.theguardian.com/games/rss",
    },
    classicalMusicOpera: {
      rss: "https://www.theguardian.com/music/classical-music-and-opera/rss",
    },
    stage: {
      rss: "https://www.theguardian.com/stage/rss",
    },
    mixLifestyle: {
      rss: "https://www.theguardian.com/uk/lifeandstyle/rss",
    },
    fashion: {
      rss: "https://www.theguardian.com/fashion/rss",
    },
    food: {
      rss: "https://www.theguardian.com/food/rss",
    },
    recipes: {
      rss: "https://www.theguardian.com/tone/recipes/rss",
    },
    loveSex: {
      rss: "https://www.theguardian.com/lifeandstyle/love-and-sex/rss",
    },
    healthFitness: {
      rss: "https://www.theguardian.com/lifeandstyle/health-and-wellbeing/rss",
    },
    homesGarden: {
      rss: "https://www.theguardian.com/lifeandstyle/home-and-garden/rss",
    },
    women: {
      rss: "https://www.theguardian.com/lifeandstyle/women/rss",
    },
    men: {
      rss: "https://www.theguardian.com/lifeandstyle/men/rss",
    },
    family: {
      rss: "https://www.theguardian.com/lifeandstyle/family/rss",
    },
    travel: {
      rss: "https://www.theguardian.com/uk/travel/rss",
    },
    money: {
      rss: "https://www.theguardian.com/uk/money/rss",
    },
    jobs: {
      rss: "https://jobs.theguardian.com/jobsrss/",
    },
  },
  europeanParliament: {
    priorities: {
      rss: "https://www.europarl.europa.eu/rss/doc/top-stories/en.xml",
    },
    weeklyAgendas: {
      rss: "https://www.europarl.europa.eu/rss/doc/agendas-news/en.xml",
    },
    newsletters: {
      rss: "https://www.europarl.europa.eu/rss/doc/newsletters/en.xml",
    },
    allPressReleases: {
      rss: "https://www.europarl.europa.eu/rss/doc/press-releases/en.xml",
    },
    plenaryPressReleases: {
      rss: "https://www.europarl.europa.eu/rss/doc/press-releases-plenary/en.xml",
    },
    committeesPressReleases: {
      rss: "https://www.europarl.europa.eu/rss/doc/press-releases-committees/en.xml",
    },
    recordingsOfPressConferencesAndOtherEvents: {
      rss: "https://www.europarl.europa.eu/rss/video/other-events/en.xml",
    },
    parliamentInFocus: {
      rss: "https://www.europarl.europa.eu/rss/video/europarltv/en.xml",
    },
    theEUAndItsInstitutions: {
      rss: "https://www.europarl.europa.eu/rss/topic/901/en.xml",
    },
    justiceAndCitizenship: {
      rss: "https://www.europarl.europa.eu/rss/topic/902/en.xml",
    },
    externalRelations: {
      rss: "https://www.europarl.europa.eu/rss/topic/903/en.xml",
    },
    agricultureAndFisheries: {
      rss: "https://www.europarl.europa.eu/rss/topic/904/en.xml",
    },
    budget: {
      rss: "https://www.europarl.europa.eu/rss/topic/905/en.xml",
    },
    cultureAndEducation: {
      rss: "https://www.europarl.europa.eu/rss/topic/906/en.xml",
    },
    economicAndMonetaryAffairs: {
      rss: "https://www.europarl.europa.eu/rss/topic/907/en.xml",
    },
    employmentAndSocialAffairs: {
      rss: "https://www.europarl.europa.eu/rss/topic/908/en.xml",
    },
    internalMarketAndIndustry: {
      rss: "https://www.europarl.europa.eu/rss/topic/909/en.xml",
    },
    regionsAndTransport: {
      rss: "https://www.europarl.europa.eu/rss/topic/910/en.xml",
    },
    healthAndEnvironment: {
      rss: "https://www.europarl.europa.eu/rss/topic/911/en.xml",
    },
  },
  nyTimes: {
    world: {
      rss: "https://rss.nytimes.com/services/xml/rss/nyt/World.xml",
    },
    africa: {
      rss: "https://rss.nytimes.com/services/xml/rss/nyt/Africa.xml",
    },
    americas: {
      rss: "https://rss.nytimes.com/services/xml/rss/nyt/Americas.xml",
    },
    asiaPacific: {
      rss: "https://rss.nytimes.com/services/xml/rss/nyt/AsiaPacific.xml",
    },
    europe: {
      rss: "https://rss.nytimes.com/services/xml/rss/nyt/Europe.xml",
    },
    middleEast: {
      rss: "https://rss.nytimes.com/services/xml/rss/nyt/MiddleEast.xml",
    },
    us: {
      rss: "https://rss.nytimes.com/services/xml/rss/nyt/US.xml",
    },
    education: {
      rss: "https://rss.nytimes.com/services/xml/rss/nyt/Education.xml",
    },
    politics: {
      rss: "https://rss.nytimes.com/services/xml/rss/nyt/Politics.xml",
    },
    theUpshot: {
      rss: "https://rss.nytimes.com/services/xml/rss/nyt/Upshot.xml",
    },
    nyRegion: {
      rss: "https://rss.nytimes.com/services/xml/rss/nyt/NYRegion.xml",
    },
    business: {
      rss: "https://rss.nytimes.com/services/xml/rss/nyt/Business.xml",
    },
    energyEnvironment: {
      rss: "https://rss.nytimes.com/services/xml/rss/nyt/EnergyEnvironment.xml",
    },
    smallBusiness: {
      rss: "https://rss.nytimes.com/services/xml/rss/nyt/SmallBusiness.xml",
    },
    economy: {
      rss: "https://rss.nytimes.com/services/xml/rss/nyt/Economy.xml",
    },
    dealBook: {
      rss: "https://rss.nytimes.com/services/xml/rss/nyt/Dealbook.xml",
    },
    mediaAdvertising: {
      rss: "https://rss.nytimes.com/services/xml/rss/nyt/MediaandAdvertising.xml",
    },
    yourMoney: {
      rss: "https://rss.nytimes.com/services/xml/rss/nyt/YourMoney.xml",
    },
    technology: {
      rss: "https://rss.nytimes.com/services/xml/rss/nyt/Technology.xml",
    },
    personalTech: {
      rss: "https://rss.nytimes.com/services/xml/rss/nyt/PersonalTech.xml",
    },
    sports: {
      rss: "https://rss.nytimes.com/services/xml/rss/nyt/Sports.xml",
    },
    baseball: {
      rss: "https://rss.nytimes.com/services/xml/rss/nyt/Baseball.xml",
    },
    collegeBasketball: {
      rss: "https://rss.nytimes.com/services/xml/rss/nyt/CollegeBasketball.xml",
    },
    collegeFootball: {
      rss: "https://rss.nytimes.com/services/xml/rss/nyt/CollegeFootball.xml",
    },
    golf: {
      rss: "https://rss.nytimes.com/services/xml/rss/nyt/Golf.xml",
    },
    hockey: {
      rss: "https://rss.nytimes.com/services/xml/rss/nyt/Hockey.xml",
    },
    proBasketball: {
      rss: "https://rss.nytimes.com/services/xml/rss/nyt/ProBasketball.xml",
    },
    proFootball: {
      rss: "https://rss.nytimes.com/services/xml/rss/nyt/ProFootball.xml",
    },
    soccer: {
      rss: "https://rss.nytimes.com/services/xml/rss/nyt/Soccer.xml",
    },
    tennis: {
      rss: "https://rss.nytimes.com/services/xml/rss/nyt/Tennis.xml",
    },
    science: {
      rss: "https://rss.nytimes.com/services/xml/rss/nyt/Science.xml",
    },
    environment: {
      rss: "https://rss.nytimes.com/services/xml/rss/nyt/Climate.xml",
    },
    spaceCosmos: {
      rss: "https://rss.nytimes.com/services/xml/rss/nyt/Space.xml",
    },
    health: {
      rss: "https://rss.nytimes.com/services/xml/rss/nyt/Health.xml",
    },
    wellBlog: {
      rss: "https://rss.nytimes.com/services/xml/rss/nyt/Well.xml",
    },
    arts: {
      rss: "https://rss.nytimes.com/services/xml/rss/nyt/Arts.xml",
    },
    artDesign: {
      rss: "https://rss.nytimes.com/services/xml/rss/nyt/ArtandDesign.xml",
    },
    bookReview: {
      rss: "https://rss.nytimes.com/services/xml/rss/nyt/Books/Review.xml",
    },
    dance: {
      rss: "https://rss.nytimes.com/services/xml/rss/nyt/Dance.xml",
    },
    movies: {
      rss: "https://rss.nytimes.com/services/xml/rss/nyt/Movies.xml",
    },
    music: {
      rss: "https://rss.nytimes.com/services/xml/rss/nyt/Music.xml",
    },
    television: {
      rss: "https://rss.nytimes.com/services/xml/rss/nyt/Television.xml",
    },
    theater: {
      rss: "https://rss.nytimes.com/services/xml/rss/nyt/Theater.xml",
    },
    fashionStyle: {
      rss: "https://rss.nytimes.com/services/xml/rss/nyt/FashionandStyle.xml",
    },
    diningWine: {
      rss: "https://rss.nytimes.com/services/xml/rss/nyt/DiningandWine.xml",
    },
    love: {
      rss: "https://rss.nytimes.com/services/xml/rss/nyt/Weddings.xml",
    },
    tMagazine: {
      rss: "https://rss.nytimes.com/services/xml/rss/nyt/tmagazine.xml",
    },
    travel: {
      rss: "https://rss.nytimes.com/services/xml/rss/nyt/Travel.xml",
    },
    jobs: {
      rss: "https://rss.nytimes.com/services/xml/rss/nyt/Jobs.xml",
    },
    realEstate: {
      rss: "https://rss.nytimes.com/services/xml/rss/nyt/RealEstate.xml",
    },
    autos: {
      rss: "https://rss.nytimes.com/services/xml/rss/nyt/Automobiles.xml",
    },
    lensBlog: {
      rss: "https://rss.nytimes.com/services/xml/rss/nyt/Lens.xml",
    },
    obituaries: {
      rss: "https://rss.nytimes.com/services/xml/rss/nyt/Obituaries.xml",
    },
    timesWire: {
      rss: "https://content.api.nytimes.com/svc/news/v3/all/recent.rss",
    },
    mostEmailed: {
      rss: "https://rss.nytimes.com/services/xml/rss/nyt/MostEmailed.xml",
    },
    mostShared: {
      rss: "https://rss.nytimes.com/services/xml/rss/nyt/MostShared.xml",
    },
    mostViewed: {
      rss: "https://rss.nytimes.com/services/xml/rss/nyt/MostViewed.xml",
    },
    charlesMBlowOpinion: {
      rss: "https://www.nytimes.com/svc/collections/v1/publish/column/charles-m-blow/rss.xml",
    },
    jamelleBouieOpinion: {
      rss: "https://www.nytimes.com/svc/collections/v1/publish/column/jamelle-bouie/rss.xml",
    },
    davidBrooksOpinion: {
      rss: "https://www.nytimes.com/svc/collections/v1/publish/column/david-brooks/rss.xml",
    },
    frankBruniOpinion: {
      rss: "https://www.nytimes.com/svc/collections/v1/publish/column/frank-bruni/rss.xml",
    },
    gailCollinsOpinion: {
      rss: "https://www.nytimes.com/svc/collections/v1/publish/column/gail-collins/rss.xml",
    },
    rossDouthatOpinion: {
      rss: "https://www.nytimes.com/svc/collections/v1/publish/column/ross-douthat/rss.xml",
    },
    maureenDowdOpinion: {
      rss: "https://www.nytimes.com/svc/collections/v1/publish/column/maureen-dowd/rss.xml",
    },
    thomasLFriedmanOpinion: {
      rss: "https://www.nytimes.com/svc/collections/v1/publish/column/thomas-l-friedman/rss.xml",
    },
    michelleGoldbergOpinion: {
      rss: "https://www.nytimes.com/svc/collections/v1/publish/column/michelle-goldberg/rss.xml",
    },
    ezraKleiOpinion: {
      rss: "https://www.nytimes.com/svc/collections/v1/publish/column/ezra-klein/rss.xml",
    },
    nicholasDKristofOpinion: {
      rss: "https://www.nytimes.com/svc/collections/v1/publish/column/nicholas-kristof/rss.xml",
    },
    paulKrugmanOpinion: {
      rss: "https://www.nytimes.com/svc/collections/v1/publish/column/paul-krugman/rss.xml",
    },
    farhadManjooOpinion: {
      rss: "https://www.nytimes.com/svc/collections/v1/publish/column/farhad-manjoo/rss.xml",
    },
    bretStephensOpinion: {
      rss: "https://www.nytimes.com/svc/collections/v1/publish/column/bret-stephens/rss.xml",
    },
    sundayOpinion: {
      rss: "https://rss.nytimes.com/services/xml/rss/nyt/sunday-review.xml",
    },
  },
};
