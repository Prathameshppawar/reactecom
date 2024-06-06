const wishlistModel = require("../../models/wishlistModel")

const viewWishlist = async(req,res)=>{
    try{
        // console.log('inside view wishlist')
        const currentUser = req.userId
        const allProduct = await wishlistModel.find({
            userId : currentUser
        }).populate("productId")
        // console.log(allProduct)
        res.json({
            data : allProduct,
            success : true,
            error : false
        })

        // console.log(allProduct)

    }catch(err){
        res.json({
            message : err.message || err,
            error : true,
            success : false
        })
    }
}

module.exports =  viewWishlist