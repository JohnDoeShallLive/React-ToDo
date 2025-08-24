import { useContext, useState } from "react";
import TaskContext from "../context/TaskContext";

function ShowTask() {
  const { task, clearAll, deleteTask ,editTask , } = useContext(TaskContext);

  const handleSubmit = () => {
    if (window.confirm("Are you sure you want to clear all tasks")) {
      clearAll();
    }
  };

  

  return (
    <section className="showTask">
      <div className="head">
        <div>
          <span className="title">Todo</span>
          <span className="count">{task.length}</span>
        </div>
        <button
          className="clearAll"
          onClick={handleSubmit}
          disabled={task.length === 0}
        >
          Clear All
        </button>
      </div>

      <ul>
        {task.map((task) => (
          <li key={task.id}>
            <p>
              <span className="name"> {task.name}</span>
              <span className="time">{task.time} </span>
            </p>
            <i className="bi bi-pencil-square" onClick={()=>{editTask(task)}}></i>
            <i className="bi bi-trash" onClick={() => deleteTask(task.id)}></i>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ShowTask;
