const controller = require('../controller')

module.exports = function(app)
{
  app.get('/users', async (req, res) => {
    let result = await controller.users.get(req);
    res.send(result);
  })

  app.get('/todos', async (req, res) => {
    let result = await controller.todos.get(req);
    res.send(result);
  })
}