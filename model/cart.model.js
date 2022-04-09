module.exports = (sequelize, Sequelize) => {
  const Cart = sequelize.define("cart", {
    id : {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    quantity: {
      type: Sequelize.INTEGER
    },
    price: {
      type: Sequelize.FLOAT
    },
    session_id: {
      type: Sequelize.STRING
    },
  });
  
  Cart.test = () => {
    async function test1(){
      try{
        let t= await sequelize.query("SELECT * FROM `carts`", { type: sequelize.QueryTypes.SELECT});
        // resolve(t);
        console.log(t);
      } catch(e){
        console.log(e);
      }
      return a;
    }
    return test1();
  };
  return Cart;
}; 