const {Sequelize, DataTypes, Model} = require("sequelize")
const sequelize = require("../connection/connection")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

class User extends Model{
    checkPassword = (plain) => {
        return bcrypt.compare(plain, this.password)
    }
    generateToken = async ({email, id}) => {
        return await jwt.sign({email, id}, process.env.MEXICO_CITY, {expiresIn: "1hr"});
    }
    
};

User.init({
    first_name: {
        type: DataTypes.STRING,
        allowNull: false,
        len: [1,200]
    },
    last_name:{
        type: DataTypes.STRING,
        allowNull: false,
        len: [1,200]
    },
    email:{
        type: DataTypes.STRING,
        unique: {
            args: true,
            msg: "taphous"

        },
        validate:{
            isEmail: {
                args: true,
                msg: "Email must be valid."

            },
        },
        
    },
    password:{
        type: DataTypes.STRING,
        validate: {
            is: {
               args: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/i,
               msg: "Password must contain, lower and upper charecters, number, special charecters, and be at least 8 charecters long."
            }
          },
        

    }

},{
    sequelize,
    modelName: 'User',
})
function hashPassword(user){
    return bcrypt.hash(user.password, 10)
        .then(hash => {
            user.password = hash;
        })
        .catch(err => { 
            throw new Error(); 
        });
}

User.beforeCreate(hashPassword)
User.beforeUpdate(hashPassword)

module.exports = User