const router = require("express").Router()
const profileRoutes = require("./profile-routes")
const userRoutes = require("./user-routes")
router.use("/chat", userRoutes)

module.exports = router