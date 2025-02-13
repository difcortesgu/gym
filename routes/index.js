import { register, login } from '../controllers/auth.js'

import { Router } from 'express'

const router = Router()
router.get('/test', () => async (req, res) => {
    res.send("hellooooo")
})
router.post('/register', register)
router.post('/login', login)

export default router