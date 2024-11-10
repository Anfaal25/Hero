// Header.js
import React from "react";
import { LogOutIcon, PlusIcon, UserIcon } from "lucide-react";

function Header({
  isLoggedIn,
  toggleLoginModal,
  toggleRegisterModal,
  toggleProfileModal,
  toggleCreateTaskModal,
  handleLogout,
}) {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <h1 className="text-2xl font-bold text-gray-900">HERO</h1>
          <div className="flex items-center space-x-4">
            {isLoggedIn ? (
              <>
                <button
                  onClick={toggleCreateTaskModal}
                  className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                  <PlusIcon className="w-5 h-5 mr-1" />
                  Create Task
                </button>
                <button
                  onClick={toggleProfileModal}
                  className="flex items-center text-gray-700 hover:text-gray-900"
                >
                  <UserIcon className="w-5 h-5" />
                </button>
                <button
                  onClick={handleLogout}
                  className="flex items-center text-gray-700 hover:text-gray-900"
                >
                  <LogOutIcon className="w-5 h-5" />
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={toggleLoginModal}
                  className="text-gray-700 hover:text-gray-900"
                >
                  Login
                </button>
                <button
                  onClick={toggleRegisterModal}
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                  Register
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
