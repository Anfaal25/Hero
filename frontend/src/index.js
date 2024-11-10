import React from "react";
import ReactDOM from "react-dom";
import TaskBoard from "./TaskBoard"; // Adjust path if necessary
import "./index.css"; // Import your TailwindCSS

ReactDOM.render(
  <React.StrictMode>
    <TaskBoard />
  </React.StrictMode>,
  document.getElementById("root")
);
