import {Schema,model } from "mongoose"

  const OrderSchema = new Schema({
  productId:{
        type:Schema.Types.ObjectId,
        ref:"Product",
        required:true
    },
    userId:{
        type:Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    quantity:{
        type:Number,
        required:true,
        minlength:1
    } ,
   deliveryAddress:{
        type:String,
        required:true,
        minlength:10
    },
},{
    timestamps:true
})
const  Order= new model("Order",OrderSchema)
 export default Order