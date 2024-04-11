import { NextFunction, Request, Response } from "express";
import { jwtService } from "../services/jwtService";
import { decode, JwtPayload } from "jsonwebtoken";
import { userService } from "../services/userService";
import { UserInstance } from "../models/User";

export interface AuthenticationRequest extends Request{
user?: UserInstance| null
}

export default function ensureAuth(
    req: AuthenticationRequest,
    res: Response,
    next: NextFunction
) {
    const authorizationHeader = req.headers.authorization;

    if (!authorizationHeader)
        return res.status(401).json({
            message: "no auth",
        });

    const token = authorizationHeader.replace(/bearer/, '')
    
    jwtService.verifyToken(token, (err, decode)=>{
        if(err || typeof "undefined") return res.status(401).json({message: "No Auth: invalid token"})

        userService.findByEmail((decode as JwtPayload).email).then(user =>{
            req.user = user 
            next()
        })
    })
}
