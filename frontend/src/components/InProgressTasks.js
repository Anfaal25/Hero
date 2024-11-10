// InProgressTasks.js
import React from "react";

function InProgressTasks({ tasks }) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-4">In Progress</h2>
      <div className="space-y-4">
        {tasks.map((task) => (
          <div key={task.id} className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-medium text-gray-900">{task.title}</h3>
              <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm">
                {task.status}
              </span>
            </div>
            <p className="text-sm text-gray-600">{task.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default InProgressTasks;
