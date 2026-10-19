import Router from "express"
import {createUserController,findAllUserController} from "../controllers/user.controller.js"

const UserRouter =Router()

UserRouter.post("/",createUserController)
UserRouter.get("/",findAllUserController)



export default UserRouter