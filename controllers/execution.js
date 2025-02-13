import { executions } from '../database/models/execution'


export async function getExecution(req, res, next) {
    try {
        let id = req.params.id
        let execution = await executions.findOne({ where: { id } })
        if (execution == null) {
            res.status(404).json({ message: "execution not found" })
        }
        res.json(execution)
    } catch (error) {
        next(error)
    }
}
export async function addExecution(req, res, next) {
    try {
        let newExecution = { ...req.body, user_id: req.user.id }
        let execution = await executions.create(newExecution)
        res.json({ message: 'execution has been created correctly', execution })
    } catch (error) {
        next(error)
    }
}
export async function updateExecution(req, res, next) {
    try {
        let id = req.params.id
        let execution = await executions.findOne({ where: { id } })
        if (execution == null) {
            res.status(404).json({ message: "execution not found" })
        }
        let updateExecution = { ...req.body }
        await executions.update(updateExecution, { where: { id } })
        res.json({ message: 'execution has been updated correctly' })
    } catch (error) {
        next(error)
    }
}
export async function deleteExecution(req, res) {
    try {
        let id = req.params.id
        const execution = await executions.destroy({ where: { id } })
        if (execution == null) {
            res.status(404).json({ message: "execution not found" })
        }
        res.json({ message: 'execution has been deleted correctly' })
    } catch (error) {
        next(error)
    }
}