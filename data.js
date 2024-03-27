const data = {
  "sources": [
    {
      "name": "instagram",
      "categories": {
        "profile":{
          "username": "www.insta.com/<?username?>",
          "isReplacable": ["username"]
        }
      }
    },
    {
      "name": "x",
      "categories": {
        "profile":{
          "rss": "https://nitter.poast.org/<?username?>",
          "isReplacable": ["username"]
        }
      }
      
    },
    {
      "name": "medium",
      "categories": {
        "profile":{
          "rss": "https://<?username?>.medium.com/feed",
          "isReplacable": ["username"]
        }
      }
      
    },
    {
      "name": "googleDailyMix",
      "categories":{
        "news":{
          "rss":"https://news.google.com/rss?hl=en-US&gl=US&ceid=US:en",
          "isReplacable": null,
          "keyword":true,
        },
          "filter":{
            "rss":"https://news.google.com/rss?hl=en-US&gl=US&ceid=US:en",
            "keyword": true
          }
        }
    },
    {
      "name": "techCrunch",
      "categories": {
          "startup": {
            "rss": "https://techcrunch.com/category/startups/feed/",
            "isReplacable": null,
            "keyword":true
          },
          "security": {
            "rss": "https://techcrunch.com/category/startups/feed/",
            "isReplacable": null,
            "keyword":true
          },
          "venture": {
            "rss": "https://techcrunch.com/category/venture/feed/",
            "isReplacable": null,
            "keyword":true
          },
          "artificialIntelligence": {
            "rss": "https://techcrunch.com/category/artificial-intelligence/feed/",
            "isReplacable": null,
            "keyword":true
          },
          "cryptocurrency": {
            "rss": "https://techcrunch.com/category/cryptocurrency/feed/",
            "isReplacable": null,
            "keyword":true
          },
          "apps": {
            "rss": "https://techcrunch.com/category/apps/feed/",
            "isReplacable": null,
            "keyword":true
          },
          "events": {
            "rss": "https://techcrunch.com/events/feed/",
            "isReplacable": null,
            "keyword":true
          },
          "startupBattlefield": {
            "rss": "https://techcrunch.com/startup-battlefield/feed/",
            "isReplacable": null,
            "keyword":true
          },
          "general": {
            "rss": "https://techcrunch.com/feed/",
            "isReplacable": null,
            "keyword":true
          },
          "fintech": {
            "rss": "https://techcrunch.com/category/fintech/feed/",
            "isReplacable": null,
            "keyword":true
          },
          "hardware": {
            "rss": "https://techcrunch.com/category/hardware/feed/",
            "isReplacable": null,
            "keyword":true
          },
          "transportation": {
            "rss": "https://techcrunch.com/category/transportation/feed/",
            "isReplacable": null,
            "keyword":true
          },
          "mediaEntertainment": {
            "rss": "https://techcrunch.com/category/media-entertainment/feed/",
            "isReplacable": null,
            "keyword":true
          },
          "sponsored": {
            "rss": "https://techcrunch.com/sponsored/feed/",
            "isReplacable": null,
            "keyword":true
          },
          "jobs": {
            "rss": "https://www.crunchboard.com/jobs.rss",
            "isReplacable": null,
            "keyword":true
          },
          "geo": {
            "rss": "https://techcrunch.com/category/location/<?geo?>/feed/",
            "isReplacable": ["geoFullName"]
          },
          "filter":{
            "rss":"https://techcrunch.com/feed/",
            "keyword": true
        }
      }
    },
    {
      "name": "theGuardian",
      "categories": {
        "europe":{
          "rss":"https://www.theguardian.com/europe/rss",
          "isReplacable": null,
          "keyword":true,
        },
        "word":{
          "rss":"https://www.theguardian.com/world/rss",
          "isReplacable": null,
          "keyword":true,
        },
        "uk":{
          "rss":"https://www.theguardian.com/uk-news/rss",
          "isReplacable": null,
          "keyword":true,
        },
        "climateCrisis":{
          "rss":"https://www.theguardian.com/environment/climate-crisis/rss",
          "isReplacable": null,
          "keyword":true,
        },
        "ukraine":{
          "rss":"https://www.theguardian.com/world/ukraine/rss",
          "isReplacable": null,
          "keyword":true,
        },
        "environment":{
          "rss":"https://www.theguardian.com/uk/environment/rss",
          "isReplacable": null,
          "keyword":true,
        },
        "science":{
          "rss":"https://www.theguardian.com/science/rss",
          "isReplacable": null,
          "keyword":true,
        },
        "globalDevelopment":{
          "rss":"https://www.theguardian.com/global-development/rss",
          "isReplacable": null,
          "keyword":true,
        },
        "technology":{
          "rss":"https://www.theguardian.com/uk/technology/rss",
          "isReplacable": null,
          "keyword":true,
        },
        "business":{
          "rss":"https://www.theguardian.com/uk/business/rss",
          "isReplacable": null,
          "keyword":true,
        },
        "obituaries":{
          "rss":"https://www.theguardian.com/obituaries/rss",
          "isReplacable": null,
          "keyword":true,
        },
        "comments":{
          "rss":"https://www.theguardian.com/uk/commentisfree/rss",
          "isReplacable": null,
          "keyword":true,
        },
        "theGuardianView":{
          "rss":"https://www.theguardian.com/profile/editorial/rss",
          "isReplacable": null,
          "keyword":true,
        },
        "columnists":{
          "rss":"https://www.theguardian.com/index/contributors/rss",
          "isReplacable": null,
          "keyword":true,
        },
        "cartoons":{
          "rss":"https://www.theguardian.com/tone/cartoons/rss",
          "isReplacable": null,
          "keyword":true,
        },
        "opinionCideos":{
          "rss":"https://www.theguardian.com/type/video+tone/comment/rss",
          "isReplacable": null,
          "keyword":true,
        },
        "letters":{
          "rss":"https://www.theguardian.com/tone/letters/rss",
          "isReplacable": null,
          "keyword":true,
        },
        "mixSports":{
          "rss":"https://www.theguardian.com/uk/sport/rss",
          "isReplacable": null,
          "keyword":true,
        },
        "football":{
          "rss":"https://www.theguardian.com/football/rss",
          "isReplacable": null,
          "keyword":true,
        },
        "cricket":{
          "rss":"https://www.theguardian.com/sport/cricket/rss",
          "isReplacable": null,
          "keyword":true,
        },
        "rugbyUnion":{
          "rss":"https://www.theguardian.com/sport/rugby-union/rss",
          "isReplacable": null,
          "keyword":true,
        },
        "tennis":{
          "rss":"https://www.theguardian.com/sport/tennis/rss",
          "isReplacable": null,
          "keyword":true,
        },
        "cycling":{
          "rss":"https://www.theguardian.com/sport/cycling/rss",
          "isReplacable": null,
          "keyword":true,
        },
        "formulaOne":{
          "rss":"https://www.theguardian.com/sport/formulaone/rss",
          "isReplacable": null,
          "keyword":true,
        },
        "golf":{
          "rss":"https://www.theguardian.com/sport/golf/rss",
          "isReplacable": null,
          "keyword":true,
        },
        "usSports":{
          "rss":"https://www.theguardian.com/sport/us-sport/rss",
          "isReplacable": null,
          "keyword":true,
        },
        "mixCultures":{
          "rss":"https://www.theguardian.com/uk/culture/rss",
          "isReplacable": null,
          "keyword":true,
        },
        "books":{
          "rss":"https://www.theguardian.com/books/rss",
          "isReplacable": null,
          "keyword":true,
        },
        "music":{
          "rss":"https://www.theguardian.com/music/rss",
          "isReplacable": null,
          "keyword":true,
        },
        "tvRadio":{
          "rss":"https://www.theguardian.com/uk/tv-and-radio/rss",
          "isReplacable": null,
          "keyword":true,
        },
        "artDesign":{
          "rss":"https://www.theguardian.com/artanddesign/rss",
          "isReplacable": null,
          "keyword":true,
        },
        "film":{
          "rss":"https://www.theguardian.com/uk/film",
          "isReplacable": null,
          "keyword":true,
        },
        "games":{
          "rss":"https://www.theguardian.com/games/rss",
          "isReplacable": null,
          "keyword":true,
        },
        "classicalMusicOpera":{
          "rss":"https://www.theguardian.com/music/classical-music-and-opera/rss",
          "isReplacable": null,
          "keyword":true,
        },
        "stage":{
          "rss":"https://www.theguardian.com/stage/rss",
          "isReplacable": null,
          "keyword":true,
        },
        "mixLifestyle":{
          "rss":"https://www.theguardian.com/uk/lifeandstyle/rss",
          "isReplacable": null,
          "keyword":true,
        },
        "fashion":{
          "rss":"https://www.theguardian.com/fashion/rss",
          "isReplacable": null,
          "keyword":true,
        },
        "food":{
          "rss":"https://www.theguardian.com/food/rss",
          "isReplacable": null,
          "keyword":true,
        },
        "recipes":{
          "rss":"https://www.theguardian.com/tone/recipes/rss",
          "isReplacable": null,
          "keyword":true,
        },
        "loveSex":{
          "rss":"https://www.theguardian.com/lifeandstyle/love-and-sex/rss",
          "isReplacable": null,
          "keyword":true,
        },
        "healthFitness":{
          "rss":"https://www.theguardian.com/lifeandstyle/health-and-wellbeing/rss",
          "isReplacable": null,
          "keyword":true,
        },
        "homesGarden":{
          "rss":"https://www.theguardian.com/lifeandstyle/home-and-garden/rss",
          "isReplacable": null,
          "keyword":true,
        },
        "women":{
          "rss":"https://www.theguardian.com/lifeandstyle/women/rss",
          "isReplacable": null,
          "keyword":true,
        },
        "men":{
          "rss":"https://www.theguardian.com/lifeandstyle/men/rss",
          "isReplacable": null,
          "keyword":true,
        },
        "family":{
          "rss":"https://www.theguardian.com/lifeandstyle/family/rss",
          "isReplacable": null,
          "keyword":true,
        },
        "travel":{
          "rss":"https://www.theguardian.com/uk/travel/rss",
          "isReplacable": null,
          "keyword":true,
        },
        "money":{
          "rss":"https://www.theguardian.com/uk/money/rss",
          "isReplacable": null,
          "keyword":true,
        },
        "jobs":{
          "rss":"https://jobs.theguardian.com/jobsrss/",
          "isReplacable": null,
          "keyword":true,
        },
        "geo": {
          "rss": "https://www.theguardian.com/category/location/<?geo?>/feed/",
          "isReplacable": ["geoFullName"]
        },
        "filter":{
          "rss":"https://www.theguardian.com/europe/rss",
          "keyword": true
        }
      }
    },
    {
      "name":"europeanParliament",
      "categories":{
        "priorities": {
          "rss": "https://www.europarl.europa.eu/rss/doc/top-stories/en.xml",
          "isReplacable": null,
          "keyword":true,
          },
        "weeklyAgendas": {
          "rss": "https://www.europarl.europa.eu/rss/doc/agendas-news/en.xml",
          "isReplacable": null,
          "keyword":true,
        },
        "newsletters": {
          "rss": "https://www.europarl.europa.eu/rss/doc/newsletters/en.xml",
          "isReplacable": null,
          "keyword":true,
        },
        "allPressReleases": {
          "rss": "https://www.europarl.europa.eu/rss/doc/press-releases/en.xml",
          "isReplacable": null,
          "keyword":true,
          },
        "plenaryPressReleases": {
          "rss": "https://www.europarl.europa.eu/rss/doc/press-releases-plenary/en.xml",
          "isReplacable": null,
          "keyword":true,
          },
        "committeesPressReleases": {
          "rss": "https://www.europarl.europa.eu/rss/doc/press-releases-committees/en.xml",
          "isReplacable": null,
          "keyword":true,
          },
        "recordingsOfPressConferencesAndOtherEvents": {
          "rss": "https://www.europarl.europa.eu/rss/video/other-events/en.xml",
          "isReplacable": null,
          "keyword":true,
        },
        "parliamentInFocus": {
          "rss": "https://www.europarl.europa.eu/rss/video/europarltv/en.xml",
          "isReplacable": null,
          "keyword":true,
        },
        "theEUAndItsInstitutions": {
          "rss": "https://www.europarl.europa.eu/rss/topic/901/en.xml",
          "isReplacable": null,
          "keyword":true,
        },
        "justiceAndCitizenship": {
          "rss": "https://www.europarl.europa.eu/rss/topic/902/en.xml",
          "isReplacable": null,
          "keyword":true,
        },
        "externalRelations": {
          "rss": "https://www.europarl.europa.eu/rss/topic/903/en.xml",
          "isReplacable": null,
          "keyword":true,
        },
        "agricultureAndFisheries": {
          "rss": "https://www.europarl.europa.eu/rss/topic/904/en.xml",
          "isReplacable": null,
          "keyword":true,
        },
        "budget": {
          "rss": "https://www.europarl.europa.eu/rss/topic/905/en.xml",
          "isReplacable": null,
          "keyword":true,
        },
        "cultureAndEducation": {
          "rss": "https://www.europarl.europa.eu/rss/topic/906/en.xml",
          "isReplacable": null,
          "keyword":true,
        },
        "economicAndMonetaryAffairs": {
          "rss": "https://www.europarl.europa.eu/rss/topic/907/en.xml",
          "isReplacable": null,
          "keyword":true,
        },
        "employmentAndSocialAffairs": {
          "rss": "https://www.europarl.europa.eu/rss/topic/908/en.xml",
          "isReplacable": null,
          "keyword":true,
        },
        "internalMarketAndIndustry": {
          "rss": "https://www.europarl.europa.eu/rss/topic/909/en.xml",
          "isReplacable": null,
          "keyword":true,
        },
        "regionsAndTransport": {
          "rss": "https://www.europarl.europa.eu/rss/topic/910/en.xml",
          "isReplacable": null,
          "keyword":true,
        },
        "healthAndEnvironment": {
          "rss": "https://www.europarl.europa.eu/rss/topic/911/en.xml",
          "isReplacable": null,
          "keyword":true,
        },
        "filter":{
          "rss":"https://www.europarl.europa.eu/rss/doc/top-stories/en.xml",
          "keyword":true, 
        }
      } 
          
    },
    {
      "name": "nyTimes",
      "categories": {
        "world": {
          "rss": "https://rss.nytimes.com/services/xml/rss/nyt/World.xml", 
          "isReplacable": null,
          "keyword":true
        },
        "africa": {
          "rss": "https://rss.nytimes.com/services/xml/rss/nyt/Africa.xml",
          "isReplacable": null,
          "keyword":true
        },
        "americas": {
          "rss": "https://rss.nytimes.com/services/xml/rss/nyt/Americas.xml",
          "isReplacable": null,
          "keyword":true
        },
        "asiaPacific": {
          "rss": "https://rss.nytimes.com/services/xml/rss/nyt/AsiaPacific.xml",
          "isReplacable": null,
          "keyword":true
        },
        "europe": {
          "rss": "https://rss.nytimes.com/services/xml/rss/nyt/Europe.xml", 
          "isReplacable": null,
          "keyword":true
        },
        "middleEast": {
          "rss": "https://rss.nytimes.com/services/xml/rss/nyt/MiddleEast.xml",
          "isReplacable": null,
          "keyword":true
        },
        "us": {
          "rss": "https://rss.nytimes.com/services/xml/rss/nyt/US.xml",
          "isReplacable": null,
          "keyword":true
        },
        "education": {
          "rss": "https://rss.nytimes.com/services/xml/rss/nyt/Education.xml", 
          "isReplacable": null,
          "keyword":true
        },
        "politics": {
          "rss": "https://rss.nytimes.com/services/xml/rss/nyt/Politics.xml",
          "isReplacable": null,
          "keyword":true
        },
        "theUpshot": {
          "rss": "https://rss.nytimes.com/services/xml/rss/nyt/Upshot.xml",
          "isReplacable": null,
          "keyword":true
        },
        "nyRegion": {
          "rss": "https://rss.nytimes.com/services/xml/rss/nyt/NYRegion.xml",
          "isReplacable": null,
          "keyword":true
        },
        "business": {
          "rss": "https://rss.nytimes.com/services/xml/rss/nyt/Business.xml",
          "isReplacable": null,
          "keyword":true
        },
        "energyEnvironment": {
          "rss": "https://rss.nytimes.com/services/xml/rss/nyt/EnergyEnvironment.xml",
          "isReplacable": null,
          "keyword":true
        },
        "smallBusiness": {
          "rss": "https://rss.nytimes.com/services/xml/rss/nyt/SmallBusiness.xml",
          "isReplacable": null,
          "keyword":true
        },
        "economy": {
          "rss": "https://rss.nytimes.com/services/xml/rss/nyt/Economy.xml",
          "isReplacable": null,
          "keyword":true
        },
        "dealBook": {
          "rss": "https://rss.nytimes.com/services/xml/rss/nyt/Dealbook.xml",
          "isReplacable": null,
          "keyword":true
        },
        "mediaAdvertising": {
          "rss": "https://rss.nytimes.com/services/xml/rss/nyt/MediaandAdvertising.xml",
          "isReplacable": null,
          "keyword":true
        },
        "yourMoney": {
          "rss": "https://rss.nytimes.com/services/xml/rss/nyt/YourMoney.xml",
          "isReplacable": null,
          "keyword":true
        },
        "technology": {
          "rss": "https://rss.nytimes.com/services/xml/rss/nyt/Technology.xml",
          "isReplacable": null,
          "keyword":true
        },
        "personalTech": {
          "rss": "https://rss.nytimes.com/services/xml/rss/nyt/PersonalTech.xml",
          "isReplacable": null,
          "keyword":true
        },
        "sports": {
          "rss": "https://rss.nytimes.com/services/xml/rss/nyt/Sports.xml",
          "isReplacable": null,
          "keyword":true
        },
        "baseball": {
          "rss": "https://rss.nytimes.com/services/xml/rss/nyt/Baseball.xml",
          "isReplacable": null,
          "keyword":true
        },
        "collegeBasketball": {
          "rss": "https://rss.nytimes.com/services/xml/rss/nyt/CollegeBasketball.xml",
          "isReplacable": null,
          "keyword":true
        },
        "collegeFootball": {
          "rss": "https://rss.nytimes.com/services/xml/rss/nyt/CollegeFootball.xml",
          "isReplacable": null,
          "keyword":true
        },
        "golf": {
          "rss": "https://rss.nytimes.com/services/xml/rss/nyt/Golf.xml",
          "isReplacable": null,
          "keyword":true
        },
        "hockey": {
          "rss": "https://rss.nytimes.com/services/xml/rss/nyt/Hockey.xml",
          "isReplacable": null,
          "keyword":true
        },
        "proBasketball": {
          "rss": "https://rss.nytimes.com/services/xml/rss/nyt/ProBasketball.xml",
          "isReplacable": null,
          "keyword":true
        },
        "proFootball": {
          "rss": "https://rss.nytimes.com/services/xml/rss/nyt/ProFootball.xml",
          "isReplacable": null,
          "keyword":true
        },
        "soccer": {
          "rss": "https://rss.nytimes.com/services/xml/rss/nyt/Soccer.xml",
          "isReplacable": null,
          "keyword":true
        },
        "tennis": {
          "rss": "https://rss.nytimes.com/services/xml/rss/nyt/Tennis.xml",
          "isReplacable": null,
          "keyword":true
        },
        "science": {
          "rss": "https://rss.nytimes.com/services/xml/rss/nyt/Science.xml",
          "isReplacable": null,
          "keyword":true
        },
        "environment": {
          "rss": "https://rss.nytimes.com/services/xml/rss/nyt/Climate.xml",
          "isReplacable": null,
          "keyword":true
        },
        "spaceCosmos": {
          "rss": "https://rss.nytimes.com/services/xml/rss/nyt/Space.xml",
          "isReplacable": null,
          "keyword":true
        },
        "health": {
          "rss": "https://rss.nytimes.com/services/xml/rss/nyt/Health.xml",
          "isReplacable": null,
          "keyword":true
        },
        "wellBlog": {
          "rss": "https://rss.nytimes.com/services/xml/rss/nyt/Well.xml",
          "isReplacable": null,
          "keyword":true
        },
        "arts": {
          "rss": "https://rss.nytimes.com/services/xml/rss/nyt/Arts.xml",
          "isReplacable": null,
          "keyword":true
        },
        "artDesign": {
          "rss": "https://rss.nytimes.com/services/xml/rss/nyt/ArtandDesign.xml",
          "isReplacable": null,
          "keyword":true
        },
        "bookReview": {
          "rss": "https://rss.nytimes.com/services/xml/rss/nyt/Books/Review.xml",
          "isReplacable": null,
          "keyword":true
        },
        "dance": {
          "rss": "https://rss.nytimes.com/services/xml/rss/nyt/Dance.xml",
          "isReplacable": null,
          "keyword":true
        },
        "movies": {
          "rss": "https://rss.nytimes.com/services/xml/rss/nyt/Movies.xml",
          "isReplacable": null,
          "keyword":true
        },
        "music": {
          "rss": "https://rss.nytimes.com/services/xml/rss/nyt/Music.xml",
          "isReplacable": null,
          "keyword":true
        },
        "television": {
          "rss": "https://rss.nytimes.com/services/xml/rss/nyt/Television.xml",
          "isReplacable": null,
          "keyword":true
        },
        "theater": {
          "rss": "https://rss.nytimes.com/services/xml/rss/nyt/Theater.xml",
          "isReplacable": null,
          "keyword":true
        },
        "fashionStyle": {
          "rss": "https://rss.nytimes.com/services/xml/rss/nyt/FashionandStyle.xml",
          "isReplacable": null,
          "keyword":true
        },
        "diningWine": {
          "rss": "https://rss.nytimes.com/services/xml/rss/nyt/DiningandWine.xml",
          "isReplacable": null,
          "keyword":true
        },
        "love": {
          "rss": "https://rss.nytimes.com/services/xml/rss/nyt/Weddings.xml",
          "isReplacable": null,
          "keyword":true
        },
        "tMagazine": {
          "rss": "https://rss.nytimes.com/services/xml/rss/nyt/tmagazine.xml",
          "isReplacable": null,
          "keyword":true
        },
        "travel": {
          "rss": "https://rss.nytimes.com/services/xml/rss/nyt/Travel.xml",
          "isReplacable": null,
          "keyword":true
        },
        "jobs": {
          "rss": "https://rss.nytimes.com/services/xml/rss/nyt/Jobs.xml",
          "isReplacable": null,
          "keyword":true
        },
        "realEstate": {
          "rss": "https://rss.nytimes.com/services/xml/rss/nyt/RealEstate.xml",
          "isReplacable": null,
          "keyword":true
        },
        "autos": {
          "rss": "https://rss.nytimes.com/services/xml/rss/nyt/Automobiles.xml",
          "isReplacable": null,
          "keyword":true
        },
        "lensBlog": {
          "rss": "https://rss.nytimes.com/services/xml/rss/nyt/Lens.xml",
          "isReplacable": null,
          "keyword":true
        },
        "obituaries": {
          "rss": "https://rss.nytimes.com/services/xml/rss/nyt/Obituaries.xml",
          "isReplacable": null,
          "keyword":true
        },
        "timesWire": {
          "rss": "https://content.api.nytimes.com/svc/news/v3/all/recent.rss",
          "isReplacable": null,
          "keyword":true
        },
        "mostEmailed": {
          "rss": "https://rss.nytimes.com/services/xml/rss/nyt/MostEmailed.xml",
          "isReplacable": null,
          "keyword":true
        },
        "mostShared": {
          "rss": "https://rss.nytimes.com/services/xml/rss/nyt/MostShared.xml",
          "isReplacable": null,
          "keyword":true
        },
        "mostViewed": {
          "rss": "https://rss.nytimes.com/services/xml/rss/nyt/MostViewed.xml",
          "isReplacable": null,
          "keyword":true
        },
        "charlesMBlowOpinion": {
          "rss": "https://www.nytimes.com/svc/collections/v1/publish/column/charles-m-blow/rss.xml",
          "isReplacable": null,
          "keyword":true
        },
        "jamelleBouieOpinion": {
          "rss": "https://www.nytimes.com/svc/collections/v1/publish/column/jamelle-bouie/rss.xml",
          "isReplacable": null,
          "keyword":true
        },
        "davidBrooksOpinion": {
          "rss": "https://www.nytimes.com/svc/collections/v1/publish/column/david-brooks/rss.xml",
          "isReplacable": null,
          "keyword":true
        },
        "frankBruniOpinion": {
          "rss": "https://www.nytimes.com/svc/collections/v1/publish/column/frank-bruni/rss.xml",
          "isReplacable": null,
          "keyword":true
        },
        "gailCollinsOpinion": {
          "rss": "https://www.nytimes.com/svc/collections/v1/publish/column/gail-collins/rss.xml",
          "isReplacable": null,
          "keyword":true
        },
        "rossDouthatOpinion": {
          "rss": "https://www.nytimes.com/svc/collections/v1/publish/column/ross-douthat/rss.xml",
          "isReplacable": null,
          "keyword":true
        },
        "maureenDowdOpinion": {
          "rss": "https://www.nytimes.com/svc/collections/v1/publish/column/maureen-dowd/rss.xml",
          "isReplacable": null,
          "keyword":true
        },
        "thomasLFriedmanOpinion": {
          "rss": "https://www.nytimes.com/svc/collections/v1/publish/column/thomas-l-friedman/rss.xml",
          "isReplacable": null,
          "keyword":true
        },
        "michelleGoldbergOpinion": {
          "rss": "https://www.nytimes.com/svc/collections/v1/publish/column/michelle-goldberg/rss.xml",
          "isReplacable": null,
          "keyword":true
        },
        "ezraKleiOpinion": {
          "rss": "https://www.nytimes.com/svc/collections/v1/publish/column/ezra-klein/rss.xml",
          "isReplacable": null,
          "keyword":true
        },
        "nicholasDKristofOpinion": {
          "rss": "https://www.nytimes.com/svc/collections/v1/publish/column/nicholas-kristof/rss.xml",
          "isReplacable": null,
          "keyword":true
        },
        "paulKrugmanOpinion": {
          "rss": "https://www.nytimes.com/svc/collections/v1/publish/column/paul-krugman/rss.xml",
          "isReplacable": null,
          "keyword":true
        },
        "farhadManjooOpinion": {
          "rss": "https://www.nytimes.com/svc/collections/v1/publish/column/farhad-manjoo/rss.xml",
          "isReplacable": null,
          "keyword":true
        },
        "bretStephensOpinion": {
          "rss": "https://www.nytimes.com/svc/collections/v1/publish/column/bret-stephens/rss.xml",
          "isReplacable": null,
          "keyword":true
        },
        "sundayOpinion": {
          "rss": "https://rss.nytimes.com/services/xml/rss/nyt/sunday-review.xml",
          "isReplacable": null,
          "keyword":true
        },
        "filter":{
          "rss":"https://rss.nytimes.com/services/xml/rss/nyt/World.xml",
          "keyword": true, 
        }
        }
    },  
  ]
};
