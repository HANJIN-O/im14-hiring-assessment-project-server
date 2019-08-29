const sequelize = require("./scheme");

module.exports = {
  users: {
    get: async function(req) {
      let result; 
      return result = await sequelize.users.findAll().then(res => {
        let result = [];
        return res.map(item => item.dataValues);
      });
    }
  },
  todos: {
    get: async function(req) {
      let params = null;
      let result;
      if (req.url.includes("?")) {
        params = req.url
          .match(/\?[\w\W]*/g)[0]
          .slice(1)
          .split("=");
        return result = await sequelize.todos.findAll({where:{userId:params[1]}}).then(res => {
          return res.map(item => item.dataValues);
        }).catch(err => console.log(err));
      }
      else {
        return result = await sequelize.todos.findAll().then(res => {
          return res.map(item => item.dataValues);
        }).catch(err => console.log(err));
      }
    }
  }
};
