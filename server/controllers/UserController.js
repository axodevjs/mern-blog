import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

class UserController {
    async registration(req, res) {
        try {
            const admins = await User.find()

            if (admins.length > 0) {
                return res.status(400).json("Admin already exist")
            }  else {
                const {username, password} = req.body
                const candidate = await User.findOne({username})
                if (candidate) {
                    return res.status(400).json({message: `User with username ${username} already exist`})
                }
                const hashPassword = await bcrypt.hash(password, 8)
                const user = new User({username, password: hashPassword})
                await user.save()

                return res.json({message: "User has been created"})
            }
        } catch (e) {
            console.log(e)
            return res.send({message: "Server error"})
        }
    }

    async login(req, res) {
        try {
            const {username, password} = req.body
            if (!username || !password) {
                return res.status(400).json("Invalid username or password")
            }
            const user = await User.findOne({username})
            if (!user) {
                return res.status(404).json({message: "Invalid username or password"})
            }
            const isPassValid = bcrypt.compareSync(password, user.password)
            if (!isPassValid) {
                return res.status(404).json({message: "Invalid username or password"})
            }
            const token = jwt.sign({id: user.id}, process.env.secretKey, {expiresIn: "1h"})
            return res.json({
                token,
                user: {
                    id: user.id,
                    username: user.username
                }
            })
        } catch (e) {
            console.log(e)
            return res.send({message: "Server error"})
        }
    }

    async auth(req, res) {
        try {
            const user = await User.findOne({_id: req.user.id})
            const token = jwt.sign({id: user.id}, process.env.secretKey, {expiresIn: "1h"})
            return res.json({
                token,
                user: {
                    id: user.id,
                    username: user.username
                }
            })
        } catch (e) {
            console.log(e)
            res.send({message: "Server error"})
        }
    }

    async haveAdmin(req, res) {
        try {
            const admins = await User.find()

            if (admins.length > 0) {
                return res.json(true)
            } else {
                return res.json(false)
            }
        } catch (e) {
            console.log(e)
            return res.send({message: "Server error"})
        }
    }
}

export default new UserController()