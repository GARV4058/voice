import express from "express"
import dotenv from "dotenv"
dotenv.config()
import cors from "cors"
import connectDb from "./config/db.js"
import authRouter from "./routes/auth.routes.js"
import cookieParser from "cookie-parser"
import userRouter from "./routes/user.routes.js"
import geminiResponse from "./gemini.js"
 

const app=express()
app.use(cors(
    {
        origin:"http://localhost:5173",
        credentials:true
    }
))
const port=process.env.PORT||5000
app.use(express.json())
app.use(cookieParser())

app.use("/api/auth",authRouter)
app.use("/api/user",userRouter)

//only to check response kya aya hai gemini se
//app.get("/",async(req,res)=>{
 //   let prompt=req.query.prompt
 //  let data= await geminiResponse(prompt)
 //  res.json(data)

//})
 
app.listen(port,()=>{
    connectDb()
    console.log("server started")
})