/* cSpell:disable */
const express = require("express");
const todosRouter = express.Router();
const jsonBodyParser = express.json();

//Routes

//create a todo
todosRouter.route("/").post(jsonBodyParser, async (req, res, next) => {
  try {
    console.log(req.body);
  } catch (error) {
    console.error(error.message);
  }
});

//get all todos

//get a todo

//update a todo

//delete a todo

module.exports = todosRouter;
