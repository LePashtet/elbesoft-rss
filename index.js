import { getPostById } from './inst-rss/index.js';

import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get('/api', async (req, res) => res.send(getPostById(req.query.url)))
app.get("/rss", async (req, res) => {
  res.send(getFilteredRSSData(req.query.url, "ukraine"));
});
app.get('/', async (req, res) => {
  res.send(`/api/url?=https://instagram.com/ to get json data. \r\n /xigappid to re-evaluate x-ig-app-id if the bootstrapped value is outdated in some cases.`)
})
const port = process.env.PORT || 8082
app.listen(port, () => console.log(`App start at port: ${port}`))
