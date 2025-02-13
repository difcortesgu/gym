import users from '../database/models/user.js';

import { genSalt, hash } from "bcrypt";

export async function getUser(req, res, next) {
    try {
        let id = req.params.id;
        let user = await users.findOne({ where: { id: id }, attributes: { exclude: ['password'] }, });

        if (user == null) {
            res.status(404).json({ message: "User not found" });
        }

        res.json({ user });
    } catch (error) {
        next(error);
    }
}
export async function updateUser(req, res, next) {
    try {
        const salt = await genSalt(10);
        let updateUser = {
            email: req.body.email,
            name: req.body.name,
            password: await hash(req.body.password, salt)
        };
        let id = req.params.id;
        const count = await users.update(updateUser, { where: { id: id } });

        if (count == 0) {
            res.status(404).json({ message: "User not found" });
        }

        res.json({ message: 'User has been updated correctly' });
    } catch (error) {
        next(error);
    }
}
export async function deleteUser(req, res, next) {
    try {
        let id = req.params.id;
        const user = await users.destroy({ where: { id: id } });

        if (user == null) {
            res.status(404).json({ message: "User not found" });
        }

        res.json({ message: 'User has been deleted correctly' });
    } catch (error) {
        next(error);
    }
}