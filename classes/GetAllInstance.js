class GetAllInstance{

    constructor(model){
        this.model = model

    }
    
    GetAll = async (req, res, next) => {

        try{
            let instance = await this.model.findAll({
                attributes: {exclude: ['password', 'id']}
            })
            res.status(200).json(instance)
    
        }catch(err){
            console.log(err)
            res.status(404).send(err.message)
        }
       
    }



}
module.exports = {GetAllInstance}