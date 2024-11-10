import {
    LogOutIcon,
    PlusIcon,
    UserIcon,
    X,
    Clock,
    BarChart,
    CheckCircle,
    Calendar,
    Target,
  } from "lucide-react";
  import React, { useEffect, useState } from "react";
  import { render } from "react-dom";
  export default function TaskBoard() {
    const [isLandingPage, setIsLandingPage] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
    const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
    const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
    const [formErrors, setFormErrors] = useState({});
    const [tasks, setTasks] = useState([
      {
        id: 1,
        title: "Design System Update",
        description: "Update component library with new design tokens",
        status: "Open",
        priority: "High",
        dueDate: "2023-12-20",
      },
      {
        id: 2,
        title: "User Authentication",
        description: "Implement OAuth2 authentication flow",
        status: "Open",
        priority: "Medium",
        dueDate: "2023-12-25",
      },
      {
        id: 3,
        title: "Database Migration",
        description: "Migrate data to new cloud infrastructure",
        status: "Open",
        priority: "High",
        dueDate: "2023-12-15",
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
        },
        {
          id: 2,
          title: "API Integration",
          description: "Connect payment gateway API and implement error handling",
          completedDate: "2023-11-10",
          status: "Completed",
        },
      ],
    };
    const features = [
      {
        icon: <Target className="w-8 h-8 text-blue-500" />,
        title: "Task Management",
        description: "Organize and prioritize your work efficiently",
      },
      {
        icon: <Calendar className="w-8 h-8 text-blue-500" />,
        title: "Due Dates",
        description: "Never miss a deadline with our scheduling system",
      },
      {
        icon: <CheckCircle className="w-8 h-8 text-blue-500" />,
        title: "Progress Tracking",
        description: "Monitor your team's progress in real-time",
      },
    ];
    const toggleLoginModal = () => setIsLoginModalOpen(!isLoginModalOpen);
    const toggleTaskModal = () => setIsTaskModalOpen(!isTaskModalOpen);
    const toggleProfileModal = () => setIsProfileModalOpen(!isProfileModalOpen);
    const toggleRegisterModal = () => {
      setIsRegisterModalOpen(!isRegisterModalOpen);
      setIsLoginModalOpen(false);
      setFormErrors({});
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
    const handleLogin = (e) => {
      e.preventDefault();
      setIsLoggedIn(true);
      setIsLoginModalOpen(false);
      setIsLandingPage(false);
    };
    const handleRegister = (e) => {
      e.preventDefault();
      const form = e.target;
      const newErrors = {};
      if (!form.name.value) newErrors.name = "Name is required";
      if (!form.email.value) newErrors.email = "Email is required";
      if (!form.location.value) newErrors.location = "Location is required";
      if (!form.password.value) newErrors.password = "Password is required";
      if (Object.keys(newErrors).length > 0) {
        setFormErrors(newErrors);
        return;
      }
      setIsRegisterModalOpen(false);
      setIsLoginModalOpen(true);
      setFormErrors({});
    };
    const handleLogout = () => {
      setIsLoggedIn(false);
      setIsProfileModalOpen(false);
      setIsLandingPage(true);
    };
    const handleProfileClick = () => {
      if (isLoggedIn) {
        toggleProfileModal();
      } else {
        toggleLoginModal();
      }
    };
    if (isLandingPage) {
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
  
          {/* Include all existing modals here */}
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
                    <label className="block text-gray-700 mb-2" htmlFor="email">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full border border-gray-300 rounded-md px-3 py-2"
                    />
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
                      className="w-full border border-gray-300 rounded-md px-3 py-2"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
                  >
                    Login
                  </button>
                </form>
                <p className="mt-4 text-center text-gray-600">
                  Don't have an account?{" "}
                  <button
                    onClick={toggleRegisterModal}
                    className="text-blue-500 hover:text-blue-600"
                  >
                    Register
                  </button>
                </p>
              </div>
            </div>
          )}
  
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
          )}
        </div>
      );
    }
    // Return the original TaskBoard component when not on landing page
    return (
      <div className="w-full min-h-screen bg-white flex transition-all duration-500">
        {/* Original TaskBoard JSX */}
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
                <div
                  key={task.id}
                  className="bg-white p-6 rounded-lg shadow-md border border-gray-200"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {task.title}
                    </h3>
                    <span
                      className={`px-2 py-1 rounded text-sm ${task.priority === "High" ? "bg-red-100 text-red-800" : "bg-yellow-100 text-yellow-800"}`}
                    >
                      {task.priority}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{task.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">
                      Due: {task.dueDate}
                    </span>
                    <button
                      onClick={() => acceptTask(task.id)}
                      className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-200"
                    >
                      Accept Task
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
  
        <aside className="w-80 bg-gray-50 border-l border-gray-200 p-6 hidden lg:block">
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            In Progress Tasks
          </h2>
          <div className="space-y-4">
            {inProgressTasks.map((task) => (
              <div key={task.id} className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-medium text-gray-900 mb-2">{task.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{task.description}</p>
                <div className="flex items-center text-blue-600">
                  <Clock className="w-4 h-4 mr-1" />
                  <span className="text-sm">In Progress</span>
                </div>
              </div>
            ))}
          </div>
        </aside>
  
        <button
          onClick={toggleTaskModal}
          className="fixed bottom-6 right-6 p-4 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-colors duration-200"
        >
          <PlusIcon className="w-6 h-6" />
        </button>
  
        {/* Include all existing modals here */}
        {isProfileModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white rounded-lg p-8 max-w-md w-full">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Profile</h2>
                <button
                  onClick={toggleProfileModal}
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
                        <h5 className="font-medium text-gray-900">
                          {task.title}
                        </h5>
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
        )}
  
        {isTaskModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white rounded-lg p-8 max-w-md w-full">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  Create New Task
                </h2>
                <button
                  onClick={toggleTaskModal}
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
        )}
      </div>
    );
  }
  render(<TaskBoard />, document.getElementById("root"));
  