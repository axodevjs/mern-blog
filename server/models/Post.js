import mongoose from "mongoose";

const Post = new mongoose.Schema({
    title: {type: String, required: true},
    category_id: {type: String},
    content: {type: String, required: true}
})

export default mongoose.model('Post', Post);