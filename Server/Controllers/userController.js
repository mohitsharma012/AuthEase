const userModel = require('../Models/usersModel');
const bcrypt = require('bcrypt');
const validator = require('validator');
const jwt = require('jsonwebtoken');

const loginUser = async (req, res) => {
    const {email, password} = req.body;
    try {
        // check if user exists
        const user = await userModel.findOne({email});
        if(!user){
            return res.json({success:false,message:"Email or Password is incorrect"})
        }
        bcrypt.compare(password, user.password, (err, result) => {
            if(result){
                // generating token
                const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: 3600})
                res.json({success:true, message:"User logged in successfully", token})
            } else {
                res.json({success:false,message:"Email or Password is incorrect"})
            }
        } )
        
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
};

const registerUser = async (req,res) => { 
    const {name, email, password} = req.body;
    try{
        //check if user already exists
        const exists = await userModel.findOne({email})
        if(exists){
            return res.json({success:false,message: "User already exists"})
        }

        // validating email format & strong password
        if(!validator.isEmail(email)){
            return res.json({success:false,message: "Please enter a valid email"})
        }
        if(password.length<8){
            return res.json({success:false,message: "Please enter a strong password"})
        }

        // hashing user password
        const salt = await bcrypt.genSalt(10); 
        const hashedPassword = await bcrypt.hash(password, salt)

        // saving user to database
        const newUser = new userModel({name, email, password: hashedPassword})
        const savedUser = await newUser.save();

        // generating token
        const token = jwt.sign({id: savedUser._id}, process.env.JWT_SECRET, {expiresIn: 3600})

        // sending response
        res.json({success:true, message: "User registered successfully", token})       

    } catch(error){
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}

module.exports = { loginUser, registerUser };
