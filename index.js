import express from "express"
import connectDB from "./connections/db.connection.js"
import UserRouter from "./src/routers/user.route.js"
import {urlencoded} from "express"
import { createUserController } from "./src/controllers/user.controller.js"
import cors from"cors"
import productRouter from "./src/routers/product.route.js"
import orderRouter from "./src/routers/order.route.js"
const app= express()
connectDB()
app.use(express.json(urlencoded({
    extended:true
})))
app.use(cors({
    origin:"*"
}))


app.use("/user",UserRouter)
app.use("/product",productRouter)
app.use("/order",orderRouter)

app.get("/",(req,res)=>{
    res.send("Hello World")
})
app.post("/user",createUserController)
app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})