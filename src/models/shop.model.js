const {model, Schema, Types} = require('mongoose')

const DOCUMENT_NAME = 'Shop'
const COLLECTION_NAME = 'Shops'

var shopSchema = new Schema({
    name:{
        type: String,
        require: true,
        maxLength: 150
    },
    email:{
        type: String, 
        unique: true,
        trim: true
    },
    password:{
        type: String, 
        require: true
    },
    status:{
        type: String, 
        enum: ['active', 'inactive'],
        default: 'inactive'
    },
    verify:{
        type: Schema.Types.Boolean,
        default: false
    },
    roles:{
        type: Array,
        default: []
    }
},{
    collection: COLLECTION_NAME,
    timestamps: true
})

module.exports = model(DOCUMENT_NAME, shopSchema)
