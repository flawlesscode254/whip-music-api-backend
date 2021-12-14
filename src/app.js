const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const helmet = require("helmet")
const mongoose = require("mongoose")

const postRoute = require("../routes/PostRoute")
const commentRoute = require("../routes/CommentRoute")

mongoose.connect("mongodb://localhost/music-forum", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

require("dotenv").config()

const app = express()

app.use(express.json())
app.use(cors({
    origin: "*"
}))
app.use(morgan("common"))
app.use(helmet())

const port = process.env.PORT

app.get("/", (req, res) => {
    res.json({
        "message": "What is up yoh"
    })
})

app.use("/api/v1/posts", postRoute)
app.use("/api/v1/comments", commentRoute)

app.listen(port, () => {
    console.log(`app started on http://localhost:${port}`)
})