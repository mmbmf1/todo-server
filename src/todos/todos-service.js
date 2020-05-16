const TodosService = {
  insertTodo(db, newTodo) {
    return db
      .insert(newTodo)
      .into("todos")
      .returning("*")
      .then((todo) => todo);
  },

  getAllTodos(db) {
    return db.from("todos").select("*");
  },

  getTodoById(db, todo_id) {
    return db.from("todos").select("*").where("todo_id", todo_id);
  },

  updateTodo(db, todo_id, newDescription) {
    return db
      .from("todos")
      .where({ todo_id })
      .update(newDescription)
      .returning("*")
      .then((newTodo) => newTodo);
  },

  deleteTodo(db, todo_id) {
    return db.from("todos").where({ todo_id }).delete();
  },
};

module.exports = TodosService;
