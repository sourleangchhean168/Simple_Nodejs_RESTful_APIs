'use strict';
module.exports = function(app) {
  var todoList = require('../controllers/todoListController');


  // todoList Routes
  app.route('/tasks/add/name=:name&des=:des&phone=:phone')
    .post(todoList.createnewname);

app.route('/tasks')
    .get(todoList.list_all_tasks)
    .post(todoList.create_a_task);

app.route('/tasks/delete_all')
   .get(todoList.delete_all);


  app.route('/tasks/:taskId')
    .get(todoList.read_a_task)
    .put(todoList.update_a_task)
    .delete(todoList.delete_a_task);
};