// AvailableTasks.js
import React from "react";
import { Trash2 } from "lucide-react";

function AvailableTasks({ tasks, acceptTask, deleteTask }) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Available Tasks</h2>
      <div className="space-y-4">
        {tasks.map((task) => (
          <div key={task.id} className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-medium text-gray-900">{task.title}</h3>
              <div className="flex items-center gap-2">
                <span
                  className={`px-2 py-1 rounded text-sm ${
                    task.priority === "High"
                      ? "bg-red-100 text-red-800"
                      : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {task.priority}
                </span>
                {task.createdByUser && (
                  <button
                    onClick={() => deleteTask(task.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-4">{task.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-orange-500 font-semibold">
                {task.points} points
              </span>
              <button
                onClick={() => acceptTask(task.id)}
                className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
              >
                Accept Task
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AvailableTasks;
