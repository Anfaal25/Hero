import React from "react";
import "../styles/TaskPage.css";  // Correct path to task.css in the styles folder

function TaskList() {
  return (
    <div className="cards-section">
      <div className="card">
        <div className="card-actions">
          <span className="edit-action">
            <i className="fas fa-edit"></i>
            <div className="tooltip">Edit</div>
          </span>
          <span className="delete-action">
            <i className="fas fa-trash-alt"></i>
            <div className="tooltip">Delete</div>
          </span>
        </div>
        <h3>Task 1</h3>
        <p>Description of task 1</p>
      </div>

      <div className="card">
        <div className="card-actions">
          <span className="edit-action">
            <i className="fas fa-edit"></i>
            <div className="tooltip">Edit</div>
          </span>
          <span className="delete-action">
            <i className="fas fa-trash-alt"></i>
            <div className="tooltip">Delete</div>
          </span>
        </div>
        <h3>Task 2</h3>
        <p>Description of task 2</p>
      </div>

      {/* Add more task cards as needed */}
    </div>
  );
}

export default TaskList;
