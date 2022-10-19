const jwt = require("jsonwebtoken")


const verifyToken = (req, res, next) => {

    const authHeader = req.headers.token;
    if (authHeader) {
        const token = authHeader.split(" ")[1];
        jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNDliOGEyMGU4NDk5Mzc0YmQxOWYwNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2NjE3MDY0MSwiZXhwIjoxNjY2NDI5ODQxfQ.cEVkwWDTRXO3DTGFmeCdTB0KNNmvCcrRfa-v59hq2vM", process.env.JWT_SECRETKEY, (err,user)=>{
            if (err) res.status(403).json("Token is not valid "+ token);
             req.user = user;
            next();
        });
    }
    else {
        return res.status(401).json("You are not authenticated");     
        
    }
};

const verifyTokenAndAuth = (req,res,next) => {
    verifyToken(req,res,()=> {
        if (req.user.id === req.params.id || req.user.isAdmin){
        next();
        }
        else res.status(403).json("You are not allowed to do that");
    });
};

const verifyTokenAndAdmin = (req,res,next) => {
    verifyToken(req,res,()=> {
        if (req.user.isAdmin){
        next();
        }
        else res.status(403).json("You are not allowed to do that. You are not an admin");
    });
} ;

module.exports = {verifyToken,verifyTokenAndAuth,verifyTokenAndAdmin};