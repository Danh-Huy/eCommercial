const shopModel = require('../models/shop.model')

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
        } catch (error) {
            return {
                code: 'xxx',
                message: error.message,
                status: 'error'
            }
        }
    }
}