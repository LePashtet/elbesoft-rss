import puppeteer from 'puppeteer';

(async () => {
    const myUrl = 'https://nitter.poast.org/Ukraine';
    let checkpoint = true;
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
        "User-Agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
    });


    while (checkpoint === true) {
        try {
            const url = myUrl + cursor
            await page.goto(url, {waitUntil: "load"});
            await page.waitForSelector(".show-more")
            await page.evaluate(() => {
                const showMoreDivs = Array.from(document.querySelectorAll('div.show-more'));
                let profileHeader;
                if (showMoreDivs.length >= 2) {
                    profileHeader = showMoreDivs[1];
                } else {
                    profileHeader = document.querySelector('div.show-more');
                }
                cursor = profileHeader.querySelector('a').getAttribute('href');
            });

            let allTweets = [];
            const tweets = await page.$$eval('.timeline-item', nodes => {
                return nodes.map(node => {
                    let content = (node.querySelector('.tweet-content')?.innerText || '').replace(/\n/g, ' ').replace(/,/g, ';');
                    const time = node.querySelector('.tweet-date a')?.innerText || '';
                    const link = node.querySelector('.tweet-link')?.href || '';
                    return {content, time, link};
                });
            });

            allTweets = allTweets.concat(tweets.map(tweet => ({url, ...tweet})));

        } catch (error) {
            console.log(error)
            checkpoint = false;
        }
    }

    await browser.close();
})();
