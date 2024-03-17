const PORT = 8000
import express, { json } from 'express'
const app = express()
import cors from 'cors'
app.use(cors())
app.use(json())
import dotenv from 'dotenv'
dotenv.config()

import {GoogleGenerativeAI} from '@google/generative-ai'

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEN_AI_KEY)

app.post('/gemini', async (req, res) => {
    console.log(req.body.history)
    console.log(req.body.message)
    const model = genAI.getGenerativeModel({ model: "gemini-pro"})

    const chat = model.startChat({
        history: req.body.history,
    }) 
    const msg = req.body.message

    const result = await chat.sendMessage(msg)
    const response = await result.response
    const text = response.text()
    res.send(text)
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))