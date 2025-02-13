import dotenv from 'dotenv'
import express, { json, urlencoded } from 'express';
import usersRouter from './routes/users.js';
import authRouter from './routes/index.js';

dotenv.config()
const app = express()
app.use(json())
app.use(urlencoded({ extended: true }))


// routers
app.use('/', authRouter)
app.use('/users', usersRouter)

app.use((err, req, res, next) => {
    console.error(err)
    res.status(400).json({message: "Something went wrong"})
})

//port
const port = process.env.PORT || 3000

//server
app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})