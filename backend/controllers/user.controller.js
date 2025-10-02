import { User } from "../models/users.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const Login = async (req, res) => { 
    try {
        const { email, password } = req.body
        if (!email || !password) {
            return res.status(400).json({
                message: "All fields are required",
                success: false
            })
        }
        const user = await User.findOne({email})
        if(!user) {
            return res.status(404).json({
                message: "Invalid credentials",
                success: false
            })
        }

        const isPasswordValid = bcrypt.compareSync(password,user.password)
        if(!isPasswordValid) {
            return res.status(404).json({
                message: "Invalid credentials",
                success: false
            })
        }

        const tokenData = {
            id: user._id
        }
        
        const token = jwt.sign(tokenData, process.env.JWT_SECRET, {expiresIn: '1d'})

        res.status(200).cookie('token', token).json ({
            message: "Login successful",
            user,
            success: true
        })

    } catch (error) {
        
    }
}

export const Logout = (req, res) => {
    res.status(200).clearCookie('token').json({
        message: "Logout successful",
        success: true
    })
}

export const Register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({
        message: "All fields are required",
        success: false,
      });
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
        success: false,
      });
    }

    const hashedPassword = bcrypt.hashSync(password, 16);

    await User.create({
      name,
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      message: "User registered successfully",
      success: true,
    });
  } catch (error) {
    console.log("Error in user registration", error);
    res
      .status(500)
      .json({ message: "Error in user registration", success: false });
  }
};
