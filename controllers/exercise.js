const db = require('../database/models')


module.exports = {

    getMuscularExercise: async (req, res, next) => {
        try {
            let id = req.params.id
            let muscularExercise = await db.muscularExercises.findOne({where: { id }})
            if (muscularExercise == null) {
                res.status(404).json({ message: "muscularExercise not found" })
            }
            res.json(muscularExercise)
        } catch (error) {
            next(error)
        }
    },

    addMuscularExercise: async (req, res, next) => {
        try {
            let newMuscularExercise = { ...req.body, user_id: req.user.id }
            let muscularExercise = await db.muscularExercises.create(newMuscularExercise)
            res.json({ message: 'muscularExercise has been created correctly', muscularExercise })
        } catch (error) {
            next(error)
        }
    },

    updateMuscularExercise: async (req, res, next) => {
        try {
            let id = req.params.id
            let muscularExercise = await db.muscularExercises.findOne({ where: { id } })
            if (muscularExercise == null) {
                res.status(404).json({ message: "muscularExercise not found" })
            }
            let updateMuscularExercise = { ...req.body }
            await db.muscularExercises.update(updateMuscularExercise, { where: { id } })
            res.json({ message: 'muscularExercise has been updated correctly' })
        } catch (error) {
            next(error)
        }
    },

    deleteMuscularExercise: async (req, res) => {
        try {
            let id = req.params.id
            const muscularExercise = await db.muscularExercises.destroy({ where: { id } })
            if (muscularExercise == null) {
                res.status(404).json({ message: "muscularExercise not found" })
            }
            res.json({ message: 'muscularExercise has been deleted correctly' })
        } catch (error) {
            next(error)
        }
    },

    getcardioExercise: async (req, res, next) => {
        try {
            let id = req.params.id
            let cardioExercise = await db.cardioExercises.findOne({where: { id }})
            if (cardioExercise == null) {
                res.status(404).json({ message: "cardioExercise not found" })
            }
            res.json(cardioExercise)
        } catch (error) {
            next(error)
        }
    },

    addCardioExercise: async (req, res, next) => {
        try {
            let newCardioExercise = { ...req.body, user_id: req.user.id }
            let cardioExercise = await db.cardioExercises.create(newCardioExercise)
            res.json({ message: 'cardioExercise has been created correctly', cardioExercise })
        } catch (error) {
            next(error)
        }
    },

    updateCardioExercise: async (req, res, next) => {
        try {
            let id = req.params.id
            let cardioExercise = await db.cardioExercises.findOne({ where: { id } })
            if (cardioExercise == null) {
                res.status(404).json({ message: "cardioExercise not found" })
            }
            let updateCardioExercise = { ...req.body }
            await db.cardioExercises.update(updateCardioExercise, { where: { id } })
            res.json({ message: 'cardioExercise has been updated correctly' })
        } catch (error) {
            next(error)
        }
    },

    deleteCardioExercise: async (req, res) => {
        try {
            let id = req.params.id
            const cardioExercise = await db.cardioExercises.destroy({ where: { id } })
            if (cardioExercise == null) {
                res.status(404).json({ message: "cardioExercise not found" })
            }
            res.json({ message: 'cardioExercise has been deleted correctly' })
        } catch (error) {
            next(error)
        }
    },
}