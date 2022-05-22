import express from "express"
import fs from "fs"
import cors from "cors"
import rateLimit from "express-rate-limit"
const port = process.env.PORT || 5000
const app = express()
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
})
app.use(express.static("public"))
app.use(limiter)
app.use(cors())
// api key
const apikey = [

    "vietdeptrai",
    "yeuhl",
    "deptraivc",
    "11a5",
    "2005",
    "12a5",
    "banonehen03",
    "khuatanhviet",
    "vanh"
]
app.get("/", (req, res) => {
    res.send("https://github.com/banonehen03/image-random-api")
})
app.get("/kurumi", (req, res) => {
    const key = req.query.apikey
    const result = {}
    result.code = 200
    const imageList = fs.readdirSync("./public/kurumi")
    const randomImage = imageList[Math.floor(Math.random() * imageList.length)]
    result.url = `127.0.0.1:5000/kurumi/${randomImage}`
    result.author = "KAV , deptrai"
    result.source = "https://github.com/banonehen03/image-random-api"
    res.header("Content-type", "application/json; charset=utf-8")
    if (apikey.includes(key)) {
        res.send(JSON.stringify(result, null, 2))
        console.log(result)
    } else {
        const result = {}
        result.code = 403
        result.message = "Invalid API key, please contact admin to get key"
        res.send(JSON.stringify(result, null, 2))
    }
})
app.get("/rushia", (req, res) => {
    const key = req.query.apikey
    const result = {}
    result.code = 200
    const imageList = fs.readdirSync("./public/rushia")
    const randomImage = imageList[Math.floor(Math.random() * imageList.length)]
    result.url = `127.0.0.1:5000/rushia/${randomImage}`
    result.author = "KAV , deptrai"
    result.source = "https://github.com/banonehen03/image-random-api"
    res.header("Content-type", "application/json; charset=utf-8")
    if (apikey.includes(key)) {
        res.send(JSON.stringify(result, null, 2))
        console.log(result)
    } else {
        const result = {}
        result.code = 403
        result.message = "Invalid API key, please contact admin to get key"
        res.send(JSON.stringify(result, null, 2))
    }
})
app.listen(port, "0.0.0.0", function () {
    console.log(`Server listening on port ${port}\n`)
})
