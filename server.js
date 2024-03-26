const app = require("./app");
const PORT = 6868
const server = app.listen(PORT, ()=>{
    console.log(`Server start with port ${PORT}`)
})