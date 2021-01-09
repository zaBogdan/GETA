const {StatusCodes} = require('http-status-codes')

var fruits = []

function getFruits(req, res){
    return res.status(StatusCodes.OK).json({
        success: true,
        fruits
    })
}
function postFruits(req, res){
    let fruit = req.body.fruit
    console.log(fruit)
    fruits = [...fruits, fruit]
    return res.status(StatusCodes.CREATED).json({
        fruit
    })
}
function patchFruits(req, res){
    return res.status(StatusCodes.OK).json({
        success: true,
        fruits:['mere', 'banane']
    })
}
function deleteFruits(req, res){
    return res.status(StatusCodes.OK).json({
        success: true,
        fruits:['mere', 'banane']
    })
}

module.exports= {
    getFruits, postFruits, patchFruits, deleteFruits
}