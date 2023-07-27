import {useState} from "react";

function App() {
  const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(newItem);
    setTodos((currentTodos) => {
      return [...currentTodos, {title: newItem, completed: false}];
    });
  }
  return (
    <>
      <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            type="text"
            id="item"
          />
        </div>
        <button className="btn">Add</button>
      </form>
      <ul>
        {todos.length === 0 ? (
          <h1>No Todos</h1>
        ) : (
          <h1 className="header">Todo List</h1>
        )}
        {todos.map((todo) => {
          return <li>{todo.title}</li>;
        })}
      </ul>
    </>
  );
}

export default App;
