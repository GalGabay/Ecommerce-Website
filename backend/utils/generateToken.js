// instead of getting this code twice, i created a function in this file and call it wherever in needed(in userController.js)


import jwt from "jsonwebtoken";

const generateToken = (res,userId) => {
    const token = jwt.sign({ userId: userId._id }, process.env.JWT_SECRET, {
        expiresIn: '30d' // the token expires in 30 days
    }); // create the token

    // set JWT as HTTP-only cookie
    res.cookie('jwt', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== 'development',
        sameSite: 'strict',
        maxAge: 30* 24* 60* 60*1000 //30 days
    })
}

export default generateToken;