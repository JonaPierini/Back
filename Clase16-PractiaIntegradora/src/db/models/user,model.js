import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: {type: String, required: true, max: 100},
    lasname: {type: String, required: true, max: 100}, 
    email: {type: String, required: true, max: 100}, 
    password: {type: String, required: true, max: 100}
})

export default userSchema