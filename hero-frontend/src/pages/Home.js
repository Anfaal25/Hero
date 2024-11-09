import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";  // Import Home page specific styles

const tasks = [
  { id: 1, title: "Deliver groceries", description: "Pick up groceries and deliver to address" },
  { id: 2, title: "Fix broken sink", description: "Fix the broken sink in the kitchen" },
  { id: 3, title: "Clean the house", description: "General cleaning for the house" },
];

function Home() {
  return (
    <div>
      <h1>Available Tasks</h1>
      <div className="home-container">
        {tasks.map((task) => (
          <div className="task-item" key={task.id}>
            <h2>{task.title}</h2>
            <p>{task.description}</p>
            <Link to={`/task/${task.id}`}>View Task</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
