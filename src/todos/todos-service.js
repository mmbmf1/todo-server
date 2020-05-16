const TodosService = {
  insertTodo(db, newTodo) {
    return db
      .insert(newTodo)
      .into("todos")
      .returning("*")
      .then(([todo]) => todo);
  },

  getAllTodos() {
    console.log("Getting all todos");
  },
};

module.exports = TodosService;
