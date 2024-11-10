import React from "react";
import { X } from "lucide-react";

function RegisterModal({ isOpen, toggleModal, handleRegister, formErrors }) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-8 max-w-md w-full">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Register</h2>
          <button
            onClick={toggleModal}
            className="text-gray-400 hover:text-gray-600"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            />
            {formErrors.name && (
              <p className="text-red-500 text-sm mt-1">
                {formErrors.name}
              </p>
            )}
          </div>
          <div>
            <label className="block text-gray-700 mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            />
            {formErrors.email && (
              <p className="text-red-500 text-sm mt-1">
                {formErrors.email}
              </p>
            )}
          </div>
          <div>
            <label
              className="block text-gray-700 mb-2"
              htmlFor="location"
            >
              Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            />
            {formErrors.location && (
              <p className="text-red-500 text-sm mt-1">
                {formErrors.location}
              </p>
            )}
          </div>
          <div>
            <label
              className="block text-gray-700 mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            />
            {formErrors.password && (
              <p className="text-red-500 text-sm mt-1">
                {formErrors.password}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegisterModal;
