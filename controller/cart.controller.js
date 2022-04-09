const db = require("../model");
const Cart = db.cart;
const Products = db.products;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.addToCart = (obj) => {

  // Create a Tutorial
  const cart = {
    product_id: obj.product_id,
    product_name: obj.product_name,
    quantity: obj.quantity,
    price: obj.price,
    session_id: obj.session_id,
    user_id: obj.user_id
  };


async function runQuery(){
  await Cart.create(cart)
    .then(data => {
      return true;
    })
    .catch(err => {
      return false;
    });
};
return runQuery();

}


exports.getCart =  function (obj) {
  return Cart.findAll({ session_id: obj.session_id , product_id: obj.product_id });   
}


 
// Create and Save a new Tutorial
exports.create = (req, res) => {
  
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  
};

// Update a Tutorial by the id in the request
exports.updateCart = (obj) => {

async function runQuery(){

  await Cart.update(obj, {
    where: { session_id: obj.session_id, product_id: obj.product_id }
  })
    .then(num => {
      return true;
    })
    .catch(err => {
      return false;
    });
};
return runQuery();
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  
};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {
  
};
