const wishlistModel = require("../../models/wishlistModel")

const deleteWishlistProduct = async(req,res)=>{
    console.log('inside delete')
    try{
        const currentUserId = req.userId 
        const productid = req.body._id

        const deleteProduct = await wishlistModel.deleteOne({ _id : productid})

        res.json({
            message : "Product Deleted From Wishlist",
            error : false,
            success : true,
            data : deleteProduct
        })

    }catch(err){
        res.json({
            message : err?.message || err,
            error : true,
            success : false
        })
    }
}

module.exports = deleteWishlistProduct