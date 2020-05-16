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

    await TodosService.insertToDo(req.app.get("db"), newTodo).then((todo) => {
      res.status(201).json(todo);
    });
  } catch (error) {
    console.error(error.message);
  }
});

//get all todos

todosRouter.route("/").get(async (req, res) => {
  try {
    ToDosService;
  } catch (error) {
    console.error(error.message);
  }
});

//get a todo

//update a todo

//delete a todo

module.exports = todosRouter;
