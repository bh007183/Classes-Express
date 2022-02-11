const {Sequelize, DataTypes, Model} = require("sequelize")
const sequelize = require("../connection/connection")
class Profile extends Model{};

Profile.init({
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        
    },

    call_sign: {
        type: DataTypes.STRING,
        allowNull: false,
        len: [1,200]
    },

}, {
    sequelize,
    modelName: "Profile"

})

module.exports = Profile
