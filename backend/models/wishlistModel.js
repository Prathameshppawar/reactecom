const mongoose = require('mongoose')

const wishlist = mongoose.Schema({
   productId : {
        ref : 'product',
        type : String,
   },
   userId : String,
},{
    timestamps : true
})


const wishlistModel = mongoose.model("wishlist",wishlist)

module.exports = wishlistModel