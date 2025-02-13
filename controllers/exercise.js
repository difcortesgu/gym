import cardioExercises  from '../database/models/cardioexercise'
import muscularExercises  from '../database/models/muscularexercise'


export async function getMuscularExercise(req, res, next) {
    try {
        let id = req.params.id
        let muscularExercise = await muscularExercises.findOne({ where: { id } })
        if (muscularExercise == null) {
            res.status(404).json({ message: "muscularExercise not found" })
        }
        res.json(muscularExercise)
    } catch (error) {
        next(error)
    }
}
export async function addMuscularExercise(req, res, next) {
    try {
        let newMuscularExercise = { ...req.body, user_id: req.user.id }
        let muscularExercise = await muscularExercises.create(newMuscularExercise)
        res.json({ message: 'muscularExercise has been created correctly', muscularExercise })
    } catch (error) {
        next(error)
    }
}
export async function updateMuscularExercise(req, res, next) {
    try {
        let id = req.params.id
        let muscularExercise = await muscularExercises.findOne({ where: { id } })
        if (muscularExercise == null) {
            res.status(404).json({ message: "muscularExercise not found" })
        }
        let updateMuscularExercise = { ...req.body }
        await muscularExercises.update(updateMuscularExercise, { where: { id } })
        res.json({ message: 'muscularExercise has been updated correctly' })
    } catch (error) {
        next(error)
    }
}
export async function deleteMuscularExercise(req, res) {
    try {
        let id = req.params.id
        const muscularExercise = await muscularExercises.destroy({ where: { id } })
        if (muscularExercise == null) {
            res.status(404).json({ message: "muscularExercise not found" })
        }
        res.json({ message: 'muscularExercise has been deleted correctly' })
    } catch (error) {
        next(error)
    }
}
export async function getcardioExercise(req, res, next) {
    try {
        let id = req.params.id
        let cardioExercise = await cardioExercises.findOne({ where: { id } })
        if (cardioExercise == null) {
            res.status(404).json({ message: "cardioExercise not found" })
        }
        res.json(cardioExercise)
    } catch (error) {
        next(error)
    }
}
export async function addCardioExercise(req, res, next) {
    try {
        let newCardioExercise = { ...req.body, user_id: req.user.id }
        let cardioExercise = await cardioExercises.create(newCardioExercise)
        res.json({ message: 'cardioExercise has been created correctly', cardioExercise })
    } catch (error) {
        next(error)
    }
}
export async function updateCardioExercise(req, res, next) {
    try {
        let id = req.params.id
        let cardioExercise = await cardioExercises.findOne({ where: { id } })
        if (cardioExercise == null) {
            res.status(404).json({ message: "cardioExercise not found" })
        }
        let updateCardioExercise = { ...req.body }
        await cardioExercises.update(updateCardioExercise, { where: { id } })
        res.json({ message: 'cardioExercise has been updated correctly' })
    } catch (error) {
        next(error)
    }
}
export async function deleteCardioExercise(req, res) {
    try {
        let id = req.params.id
        const cardioExercise = await cardioExercises.destroy({ where: { id } })
        if (cardioExercise == null) {
            res.status(404).json({ message: "cardioExercise not found" })
        }
        res.json({ message: 'cardioExercise has been deleted correctly' })
    } catch (error) {
        next(error)
    }
}