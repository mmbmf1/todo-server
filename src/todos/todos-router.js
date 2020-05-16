/* cSpell:disable */
const express = require("express");
const TodosService = require("./todos-service");
const todosRouter = express.Router();
const jsonBodyParser = express.json();

//Routes

//create a todo
todosRouter.route("/").post(jsonBodyParser, async (req, res) => {
  try {
    const { description } = req.body;
    const newTodo = { description };

    await TodosService.insertTodo(req.app.get("db"), newTodo).then((todo) => {
      res.status(201).json(todo);
    });
  } catch (error) {
    console.error(error.message);
  }
});

//get all todos

todosRouter.route("/").get(async (req, res) => {
  try {
    await TodosService.getAllTodos(req.app.get("db")).then((todos) =>
      res.json(todos)
    );
  } catch (error) {
    console.error(error.message);
  }
});

//get a todo

todosRouter.route("/todo/:todo_id").get(async (req, res) => {
  try {
    const { todo_id } = req.params;

    await TodosService.getTodoById(req.app.get("db"), todo_id).then((todo) =>
      res.json(todo)
    );
  } catch (error) {
    console.error(error.message);
  }
});

//update a todo

todosRouter.route("/todo/:todo_id").patch(jsonBodyParser, async (req, res) => {
  try {
    const { todo_id } = req.params;
    const { description } = req.body;
    const newDescription = { description };

    await TodosService.updateTodo(
      req.app.get("db"),
      todo_id,
      newDescription
    ).then((todo) => {
      res.json(todo);
    });
  } catch (error) {
    console.error(error.message);
  }
});

//delete a todo

todosRouter.route("/todo/:todo_id").delete(async (req, res) => {
  try {
    const { todo_id } = req.params;

    await TodosService.deleteTodo(req.app.get("db"), todo_id).then(() => {
      res.json("Todo deleted");
    });
  } catch (error) {
    console.error(error.message);
  }
});

module.exports = todosRouter;
