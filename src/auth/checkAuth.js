'use strict'
const { findApiKeyById } = require("../services/apikey.service")

const HEADER = {
    API_KEY: 'x-api-key',
    AUTHORIZATION:  'athorization'
}

const apiKey = async (req, res, next) =>{
    try {
        const key = req.headers[HEADER.API_KEY]?.toString()
        if (!key) {
            return res.status(403).json({
                message: 'Forbiden Error'
            })
        }
        //find object key in db
        const objectKey = await findApiKeyById(key)
        if (!objectKey) {
            return res.status(403).json({
                message: 'Forbidden Error'
            })
        }
        req.objectKey = objectKey
        return next()
    }catch(error) {

    }
}

const permission = (permission) =>{
    return(req, res, next) =>{
        if (!req.objectKey.permissions) {
            res.status(403).json({
                message: 'permission denied'
            })
        }
        console.log(`permission: `, req.objectKey.permissions)
        const isExistPermission = req.objectKey.permissions.includes(permission)
        if (!isExistPermission) {
            res.status(403).json({
                message: 'permission denied'
            })
        }
        return next()
    }
}
module.exports = {
    apiKey,
    permission
}