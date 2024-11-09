import React, { useState } from "react";
import "../styles/Profile.css";

function Profile() {
  // Mock user data
  const [user, setUser] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "johndoe@example.com",
    location: "New York",
    profilePicture: "path_to_profile_picture.jpg",
  });

  const [tasks, setTasks] = useState([
    { id: 1, title: "Task 1", description: "Description of task 1", status: "In Progress" },
    { id: 2, title: "Task 2", description: "Description of task 2", status: "Completed" },
  ]);

  // Handle Logout (dummy function for now)
  const handleLogout = () => {
    // Handle logout logic here
  };

  return (
    <div className="profile-container">
      {/* Tasks Section */}
      <div className="user-tasks">
        <h3>Your Tasks</h3>
        {tasks.length === 0 ? (
          <p>You have no tasks yet.</p>
        ) : (
          <div className="task-list">
            {tasks.map((task) => (
              <div className="task-item" key={task.id}>
                <h4>{task.title}</h4>
                <p>{task.description}</p>
                <p>Status: {task.status}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Edit Profile Button (placeholder) */}
      <button className="edit-profile-btn" disabled>
        Edit Profile
      </button>

      {/* Logout Button */}
      <div className="logout">
        <button onClick={handleLogout}>Log Out</button>
      </div>
    </div>
  );
}

export default Profile;
