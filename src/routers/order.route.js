import { Router } from "express";
import Order from "../schemas/order.schema.js";

const orderRouter =Router()




orderRouter.get("/",async(req,res)=>{
try{
    const orders = await Order.find().populate("productId").populate("userId")
    res.status(201).json({message:"Find All Orders", orders})
}catch(error){
    res.status(500).json({message:"Error finding orders",error})
}})

orderRouter.post("/",async(req,res)=>{
   try{
    const order= await Order.create(req.body)
    res.status(201).json({message:"Order Created",order})
   }catch(error){
    res.status(500).json({message:"Error creating order",error})
   }
})
export default orderRouter
