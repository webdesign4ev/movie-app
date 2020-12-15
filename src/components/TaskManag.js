import React from "react";
import TaskListContextProvider from "../context/TaskListContext";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";
import TaskHeader from "./TaskHeader";
 
export const TaskManag = () => {
  return (
    <TaskListContextProvider>
      <div className="task-container">
        <div className="app-wrapper">
          <TaskHeader />
          <div className="main">
            <TaskForm />
            <TaskList />
          </div>
        </div>
        
      </div>
    </TaskListContextProvider>
  );
};


