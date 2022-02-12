

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
    
        if(!instance){
            res.status(404).json({message: "Invalid credentials."})
        }
        console.log(await instance.checkPassword(req.body.password))
        if(await instance.checkPassword(req.body.password)){
            console.log(instance.generateToken(instance))
            res.status(200).json({token: instance.generateToken(instance)})
        }


    }
}
module.exports = {Login}
