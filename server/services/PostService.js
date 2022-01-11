import Post from "../models/Post.js";
import Category from "../models/Category.js";

class PostService {
    async create(post) {
        const createdPost = await Post.create(post)
        return createdPost;
    }

    async getAll() {
        const posts = await Post.find();
        return posts;
    }

    async getByCategoryName(category_name) {
        if (!category_name) {
            throw new Error("category name not specified")
        }
        const category = await Category.findOne({category_name});

        return category

    }

    async getOne(id) {
        if (!id) {
            throw new Error("id not specified")
        }
        const post = await Post.findById(id);
        return post

    }

    async update(post) {
        if (!post._id) {
            throw new Error("id not specified")
        }
        const updatedPost = await Post.findByIdAndUpdate(post._id, post, {new: true})
        return updatedPost

    }

    async delete(id) {
        if (!id) {
            throw new Error("id not specified")
        }
        const post = await Post.findByIdAndDelete(id);
        return post
    }
}

export default new PostService();