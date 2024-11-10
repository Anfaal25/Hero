// src/App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import TaskPage from "./pages/TaskPage";
import Profile from "./pages/Profile";  // Import Profile
import CreateTask  from "./components/CreateTask";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/task/:id" element={<TaskPage />} />
        <Route path="/profile" element={<Profile />} />  {/* Profile Route */}
        <Route path="/create-task" element={<CreateTask />} />

      </Routes>
    </div>
  );
}

export default App;
