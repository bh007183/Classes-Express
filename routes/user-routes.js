const {CreateInstance} = require("../classes/CreateInstance")
const {GetAllInstance} = require("../classes/GetAllInstance")
const {Login} = require("../classes/Login")
const {User} = require("../models")

const router = require("express").Router()
router.route("/user")
.post(new CreateInstance(User).Create)
.get(new GetAllInstance(User).GetAll)

router.route("/user/:id")
.get()
.put()
.delete()

router.route("/jwt/create").post(new Login(User).SignIn)



module.exports = router