import React from "react";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";

function LandingPage({
  setIsLoginModalOpen,
  setIsRegisterModalOpen,
  isLoginModalOpen,
  isRegisterModalOpen,
  toggleLoginModal,
  toggleRegisterModal,
  formErrors,
  handleLogin,
  handleRegister,
  features,
}) {
  return (
    <div className="min-h-screen bg-white transition-all duration-500">
      <header className="w-full px-6 py-4 bg-blue-50 border-b border-blue-200">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-900">Task Board</h1>
          <button
            onClick={() => {
              setIsLoginModalOpen(true);
            }}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-200"
          >
            Login
          </button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Manage Your Tasks with Ease
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Streamline your workflow, collaborate with your team, and achieve
            more with our intuitive task management platform.
          </p>
          <button
            onClick={() => {
              setIsRegisterModalOpen(true);
            }}
            className="px-8 py-4 bg-blue-500 text-white rounded-md text-lg font-semibold hover:bg-blue-600 transform hover:scale-105 transition-all duration-200"
          >
            Get Started
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-200"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </main>

      {/* Modals */}
      <LoginModal
        isOpen={isLoginModalOpen}
        toggleModal={toggleLoginModal}
        handleLogin={handleLogin}
        toggleRegisterModal={toggleRegisterModal}
      />

      <RegisterModal
        isOpen={isRegisterModalOpen}
        toggleModal={toggleRegisterModal}
        handleRegister={handleRegister}
        formErrors={formErrors}
      />
    </div>
  );
}

export default LandingPage;
