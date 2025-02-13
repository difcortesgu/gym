import { routines } from '../database/models/routine.js'


export async function getRoutine(req, res, next) {
    try {
        let id = req.params.id
        let routine = await routines.findOne({ where: { id } })
        if (routine == null) {
            res.status(404).json({ message: "routine not found" })
        }
        res.json(routine)
    } catch (error) {
        next(error)
    }
}
export async function addRoutine(req, res, next) {
    try {
        let newroutine = { ...req.body, user_id: req.user.id }
        let routine = await routines.create(newroutine)
        res.json({ message: 'routine has been created correctly', routine })
    } catch (error) {
        next(error)
    }
}
export async function updateRoutine(req, res, next) {
    try {
        let id = req.params.id
        let routine = await routines.findOne({ where: { id } })
        if (routine == null) {
            res.status(404).json({ message: "routine not found" })
        }
        let updateroutine = { ...req.body }
        await routines.update(updateroutine, { where: { id } })
        res.json({ message: 'routine has been updated correctly' })
    } catch (error) {
        next(error)
    }
}
export async function deleteRoutine(req, res) {
    try {
        let id = req.params.id
        const routine = await routines.destroy({ where: { id } })
        if (routine == null) {
            res.status(404).json({ message: "routine not found" })
        }
        res.json({ message: 'routine has been deleted correctly' })
    } catch (error) {
        next(error)
    }
}