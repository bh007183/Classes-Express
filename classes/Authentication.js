class Authentication{
    currentUserOnly = async (req, res, next) => {

        let token = req.headers.authorization.split(" ")[1]
        console.log(token)

        
       
    }
    
}