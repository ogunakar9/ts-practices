import React, { useState } from "react";
import ToDoList from "./components/ToDoList";
import NewToDo from "./components/NewToDo";

const App: React.FC = () => {
  const [todos, setTodos] = useState<{ id: string; text: string }[]>([]);
  // const todos = [{ id: "t1", text: "Finish the course" }];
  const todoAddHandler = (text: string) => {
    setTodos([{ id: Math.random().toString(), text: text }]);
  };
  return (
    <div className="App">
      <NewToDo onAddTodo={todoAddHandler} />
      <ToDoList items={todos} />
    </div>
  );
};

export default App;
