import { PlusIcon, UserIcon, X } from "lucide-react";
import React, { useState } from "react";
import { render } from "react-dom";
export default function TaskBoard() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  const toggleLoginModal = () => setIsLoginModalOpen(!isLoginModalOpen);
  const toggleTaskModal = () => setIsTaskModalOpen(!isTaskModalOpen);
  return (
    <div className="w-full min-h-screen bg-white">
      <header className="w-full px-6 py-4 border-b border-blue-200 bg-blue-50 flex items-center justify-between transition-colors duration-200">
        <h1 className="text-2xl font-bold text-blue-900">Task Board</h1>
        <button
          onClick={toggleLoginModal}
          className="p-2 rounded-full hover:bg-blue-100 text-blue-700 transition-colors duration-200"
        >
          <UserIcon className="w-6 h-6" />
        </button>
      </header>

      <main className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 border-2 border-blue-200 rounded-lg shadow-sm hover:border-blue-400 hover:shadow-md transition-all duration-200">
            <h3 className="font-semibold text-lg mb-4">Website Redesign</h3>
            <p className="text-gray-600 mb-4">
              Create new homepage layout and implement responsive design
            </p>
            <button className="w-full px-4 py-2 text-sm bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-200">
              Accept Task
            </button>
          </div>

          <div className="p-6 border-2 border-blue-200 rounded-lg shadow-sm hover:border-blue-400 hover:shadow-md transition-all duration-200">
            <h3 className="font-semibold text-lg mb-4">API Integration</h3>
            <p className="text-gray-600 mb-4">
              Connect payment gateway API and implement error handling
            </p>
            <button className="w-full px-4 py-2 text-sm bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-200">
              Accept Task
            </button>
          </div>

          <div className="p-6 border-2 border-blue-200 rounded-lg shadow-sm hover:border-blue-400 hover:shadow-md transition-all duration-200">
            <h3 className="font-semibold text-lg mb-4">Bug Fixes</h3>
            <p className="text-gray-600 mb-4">
              Address reported issues in user authentication flow
            </p>
            <button className="w-full px-4 py-2 text-sm bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-200">
              Accept Task
            </button>
          </div>

          <div className="p-6 border-2 border-blue-200 rounded-lg shadow-sm hover:border-blue-400 hover:shadow-md transition-all duration-200">
            <h3 className="font-semibold text-lg mb-4">
              Performance Optimization
            </h3>
            <p className="text-gray-600 mb-4">
              Improve load times and optimize database queries
            </p>
            <button className="w-full px-4 py-2 text-sm bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-200">
              Accept Task
            </button>
          </div>

          <div className="p-6 border-2 border-blue-200 rounded-lg shadow-sm hover:border-blue-400 hover:shadow-md transition-all duration-200">
            <h3 className="font-semibold text-lg mb-4">Testing</h3>
            <p className="text-gray-600 mb-4">
              Write and implement unit tests for core functionality
            </p>
            <button className="w-full px-4 py-2 text-sm bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-200">
              Accept Task
            </button>
          </div>

          <div className="p-6 border-2 border-blue-200 rounded-lg shadow-sm hover:border-blue-400 hover:shadow-md transition-all duration-200">
            <h3 className="font-semibold text-lg mb-4">Documentation</h3>
            <p className="text-gray-600 mb-4">
              Update API documentation and user guides
            </p>
            <button className="w-full px-4 py-2 text-sm bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-200">
              Accept Task
            </button>
          </div>
        </div>
      </main>

      <button
        onClick={toggleTaskModal}
        className="fixed bottom-6 right-6 p-4 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-colors duration-200"
      >
        <PlusIcon className="w-6 h-6" />
      </button>

      {/* Login Modal */}
      {isLoginModalOpen && (
        <div
          onClick={toggleLoginModal}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300 ease-in-out"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-lg p-8 w-full max-w-md mx-4 transform transition-all duration-300 ease-in-out"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-blue-900">Login</h2>
              <button
                onClick={toggleLoginModal}
                className="p-2 hover:bg-blue-50 rounded-full transition-colors duration-200"
              >
                <X className="w-6 h-6 text-blue-900" />
              </button>
            </div>
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-blue-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full px-4 py-2 border border-blue-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter your password"
                />
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-200"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      )}

      {/* New Task Modal */}
      {isTaskModalOpen && (
        <div
          onClick={toggleTaskModal}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300 ease-in-out"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-lg p-8 w-full max-w-md mx-4 transform transition-all duration-300 ease-in-out"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-blue-900">
                Create New Task
              </h2>
              <button
                onClick={toggleTaskModal}
                className="p-2 hover:bg-blue-50 rounded-full transition-colors duration-200"
              >
                <X className="w-6 h-6 text-blue-900" />
              </button>
            </div>
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  className="w-full px-4 py-2 border border-blue-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter task title"
                />
              </div>
              <div>
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  rows={4}
                  className="w-full px-4 py-2 border border-blue-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter task description"
                />
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-200"
              >
                Create Task
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
render(<TaskBoard />, document.getElementById("root"));
