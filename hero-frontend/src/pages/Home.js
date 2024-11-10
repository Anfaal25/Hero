import React from "react";
import TaskList from "../components/TaskList";
import CreateTask from "../components/CreateTask";
import { Link } from "react-router-dom";  // Import Link for navigation
import "../styles/Home.css";  // Correct path to home.css in the styles folder

function Home() {
  return (
    <div className="home-container">
      <h2>Welcome to Task Management</h2>

      {/* Profile Button (Top Right) */}
      <Link to="/profile" className="profile-button">
        Go to Profile
      </Link>

      {/* Task List and Create Task */}
      <div className="cards-container">
        <TaskList />
      </div>
      
      {/* Create Task Button (Bottom Right) */}
      <Link to="/create-task" className="create-task-button">
        <span>+</span> {/* Plus sign */}
      </Link>

    </div>
  );
}

export default Home;
