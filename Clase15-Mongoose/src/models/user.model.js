import mongoose from 'mongoose'

const userCollection = 'users'

const userSckema = mongoose.Schema({
    name: {type: String, required: true, max: 100},
    lasname: {type: String, required: true, max: 100}, 
    email: {type: String, required: true, max: 100}, 
    password: {type: String, required: true, max: 100}
})

const userModel = mongoose.model(userCollection, userSckema)

export default userModel