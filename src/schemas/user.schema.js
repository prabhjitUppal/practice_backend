
import {Schema,model } from "mongoose"

  const userSchema = new Schema({
    username:{
        type:String,
        required:true,
         require:true,
         minlength:3,
         maxlength:20
    },
    email:{
        type:String,
        required:true,
        unique:true,
        match:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        trim:true
    },
    password:{
        type:String,
        required:true,
        minlength:6
    }
},{
    timestamps:true
})
const  User= new model("User",userSchema)
 export default User