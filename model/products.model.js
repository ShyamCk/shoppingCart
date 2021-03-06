module.exports = (sequelize, Sequelize) => {
  const Products = sequelize.define("product", {
    id : {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
      type: Sequelize.STRING
    },
    price: {
      type: Sequelize.FLOAT
    },
    image: {
      type: Sequelize.STRING
    }
  });


  return Products;
};