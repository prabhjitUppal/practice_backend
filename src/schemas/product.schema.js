
import {Schema,model } from "mongoose"

  const productSchema = new Schema({
   name:{
        type:String,
        required:true,
         require:true,
         minlength:3,
         maxlength:20
    },
    price:{
        type:Number,
        required:true,
        unique:true,
        trim:true
    },
    quantity:{
        type:Number,
        required:true,
        minlength:1
    } ,
    description:{
        type:String,
        required:true,
        minlength:10
    }
},{
    timestamps:true
})
const  Product= new model("Product",productSchema)
 export default Product