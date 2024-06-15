const addToCartModel = require("../../models/cartProduct")

const addToCartController = async(req,res)=>{
    try{
        const { productId } = req?.body
        const currentUser = req.userId

        // Check if the product is already in the current user's cart
        const isProductAvailable = await addToCartModel.findOne({ productId, userId: currentUser })

        // console.log("isProductAvailable  for cart  ",isProductAvailable)

        if(isProductAvailable){
            return res.json({
                message : "Already exits in your Cart🛒",
                success : false,
                error : true
            })
        }

        const payload  = {
            productId : productId,
            quantity : 1,
            userId : currentUser,
        }

        const newAddToCart = new addToCartModel(payload)
        const saveProduct = await newAddToCart.save()

        return res.json({
            data : saveProduct,
            message : "Product Added in Cart🛒",
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



module.exports = addToCartController