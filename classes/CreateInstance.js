
const {AuthenticateUser} = require("../Auth/authenticate")
class CreateInstance{

    constructor(model, field){
        this.model = model
        // this.field = field

    }
    
    GenericCreate = async (req, res) => {

        try{
            let instance = await this.model.create(req.body)
            res.status(201).json(instance)
    
        }catch(err){
            res.status(404).send(err.message)
        }
       
    }
    // Only use method if Primary Key is the same as Foreign Key.
    CurrentUserAssociation = async (req, res) => {
        let fkey = await this.model.primaryKeyAttributes[0]
        
        let profile = {
            id: req.user_id,
            call_sign: req.body.call_sign
        }
        try{
            let instance = await this.model.create(profile)
            res.sendStatus(200)
        }catch(err){
            res.status(404).send(err.message)
        }
        






    }
    CurrentUserChildModel = (string) => {

    }




}
module.exports = CreateInstance
