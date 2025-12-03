
const express = require('express');
const router = express.Router();

const User=require('../models/Users');

//register

router.post('/register',async (req,res)=>{
    const {
        username,
        password
    }=req.body;

    try{
        const newUser= new User({
            username,
            password

        })
        await newUser.save();
        res.status(201).json({message:"User registered successfully"});
    }catch(error){
        console.error("Error during user registration:", error);
    }
})

//login

router.post('/login',async(req,res)=>{
    const{
        username,
        password
    }=req.body;

    try{
        const isUser= await User.findOne({
            username,
            password
        })
        if(isUser){

            res.status(200).json({message:"Login successful"});

        }else{
            res.status(401).json({message:"Invalid credentials"});
        }
    }catch(error){
        console.error("Error during user login:", error);
        res.status(500).json({message:"Internal server error"});
    }
})

module.exports=router;
