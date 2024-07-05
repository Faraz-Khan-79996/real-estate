import express from 'express'
import dotenv from 'dotenv';
dotenv.config();
import mongoose  from 'mongoose';

const app = express()


main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
    console.log("database connected");
}

app.listen(3000 , ()=>{
    console.log(`server running at : https://localhost:${3000}`);
})