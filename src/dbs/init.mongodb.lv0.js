const mongoose =  require("mongoose")

const connectionString = `mongodb://localhost:27017/PersonalBlog`
mongoose.connect(connectionString).then(_ => console.log(`Connect to MongoDB successfully`))
.catch(err => console.log(`Connect Error ${err}`))

if (1 === 0) {
    mongose.set('debug', true)
    mongose.set('debug', {color: true})
}

module.exports = mongoose