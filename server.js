import express from "express"
import cors from "cors"
import { connectDB, dbConnect } from "./config/db.js"
import itemRouter from "./routes/itemRoute.js"
import userRouter from "./routes/userRoute.js"
// import 'dotenv/config'
import dotenv from "dotenv"
dotenv.config();
console.log("STRIPE_SECRET_KEY in server.js:", process.env.STRIPE_SECRET_KEY);
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"
import authRoute from "./routes/authRoute.js"

// app config
const app =  express()
const port = process.env.PORT || 4000

//middleware
app.use(express.json())
app.use(cors())

// db connection
connectDB();



// api endpoints
app.use("/api/auth", authRoute)
app.use("/api/item",itemRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)

app.get("/",(req,res)=>{
    res.send("API Working")
})

app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`)
})


//mongoDB user:lunanero pass:98765432    

