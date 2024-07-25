const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const User = require('./models/User');
const Cars = require('./models/Cars');
const upload = require('./multerConfig.js');
const app = express();
const path = require('path');
const SECERET_KEY = 'asdcvghjytredcv';
app.use(cors());
app.use(express.json());
app.use('/uploads',express.static(path.join(__dirname, 'uploads')));
//Database connection
mongoose.connect("mongodb://localhost:27017/car-rental",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.error(err));
app.get('/',(req,res) => {
    res.send('Hello World!');
});


//Register a new user
app.post('/register',async(req,res) => {
    const {name,email,password,role} = req.body;
    const existingUser = await User.findOne({email});
    if(existingUser){
        return res.status(400).json({message:'User already registered'});
    }
    const hashedPassword = await bcrypt.hash(password,10);
    const newUser = await User.create({name,email,password:hashedPassword,role});
    res.status(201).json({message:'User registered successfully'});
});

//Login a user
app.post('/login',async(req,res) => {
    const {name,email,password,role} = req.body;
    const user = await User.findOne({email});
    if(!user){
        return res.json({'message':'user not found'});
    }
    const validPassword = await bcrypt.compare(password, user.password);
    if(!validPassword){
        return res.json({'message':'Invalid credentials'});
    }
    const token = jwt.sign({email:user.email},SECERET_KEY,{
        expiresIn:'2h'
    });
    res.status(200).json({token,user});
});

//Add a new Car from admin panel
app.post('/addcar',upload.single("image"),async(req,res) => {
    const {name,fuelType,transmission,seatingCapacity,rate} = req.body;
    const image = req.file ? req.file.path : "";
    try{
        const newCar = await Cars.create({name,fuelType,transmission,seatingCapacity,image,rate});
        res.status(201).json({message:'Car added successfully', newCar});
    }catch(err){
        res.status(500).json({message:'Error adding car', error:err.message});
    }
});

//Get all cars
app.get('/cars',async(req,res) => {
    try{
        const cars = await Cars.find();
        res.status(200).json(cars);
    }catch(err){
        res.status(500).json({message:'Error fetching cars', error:err.message});
    }
});

//Get all users for admin panel
app.get('/viewusers',async(req,res) => {
    try{
        const users = await User.find();
        res.status(200).json(users);
    }catch(err){
        res.status(500).json({message:'Error fetching users', error:err.message});
    }
});

//Delete a user from admin panel
app.delete('/viewusers/:userId',async(req,res) => {
    try{
        const user = await User.findByIdAndDelete(req.params.userId);
        if(!user){
            return res.status(404).json({message:'User not found'});
        }
        res.status(200).json({message:'User deleted successfully'});
    }catch(err){
        res.status(500).json({message:'Error deleting user', error:err.message});
    }
})
app.listen(3000,() => {
    console.log('Server is running on port 3000');
})