import User from "../models/user.models.js";
import bcryptjs from 'bcryptjs'
import {errorhandler} from '../utils/error.js'

const signup = async (req , res , next)=>{
    
    const {username , email , password} = req.body;
    const hashedPassword = bcryptjs.hashSync(password , 10)


    
    try {
        const newUser = new User({username , email , password : hashedPassword})
        await newUser.save()
        res.status(201).json(newUser)
    } catch (error) {
        next(error)
    }
}


export {
    signup,
}