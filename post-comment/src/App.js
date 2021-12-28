import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const initialList = Object.freeze([
  {
    id: "a",
    name: "Robin",
  },
  {
    id: "b",
    name: "Hood",
  },
]);

const AddItem = ({ onChange, name, onAdd, handleKeyDown }) => (
  <div>
    <div>
      <input
        type="text"
        value={name}
        onChange={onChange}
        onKeyDown={handleKeyDown}
      />
      <button type="button" onClick={onAdd}>
        Add
      </button>
    </div>
  </div>
);

const List = ({ list }) => (
  <form>
    {list.map((item) => (
      <li key={item.id}>{item.name}</li>
    ))}
  </form>
);

const App = () => {
  const [list, setList] = useState(initialList);
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
