var sequelize = {};
var Sequelize = require("sequelize");
var db = new Sequelize("ha14", "root", "", {
  host: "localhost",
  dialect: "mysql"
});

var Users = db.define("Users", {
  name: Sequelize.STRING,
  username: Sequelize.STRING,
  email: Sequelize.STRING,
  phone: Sequelize.STRING,
  website: Sequelize.STRING,
  province: Sequelize.STRING,
  city: Sequelize.STRING,
  district: Sequelize.STRING,
  street: Sequelize.STRING,
  zipcode: Sequelize.STRING,
  createdAt:{
    type: Sequelize.DATE(3),
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP(3)')
  },
  updatedAt:{
    type: Sequelize.DATE(3),
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP(3)')
  }
});

var Todos = db.define('Todos', {
  title:Sequelize.STRING,
  completed:Sequelize.BOOLEAN,
  createdAt:{
    type: Sequelize.DATE(3),
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP(3)')
  },
  updatedAt:{
    type: Sequelize.DATE(3),
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3)')
  }
})

Todos.belongsTo(Users, {foreignKey: 'userId'})

sequelize.users = Users;
sequelize.todos = Todos;
sequelize.users.sync({alter: true}).then(()=>sequelize.todos.sync({alter: true}).then(()=> console.log('done!!!!!!!!!!!')))


module.exports = sequelize;