const {Schema, model, default: mongoose} = require('mongoose')

const DOCUMENT_NAME = 'Key'
const COLLECTION_NAME = 'Keys'

var keyTokenModel = new Schema({
    user:{
        type: Schema.Types.ObjectId,
        require: true,
        ref: 'Shop'
    },
    publicKey:{
        type: String, require: true
    },
    privateKey:{
        type: String, require: true
    },
    refreshToken:{
        type: Array, default: []
    }
},{
    collection: COLLECTION_NAME,
    timestamps: true
})

module.exports = model(DOCUMENT_NAME, keyTokenModel)