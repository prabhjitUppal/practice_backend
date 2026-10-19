import User from "../schemas/user.schema.js"

export  const createUserService=async(userData)=>{
  try{
     const existEmail= await User.findOne({email:userData.email},{email:1,_id:0})
     console.log(existEmail)
     if(existEmail){
      throw new Error(`The email already existed please give another email`)
     }
      const  user= await User({...userData}).save()
  return user
  }catch(error){
     throw new Error("Error creating user: "+error.message)
  }
}

export const findAllUsersService =async()=>{

  try {
    const allUsers= await User.find()
    return allUsers
  } catch (error) {
    throw new Error (`Error find ALl users: ${error.message} `)
  }
}