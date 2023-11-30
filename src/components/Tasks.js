import React, { useEffect, useState } from "react";
import Nav from "./Nav/Nav";
import "./Tasks.scss";
import { Navigate, useNavigate } from "react-router-dom";
function Tasks() {
  const [tasks, settasks] = useState([]);
  useEffect(() => {
    settasks(JSON.parse(localStorage.getItem("tasks"))||[]);
  }, []);
  const handleDeleteTask = (index) => {
    // Remove the task at the specified index
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);

    // Update local storage and state
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    settasks(updatedTasks);
  };
  const navigate = useNavigate();
  return (
    <div>
      <Nav />
      <div className="tasks">
        {tasks.map((el, index) => {
          const { name, description, priority } = el;
          return (
            <>
              <div key={index} className="task">
                <span className="name">{name}</span>
                <span className="description">{description}</span>
                <span className="Priority">Priority:{priority}</span>
                <div className="options">
                  {" "}
                  <i
                    class="fa-solid fa-pen-to-square"
                    style={{ color: "blue" }}
                    onClick={() => navigate(`/edit/${index}`)}
                  />
                  <i
                    style={{ color: "red" }}
                    class="fa-solid fa-trash"
                    onClick={() => handleDeleteTask(index)}
                  />
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Tasks;
