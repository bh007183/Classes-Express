

class Login{
    constructor(model){
        this.model = model
    }
    SignIn = async (req, res, next) => {
    
        let instance = await this.model.findOne({
            where: {
                email: req.body.email
            }
        })
    
       
           if(instance && await instance.checkPassword(req.body.password)){
            res.status(200).json({token: instance.generateToken(instance)})
        }else{
            res.status(404).json({message: "Invalid credentials."})
        }
       
        


    }
}
module.exports = {Login}
