import express from "express"
import OpenAI from "openai"

const router = express.Router()

const openai = new OpenAI({
apiKey:process.env.OPENAI_KEY
})

router.post("/ask",async(req,res)=>{

const question = req.body.question

const response = await openai.chat.completions.create({

model:"gpt-4o-mini",

messages:[
{
role:"system",
content:"You are an AI assistant answering questions about Suadik Husseini's developer portfolio. He is a MERN stack developer."
},
{
role:"user",
content:question
}

]

})

res.json(response.choices[0].message)

})

export default router