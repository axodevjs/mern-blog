import mongoose from "mongoose";

const Category = new mongoose.Schema({
    name: {type: String, required: true},
    color: {type: String, required: true},
    background: {type: String, required: true}
})

export default mongoose.model('Category', Category);