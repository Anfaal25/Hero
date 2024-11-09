import React from "react";
import "../styles/TaskPage.css";  // Correct path to task.css in the styles folder

function TaskList() {
  return (
    <div className="task-list">
      <h3>Your Tasks</h3>
      {/* Placeholder tasks */}
      <div className="task">
        <p>Task 1</p>
        <button>Take Task</button>
      </div>
      <div className="task">
        <p>Task 2</p>
        <button>Take Task</button>
      </div>
    </div>
  );
}

export default TaskList;
