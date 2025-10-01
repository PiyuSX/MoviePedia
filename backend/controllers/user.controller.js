import { User } from "../models/users.model.js"
import bcrypt from "bcryptjs"

export const Register = async (req,res)=> {
 try {
        const {name, email, password} = req.body
        if(!name || !email || !password){
            return res.status(400).json({
                message: "All fields are required",
                success: false
            })
        }
        const existingUser = await User.findOne({email})
        if(existingUser){
            return res.status(400).json({
                message: "User already exists",
                success: false
            })
        }

        await User.create({
            name,
            email,
            password: bcrypt.hashSync(password, 10)
        })

 } catch (error) {
    console.log("Error in user registration", error)
    res.status(500).json({message: "Error in user registration", success: false})
 }    
}