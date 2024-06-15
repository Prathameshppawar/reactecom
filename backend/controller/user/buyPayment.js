// const userModel = require("../../models/userModel")
const stripe = require('stripe')('sk_test_51PM5SBISjyo5uhiTDK4Xskta0yo8pK7iqb6DWb7Ia9gQ7KiHSNsNrYxl6aV06RZV8BrWrQzQ9F1cHxSzY3mJbgMU00wijKbP4l')
async function makePayment(req,res){
    
    const {products} = req.body;
    console.log(products.productName)
    
    
    const lineItems = [{
        price_data: {
          currency: "inr",
          product_data: {
            name: products.productName,
            // images: [product.productImage] // assuming productImage is an array
          },
          unit_amount: products.sellingPrice * 100,
        },
        quantity: 1,
      }];
      
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