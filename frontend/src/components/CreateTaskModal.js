// CreateTaskModal.js
import React from "react";
import { X } from "lucide-react";

function CreateTaskModal({ isOpen, toggleModal, createTask, inputStyles }) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-8 max-w-md w-full">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Create Task</h2>
          <button
            onClick={toggleModal}
            className="text-gray-400 hover:text-gray-600"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            createTask({
              title: e.target.title.value,
              description: e.target.description.value,
              priority: e.target.priority.value,
            });
          }}
          className="space-y-4"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700">Title</label>
            <input name="title" type="text" className={inputStyles} required />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea name="description" className={inputStyles} required />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Priority</label>
            <select name="priority" className={inputStyles} required>
              <option value="High">High (50 points)</option>
              <option value="Medium">Medium (30 points)</option>
              <option value="Low">Low (10 points)</option>
            </select>
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

export default CreateTaskModal;
