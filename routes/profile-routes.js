

const router = require("express").Router()
const {Profile} = require("../models")

router.post("/profile", async(req, res)=>{
    try{
        let profile = await Profile.create(req.body)
        res.status(201).json(profile)

    }catch(err){
        res.status(404).send(err.message)
    }

})
module.exports = router