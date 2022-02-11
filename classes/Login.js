

class Login{
    constructor(model){
        this.model = model
    }
    SignIn = async (req, res, next) => {
        let instance = this.model.findOne({
            where: {
                email: req.body.email
            }
        })
        if(!instance){
            res.status(404).json({message: "Invalid credentials."})
        }
        if(instance.checkPassword(req.body.password)){
            res.status(200).json({token: instance.generateToken(instance)})
        }


    }
}
module.exports = {Login}
