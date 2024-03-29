const shopModel = require('../models/shop.model')
const bcrypt = require('bcrypt')
const crypto =  require('crypto')
const KeyTokenService = require('./keyToken.service')
const KeyTokenService = require('../auth/authUtils')

const RoleShop = {
    SHOP: 'SHOP',
    WRITER: 'WRITE',
    EDITOR: 'EDITOR',
    ADMIN: 'ADMIN'
}

class AccessService{
    static signUp = async (name, email, password) =>{
        try {
            // check email exist
            const holderShop = await shopModel.findOne({email}).lean()
            if(holderShop){
                return{
                    code: 'xxxx',
                    message: 'Shop already registered!'
                }
            }
            const passwordHash = await bcrypt.hash(password,10)
            const newShop = await shopModel.create({
                name, email, passwordHash, roles: RoleShop.SHOP
            })
            if (newShop) {
                //create privateKey, publicKey
                const {privateKey, publicKey}  = crypto.generateKeyPairSync('rsa', {
                    modulusLength: 4096
                })

                console.log({privateKey, publicKey}) //save collection KeyStore
                const publicKeyString  =  await KeyTokenService.createKetToken({
                    userId: newShop._id,
                    publicKey
                })
                if (!publicKey) {
                    return {
                        code: 'xxx',
                        message: error.message,
                        status: 'error'
                    }
                }
                //create token pair
                const tokens
            }
        } catch (error) {
            return {
                code: 'xxx',
                message: error.message,
                status: 'error'
            }
        }
    }
}