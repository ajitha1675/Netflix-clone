import jwt from 'jsonwebtoken';
import { ENV_VARS } from '../config/envVars.js';

export const generateTokenAndSetCookie = (userId, res) =>{
  const token = jwt.sign({userId}, ENV_VARS.JWT_SECRET, {expiresIn: "15 d"});

  res.cookie("jwt-netfilx", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000, //15 days in milliseconds
    httpOnly:true, //prevent Xss attacks cross-site scripting attacks,make it not be accessed by JS
    sameSite:"Strict", //CSRF attacks cross-site request forquery attacks
    secure: ENV_VARS.NODE_ENV !== "developement"
  });

  return token;
}