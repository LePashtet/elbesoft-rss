const puppeteer = require('puppeteer');
const logger = require("../../config/logger");

const getTweetsbyUsername = async (username) => {
    const myUrl = `https://nitter.poast.org/${username}`;
    let cursor = '';

    const browser = await puppeteer.launch({headless: true});
    const page = await browser.newPage();
    await page.setExtraHTTPHeaders({
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
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
    });


    try {
        const url = myUrl + cursor
        await page.goto(url, {waitUntil: "load"});
        await page.waitForSelector(".show-more")

        const tweets = await page.$$eval('.timeline-item', nodes => {
            return nodes.map(node => {
                let content = (node.querySelector('.tweet-content')?.innerText || '').replace(/\n/g, ' ').replace(/,/g, ';');
                const time = node.querySelector('.tweet-date a')?.innerText || '';
                const link = node.querySelector('.tweet-link')?.href || '';
                const image = node.querySelector('.still-image > img')?.src || ''
                return {title: "", description: content, time, link, image};
            });
        });
        return tweets.filter(tweet => {
            return /^(1[0-2]|0?[1-9])h$|^(5[0-9]|[1-4][0-9]|0?[1-9])m$/gm.test(tweet.time)
        });


    } catch (error) {
        console.log("ERROR", error)
        logger.error(error)
    }

    await browser.close();
};

module.exports = {getTweetsbyUsername}
