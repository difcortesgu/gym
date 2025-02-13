import users from '../database/models/user.js';

import jwt from 'jsonwebtoken';
import { genSalt, hash, compare } from "bcrypt";

export async function register(req, res, next) {
    try {
        const salt = await genSalt(10);
        let newUser = {
            email: req.body.email,
            name: req.body.name,
            password: await hash(req.body.password, salt)
        };
        let user = await users.create(newUser);
        res.json({ message: 'User has been created correctly', user });
    } catch (error) {
        next(error);
    }
}
export async function login(req, res) {
    try {
        let { email, password } = req.body;
        let user = await users.findOne({ where: { email } });
        if (user == null) {
            res.status(404).json({ message: "User not found" });
        } else {
            const match = await compare(password, user.password);
            if (match) {
                let token = jwt.sign(JSON.stringify(user), process.env.JWT_TOKEN_SECRET);
                res.json({ token });
            } else {
                res.status(401).json({ message: "Incorrect password" });
            }
        }
    } catch (error) {
        next(error);
    }
}