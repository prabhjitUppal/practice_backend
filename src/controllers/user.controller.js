import {createUserService,findAllUsersService} from "../services/user.service.js"
export const  createUserController= async(req,res)=>{
try{
const userData=req.body
console.log(userData)
    const user= await  createUserService(userData)
    res.status(201).json({message:"User created successfully",user,success:true})
}
catch(error){
    res.status(500).json({message:error.message,success:false})
}
}

export const findAllUserController= async(req,res)=>{
    try {
      const    allUsers= await findAllUsersService()
      res.status(201).json({message:"Find All Users",allUsers})

    } catch (error) {
        res.status(500).json({message:error.message,success:false})
    }
}