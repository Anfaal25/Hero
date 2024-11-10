// App.js
import React, { useState } from "react";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import TaskBoard from "./components/TaskBoard";
import LoginModal from "./components/LoginModal";
import RegisterModal from "./components/RegisterModal";
import ProfileModal from "./components/ProfileModal";
import CreateTaskModal from "./components/CreateTaskModal";

function App() {
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
        0
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

  const deleteTask = (taskId) => setTasks(tasks.filter((task) => task.id !== taskId));
  const toggleLoginModal = () => setIsLoginModalOpen(!isLoginModalOpen);
  const toggleRegisterModal = () => setIsRegisterModalOpen(!isRegisterModalOpen);
  const toggleProfileModal = () => setIsProfileModalOpen(!isProfileModalOpen);
  const toggleCreateTaskModal = () => setIsCreateTaskModalOpen(!isCreateTaskModalOpen);

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
      <Header
        isLoggedIn={isLoggedIn}
        toggleLoginModal={toggleLoginModal}
        toggleRegisterModal={toggleRegisterModal}
        toggleProfileModal={toggleProfileModal}
        toggleCreateTaskModal={toggleCreateTaskModal}
        handleLogout={handleLogout}
      />

      {isLandingPage ? (
        <LandingPage />
      ) : (
        <TaskBoard
          tasks={tasks}
          inProgressTasks={inProgressTasks}
          acceptTask={acceptTask}
          deleteTask={deleteTask}
        />
      )}

      <LoginModal
        isOpen={isLoginModalOpen}
        toggleModal={toggleLoginModal}
        handleLogin={handleLogin}
        inputStyles={inputStyles}
      />
      <RegisterModal
        isOpen={isRegisterModalOpen}
        toggleModal={toggleRegisterModal}
        handleRegister={handleRegister}
        inputStyles={inputStyles}
      />
      <ProfileModal
        isOpen={isProfileModalOpen}
        toggleModal={toggleProfileModal}
        mockUser={mockUser}
      />
      <CreateTaskModal
        isOpen={isCreateTaskModalOpen}
        toggleModal={toggleCreateTaskModal}
        createTask={createTask}
        inputStyles={inputStyles}
      />
    </div>
  );
}

export default App;
