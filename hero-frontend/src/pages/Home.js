import React, { useState } from "react";
import TaskList from "../components/TaskList";
import CreateTask from "../components/CreateTask";
import "../styles/Home.css";  // Correct path to home.css in the styles folder

function Home() {
  return (
    <div className="home-container">
      <h2>Welcome to Task Management</h2>
      <button><a href="/profile">Go to Profile</a></button>
      <CreateTask />
      <TaskList />
    </div>
  );
}

export default Home;
