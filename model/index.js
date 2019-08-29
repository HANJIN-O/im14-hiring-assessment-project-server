const db = require('../db');

module.exports = {
  users:{
    get:async function(req){
      return db.users.get(req);
    }
  },
  todos :{
    get: function(req){
      return db.todos.get(req);
    }
  }
}