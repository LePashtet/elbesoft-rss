const makeHttpRequest = require("../makeHttpRequest.js");
const querystring = require("querystring");

const getPostById = async (postId) => {
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

    const data = response.data.xdt_shortcode_media;


    if (!data) {
        throw new Error("This post does not exist");
    }
    return {
        img: data.display_url,
        text: data.edge_media_to_caption.edges[0].node.text,
        link: "www.instagram.com/p/" + postId
    };
};
const getPostsByUserName = async (username) => {
    const encodedData = `av=17841420683071427&__d=www&__user=0&__a=1&__req=2&__hs=19803.HYP%3Ainstagram_web_pkg.2.1..0.1&dpr=2&__ccg=UNKNOWN&__rev=1012213355&__s=e1sk4i%3Adxlgn7%3A3qd6s7&__hsi=7348853631076781007&__dyn=7xe5WwlEnwn8K2Wmm0NonwgU7S6EdF8aUco38w5ux609vCwjE1xoswaq0yE6u0nS4o5-1ywOwa90Fw4Hw9O7U2sK0EUjwGzEaE7622362W2K0zE5W0PU1bobodEGdwtU662O0z8c86-3u2WE15E6O1FwlE6PhA6bxy2u6V8aUuw&__csr=l1d7hIjlfFAPEj65cBG-K9JfvUVqHCJLGi9hUZevjx2-t6jgkAWBGfGuVqKUDG8yod9Klx23uEGF9U-2yh0hGCKu8yUxqxqfUfE6Kuq00kZu4IM3hw26O04ew0MlgjwTw2Zo0sKw27EhgkQ&__comet_req=7&fb_dtsg=NAcN8uiRbXLyPosyrDVR6N81aLOAiWpZVt9AEI9z8CEuZuDU083zMsg%3A17864970403026470%3A1662759386&jazoest=26207&lsd=gb8lUVJBgjpAckRwZTxcl4&__spin_r=1012213355&__spin_b=trunk&__spin_t=1711038321&fb_api_caller_class=RelayModern&fb_api_req_friendly_name=PolarisProfilePostsQuery&variables=%7B%22data%22%3A%7B%22count%22%3A12%2C%22include_relationship_info%22%3Atrue%2C%22latest_besties_reel_media%22%3Atrue%2C%22latest_reel_media%22%3Atrue%7D%2C%22username%22%3A%22${username}%22%2C%22__relay_internal__pv__PolarisShareMenurelayprovider%22%3Afalse%7D&server_timestamps=true&doc_id=25454041944186983`

    const response = await fetchFromGraphQL(encodedData);

    const data = response.data.xdt_api__v1__feed__user_timeline_graphql_connection.edges;

    if (!data || data.length === 0) {
        throw new Error("No posts found for this user");
    }
    const result = data.map((post) => {
        return {
            id: post.node.code || 0,
            time: post.node.caption?.created_at || 0,
            text: post.node.caption?.text || "",
        }
    });
    return result
};

const generateInstagram = async (link) => {
    const posts = await getPostsByUserName(link)
    let result = []
    for (const item of posts) {
        if (item.time && Date.now() - new Date(item.time * 1000) < 43200000) {
            let res = await getPostById(item.id)
            result.push({
                image: res.img,
                title: "Instagram Post",
                link: res.link,
                description: res.text
            })
        }
    }
    return result
}

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
        console.log("fd", e)
        Error(e);
        return null;
    }

    if (response.statusText === "error") return null;

    const contentType = response.headers["content-type"];

    if (contentType !== "text/javascript; charset=utf-8") return null;

    const responseJson = response.data;
    if (!responseJson.data) return responseJson.errors;

    return responseJson;
};
module.exports = {
    getPostById,
    getPostsByUserName,
    generateInstagram
}
