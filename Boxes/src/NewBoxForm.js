import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function NewBoxForm({ createBox }) {
  const [formData, setFormData] = useState({
    height: "",
    width: "",
    color: "",
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const getInput = (evt) => {
    evt.preventDefault();
    createBox({ ...formData, id: uuid() });
    setFormData({ height: "", width: "", color: "" });
  };

  return (
    <div>
      <form onSubmit={getInput}>
        <div>
          <label htmlFor="height">height</label>
          <input
            onChange={handleChange}
            type="text"
            name="height"
            value={formData.height}
            id="height"
          />
        </div>

        <div>
          <label htmlFor="width">width</label>
          <input
            onChange={handleChange}
            type="text"
            name="width"
            value={formData.width}
            id="width"
          />
        </div>

        <div>
          <label htmlFor="color">color</label>
          <input
            onChange={handleChange}
            type="text"
            name="color"
            value={formData.color}
            id="color"
          />
        </div>
        <button id="oneButton">Add box</button>
      </form>
    </div>
  );
}

export default NewBoxForm;
