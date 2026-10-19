import {connect} from "mongoose"

const connectDB = async ()=>{
    try{
   await connect("mongodb://localhost:27017/myapp")
        console.log("Connected to MongoDB")
    }catch(error){
        console.error("Error connecting to MongoDB:", error)
    }
}

export default connectDB