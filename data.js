const data = {
    "sources": [
        {
            "name": "instagram",
            "categories": {
                "profile": {
                    "username": "https://www.instagram.com/api/graphql",
                    "isReplaceable": ["username"]
                }
            },
            "type": "instagram"
        },
        {
            "name": "x",
            "categories": {
                "profile": {
                    "rss": "https://nitter.poast.org/<?username?>",
                    "isReplaceable": ["username"]
                }
            },
            "type": "x"
        },
        {
            "name": "medium",
            "categories": {
                "profile": {
                    "rss": "https://<?username?>.medium.com/feed",
                    "isReplaceable": ["username"]
                }
            },
            "type": "rss"
        },
        {
            "name": "googleDailyMix",
            "categories": {
                "news": {
                    "rss": "https://news.google.com/rss?hl=en-US&gl=US&ceid=US:en",
                    "isReplaceable": null,
                    "keyword": true,
                },
                "filter": {
                    "rss": "https://news.google.com/rss?hl=en-US&gl=US&ceid=US:en",
                    "keyword": true
                }
            },
            "type": "rss"
        },
        {
            "name": "techCrunch",
            "categories": {
                "startup": {
                    "rss": "https://techcrunch.com/category/startups/feed/",
                    "isReplaceable": null,
                    "keyword": true
                },
                "security": {
                    "rss": "https://techcrunch.com/category/startups/feed/",
                    "isReplaceable": null,
                    "keyword": true
                },
                "venture": {
                    "rss": "https://techcrunch.com/category/venture/feed/",
                    "isReplaceable": null,
                    "keyword": true
                },
                "artificialIntelligence": {
                    "rss": "https://techcrunch.com/category/artificial-intelligence/feed/",
                    "isReplaceable": null,
                    "keyword": true
                },
                "cryptocurrency": {
                    "rss": "https://techcrunch.com/category/cryptocurrency/feed/",
                    "isReplaceable": null,
                    "keyword": true
                },
                "apps": {
                    "rss": "https://techcrunch.com/category/apps/feed/",
                    "isReplaceable": null,
                    "keyword": true
                },
                "events": {
                    "rss": "https://techcrunch.com/events/feed/",
                    "isReplaceable": null,
                    "keyword": true
                },
                "startupBattlefield": {
                    "rss": "https://techcrunch.com/startup-battlefield/feed/",
                    "isReplaceable": null,
                    "keyword": true
                },
                "general": {
                    "rss": "https://techcrunch.com/feed/",
                    "isReplaceable": null,
                    "keyword": true
                },
                "fintech": {
                    "rss": "https://techcrunch.com/category/fintech/feed/",
                    "isReplaceable": null,
                    "keyword": true
                },
                "hardware": {
                    "rss": "https://techcrunch.com/category/hardware/feed/",
                    "isReplaceable": null,
                    "keyword": true
                },
                "transportation": {
                    "rss": "https://techcrunch.com/category/transportation/feed/",
                    "isReplaceable": null,
                    "keyword": true
                },
                "mediaEntertainment": {
                    "rss": "https://techcrunch.com/category/media-entertainment/feed/",
                    "isReplaceable": null,
                    "keyword": true
                },
                "sponsored": {
                    "rss": "https://techcrunch.com/sponsored/feed/",
                    "isReplaceable": null,
                    "keyword": true
                },
                "jobs": {
                    "rss": "https://www.crunchboard.com/jobs.rss",
                    "isReplaceable": null,
                    "keyword": true
                },
                "geo": {
                    "rss": "https://techcrunch.com/category/location/<?geo?>/feed/",
                    "isReplaceable": ["geoFullName"]
                },
                "filter": {
                    "rss": "https://techcrunch.com/feed/",
                    "keyword": true
                }
            },
            "type": "rss"
        },
        {
            "name": "theGuardian",
            "categories": {
                "europe": {
                    "rss": "https://www.theguardian.com/europe/rss",
                    "isReplaceable": null,
                    "keyword": true,
                },
                "word": {
                    "rss": "https://www.theguardian.com/world/rss",
                    "isReplaceable": null,
                    "keyword": true,
                },
                "uk": {
                    "rss": "https://www.theguardian.com/uk-news/rss",
                    "isReplaceable": null,
                    "keyword": true,
                },
                "climateCrisis": {
                    "rss": "https://www.theguardian.com/environment/climate-crisis/rss",
                    "isReplaceable": null,
                    "keyword": true,
                },
                "ukraine": {
                    "rss": "https://www.theguardian.com/world/ukraine/rss",
                    "isReplaceable": null,
                    "keyword": true,
                },
                "environment": {
                    "rss": "https://www.theguardian.com/uk/environment/rss",
                    "isReplaceable": null,
                    "keyword": true,
                },
                "science": {
                    "rss": "https://www.theguardian.com/science/rss",
                    "isReplaceable": null,
                    "keyword": true,
                },
                "globalDevelopment": {
                    "rss": "https://www.theguardian.com/global-development/rss",
                    "isReplaceable": null,
                    "keyword": true,
                },
                "technology": {
                    "rss": "https://www.theguardian.com/uk/technology/rss",
                    "isReplaceable": null,
                    "keyword": true,
                },
                "business": {
                    "rss": "https://www.theguardian.com/uk/business/rss",
                    "isReplaceable": null,
                    "keyword": true,
                },
                "obituaries": {
                    "rss": "https://www.theguardian.com/obituaries/rss",
                    "isReplaceable": null,
                    "keyword": true,
                },
                "comments": {
                    "rss": "https://www.theguardian.com/uk/commentisfree/rss",
                    "isReplaceable": null,
                    "keyword": true,
                },
                "theGuardianView": {
                    "rss": "https://www.theguardian.com/profile/editorial/rss",
                    "isReplaceable": null,
                    "keyword": true,
                },
                "columnists": {
                    "rss": "https://www.theguardian.com/index/contributors/rss",
                    "isReplaceable": null,
                    "keyword": true,
                },
                "cartoons": {
                    "rss": "https://www.theguardian.com/tone/cartoons/rss",
                    "isReplaceable": null,
                    "keyword": true,
                },
                "opinionCideos": {
                    "rss": "https://www.theguardian.com/type/video+tone/comment/rss",
                    "isReplaceable": null,
                    "keyword": true,
                },
                "letters": {
                    "rss": "https://www.theguardian.com/tone/letters/rss",
                    "isReplaceable": null,
                    "keyword": true,
                },
                "mixSports": {
                    "rss": "https://www.theguardian.com/uk/sport/rss",
                    "isReplaceable": null,
                    "keyword": true,
                },
                "football": {
                    "rss": "https://www.theguardian.com/football/rss",
                    "isReplaceable": null,
                    "keyword": true,
                },
                "cricket": {
                    "rss": "https://www.theguardian.com/sport/cricket/rss",
                    "isReplaceable": null,
                    "keyword": true,
                },
                "rugbyUnion": {
                    "rss": "https://www.theguardian.com/sport/rugby-union/rss",
                    "isReplaceable": null,
                    "keyword": true,
                },
                "tennis": {
                    "rss": "https://www.theguardian.com/sport/tennis/rss",
                    "isReplaceable": null,
                    "keyword": true,
                },
                "cycling": {
                    "rss": "https://www.theguardian.com/sport/cycling/rss",
                    "isReplaceable": null,
                    "keyword": true,
                },
                "formulaOne": {
                    "rss": "https://www.theguardian.com/sport/formulaone/rss",
                    "isReplaceable": null,
                    "keyword": true,
                },
                "golf": {
                    "rss": "https://www.theguardian.com/sport/golf/rss",
                    "isReplaceable": null,
                    "keyword": true,
                },
                "usSports": {
                    "rss": "https://www.theguardian.com/sport/us-sport/rss",
                    "isReplaceable": null,
                    "keyword": true,
                },
                "mixCultures": {
                    "rss": "https://www.theguardian.com/uk/culture/rss",
                    "isReplaceable": null,
                    "keyword": true,
                },
                "books": {
                    "rss": "https://www.theguardian.com/books/rss",
                    "isReplaceable": null,
                    "keyword": true,
                },
                "music": {
                    "rss": "https://www.theguardian.com/music/rss",
                    "isReplaceable": null,
                    "keyword": true,
                },
                "tvRadio": {
                    "rss": "https://www.theguardian.com/uk/tv-and-radio/rss",
                    "isReplaceable": null,
                    "keyword": true,
                },
                "artDesign": {
                    "rss": "https://www.theguardian.com/artanddesign/rss",
                    "isReplaceable": null,
                    "keyword": true,
                },
                "film": {
                    "rss": "https://www.theguardian.com/uk/film",
                    "isReplaceable": null,
                    "keyword": true,
                },
                "games": {
                    "rss": "https://www.theguardian.com/games/rss",
                    "isReplaceable": null,
                    "keyword": true,
                },
                "classicalMusicOpera": {
                    "rss": "https://www.theguardian.com/music/classical-music-and-opera/rss",
                    "isReplaceable": null,
                    "keyword": true,
                },
                "stage": {
                    "rss": "https://www.theguardian.com/stage/rss",
                    "isReplaceable": null,
                    "keyword": true,
                },
                "mixLifestyle": {
                    "rss": "https://www.theguardian.com/uk/lifeandstyle/rss",
                    "isReplaceable": null,
                    "keyword": true,
                },
                "fashion": {
                    "rss": "https://www.theguardian.com/fashion/rss",
                    "isReplaceable": null,
                    "keyword": true,
                },
                "food": {
                    "rss": "https://www.theguardian.com/food/rss",
                    "isReplaceable": null,
                    "keyword": true,
                },
                "recipes": {
                    "rss": "https://www.theguardian.com/tone/recipes/rss",
                    "isReplaceable": null,
                    "keyword": true,
                },
                "loveSex": {
                    "rss": "https://www.theguardian.com/lifeandstyle/love-and-sex/rss",
                    "isReplaceable": null,
                    "keyword": true,
                },
                "healthFitness": {
                    "rss": "https://www.theguardian.com/lifeandstyle/health-and-wellbeing/rss",
                    "isReplaceable": null,
                    "keyword": true,
                },
                "homesGarden": {
                    "rss": "https://www.theguardian.com/lifeandstyle/home-and-garden/rss",
                    "isReplaceable": null,
                    "keyword": true,
                },
                "women": {
                    "rss": "https://www.theguardian.com/lifeandstyle/women/rss",
                    "isReplaceable": null,
                    "keyword": true,
                },
                "men": {
                    "rss": "https://www.theguardian.com/lifeandstyle/men/rss",
                    "isReplaceable": null,
                    "keyword": true,
                },
                "family": {
                    "rss": "https://www.theguardian.com/lifeandstyle/family/rss",
                    "isReplaceable": null,
                    "keyword": true,
                },
                "travel": {
                    "rss": "https://www.theguardian.com/uk/travel/rss",
                    "isReplaceable": null,
                    "keyword": true,
                },
                "money": {
                    "rss": "https://www.theguardian.com/uk/money/rss",
                    "isReplaceable": null,
                    "keyword": true,
                },
                "jobs": {
                    "rss": "https://jobs.theguardian.com/jobsrss/",
                    "isReplaceable": null,
                    "keyword": true,
                },
                "geo": {
                    "rss": "https://www.theguardian.com/category/location/<?geo?>/feed/",
                    "isReplaceable": ["geoFullName"]
                },
                "filter": {
                    "rss": "https://www.theguardian.com/europe/rss",
                    "keyword": true
                }
            },
            "type": "rss"
        },
        {
            "name": "europeanParliament",
            "categories": {
                "priorities": {
                    "rss": "https://www.europarl.europa.eu/rss/doc/top-stories/en.xml",
                    "isReplaceable": null,
                    "keyword": true,
                },
                "weeklyAgendas": {
                    "rss": "https://www.europarl.europa.eu/rss/doc/agendas-news/en.xml",
                    "isReplaceable": null,
                    "keyword": true,
                },
                "newsletters": {
                    "rss": "https://www.europarl.europa.eu/rss/doc/newsletters/en.xml",
                    "isReplaceable": null,
                    "keyword": true,
                },
                "allPressReleases": {
                    "rss": "https://www.europarl.europa.eu/rss/doc/press-releases/en.xml",
                    "isReplaceable": null,
                    "keyword": true,
                },
                "plenaryPressReleases": {
                    "rss": "https://www.europarl.europa.eu/rss/doc/press-releases-plenary/en.xml",
                    "isReplaceable": null,
                    "keyword": true,
                },
                "committeesPressReleases": {
                    "rss": "https://www.europarl.europa.eu/rss/doc/press-releases-committees/en.xml",
                    "isReplaceable": null,
                    "keyword": true,
                },
                "recordingsOfPressConferencesAndOtherEvents": {
                    "rss": "https://www.europarl.europa.eu/rss/video/other-events/en.xml",
                    "isReplaceable": null,
                    "keyword": true,
                },
                "parliamentInFocus": {
                    "rss": "https://www.europarl.europa.eu/rss/video/europarltv/en.xml",
                    "isReplaceable": null,
                    "keyword": true,
                },
                "theEUAndItsInstitutions": {
                    "rss": "https://www.europarl.europa.eu/rss/topic/901/en.xml",
                    "isReplaceable": null,
                    "keyword": true,
                },
                "justiceAndCitizenship": {
                    "rss": "https://www.europarl.europa.eu/rss/topic/902/en.xml",
                    "isReplaceable": null,
                    "keyword": true,
                },
                "externalRelations": {
                    "rss": "https://www.europarl.europa.eu/rss/topic/903/en.xml",
                    "isReplaceable": null,
                    "keyword": true,
                },
                "agricultureAndFisheries": {
                    "rss": "https://www.europarl.europa.eu/rss/topic/904/en.xml",
                    "isReplaceable": null,
                    "keyword": true,
                },
                "budget": {
                    "rss": "https://www.europarl.europa.eu/rss/topic/905/en.xml",
                    "isReplaceable": null,
                    "keyword": true,
                },
                "cultureAndEducation": {
                    "rss": "https://www.europarl.europa.eu/rss/topic/906/en.xml",
                    "isReplaceable": null,
                    "keyword": true,
                },
                "economicAndMonetaryAffairs": {
                    "rss": "https://www.europarl.europa.eu/rss/topic/907/en.xml",
                    "isReplaceable": null,
                    "keyword": true,
                },
                "employmentAndSocialAffairs": {
                    "rss": "https://www.europarl.europa.eu/rss/topic/908/en.xml",
                    "isReplaceable": null,
                    "keyword": true,
                },
                "internalMarketAndIndustry": {
                    "rss": "https://www.europarl.europa.eu/rss/topic/909/en.xml",
                    "isReplaceable": null,
                    "keyword": true,
                },
                "regionsAndTransport": {
                    "rss": "https://www.europarl.europa.eu/rss/topic/910/en.xml",
                    "isReplaceable": null,
                    "keyword": true,
                },
                "healthAndEnvironment": {
                    "rss": "https://www.europarl.europa.eu/rss/topic/911/en.xml",
                    "isReplaceable": null,
                    "keyword": true,
                },
                "filter": {
                    "rss": "https://www.europarl.europa.eu/rss/doc/top-stories/en.xml",
                    "keyword": true,
                }
            },
            "type": "rss"

        },
        {
            "name": "nyTimes",
            "categories": {
                "world": {
                    "rss": "https://rss.nytimes.com/services/xml/rss/nyt/World.xml",
                    "isReplaceable": null,
                    "keyword": true
                },
                "africa": {
                    "rss": "https://rss.nytimes.com/services/xml/rss/nyt/Africa.xml",
                    "isReplaceable": null,
                    "keyword": true
                },
                "americas": {
                    "rss": "https://rss.nytimes.com/services/xml/rss/nyt/Americas.xml",
                    "isReplaceable": null,
                    "keyword": true
                },
                "asiaPacific": {
                    "rss": "https://rss.nytimes.com/services/xml/rss/nyt/AsiaPacific.xml",
                    "isReplaceable": null,
                    "keyword": true
                },
                "europe": {
                    "rss": "https://rss.nytimes.com/services/xml/rss/nyt/Europe.xml",
                    "isReplaceable": null,
                    "keyword": true
                },
                "middleEast": {
                    "rss": "https://rss.nytimes.com/services/xml/rss/nyt/MiddleEast.xml",
                    "isReplaceable": null,
                    "keyword": true
                },
                "us": {
                    "rss": "https://rss.nytimes.com/services/xml/rss/nyt/US.xml",
                    "isReplaceable": null,
                    "keyword": true
                },
                "education": {
                    "rss": "https://rss.nytimes.com/services/xml/rss/nyt/Education.xml",
                    "isReplaceable": null,
                    "keyword": true
                },
                "politics": {
                    "rss": "https://rss.nytimes.com/services/xml/rss/nyt/Politics.xml",
                    "isReplaceable": null,
                    "keyword": true
                },
                "theUpshot": {
                    "rss": "https://rss.nytimes.com/services/xml/rss/nyt/Upshot.xml",
                    "isReplaceable": null,
                    "keyword": true
                },
                "nyRegion": {
                    "rss": "https://rss.nytimes.com/services/xml/rss/nyt/NYRegion.xml",
                    "isReplaceable": null,
                    "keyword": true
                },
                "business": {
                    "rss": "https://rss.nytimes.com/services/xml/rss/nyt/Business.xml",
                    "isReplaceable": null,
                    "keyword": true
                },
                "energyEnvironment": {
                    "rss": "https://rss.nytimes.com/services/xml/rss/nyt/EnergyEnvironment.xml",
                    "isReplaceable": null,
                    "keyword": true
                },
                "smallBusiness": {
                    "rss": "https://rss.nytimes.com/services/xml/rss/nyt/SmallBusiness.xml",
                    "isReplaceable": null,
                    "keyword": true
                },
                "economy": {
                    "rss": "https://rss.nytimes.com/services/xml/rss/nyt/Economy.xml",
                    "isReplaceable": null,
                    "keyword": true
                },
                "dealBook": {
                    "rss": "https://rss.nytimes.com/services/xml/rss/nyt/Dealbook.xml",
                    "isReplaceable": null,
                    "keyword": true
                },
                "mediaAdvertising": {
                    "rss": "https://rss.nytimes.com/services/xml/rss/nyt/MediaandAdvertising.xml",
                    "isReplaceable": null,
                    "keyword": true
                },
                "yourMoney": {
                    "rss": "https://rss.nytimes.com/services/xml/rss/nyt/YourMoney.xml",
                    "isReplaceable": null,
                    "keyword": true
                },
                "technology": {
                    "rss": "https://rss.nytimes.com/services/xml/rss/nyt/Technology.xml",
                    "isReplaceable": null,
                    "keyword": true
                },
                "personalTech": {
                    "rss": "https://rss.nytimes.com/services/xml/rss/nyt/PersonalTech.xml",
                    "isReplaceable": null,
                    "keyword": true
                },
                "sports": {
                    "rss": "https://rss.nytimes.com/services/xml/rss/nyt/Sports.xml",
                    "isReplaceable": null,
                    "keyword": true
                },
                "baseball": {
                    "rss": "https://rss.nytimes.com/services/xml/rss/nyt/Baseball.xml",
                    "isReplaceable": null,
                    "keyword": true
                },
                "collegeBasketball": {
                    "rss": "https://rss.nytimes.com/services/xml/rss/nyt/CollegeBasketball.xml",
                    "isReplaceable": null,
                    "keyword": true
                },
                "collegeFootball": {
                    "rss": "https://rss.nytimes.com/services/xml/rss/nyt/CollegeFootball.xml",
                    "isReplaceable": null,
                    "keyword": true
                },
                "golf": {
                    "rss": "https://rss.nytimes.com/services/xml/rss/nyt/Golf.xml",
                    "isReplaceable": null,
                    "keyword": true
                },
                "hockey": {
                    "rss": "https://rss.nytimes.com/services/xml/rss/nyt/Hockey.xml",
                    "isReplaceable": null,
                    "keyword": true
                },
                "proBasketball": {
                    "rss": "https://rss.nytimes.com/services/xml/rss/nyt/ProBasketball.xml",
                    "isReplaceable": null,
                    "keyword": true
                },
                "proFootball": {
                    "rss": "https://rss.nytimes.com/services/xml/rss/nyt/ProFootball.xml",
                    "isReplaceable": null,
                    "keyword": true
                },
                "soccer": {
                    "rss": "https://rss.nytimes.com/services/xml/rss/nyt/Soccer.xml",
                    "isReplaceable": null,
                    "keyword": true
                },
                "tennis": {
                    "rss": "https://rss.nytimes.com/services/xml/rss/nyt/Tennis.xml",
                    "isReplaceable": null,
                    "keyword": true
                },
                "science": {
                    "rss": "https://rss.nytimes.com/services/xml/rss/nyt/Science.xml",
                    "isReplaceable": null,
                    "keyword": true
                },
                "environment": {
                    "rss": "https://rss.nytimes.com/services/xml/rss/nyt/Climate.xml",
                    "isReplaceable": null,
                    "keyword": true
                },
                "spaceCosmos": {
                    "rss": "https://rss.nytimes.com/services/xml/rss/nyt/Space.xml",
                    "isReplaceable": null,
                    "keyword": true
                },
                "health": {
                    "rss": "https://rss.nytimes.com/services/xml/rss/nyt/Health.xml",
                    "isReplaceable": null,
                    "keyword": true
                },
                "wellBlog": {
                    "rss": "https://rss.nytimes.com/services/xml/rss/nyt/Well.xml",
                    "isReplaceable": null,
                    "keyword": true
                },
                "arts": {
                    "rss": "https://rss.nytimes.com/services/xml/rss/nyt/Arts.xml",
                    "isReplaceable": null,
                    "keyword": true
                },
                "artDesign": {
                    "rss": "https://rss.nytimes.com/services/xml/rss/nyt/ArtandDesign.xml",
                    "isReplaceable": null,
                    "keyword": true
                },
                "bookReview": {
                    "rss": "https://rss.nytimes.com/services/xml/rss/nyt/Books/Review.xml",
                    "isReplaceable": null,
                    "keyword": true
                },
                "dance": {
                    "rss": "https://rss.nytimes.com/services/xml/rss/nyt/Dance.xml",
                    "isReplaceable": null,
                    "keyword": true
                },
                "movies": {
                    "rss": "https://rss.nytimes.com/services/xml/rss/nyt/Movies.xml",
                    "isReplaceable": null,
                    "keyword": true
                },
                "music": {
                    "rss": "https://rss.nytimes.com/services/xml/rss/nyt/Music.xml",
                    "isReplaceable": null,
                    "keyword": true
                },
                "television": {
                    "rss": "https://rss.nytimes.com/services/xml/rss/nyt/Television.xml",
                    "isReplaceable": null,
                    "keyword": true
                },
                "theater": {
                    "rss": "https://rss.nytimes.com/services/xml/rss/nyt/Theater.xml",
                    "isReplaceable": null,
                    "keyword": true
                },
                "fashionStyle": {
                    "rss": "https://rss.nytimes.com/services/xml/rss/nyt/FashionandStyle.xml",
                    "isReplaceable": null,
                    "keyword": true
                },
                "diningWine": {
                    "rss": "https://rss.nytimes.com/services/xml/rss/nyt/DiningandWine.xml",
                    "isReplaceable": null,
                    "keyword": true
                },
                "love": {
                    "rss": "https://rss.nytimes.com/services/xml/rss/nyt/Weddings.xml",
                    "isReplaceable": null,
                    "keyword": true
                },
                "tMagazine": {
                    "rss": "https://rss.nytimes.com/services/xml/rss/nyt/tmagazine.xml",
                    "isReplaceable": null,
                    "keyword": true
                },
                "travel": {
                    "rss": "https://rss.nytimes.com/services/xml/rss/nyt/Travel.xml",
                    "isReplaceable": null,
                    "keyword": true
                },
                "jobs": {
                    "rss": "https://rss.nytimes.com/services/xml/rss/nyt/Jobs.xml",
                    "isReplaceable": null,
                    "keyword": true
                },
                "realEstate": {
                    "rss": "https://rss.nytimes.com/services/xml/rss/nyt/RealEstate.xml",
                    "isReplaceable": null,
                    "keyword": true
                },
                "autos": {
                    "rss": "https://rss.nytimes.com/services/xml/rss/nyt/Automobiles.xml",
                    "isReplaceable": null,
                    "keyword": true
                },
                "lensBlog": {
                    "rss": "https://rss.nytimes.com/services/xml/rss/nyt/Lens.xml",
                    "isReplaceable": null,
                    "keyword": true
                },
                "obituaries": {
                    "rss": "https://rss.nytimes.com/services/xml/rss/nyt/Obituaries.xml",
                    "isReplaceable": null,
                    "keyword": true
                },
                "timesWire": {
                    "rss": "https://content.api.nytimes.com/svc/news/v3/all/recent.rss",
                    "isReplaceable": null,
                    "keyword": true
                },
                "mostEmailed": {
                    "rss": "https://rss.nytimes.com/services/xml/rss/nyt/MostEmailed.xml",
                    "isReplaceable": null,
                    "keyword": true
                },
                "mostShared": {
                    "rss": "https://rss.nytimes.com/services/xml/rss/nyt/MostShared.xml",
                    "isReplaceable": null,
                    "keyword": true
                },
                "mostViewed": {
                    "rss": "https://rss.nytimes.com/services/xml/rss/nyt/MostViewed.xml",
                    "isReplaceable": null,
                    "keyword": true
                },
                "charlesMBlowOpinion": {
                    "rss": "https://www.nytimes.com/svc/collections/v1/publish/column/charles-m-blow/rss.xml",
                    "isReplaceable": null,
                    "keyword": true
                },
                "jamelleBouieOpinion": {
                    "rss": "https://www.nytimes.com/svc/collections/v1/publish/column/jamelle-bouie/rss.xml",
                    "isReplaceable": null,
                    "keyword": true
                },
                "davidBrooksOpinion": {
                    "rss": "https://www.nytimes.com/svc/collections/v1/publish/column/david-brooks/rss.xml",
                    "isReplaceable": null,
                    "keyword": true
                },
                "frankBruniOpinion": {
                    "rss": "https://www.nytimes.com/svc/collections/v1/publish/column/frank-bruni/rss.xml",
                    "isReplaceable": null,
                    "keyword": true
                },
                "gailCollinsOpinion": {
                    "rss": "https://www.nytimes.com/svc/collections/v1/publish/column/gail-collins/rss.xml",
                    "isReplaceable": null,
                    "keyword": true
                },
                "rossDouthatOpinion": {
                    "rss": "https://www.nytimes.com/svc/collections/v1/publish/column/ross-douthat/rss.xml",
                    "isReplaceable": null,
                    "keyword": true
                },
                "maureenDowdOpinion": {
                    "rss": "https://www.nytimes.com/svc/collections/v1/publish/column/maureen-dowd/rss.xml",
                    "isReplaceable": null,
                    "keyword": true
                },
                "thomasLFriedmanOpinion": {
                    "rss": "https://www.nytimes.com/svc/collections/v1/publish/column/thomas-l-friedman/rss.xml",
                    "isReplaceable": null,
                    "keyword": true
                },
                "michelleGoldbergOpinion": {
                    "rss": "https://www.nytimes.com/svc/collections/v1/publish/column/michelle-goldberg/rss.xml",
                    "isReplaceable": null,
                    "keyword": true
                },
                "ezraKleiOpinion": {
                    "rss": "https://www.nytimes.com/svc/collections/v1/publish/column/ezra-klein/rss.xml",
                    "isReplaceable": null,
                    "keyword": true
                },
                "nicholasDKristofOpinion": {
                    "rss": "https://www.nytimes.com/svc/collections/v1/publish/column/nicholas-kristof/rss.xml",
                    "isReplaceable": null,
                    "keyword": true
                },
                "paulKrugmanOpinion": {
                    "rss": "https://www.nytimes.com/svc/collections/v1/publish/column/paul-krugman/rss.xml",
                    "isReplaceable": null,
                    "keyword": true
                },
                "farhadManjooOpinion": {
                    "rss": "https://www.nytimes.com/svc/collections/v1/publish/column/farhad-manjoo/rss.xml",
                    "isReplaceable": null,
                    "keyword": true
                },
                "bretStephensOpinion": {
                    "rss": "https://www.nytimes.com/svc/collections/v1/publish/column/bret-stephens/rss.xml",
                    "isReplaceable": null,
                    "keyword": true
                },
                "sundayOpinion": {
                    "rss": "https://rss.nytimes.com/services/xml/rss/nyt/sunday-review.xml",
                    "isReplaceable": null,
                    "keyword": true
                },
                "filter": {
                    "rss": "https://rss.nytimes.com/services/xml/rss/nyt/World.xml",
                    "keyword": true,
                }
            },
            "type": "rss"
        },
    ]
};
