import User from "../models/user.models.js";
import bcryptjs from 'bcryptjs'
import {errorhandler} from '../utils/error.js'
import jwt from 'jsonwebtoken'

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

const signin = async (req , res , next)=>{
    const {email , password} = req.body;

    try {
        const validUser = await User.findOne({email});
        if(!validUser){
            return next(errorhandler(404 , 'User not found'))
        }

        const validPassword = bcryptjs.compareSync(password , validUser.password)
        if(!validPassword) return next(errorhandler(401 , "Wrong credentials"))

        const token = jwt.sign({id : validUser._id} , process.env.JWT_SECRET)
        const {password : pass , ...rest} = validUser._doc;
        //rest is the entire document except the password

        res
        .cookie('access_token' , token , {httpOnly:true})
        .status(200)
        .json(rest)

    } catch (error) {
        next(error)
    }
}

export {
    signup,
    signin,
}