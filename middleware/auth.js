import jwt from "jsonwebtoken"  
const authMiddleware = async (req,res,next) => {
    const {token} = req.headers;
    if (!token) {
        return res.json({success:false,message:"არ არის ავტორიზებული,სცადეთ ხელახლა"})
    }
    try {
        const token_decode = jwt.verify(token,process.env.JWT_SECRET);
        req.body.userId = token_decode.id;
        next();
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
        
    }

}

const verifyToken = (req,res,next) => {
    let token;
    let authHeader = req.header.Authorization || req.header.authorization;
    if (authHeader && authHeader.startWith("Bearer")) {
        token = authHeader.split(" ")[1];

        if(!token) {
            return res
            .status(401)
            .json({message: "No token,authorization denied"});
        }
        try {
            const decode = jwt.verify(token, process.env.JWT_SECRET_ADMIN);
            req.user = decode;
            console.log("The decoded user is : ",req.user)
        } catch (err) {
            res.status(400).json({message: "Token is not valid"})
        }
    }
}


 export default authMiddleware ;

// import jwt from "jsonwebtoken";

// const authMiddleware = async (req, res, next) => {
//     const authHeader = req.headers.authorization;
//     const token = authHeader && authHeader.split(' ')[1]; // Bearer <token>

//     if (!token) {
//         return res.status(401).json({ success: false, message: "Токен не предоставлен." });
//     }

//     try {
//         const decoded = jwt.verify(token, process.env.JWT_SECRET);
//         req.user = decoded; // Добавляем декодированный токен в req.user
//         next();
//     } catch (error) {
//         console.error("Ошибка верификации токена:", error);
//         return res.status(403).json({ success: false, message: "Недействительный токен." });
//     }
// };

