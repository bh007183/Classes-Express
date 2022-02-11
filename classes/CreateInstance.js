

class CreateInstance{

    constructor(model){
        this.model = model

    }
    
    Create = async (req, res, next) => {

        try{
            let instance = await this.model.create(req.body)
            res.status(201).json(instance)
    
        }catch(err){
            console.log(err)
            res.status(404).send(err.message)
        }
       
    }



}
module.exports = {CreateInstance}
