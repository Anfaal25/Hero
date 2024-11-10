// App.js
import React, { useState } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import TaskBoard from "./components/TaskBoard";
import LoginModal from "./components/LoginModal";
import RegisterModal from "./components/RegisterModal";
import ProfileModal from "./components/ProfileModal";
import CreateTaskModal from "./components/CreateTaskModal";
import { auth, db } from './firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

function App() {
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

  const navigate = useNavigate();

  const toggleLoginModal = () => setIsLoginModalOpen(!isLoginModalOpen);
  const toggleRegisterModal = () => setIsRegisterModalOpen(!isRegisterModalOpen);
  const toggleProfileModal = () => setIsProfileModalOpen(!isProfileModalOpen);
  const toggleCreateTaskModal = () => setIsCreateTaskModalOpen(!isCreateTaskModalOpen);

  // Handle Login with Firebase Authentication
  const handleLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        setIsLoggedIn(true);
        navigate("/tasks"); // Navigate to /tasks on successful login
      });
  };

  // Handle Register with Firebase Authentication
  const handleRegister = async (name, email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const userId = userCredential.user.uid;
      await setDoc(doc(db, "users", userId), {
        name: name,
        email: email,
        createdAt: new Date(),
      });
      console.log("User registered and data saved in Firestore");
      setIsRegisterModalOpen(false);
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsProfileModalOpen(false);
    navigate("/"); // Optionally navigate back to the home page on logout
  };

  const acceptTask = (taskId) => {
    const task = tasks.find((t) => t.id === taskId);
    if (task) {
      setTasks(tasks.filter((t) => t.id !== taskId));
      setInProgressTasks([...inProgressTasks, { ...task, status: "In Progress" }]);
    }
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

      {/* Define Routes */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/tasks"
          element={
            isLoggedIn ? (
              <TaskBoard
                tasks={tasks}
                inProgressTasks={inProgressTasks}
                acceptTask={acceptTask}
              />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      {/* Modals */}
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
        mockUser={{
          name: "John Doe",
          email: "john@example.com",
          completedTasks: [],
          auraPoints: 100,
        }}
      />
      <CreateTaskModal
        isOpen={isCreateTaskModalOpen}
        toggleModal={toggleCreateTaskModal}
        createTask={(newTask) =>
          setTasks([
            ...tasks,
            { ...newTask, id: tasks.length + 1, createdByUser: true },
          ])
        }
        inputStyles={inputStyles}
      />
    </div>
  );
}

export default App;
