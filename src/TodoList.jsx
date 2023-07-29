import TodoItem from "./TodoItem";

export default function TodoList({todos, toggleTodo, deleteTodo}) {
  return (
    <>
      <ul>
        {todos.length === 0 ? (
          <h1>No Todos</h1>
        ) : (
          <h1 className="header">Todo List</h1>
        )}
        {todos.map((todo) => {
          return (
            <TodoItem
              {...todo}
              key={todo.id}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
            />
          );
        })}
      </ul>
    </>
  );
}
