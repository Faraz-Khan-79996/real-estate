import express from 'express'
import dotenv from 'dotenv';
dotenv.config();
import mongoose  from 'mongoose';
import UserRouter from './routes/user.route.js'
import AuthRouter from './routes/auth.route.js'




main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
    console.log("database connected");
}

const app = express()
app.use(express.json())

app.use('/api/user' , UserRouter)
app.use('/api/auth' , AuthRouter)

app.use((err , req , res , next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || "kuch to gadbad he daya";

    return res.status(statusCode).json({
        success : false,
        statusCode,
        message
    })
})

app.listen(3000 , ()=>{
    console.log(`server running at : https://localhost:${3000}`);
})