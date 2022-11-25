const authController = require('../controllers/auth')

const router = require('express').Router()

router.get('/test', () => async (req, res) => {
    res.send("hellooooo")
})
router.post('/register', authController.register)
router.post('/login', authController.login)

module.exports = router