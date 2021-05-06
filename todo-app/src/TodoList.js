import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";

const TodoList = () => {
  const INITAL_STATE = [
    { id: uuid(), todo: "Mow the grass" },
    { id: uuid(), todo: "Feed the chickens" },
  ];
  const [todos, setTodo] = useState(INITAL_STATE);
  const addTodo = (newTodo) => {
    setTodo((todo) => [...todo, { ...newTodo, id: uuid() }]);
  };
  return (
    <div>
      <h3>Todo List</h3>
      <NewTodoForm addTodo={addTodo} />
      <div>
        {todos.map(({ id, todo }) => (
          <Todo id={id} todo={todo} key={id} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
