import React from "react";

const Filters = ({ filter, setFilter }) => {
  return (
    <div className="flex gap-2">
      <button
        onClick={() => setFilter("all")}
        className={`px-3 py-2 rounded ${
          filter === "all" ? "bg-blue-600 font-bold" : "bg-gray-300"
        } text-white hover:bg-opacity-90 transition-colors`}
      >
        All
      </button>
      <button
        onClick={() => setFilter("pending")}
        className={`px-3 py-2 rounded ${
          filter === "pending" ? "bg-blue-600 font-bold" : "bg-gray-300"
        } text-white hover:bg-opacity-90 transition-colors`}
      >
        Active
      </button>
      <button
        onClick={() => setFilter("completed")}
        className={`px-3 py-2 rounded ${
          filter === "completed" ? "bg-blue-600 font-bold" : "bg-gray-300"
        } text-white hover:bg-opacity-90 transition-colors`}
      >
        Completed
      </button>
    </div>
  );
};

export default Filters;
