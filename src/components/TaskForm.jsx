import React, { useState } from "react";

const TodoInput = ({ addTodo }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text);
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="flex gap-2">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="What needs to be done?"
          className="flex-1 p-2 border-2 border-gray-300 rounded-lg text-gray-700 text-lg"
        />
        <button
          type="submit"
          disabled={!text.trim()} // disable the button if the input is empty
          className={`px-4 py-2 text-white text-lg rounded-lg transition-colors ${
            text.trim() ? "bg-green-500 hover:bg-green-600" : "bg-green-300 "
          }`}
        >
          Add Task
        </button>
      </div>
    </form>
  );
};

export default TodoInput;
