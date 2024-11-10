// TaskBoard.js
import React from "react";
import AvailableTasks from "./AvailableTasks";
import InProgressTasks from "./InProgressTasks";

function TaskBoard({ tasks, inProgressTasks, acceptTask, deleteTask }) {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <AvailableTasks tasks={tasks} acceptTask={acceptTask} deleteTask={deleteTask} />
        <InProgressTasks tasks={inProgressTasks} />
      </div>
    </main>
  );
}

export default TaskBoard;
