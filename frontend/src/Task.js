import React from "react";
import { PlusIcon, UserIcon } from "lucide-react";
import TaskCard from "./TaskCard";
import InProgressTaskList from "./InProgressTaskList";
import ProfileModal from "./ProfileModal";
import TaskModal from "./TaskModal";

function TaskBoard({
  tasks,
  setTasks,
  inProgressTasks,
  setInProgressTasks,
  isLoggedIn,
  isTaskModalOpen,
  isProfileModalOpen,
  toggleTaskModal,
  toggleProfileModal,
  acceptTask,
  handleLogout,
  handleProfileClick,
  mockUser,
}) {
  return (
    <div className="w-full min-h-screen bg-white flex transition-all duration-500">
      <div className="flex-1 flex flex-col">
        <header className="w-full px-6 py-4 border-b border-blue-200 bg-blue-50 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-blue-900">Task Board</h1>
          <button
            onClick={handleProfileClick}
            className="p-2 rounded-full hover:bg-blue-100 text-blue-700 transition-colors duration-200"
          >
            <UserIcon className="w-6 h-6" />
          </button>
        </header>

        <main className="p-6 flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tasks.map((task) => (
              <TaskCard key={task.id} task={task} acceptTask={acceptTask} />
            ))}
          </div>
        </main>
      </div>

      <aside className="w-80 bg-gray-50 border-l border-gray-200 p-6 hidden lg:block">
        <h2 className="text-xl font-bold text-gray-900 mb-6">
          In Progress Tasks
        </h2>
        <InProgressTaskList tasks={inProgressTasks} />
      </aside>

      <button
        onClick={toggleTaskModal}
        className="fixed bottom-6 right-6 p-4 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-colors duration-200"
      >
        <PlusIcon className="w-6 h-6" />
      </button>

      {/* Modals */}
      <ProfileModal
        isOpen={isProfileModalOpen}
        toggleModal={toggleProfileModal}
        handleLogout={handleLogout}
        mockUser={mockUser}
      />

      <TaskModal
        isOpen={isTaskModalOpen}
        toggleModal={toggleTaskModal}
      />
    </div>
  );
}

export default TaskBoard;
