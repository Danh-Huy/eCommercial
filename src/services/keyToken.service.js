'use strict'

const keyTokenModel  = require('../models/keytoken.model')

class KeyTokenService{
    static createKetToken = async ({userId, publicKey}) =>{
        try {
            const publicKeyString  = publicKey.toString()
            const token =  await keyTokenModel.create({
                user: userId,
                publicKey: publicKeyString
            })
            return token ? publicKeyString : null
        } catch (error) {
            return error
        }
    }
}

module.exports = KeyTokenService