import express from 'express';
import { loginUser, registerUser } from '../controllers/userController.js';


const userRouter = express.Router();

// Frontend
userRouter.post("/register", registerUser);
userRouter.post('/login', loginUser);

// Only admin
userRouter.get("/admin", (req,res) => {
    res.json({message: "Welcome Admin"})
});

// Both admin and manager
userRouter.get("/manager", (req,res) => {
    res.json({message: "Welcome Manager"})
});

// All
userRouter.get("/user", (req,res) => {
    res.json({message: "Welcome User"})
});

export default userRouter;


// import express from 'express'
// import { loginUser,registerUser } from '../controllers/userController.js'
// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";
// import userModel from "../models/userModel.js";

// const userRouter = express.Router()



// userRouter.post("/register",registerUser)
// userRouter.post('/login',loginUser)

// export default userRouter;