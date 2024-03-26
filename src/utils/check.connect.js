const mongoose = require("mongoose")
const process = require('process')
const os = require("os")

const _SECOND = 5000

const countConnect = () => {
    const numConnect = mongoose.connections.length
    console.log(`Number of connecttion: ${numConnect}`)
}

const checkOverLoad = ()=>{
    setInterval(()=>{
        const numConnections = mongoose.connections.length
        const numCores = os.cpus().length
        const mem = process.memoryUsage().rss
        const maxConnection = numCores*5

        console.log(`Active connecttion: ${numConnections}`)
        console.log(`Max connecttion: ${maxConnection}`)
        console.log(`Memory usage: ${mem/1024/1024} MB`)

        if (numConnections > maxConnection) {
            console.log(`Server over load`)
        }
    }, _SECOND)
}

module.exports = {
    countConnect,
    checkOverLoad
}