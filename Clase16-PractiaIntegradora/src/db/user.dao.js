import mongoose from "mongoose";


mongoose.connect('mongodb+srv://jonadmi:Jona123456@cluster0.pgoh4mn.mongodb.net/?retryWrites=true&w=majority', error => {
    if(error){
    console.log('rompio')
        process.exit()
    }
})

class ContendorMongoDb {
    constructor(collection, schema){
        this.userCollection = mongoose.model(collection, schema)
    }
    async getUsers (){
        try {
            let users = await this.userCollection.find()
            return users
        } catch (error) {
            console.log(error)
        }
    }

    async sevaUser(user) {
        try {
            let result = await this.usercollection.create(user)
            return result
        } catch (error) {
            console.log(error)
        }
    }
}

export default ContendorMongoDb