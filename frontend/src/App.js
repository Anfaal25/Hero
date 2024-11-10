import React, { useState } from "react";
import { render } from "react-dom";
import {
  LogOutIcon,
  PlusIcon,
  UserIcon,
  X,
  Clock,
  CheckCircle,
  Calendar,
  Target,
} from "lucide-react";

import LandingPage from "./LandingPage";
import TaskBoard from "./Task";

function App() {
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
        description:
          "Connect payment gateway API and implement error handling",
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

  return (
    <>
      {isLandingPage ? (
        <LandingPage
          setIsLoginModalOpen={setIsLoginModalOpen}
          setIsRegisterModalOpen={setIsRegisterModalOpen}
          isLoginModalOpen={isLoginModalOpen}
          isRegisterModalOpen={isRegisterModalOpen}
          toggleLoginModal={toggleLoginModal}
          toggleRegisterModal={toggleRegisterModal}
          formErrors={formErrors}
          handleLogin={handleLogin}
          handleRegister={handleRegister}
          features={features}
        />
      ) : (
        <TaskBoard
          tasks={tasks}
          setTasks={setTasks}
          inProgressTasks={inProgressTasks}
          setInProgressTasks={setInProgressTasks}
          isLoggedIn={isLoggedIn}
          isTaskModalOpen={isTaskModalOpen}
          isProfileModalOpen={isProfileModalOpen}
          toggleTaskModal={toggleTaskModal}
          toggleProfileModal={toggleProfileModal}
          acceptTask={acceptTask}
          handleLogout={handleLogout}
          handleProfileClick={handleProfileClick}
          mockUser={mockUser}
        />
      )}
    </>
  );
}

render(<App />, document.getElementById("root"));
