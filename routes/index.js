const {Router} = require('express')
const HttpStatus = require('http-status-codes')

const router = Router()

router.get('/user',(req,res)=>{
    console.log(req.body)
    return res.status(HttpStatus.StatusCodes.OK).json({sucess:true,user:{name:'mario'}})
})
router.post('/user',(req,res)=>{
    console.log(req.body)
    return res.status(HttpStatus.StatusCodes.OK).json({sucess:true,user:{name:'mario'}})
})

module.exports = router