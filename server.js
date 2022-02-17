const express = require("express")
const { AuthenticateUser } = require("./Auth/authenticate")
const app = express()
const sequelize = require("./connection/connection")
require("dotenv").config()
const PORT = process.env.PORT || 8080
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(AuthenticateUser)
app.use(require("./routes"))
sequelize.sync({force: false}).then(()=>{
    app.listen(PORT, ()=>{
        console.log("app is listening on http://localhost:" + PORT)
    })
})
