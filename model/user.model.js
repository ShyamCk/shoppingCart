module.exports = (sequelize, Sequelize) => {
  const Users = sequelize.define("users", {
    id : {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    }
  });


  return Users;
};