import {fetchPostJson} from "./lib/index.js";

import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get('/api', async (req, res) => res.send(downloadPostVideo(req.query.url)))
app.get('/', async (req, res) => {
    res.send(`/api/url?=https://www.instagram.com/p/C4spo3jtctX/ to get json data. \r\n`)
})
const port = process.env.PORT || 8082
app.listen(port, () => console.log(`App start at port: ${port}`))


const downloadPostVideo = async (postUrl) => {
    const inputError = isValidFormInput(postUrl);
    if (inputError) {
        throw new Error(inputError);
    }

    const response = await fetchPostJson(postUrl);

    if (response.status === "error") {
        throw new Error(response.message);
    }

    if (!response.data) {
        throw new Error();
    }
};

const isValidFormInput = (postUrl) => {
    if (!postUrl) {
        return "Instagram URL was not provided";
    }

    if (!postUrl.includes("instagram.com/")) {
        return "Invalid URL does not contain Instagram domain";
    }

    if (!postUrl.startsWith("https://")) {
        return 'Invalid URL it should start with "https://www.instagram.com..."';
    }

    // const postRegex =
    //     /^https:\/\/(?:www\.)?instagram\.com\/p\/([a-zA-Z0-9_-]+)\/?/;
    //
    // const reelRegex =
    //     /^https:\/\/(?:www\.)?instagram\.com\/reels?\/([a-zA-Z0-9_-]+)\/?/;
    //
    // if (!postRegex.test(postUrl) && !reelRegex.test(postUrl)) {
    //     return "URL does not match Instagram post or reel";
    // }

    return "";
};
