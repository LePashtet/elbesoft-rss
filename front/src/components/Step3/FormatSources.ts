import { NEWS_RSS } from "../../util/NewsTopic";

export const FormatSources = (sources: { type: string; param: string }[]) => {
  return sources.map((source) => {
    switch (source.type) {
      case "instagram":
        return {
          link: `https://www.instagram.com/${source.param}`,
          keywords: [source.param],
          type: source.type,
        };
      case "x":
        return {
          link: `https://nitter.poast.org/${source.param}`,
          keywords: [source.param],
          type: source.type,
        };
      case "medium":
        return {
          link: `https://${source.param}.medium.com/feed`,
          keywords: [source.param],
          type: source.type,
        };
      case "googleDailyMix":
        return {
          link: NEWS_RSS[source.type].news.rss,
          keywords: [source.param],
          type: "rss",
        };
      default:
        const type = source.type;
        const theme = source.param;
        return {
          link: NEWS_RSS[type][theme].rss,
          keywords: [source.param],
          type: "rss",
        };
    }
  });
};
