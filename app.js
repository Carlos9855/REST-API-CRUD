import express from 'express'
import morgan from 'morgan'

const app = express()

app.use(morgan('dev'))

//routes

app.get('/', (req, res) => res.send('Hello world'))

export default app