// ProfileModal.js
import React from "react";
import { X, Flame, Clock } from "lucide-react";

function ProfileModal({ isOpen, toggleModal, mockUser }) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-8 max-w-2xl w-full">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Profile</h2>
          <button
            onClick={toggleModal}
            className="text-gray-400 hover:text-gray-600"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="mb-6">
          <h3 className="text-lg font-medium text-gray-900">{mockUser.name}</h3>
          <p className="text-gray-600">{mockUser.email}</p>
          <div className="mt-4 flex items-center">
            <Flame className="w-5 h-5 text-orange-500 mr-2" />
            <span className="font-medium">{mockUser.auraPoints} Aura Points</span>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">Completed Tasks</h3>
          <div className="space-y-4">
            {mockUser.completedTasks.map((task) => (
              <div key={task.id} className="bg-gray-50 p-4 rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium text-gray-900">{task.title}</h4>
                  <span className="text-sm text-orange-500 font-medium">{task.pointsEarned} points</span>
                </div>
                <p className="text-sm text-gray-600 mb-2">{task.description}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="w-4 h-4 mr-1" />
                  Completed on {task.completedDate}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileModal;
