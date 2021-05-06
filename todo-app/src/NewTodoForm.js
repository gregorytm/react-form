import React, { useState } from "react";

const NewTodoForm = ({ addTodo }) => {
  const INITAL_STATE = {
    todo: "",
  };
  const [formData, setFormData] = useState(INITAL_STATE);
  console.log(formData);
  const handleChange = (e) => {
    console.log(e);
    const todo = e.target.value;
    setFormData({ todo });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({ ...formData });
    setFormData(INITAL_STATE);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="todo">Product</label>
      <input
        id="todo"
        type="text"
        name="name"
        placeholder="Todo"
        value={formData.todo}
        onChange={handleChange}
      />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodoForm;
