module.exports = (sequelize, Sequelize) => {
  const CartItem = sequelize.define("CartItem", {
    id : {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    quantity: {
      type: Sequelize.INTEGER
    }
  });
  
  return CartItem;
};