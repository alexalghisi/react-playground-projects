import React from "react";

const List = ({ list }) => (
  <form>
    {list.map((item) => (
      <li key={item.id}>{item.name}</li>
    ))}
  </form>
);

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

export { AddItem };
export default List;
