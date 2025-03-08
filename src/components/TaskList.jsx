import React, { useState } from "react";
import notasksImage from "../assets/react.svg";
const TodosContainer = ({ todos, toggleTodo, deleteTodo, editTodo }) => {
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");

  const handleEdit = (id, text) => {
    setEditingId(id);
    setEditText(text);
  };

  const saveEdit = (id) => {
    if (editText.trim()) {
      editTodo(id, editText);
      setEditingId(null);
      setEditText("");
    }
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditText("");
  };

  return (
    <div className="max-h-72 overflow-y-auto mb-4">
      {todos.length > 0 ? (
        <ul>
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex justify-between items-center bg-gray-100 border border-gray-300 p-3 rounded-lg mb-2"
            >
              {editingId === todo.id ? (
                <>
                  <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    className="flex-1 p-2 border border-gray-300 rounded-lg"
                  />
                  <div className="flex gap-2">
                    <button
                      onClick={() => saveEdit(todo.id)}
                      className="px-3 py-1 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                    >
                      Save
                    </button>
                    <button
                      onClick={cancelEdit}
                      className="px-3 py-1 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleTodo(todo.id)}
                    className="cursor-pointer"
                  />
                  <span
                    className={`flex-1 ml-2 ${
                      todo.completed
                        ? "line-through text-gray-500"
                        : "text-gray-700"
                    }`}
                  >
                    {todo.text}
                  </span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEdit(todo.id, todo.text)}
                      className="text-blue-600 text-xl hover:text-blue-700 transition-colors"
                    >
                      <i className="fa fa-edit"></i>
                    </button>
                    <button
                      onClick={() => deleteTodo(todo.id)}
                      className="text-red-600 text-xl hover:text-red-700 transition-colors"
                    >
                      <i className="fa fa-trash"></i>
                    </button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <>
          <div className="flex flex-col justify-center items-center h-full">
          <img
            src={notasksImage}
            alt="No tasks"
            className="w-12 h-auto mb-4" 
          />
          <p className="text-gray-600 text-center">No tasks found. Add a new task to get started!</p>
        </div>

        </>
      )}
    </div>
  );
};

export default TodosContainer;
