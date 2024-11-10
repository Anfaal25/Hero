import React from "react";

function TaskCard({ task, acceptTask }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-semibold text-gray-900">{task.title}</h3>
        <span
          className={`px-2 py-1 rounded text-sm ${
            task.priority === "High"
              ? "bg-red-100 text-red-800"
              : "bg-yellow-100 text-yellow-800"
          }`}
        >
          {task.priority}
        </span>
      </div>
      <p className="text-gray-600 mb-4">{task.description}</p>
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-500">Due: {task.dueDate}</span>
        <button
          onClick={() => acceptTask(task.id)}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-200"
        >
          Accept Task
        </button>
      </div>
    </div>
  );
}

export default TaskCard;
