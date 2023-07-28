import {useState} from "react";
import {v4 as uuidv4} from "uuid";

function App() {
  const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    if (newItem === "") return;
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        {id: uuidv4(), title: newItem, completed: false},
      ];
    });
    setNewItem("");
  }

  function toggleTodo(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return {...todo, completed};
        }
        return todo;
      });
    });
  }

  function deleteTodo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
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
      {todos.length === 0 ? (
        <h1>No Todos</h1>
      ) : (
        <h1 className="header">Todo List</h1>
      )}
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <label>
                <input
                  onChange={(e) => toggleTodo(todo.id, e.target.checked)}
                  type="checkbox"
                  checked={todo.checked}
                />
                {todo.title}
              </label>
              <button
                className="btn btn-danger"
                onClick={() => deleteTodo(todo.id)}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
