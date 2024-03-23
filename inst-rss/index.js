import { makeHttpRequest } from "../utils/index.js";
import querystring from "querystring";

export const getPostById = async (postId) => {
  const encodedData = querystring.stringify({
    av: "17841420683071427",
    __d: "www",
    __user: "0",
    __a: "1",
    __req: "2",
    __hs: "19803.HYP:instagram_web_pkg.2.1..0.1",
    dpr: "2",
    __ccg: "UNKNOWN",
    __rev: "1012213355",
    __s: "xf44ne:zhh75g:xr51e7",
    __hsi: "7282217488877343271",
    __dyn:
      "7xeUmwlEnwn8K2WnFw9-2i5U4e0yoW3q32360CEbo1nEhw2nVE4W0om78b87C0yE5ufz81s8hwGwQwoEcE7O2l0Fwqo31w9a9x-0z8-U2zxe2GewGwso88cobEaU2eUlwhEe87q7-0iK2S3qazo7u1xwIw8O321LwTwKG1pg661pwr86C1mwraCg",
    __csr:
      "gZ3yFmJkillQvV6ybimnG8AmhqujGbLADgjyEOWz49z9XDlAXBJpC7Wy-vQTSvUGWGh5u8KibG44dBiigrgjDxGjU0150Q0848azk48N09C02IR0go4SaR70r8owyg9pU0V23hwiA0LQczA48S0f-x-27o05NG0fkw",
    __comet_req: "7",
    lsd: "AVqbxe3J_YA",
    jazoest: "2957",
    __spin_r: "1008824440",
    __spin_b: "trunk",
    __spin_t: "1695523385",
    fb_api_caller_class: "RelayModern",
    fb_api_req_friendly_name: "PolarisPostActionLoadPostQueryQuery",
    variables: JSON.stringify({
      shortcode: postId,
      fetch_comment_count: "null",
      fetch_related_profile_media_count: "null",
      parent_comment_count: "null",
      child_comment_count: "null",
      fetch_like_count: "null",
      fetch_tagged_user_count: "null",
      fetch_preview_comment_count: "null",
      has_threaded_comments: "false",
      hoisted_comment_id: "null",
      hoisted_reply_id: "null",
    }),
    server_timestamps: "true",
    doc_id: "10015901848480474",
  });

  const response = await fetchFromGraphQL(encodedData);

  const data = response.data.data.xdt_shortcode_media;

  if (!data) {
    throw new Error("This post does not exist");
  }
  console.log(data);

  return {
    data: {
      img: data.display_url,
      text: data.edge_media_to_caption.edges[0].node.text,
    },
  };
};
export const getPostsByUserName = async (username) => {
  const encodedData = querystring.stringify({
    av: "17841420683071427",
    __d: "www",
    __user: "0",
    __a: "1",
    __req: "2",
    __hs: "19803.HYP:instagram_web_pkg.2.1..0.1",
    dpr: "2",
    __ccg: "UNKNOWN",
    __rev: "1012213355",
    __s: "xf44ne:zhh75g:xr51e7",
    __hsi: "7282217488877343271",
    __dyn:
      "7xeUmwlEnwn8K2WnFw9-2i5U4e0yoW3q32360CEbo1nEhw2nVE4W0om78b87C0yE5ufz81s8hwGwQwoEcE7O2l0Fwqo31w9a9x-0z8-U2zxe2GewGwso88cobEaU2eUlwhEe87q7-0iK2S3qazo7u1xwIw8O321LwTwKG1pg661pwr86C1mwraCg",
    __csr:
      "gZ3yFmJkillQvV6ybimnG8AmhqujGbLADgjyEOWz49z9XDlAXBJpC7Wy-vQTSvUGWGh5u8KibG44dBiigrgjDxGjU0150Q0848azk48N09C02IR0go4SaR70r8owyg9pU0V23hwiA0LQczA48S0f-x-27o05NG0fkw",
    __comet_req: "7",
    lsd: "AVqbxe3J_YA",
    jazoest: "2957",
    __spin_r: "1008824440",
    __spin_b: "trunk",
    __spin_t: "1695523385",
    fb_api_caller_class: "RelayModern",
    fb_api_req_friendly_name: "PolarisPostActionLoadPostQueryQuery",
    variables: JSON.stringify({
      data: {
        count: 12,
        include_relationship_info: true,
        latest_besties_reel_media: true,
        latest_reel_media: true,
      },
      username: username,
      __relay_internal__pv__PolarisShareMenurelayprovider: false,
    }),
    server_timestamps: "true",
    doc_id: "10015901848480474",
  });

  const response = await fetchFromGraphQL(encodedData);

  const data = response.data.data.xdt_shortcode_media;

  if (!data || data.length === 0) {
    throw new Error("No posts found for this user");
  }

  const posts = data.map((post) => ({
    img: post.display_url,
    text: post.edge_media_to_caption.edges[0].node.text,
  }));

  return posts;
};

const fetchFromGraphQL = async (encodedData, timeout = 0) => {
  if (!encodedData) return null;

  const API_URL = "https://www.instagram.com/api/graphql";
  const headers = {
    Accept: "*/*",
    "Accept-Language": "en-US,en;q=0.5",
    "Content-Type": "application/x-www-form-urlencoded",
    "X-FB-Friendly-Name": "PolarisPostActionLoadPostQueryQuery",
    "X-CSRFToken": "RVDUooU5MYsBbS1CNN3CzVAuEP8oHB52",
    "X-IG-App-ID": "1217981644879628",
    "X-FB-LSD": "AVqbxe3J_YA",
    "X-ASBD-ID": "129477",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-origin",
    "User-Agent":
      "Mozilla/5.0 (Linux; Android 11; SAMSUNG SM-G973U) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/14.2 Chrome/87.0.4280.141 Mobile Safari/537.36",
  };

  let response;
  try {
    response = await makeHttpRequest({
      url: API_URL,
      method: "POST",
      headers,
      data: encodedData,
      timeout,
    });
    if (response.statusText === "error") {
      return null;
    }
  } catch (e) {
    Error(e);
    return null;
  }

  if (response.statusText === "error") return null;

  const contentType = response.headers["content-type"];

  if (contentType !== "text/javascript; charset=utf-8") return null;

  const responseJson = response.data;
  if (!responseJson.data) return null;

  return responseJson;
};
