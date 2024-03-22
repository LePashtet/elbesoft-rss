import axios from "axios";
import xml2js from "xml2js";

async function fetchRSSData(rssUrl) {
  const response = await axios.get(rssUrl);
  return response.data;
}

export async function getFilteredRSSData(rssUrl, newsTopic) {
  try {
    const today = new Date().toDateString();
    const newsTheme = newsTopic;

    const xmlData = await fetchRSSData(rssUrl);

    return new Promise((resolve, reject) => {
      xml2js.parseString(xmlData, (err, result) => {
        if (err) {
          console.error("Error parsing XML:", err);
          reject({ error: "Error parsing XML" });
        }

        const items = result.rss.channel[0].item;

        const filteredItems = items.filter((item) => {
          const pubDate = new Date(item.pubDate[0]).toDateString();
          const newsTitle = item.title[0].toLowerCase();
          const newsDescription = item.description[0].toLowerCase();

          return (
            pubDate === today &&
            (newsDescription.includes(newsTheme) ||
              newsTitle.includes(newsTheme))
          );
        });

        const simplifiedItems = filteredItems.map((item) => ({
          title: item.title[0],
          description: item.description[0],
          link: item.link[0],
          pubDate: new Date(item.pubDate[0]).toUTCString(),
          media: item["media:content"] ? item["media:content"][0].$.url : null,
        }));
        resolve(simplifiedItems);
      });
    });
  } catch (error) {
    console.error("Error while receiving RSS data:", error);
    throw { error: "Error while receiving RSS data" };
  }
}
