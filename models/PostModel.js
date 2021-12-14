const mongoose = require("mongoose")

const {Schema} = mongoose

// Schema for defining the data to be stored in the posts database
const postSchema = new Schema({
    message: {
        type: String
    },
    profilePic: {
        type: String
    },
    username: {
        type: String
    },
    image: {
        type: String
    },
    totalShares: {
        type: String
    }
}, {
    timestamps: true
})

const model = mongoose.model("postsSchema", postSchema)

module.exports = model