import React, { useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  const [temp, setTemp] = useState();

  function handleInput(event) {
    setTemp(event.target.value);
  }
  function handleInsert() {
    const value = temp;
    setTemp("");
    setItems((prev) => {
      return [...prev, value];
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" value={temp} onChange={handleInput} />
        <button onClick={handleInsert}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
