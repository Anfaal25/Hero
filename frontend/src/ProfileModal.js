import React from "react";
import { X, LogOutIcon } from "lucide-react";

function ProfileModal({ isOpen, toggleModal, handleLogout, mockUser }) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-8 max-w-md w-full">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Profile</h2>
          <button
            onClick={toggleModal}
            className="text-gray-400 hover:text-gray-600"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              {mockUser.name}
            </h3>
            <p className="text-gray-600">{mockUser.email}</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">
              Completed Tasks
            </h4>
            <div className="space-y-4">
              {mockUser.completedTasks.map((task) => (
                <div key={task.id} className="bg-gray-50 p-4 rounded-lg">
                  <h5 className="font-medium text-gray-900">{task.title}</h5>
                  <p className="text-sm text-gray-600 mt-1">
                    {task.description}
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    Completed: {task.completedDate}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center justify-center w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600"
          >
            <LogOutIcon className="w-5 h-5 mr-2" />
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfileModal;
