import {
  LogOutIcon,
  PlusIcon,
  UserIcon,
  X,
  Clock,
  BarChart,
  CheckCircle,
  Target,
  Flame,
  Trash2,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { render } from "react-dom";
export default function TaskBoard() {
  const [isLandingPage, setIsLandingPage] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [isCreateTaskModalOpen, setIsCreateTaskModalOpen] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Develop Landing Page",
      description: "Create a responsive landing page for the new product",
      status: "Available",
      priority: "High",
      points: 50,
      createdByUser: false,
    },
    {
      id: 2,
      title: "API Integration",
      description: "Integrate payment gateway API",
      status: "Available",
      priority: "Medium",
      points: 30,
      createdByUser: false,
    },
  ]);
  const [inProgressTasks, setInProgressTasks] = useState([]);
  const mockUser = {
    name: "John Doe",
    email: "john@example.com",
    completedTasks: [
      {
        id: 1,
        title: "Website Redesign",
        description:
          "Create new homepage layout and implement responsive design",
        completedDate: "2023-11-15",
        status: "Completed",
        priority: "High",
        pointsEarned: 50,
      },
      {
        id: 2,
        title: "API Integration",
        description: "Connect payment gateway API and implement error handling",
        completedDate: "2023-11-10",
        status: "Completed",
        priority: "Medium",
        pointsEarned: 30,
      },
    ],
    get auraPoints() {
      return this.completedTasks.reduce(
        (total, task) => total + task.pointsEarned,
        0,
      );
    },
  };
  const calculatePoints = (priority) => {
    const pointsMap = {
      High: 50,
      Medium: 30,
      Low: 10,
    };
    return pointsMap[priority];
  };
  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };
  const toggleLoginModal = () => setIsLoginModalOpen(!isLoginModalOpen);
  const toggleRegisterModal = () =>
    setIsRegisterModalOpen(!isRegisterModalOpen);
  const toggleProfileModal = () => setIsProfileModalOpen(!isProfileModalOpen);
  const toggleCreateTaskModal = () =>
    setIsCreateTaskModalOpen(!isCreateTaskModalOpen);
  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
    setIsLoginModalOpen(false);
    setIsLandingPage(false);
  };
  const handleRegister = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
    setIsRegisterModalOpen(false);
    setIsLandingPage(false);
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsLandingPage(true);
    setIsProfileModalOpen(false);
  };
  const acceptTask = (taskId) => {
    const task = tasks.find((t) => t.id === taskId);
    if (task) {
      setTasks(tasks.filter((t) => t.id !== taskId));
      setInProgressTasks([
        ...inProgressTasks,
        {
          ...task,
          status: "In Progress",
        },
      ]);
    }
  };
  const createTask = (newTask) => {
    const points = calculatePoints(newTask.priority);
    setTasks([
      ...tasks,
      {
        ...newTask,
        id: tasks.length + 1,
        status: "Available",
        points,
        createdByUser: true,
      },
    ]);
    setIsCreateTaskModalOpen(false);
  };
  const inputStyles =
    "mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500";
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
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

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {isLandingPage ? (
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Your Friendly Neighborhood Hero
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Whether you need a hand with a task or want to offer your skills, HERO is here to bring people together and foster meaningful relationships
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <Target className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Accept Tasks</h3>
                <p className="text-gray-600">
                  Choose from available tasks that match your skills
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Foster Peace</h3>
                <p className="text-gray-600">
                  By promoting collaboration and kindness, HERO helps create a peaceful, thriving environment for everyone.
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <Flame className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Gain Aura</h3>
                <p className="text-gray-600">
                  Complete tasks & earn Aura Points that build your reputation and credibility.
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Available Tasks
              </h2>
              <div className="space-y-4">
                {tasks.map((task) => (
                  <div
                    key={task.id}
                    className="bg-white p-4 rounded-lg shadow-sm"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-medium text-gray-900">
                        {task.title}
                      </h3>
                      <div className="flex items-center gap-2">
                        <span
                          className={`px-2 py-1 rounded text-sm ${task.priority === "High" ? "bg-red-100 text-red-800" : "bg-yellow-100 text-yellow-800"}`}
                        >
                          {task.priority}
                        </span>
                        {task.createdByUser && (
                          <button
                            onClick={() => deleteTask(task.id)}
                            className="text-red-500 hover:text-red-700"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">
                      {task.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-orange-500 font-semibold">
                        {task.points} points
                      </span>
                      <button
                        onClick={() => acceptTask(task.id)}
                        className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                      >
                        Accept Task
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                In Progress
              </h2>
              <div className="space-y-4">
                {inProgressTasks.map((task) => (
                  <div
                    key={task.id}
                    className="bg-white p-4 rounded-lg shadow-sm"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-medium text-gray-900">
                        {task.title}
                      </h3>
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm">
                        {task.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">{task.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Login Modal */}
      {isLoginModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-8 max-w-md w-full">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Login</h2>
              <button
                onClick={toggleLoginModal}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input type="email" className={inputStyles} required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input type="password" className={inputStyles} required />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Register Modal */}
      {isRegisterModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-8 max-w-md w-full">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Register</h2>
              <button
                onClick={toggleRegisterModal}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <form onSubmit={handleRegister} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input type="text" className={inputStyles} required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input type="email" className={inputStyles} required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input type="password" className={inputStyles} required />
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
      )}

      {/* Profile Modal */}
      {isProfileModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-8 max-w-2xl w-full">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Profile</h2>
              <button
                onClick={toggleProfileModal}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-900">
                {mockUser.name}
              </h3>
              <p className="text-gray-600">{mockUser.email}</p>
              <div className="mt-4 flex items-center">
                <Flame className="w-5 h-5 text-orange-500 mr-2" />
                <span className="font-medium">
                  {mockUser.auraPoints} Aura Points
                </span>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Completed Tasks
              </h3>
              <div className="space-y-4">
                {mockUser.completedTasks.map((task) => (
                  <div key={task.id} className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium text-gray-900">
                        {task.title}
                      </h4>
                      <span className="text-sm text-orange-500 font-medium">
                        {task.pointsEarned} points
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">
                      {task.description}
                    </p>
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
      )}

      {/* Create Task Modal */}
      {isCreateTaskModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-8 max-w-md w-full">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Create Task</h2>
              <button
                onClick={toggleCreateTaskModal}
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
                <label className="block text-sm font-medium text-gray-700">
                  Title
                </label>
                <input
                  name="title"
                  type="text"
                  className={inputStyles}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Description
                </label>
                <textarea name="description" className={inputStyles} required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Priority
                </label>
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
      )}
    </div>
  );
}
render(<TaskBoard />, document.getElementById("root"));
