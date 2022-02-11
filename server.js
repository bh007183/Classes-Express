const express = require("express")
const app = express()
const sequelize = require("./connection/connection")
require("dotenv").config()
const PORT = process.env.PORT || 8080
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(require("./routes"))
sequelize.sync({force: false}).then(()=>{
    app.listen(PORT, ()=>{
        console.log("app is listening on http://localhost:" + PORT)
    })
})
