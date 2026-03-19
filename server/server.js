const express = require("express")
const cors = require("cors")
const nodemailer = require("nodemailer")

const app = express()

app.use(cors())
app.use(express.json())

app.post("/contact", async(req,res)=>{

const {name,email,message} = req.body

const transporter = nodemailer.createTransport({
service:"gmail",
auth:{
user:"yourgmail@gmail.com",
pass:"app-password"
}
})

await transporter.sendMail({
from:email,
to:"yourgmail@gmail.com",
subject:"Portfolio Contact",
text:message
})

res.send("Email sent")
})

app.listen(5000,()=>{
console.log("Server running")
})