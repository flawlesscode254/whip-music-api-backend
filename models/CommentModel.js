const mongoose = require("mongoose")

const {Schema} = mongoose

// Schema for defining the data to be stored in the comments database
const commentSchema = new Schema({
    comment: {
        type: String
    },
    profilePic: {
        type: String
    },
    username: {
        type: String
    }
}, {
    timestamps: true
})

const model = mongoose.model("commentsSchema", commentSchema)

module.exports = model