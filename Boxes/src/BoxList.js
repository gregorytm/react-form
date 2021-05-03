import React, { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

function BoxList() {
  const [boxes, setBoxes] = useState([]);
  const addBox = (userBox) => {
    setBoxes((boxes) => [...boxes, userBox]);
  };
  const remove = (id) => {
    setBoxes((boxes) => boxes.filter((box) => box.id !== id));
  };

  const boxProperties = boxes.map((box) => (
    <Box
      key={box.id}
      id={box.id}
      width={box.width}
      height={box.height}
      color={box.color}
      handleRemove={remove}
    />
  ));

  return (
    <div>
      <NewBoxForm createBox={addBox} />
      {boxProperties}
    </div>
  );
}

export default BoxList;
