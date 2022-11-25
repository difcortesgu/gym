const db = require('../database/models')


module.exports = {

    getset: async (req, res, next) => {
        try {
            let id = req.params.id
            let set = await db.sets.findOne({where: { id }})
            if (set == null) {
                res.status(404).json({ message: "set not found" })
            }
            res.json(set)
        } catch (error) {
            next(error)
        }
    },

    addset: async (req, res, next) => {
        try {
            let newSet = { ...req.body, user_id: req.user.id }
            let set = await db.sets.create(newSet)
            res.json({ message: 'set has been created correctly', set })
        } catch (error) {
            next(error)
        }
    },

    updateset: async (req, res, next) => {
        try {
            let id = req.params.id
            let set = await db.sets.findOne({ where: { id } })
            if (set == null) {
                res.status(404).json({ message: "set not found" })
            }
            let updateSet = { ...req.body }
            await db.sets.update(updateSet, { where: { id } })
            res.json({ message: 'set has been updated correctly' })
        } catch (error) {
            next(error)
        }
    },

    deleteset: async (req, res) => {
        try {
            let id = req.params.id
            const set = await db.sets.destroy({ where: { id } })
            if (set == null) {
                res.status(404).json({ message: "set not found" })
            }
            res.json({ message: 'set has been deleted correctly' })
        } catch (error) {
            next(error)
        }
    },
}