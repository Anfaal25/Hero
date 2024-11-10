import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../styles/TaskPage.css";

function TaskPage() {
  // Retrieve the task ID from the URL parameter
  const { id } = useParams();

  // Mock data for tasks (can be replaced with actual data from backend)
  const [tasks, setTasks] = useState([
    { id: 1, title: "Task 1", description: "Description of task 1", status: "In Progress" },
    { id: 2, title: "Task 2", description: "Description of task 2", status: "Completed" },
  ]);

  // Find the task based on the ID from the URL
  const task = tasks.find((task) => task.id === parseInt(id));

  useEffect(() => {
    if (!task) {
      // Handle case when task is not found (can show a 404 page or redirect)
      console.error("Task not found");
    }
  }, [task]);

  return (
    <div className="task-page-container">
      {task ? (
        <>
          <h2>{task.title}</h2>
          <p>{task.description}</p>
          <p>Status: {task.status}</p>
        </>
      ) : (
        <p>Task not found.</p>
      )}
    </div>
  );
}

export default TaskPage;
