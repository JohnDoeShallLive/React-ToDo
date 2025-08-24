import { useState } from "react";
import Header from "./components/Header";
import AddTask from "./components/AddTask";
import ShowTask from "./components/ShowTask";
import { TaskProvider } from "./context/TaskContext";
import "./App.css";

function App() {
 
  return (
    <TaskProvider>
      <div className="App">
        <Header />
        <AddTask  />
        <ShowTask  />
      </div>
    </TaskProvider>
  );
}

export default App;
