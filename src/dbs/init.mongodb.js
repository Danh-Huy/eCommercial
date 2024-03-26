const mongoose =  require("mongoose")

const connectionString = `mongodb://localhost:27017/PersonalBlog`

class Database{
    constructor(){
        this.connect();
    }

    connect(type = 'mongodb'){
        if (1 === 0) {
            mongose.set('debug', true)
            mongose.set('debug', {color: true})
        }
        mongoose.connect(connectionString, {
            maxPoolSize: 50
        }).then(_ => console.log(`Connect to MongoDB successfully`))
                .catch(err => console.log(`Connect Error ${err}`))
    }
    static getInstance(){
        if (!Database.instance) {
            Database.instance = new Database();
        }
        return Database.instance
    }
}

mongoInstance = Database.getInstance()
module.exports = mongoInstance