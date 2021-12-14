const {Router} = require("express")
const commentModel = require("../models/CommentModel")

const router = Router()

// route for fecthing all the data from the database
router.get("/", async (req, res) => {
    const data = await commentModel.find({}).sort({
        createdAt: - 1
    })
    await res.json(data)
})

// route for fetching specific data from the database
router.get("/:id", async (req, res) => {
    const {id} = req.params
    const check = await commentModel.find({
        _id: id
    })
    if (check) {
        await res.json(check)
    }
    else {
        res.json("The is no data with that kind of id")
    }
})

// route for updating specific data in the database
router.put("/:id", async (req, res) => {
    const {id} = req.params
    const check = await commentModel.find({
        _id: id
    })
    if (check) {
        await commentModel.updateOne({
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

// route for adding data to the database
router.post("/", async (req, res) => {
    const data = await new commentModel(req.body)
    const saved = await data.save()
    await res.json(saved)
})

module.exports = router