const User = require("./User")
const Profile = require("./Profile")

User.hasOne(Profile,{
    foreignKey: {
        name: "id"
    },
    onDelete: "cascade",
    hooks: true,
})
Profile.belongsTo(User,{
    foreignKey: {
        name: "id"
    },
})
module.exports = {User, Profile}