const  mongoose  = require('mongoose');

const userSchema = mongoose.Schema({
    userName:{
        type:String,
        require:true
    },
    phoneNumber:{
        type:Number,
        require:true,
        unique: true
    },
    email:{
        type:String,
        require:true,
        unique: true,
    },
    password:{
        type:String,
        require:true
    }

},
{
    timestamps:true,
}
)
const Users = mongoose.model("users",userSchema)

module.exports = Users