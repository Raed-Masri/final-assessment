import React, { useState, useEffect } from "react";
import TodoInput from "./components/TaskForm";
import SearchBar from "./components/SearchBar";
import TodosContainer from "./components/TaskList";
import Filters from "./components/Filters";

const App = () => {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all");

  // save todos to localStorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  // toggle the completed status of a specific todo item in the todos
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id, newText) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    );
  };

  const clearAll = () => {
    setTodos([]);
  };

  const filteredTodos = todos
    .filter((todo) => {
      if (filter === "completed") return todo.completed;
      if (filter === "pending") return !todo.completed;
      return true;
    })
    .filter((todo) =>
      todo.text.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const itemsLeft = todos.filter((todo) => !todo.completed).length;

  return (
    <div className="flex justify-center items-center h-screen bg-blue-500">
      <div className="w-auto bg-white bg-opacity-90 border-2 border-gray-200 rounded-xl p-6 shadow-lg">
        <h1 className="text-center text-3xl font-bold text-blue-500 mb-2">
          <i className="fas fa-check"></i>
          Task Master
        </h1>
        <p className="text-center text-gray-600 mb-6">
          Organize your tasks efficiently
        </p>

        {/* Search Bar */}
        <div className="flex mb-5 gap-4">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="p-2 border border-gray-300 rounded-lg bg-white text-gray-700"
          >
            <option value="all">All Tasks</option>
            <option value="completed">Completed</option>
            <option value="pending">Pending</option>
          </select>
          <button
            onClick={clearAll}
            className=" px-4 py-2 bg-red-600 text-white rounded-lg  hover:bg-red-700"
          >
            <i className="fa fa-trash"></i>Clear All
          </button>
        </div>

        {/* Add Task Input */}
        <TodoInput addTodo={addTodo} />

        {/* Todos List */}
        <TodosContainer
          todos={filteredTodos}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />
        {itemsLeft != 0 ? (
          <div className="mt-4 flex justify-between items-center">
            <span className="text-gray-700">{itemsLeft} items left</span>
            <Filters filter={filter} setFilter={setFilter} />
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default App;
