const {Router} = require("express")
const postModel = require("../models/PostModel")

const router = Router()

// Fetch all the data from the database
router.get("/", async (req, res) => {
    const data = await postModel.find({}).sort({
        createdAt: - 1
    })
    await res.json(data)
})

// Fetch specific data
router.get("/:id", async (req, res) => {
    const {id} = req.params
    const check = await postModel.find({
        _id: id
    })
    if (check) {
        await res.json(check)
    }
    else {
        res.json("There is no data with that kind of id")
    }
})

// Update spefic data
router.put("/:id", async (req, res) => {
    const {id} = req.params
    const check = await postModel.find({
        _id: id
    })
    if (check) {
        await postModel.updateOne({
            _id: id
        }, {
            $set: req.body
        })
        await res.json(req.body)
    }
    else {
        res.json("There is no data with that kind of id")
    }
})

// Add data to the database
router.post("/", async (req, res) => {
    const data = await new postModel(req.body)
    const saved = await data.save()
    await res.json(saved)
})

module.exports = router