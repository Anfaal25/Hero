import React from "react";
import { X } from "lucide-react";

function TaskModal({ isOpen, toggleModal }) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-8 max-w-md w-full">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            Create New Task
          </h2>
          <button
            onClick={toggleModal}
            className="text-gray-400 hover:text-gray-600"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-2" htmlFor="taskTitle">
              Title
            </label>
            <input
              type="text"
              id="taskTitle"
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            />
          </div>
          <div>
            <label
              className="block text-gray-700 mb-2"
              htmlFor="taskDescription"
            >
              Description
            </label>
            <textarea
              id="taskDescription"
              rows="3"
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            ></textarea>
          </div>
          <div>
            <label
              className="block text-gray-700 mb-2"
              htmlFor="taskPriority"
            >
              Priority
            </label>
            <select
              id="taskPriority"
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>
          <div>
            <label
              className="block text-gray-700 mb-2"
              htmlFor="taskDueDate"
            >
              Due Date
            </label>
            <input
              type="date"
              id="taskDueDate"
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
          >
            Create Task
          </button>
        </form>
      </div>
    </div>
  );
}

export default TaskModal;
