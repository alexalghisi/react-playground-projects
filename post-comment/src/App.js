import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import List, { AddItem } from "./list";

const initialDemoList = Object.freeze([
  {
    id: "a",
    name: "Robin",
  },
  {
    id: "b",
    name: "Hood",
  },
]);

const App = () => {
  const [list, setList] = useState(initialDemoList);
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleAdd();
    }
  };

  const handleAdd = () => {
    const newList = list.concat({ name, id: uuidv4() });
    setList(newList);
    setName("");
  };

  return (
    <div>
      <AddItem
        name={name}
        onChange={handleChange}
        onAdd={handleAdd}
        handleKeyDown={handleKeyDown}
      />
      <List list={list} />
    </div>
  );
};

export default App;
