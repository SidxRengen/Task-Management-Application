import React, { useEffect, useState } from "react";
import "./CreateTask.css";
import Nav from "../Nav/Nav";
import Dropdown from "./Dropdown";
import { useNavigate } from "react-router-dom";
function CreateTask() {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskPriority, setTaskPriority] = useState("");
  const navigate = useNavigate();

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const newTask = {
      name: taskName,
      description: taskDescription,
      priority: taskPriority,
    };

    const existingTasks = JSON.parse(localStorage.getItem("tasks")) || [];

    existingTasks.push(newTask);

    localStorage.setItem("tasks", JSON.stringify(existingTasks));

    navigate("/");
    setTaskName("");
    setTaskDescription("");
    setTaskPriority("");
  };

  return (
    <div>
      <Nav />
      <div className="CreateUser">
        <form className="newuser" onSubmit={handleFormSubmit}>
          <h3 htmlFor="taskName">Name</h3>
          <textarea
            type="text"
            id="taskName"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            className="task_name"
          />
          <h3 htmlFor="description">discription</h3>
          <textarea
            id="taskDescription"
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            required
            className="task_discription"
          ></textarea>
          <h3>Priority level</h3>
          <div className="dropdown">
            <label htmlFor="taskPriority">Select Priority:</label>
            <select
              id="taskPriority"
              value={taskPriority}
              required
              onChange={(e) => setTaskPriority(e.target.value)}
              className="dropdown-select"
            >
              <option value="">Select Priority</option>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>

            {taskPriority && <p>You selected: {taskPriority} priority</p>}
          </div>
          <button type="stubmit" className="submit">
            Add Task
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateTask;
