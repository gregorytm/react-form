import React, { useState } from "react";

const NewTodoForm = ({ addTodo }) => {
  const INITAL_STATE = {
    Todo: "",
  };
  const [formData, setFormData] = useState(INITAL_STATE);
  const handleChange = (e) => {
    const { todo, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [todo]: value,
    }));
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
        value={formData.name}
        onChange={handleChange}
      />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodoForm;
