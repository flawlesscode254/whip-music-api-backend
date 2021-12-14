const express = require("express")

require("dotenv").config()

const app = express()

const port = process.env.PORT

app.get("/", (req, res) => {
    res.json({
        "message": "What is up yoh"
    })
})

app.listen(port, () => {
    console.log(`app started on http://localhost:${port}`)
})