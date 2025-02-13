import sets from '../database/models/set.js'


export async function getset(req, res, next) {
    try {
        let id = req.params.id
        let set = await sets.findOne({ where: { id } })
        if (set == null) {
            res.status(404).json({ message: "set not found" })
        }
        res.json(set)
    } catch (error) {
        next(error)
    }
}
export async function addset(req, res, next) {
    try {
        let newSet = { ...req.body, user_id: req.user.id }
        let set = await sets.create(newSet)
        res.json({ message: 'set has been created correctly', set })
    } catch (error) {
        next(error)
    }
}
export async function updateset(req, res, next) {
    try {
        let id = req.params.id
        let set = await sets.findOne({ where: { id } })
        if (set == null) {
            res.status(404).json({ message: "set not found" })
        }
        let updateSet = { ...req.body }
        await sets.update(updateSet, { where: { id } })
        res.json({ message: 'set has been updated correctly' })
    } catch (error) {
        next(error)
    }
}
export async function deleteset(req, res) {
    try {
        let id = req.params.id
        const set = await sets.destroy({ where: { id } })
        if (set == null) {
            res.status(404).json({ message: "set not found" })
        }
        res.json({ message: 'set has been deleted correctly' })
    } catch (error) {
        next(error)
    }
}