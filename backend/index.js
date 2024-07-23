const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const User = require('./models/User');
const app = express();

app.use(cors());
app.use(express.json());

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
app.listen(3000,() => {
    console.log('Server is running on port 3000');
})