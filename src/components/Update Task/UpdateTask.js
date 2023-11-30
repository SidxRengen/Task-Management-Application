import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Nav from "../Nav/Nav";
import "./UpdateTask.css";
const TaskEdit = () => {
  const { index } = useParams();

  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskPriority, setTaskPriority] = useState("");
  const [tasks, settasks] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    settasks(JSON.parse(localStorage.getItem("tasks")));
    console.log(tasks);
    if (index !== undefined && tasks[index]) {
      const taskToEdit = tasks[index];
      setTaskName(taskToEdit.name);
      setTaskDescription(taskToEdit.description);
      setTaskPriority(taskToEdit.priority);
    }
  }, []);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const updatedTask = {
      name: taskName,
      description: taskDescription,
      priority: taskPriority,
    };

    let updatedTasks;

    if (index !== undefined) {
      updatedTasks = [...tasks];
      updatedTasks[index] = updatedTask;
    }

    settasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    navigate("/");
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
          <button type="submit">Update Task</button>
        </form>
      </div>
    </div>
  );
};

export default TaskEdit;
