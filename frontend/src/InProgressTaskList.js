import React from "react";
import { Clock } from "lucide-react";

function InProgressTaskList({ tasks }) {
  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <div key={task.id} className="bg-white p-4 rounded-lg shadow-sm">
          <h3 className="font-medium text-gray-900 mb-2">{task.title}</h3>
          <p className="text-sm text-gray-600 mb-3">{task.description}</p>
          <div className="flex items-center text-blue-600">
            <Clock className="w-4 h-4 mr-1" />
            <span className="text-sm">In Progress</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default InProgressTaskList;
