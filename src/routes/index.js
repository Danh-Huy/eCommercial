const express=  require('express')

const router = express.Router()

router.use('/v1/api', require('./access'))

router.get('/', (req, res, next)=>{
    const strCompress = 'Hello Every One'
    return res.status(200).json({
        message: 'Welcome to HuyLe Shop',
    })
})

module.exports = router