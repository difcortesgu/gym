import { getUser, updateUser, deleteUser } from '../controllers/user.js'
import auth from '../middlewares/auth.js'
import { Router } from 'express'

const router = Router()

router.use(auth)

router.get('/:id', getUser)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)

export default router