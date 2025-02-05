// const userModel = require("../../models/userModel")
const stripe = require('stripe')('sk_test_51PM5SBISjyo5uhiTDK4Xskta0yo8pK7iqb6DWb7Ia9gQ7KiHSNsNrYxl6aV06RZV8BrWrQzQ9F1cHxSzY3mJbgMU00wijKbP4l')
async function makePayment(req,res){
    
    const {products} = req.body;
    // console.log(products)

    
    const lineItems = products.map((product)=>({
        price_data:{
            currency:"inr",
            product_data:{
                name:product.productId.productName,
                // images:[product.productId.productImage]
            },
            unit_amount:product.productId.sellingPrice*100,
        },
        // price: 'price_'+product.productId._id,
        quantity:product.quantity,
        
        }
        ),
    // console.log('price = ', products[0].productId.price)
);
    // console.log(lineItems[0].price_data.product_data)

    // try{    
        const session = await stripe.checkout.sessions.create({
        payment_method_types:["card"],
        line_items:lineItems,
        mode:"payment",
        success_url:"http://localhost:3000/sucess",
        cancel_url:"http://localhost:3000/cancel",
        });
    // }
    // catch(error){
    //     console.log('error = ',error.message) 
    // }
    // console.log(session)

    res.json({id:session.id})

}

module.exports = makePayment