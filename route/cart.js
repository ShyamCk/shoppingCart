const express = require('express');
const router = express.Router();

const cartController = require('../controller/cart.controller')

router.get('', (req, res) => {
    dbConnect.query('SELECT * FROM products', (error,rows ) => {
     
        if(error){
           res.render('home', { products: [] });
        } else {
            res.render('home', { products: rows });
        }
    })    
});

router.post('/addToCart', (req, res) => {
    let product_id = req.body.product;
    let session_id = req.session.session_id;
    let cart = req.session.cart;

    
    if(Object.keys(cart).filter(function(key) {
        return key == product_id;
    }).length){
        cart[product_id]['quantity'] = cart[product_id]['quantity']+1;
        cartController.updateCart({ product_id:product_id,quantity: (cart[product_id]['quantity']), price: 100, session_id: session_id, user_id: 23 });
    } else {
        cart[product_id] = { quantity:1, price: 10 };
        cartController.addToCart({ product_id:product_id,quantity: 1, price: 100, session_id: session_id, user_id: 23 });
    }
    req.session.cart = cart;
    res.send({status:true,message:'Product Added'});    
});

router.get('/cart', async(req, res)=> {
    try{
        let list = await cartController.getCart({session_id:req.session.session_id });
        res.render('cart', {cart:list});
    } catch(e) {
        console.log(e);
    }
});

module.exports = router;