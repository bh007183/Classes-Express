const CreateInstance = require("../classes/CreateInstance")
const {GetAllInstance} = require("../classes/GetAllInstance")
const {Login} = require("../classes/Login")
const {User, Profile} = require("../models")

const router = require("express").Router()
router.route("/user")
.post(new CreateInstance(User).GenericCreate)
.get(new GetAllInstance(User).GetAll)

router.route("/profile")
.post(new CreateInstance(Profile).CurrentUserAssociation)

router.route("/user/:id")
.get()
.put()
.delete()

router.route("/jwt/create").post(new Login(User).SignIn)



module.exports = router



async function waitServer(){
    server.start()
    applymiddl
}