const db = require('../database/models')


module.exports = {

    getRoutine: async (req, res, next) => {
        try {
            let id = req.params.id
            let routine = await db.routines.findOne({where: { id }})
            if (routine == null) {
                res.status(404).json({ message: "routine not found" })
            }
            res.json(routine)
        } catch (error) {
            next(error)
        }
    },

    addRoutine: async (req, res, next) => {
        try {
            let newroutine = { ...req.body, user_id: req.user.id }
            let routine = await db.routines.create(newroutine)
            res.json({ message: 'routine has been created correctly', routine })
        } catch (error) {
            next(error)
        }
    },

    updateRoutine: async (req, res, next) => {
        try {
            let id = req.params.id
            let routine = await db.routines.findOne({ where: { id } })
            if (routine == null) {
                res.status(404).json({ message: "routine not found" })
            }
            let updateroutine = { ...req.body }
            await db.routines.update(updateroutine, { where: { id } })
            res.json({ message: 'routine has been updated correctly' })
        } catch (error) {
            next(error)
        }
    },

    deleteRoutine: async (req, res) => {
        try {
            let id = req.params.id
            const routine = await db.routines.destroy({ where: { id } })
            if (routine == null) {
                res.status(404).json({ message: "routine not found" })
            }
            res.json({ message: 'routine has been deleted correctly' })
        } catch (error) {
            next(error)
        }
    },
}