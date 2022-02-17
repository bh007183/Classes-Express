const jwt = require("jsonwebtoken")
module.exports = {
    AuthenticateUser: async (req, res, next) => {
        

        let token = req.headers.authorization.split(" ")[1]

        if(!token){
            res.status(401).send("Unauthorized.")
        }
        try{
            let {id} = await jwt.verify(token, process.env.MEXICO_CITY)
            req.user_id = id

        }catch(err){
            res.status(401).send("Unauthorized.")

        }
        next()
        
    }
}