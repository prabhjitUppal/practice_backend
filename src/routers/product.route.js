import { Router } from "express";
import Product from "../schemas/product.schema.js";

const productRouter= Router()

productRouter.get("/",async (req,res)=>{
 try{
  const products= await Product.find()
  res.status(201).json({message:"Find All Products",products})
 }
 catch(error){
    res.status(500).json({message:error.message,success:false})
 }
})


productRouter.post("/",async (req,res)=>{
    try{
        const product= await Product.create(req.body)
        res.status(201).json({message:"Product Created",product})
    }
    catch(error){
        res.status(500).json({message:error.message,success:false})
    }
})

export default productRouter