const mongoose=require('mongoose')

const UserModel=mongoose.Schema(
    {
        name:{type:String},
        username:{type:String , unique: true},
        dob:{type:String}
    }
)

module.exports=mongoose.model('users',UserModel)