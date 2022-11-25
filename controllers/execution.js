const db = require('../database/models')


module.exports = {

    getExecution: async (req, res, next) => {
        try {
            let id = req.params.id
            let execution = await db.executions.findOne({where: { id }})
            if (execution == null) {
                res.status(404).json({ message: "execution not found" })
            }
            res.json(execution)
        } catch (error) {
            next(error)
        }
    },

    addExecution: async (req, res, next) => {
        try {
            let newExecution = { ...req.body, user_id: req.user.id }
            let execution = await db.executions.create(newExecution)
            res.json({ message: 'execution has been created correctly', execution })
        } catch (error) {
            next(error)
        }
    },

    updateExecution: async (req, res, next) => {
        try {
            let id = req.params.id
            let execution = await db.executions.findOne({ where: { id } })
            if (execution == null) {
                res.status(404).json({ message: "execution not found" })
            }
            let updateExecution = { ...req.body }
            await db.executions.update(updateExecution, { where: { id } })
            res.json({ message: 'execution has been updated correctly' })
        } catch (error) {
            next(error)
        }
    },

    deleteExecution: async (req, res) => {
        try {
            let id = req.params.id
            const execution = await db.executions.destroy({ where: { id } })
            if (execution == null) {
                res.status(404).json({ message: "execution not found" })
            }
            res.json({ message: 'execution has been deleted correctly' })
        } catch (error) {
            next(error)
        }
    },
}