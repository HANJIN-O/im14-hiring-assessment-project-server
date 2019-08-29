const model = require('../model');

module.exports = {
  users:{
    get: function(req){
      return model.users.get(req);
    }
  },
  todos:{
    get:function(req){
      return model.todos.get(req);
    }
  }
}