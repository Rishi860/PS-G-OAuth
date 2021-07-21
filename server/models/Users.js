const { model, Schema } = require("mongoose");

const UserSchema = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    match: /.+@.+\..+/,
    lowercase: true,
    unique: true,
    dropDups: true,
  },
  imageUrl:{
    type:String,
    default: 'https://img.icons8.com/plasticine/2x/jewelry.png'
  },
  created:{ 
    type: Date,
    default: Date.now,
  },
})

const Users = model("User", UserSchema);
module.exports = Users
