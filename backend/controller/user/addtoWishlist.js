const wishlistModel = require("../../models/wishlistModel")

const addtoWishlist = async(req,res)=>{
    try{
        const { productId } = req?.body
        const currentUser = req.userId

        // Check if the product is already in the current user's wishlist
        const isProductAvailable = await wishlistModel.findOne({ productId, userId: currentUser })

        console.log("isProductAvailable  for wishlist ",isProductAvailable)

        if(isProductAvailable){
            return res.json({
                message : "Already exits in your Wishlist❤️",
                success : false,
                error : true
            })
        }

        const payload  = {
            productId : productId,
            userId : currentUser,
        }

        const newwishlist = new wishlistModel(payload)
        const savewishlist = await newwishlist.save()

        return res.json({
            data : savewishlist,
            message : "Product Added in Wishlist❤️",
            success : true,
            error : false
        })
        

    }catch(err){
        res.json({
            message : err?.message || err,
            error : true,
            success : false
        })
    }
}



module.exports = addtoWishlist