import React, { useState } from "react";

function CreateTask() {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  const handleCreateTask = () => {
    if (taskName && taskDescription) {
      // Logic to create task
      alert("Task created!");
    } else {
      alert("Please fill in both fields.");
    }
  };

  return (
    <div className="create-task">
      <h3>Create a New Task</h3>
      <input 
        type="text" 
        placeholder="Task Name" 
        value={taskName} 
        onChange={(e) => setTaskName(e.target.value)} 
      />
      <textarea 
        placeholder="Task Description" 
        value={taskDescription} 
        onChange={(e) => setTaskDescription(e.target.value)} 
      ></textarea>
      <button onClick={handleCreateTask}>Create Task</button>
    </div>
  );
}

export default CreateTask;
