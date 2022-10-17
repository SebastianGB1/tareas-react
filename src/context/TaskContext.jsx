// import { tasks as data } from '../tasks'
import { createContext, useState, useEffect } from "react";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("tasks");
    if (data) {
      setTasks(JSON.parse(data));
    } else {
      setTasks([]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const createTask = (tittle, description) => {
    if (tittle && description) {
      setTasks([
        ...tasks,
        {
          id: tasks.length,
          tittle: tittle,
          description: description,
        },
      ]);
    } else {
      alert("Por favor complete todos los campos");
    }
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((t) => t.id !== taskId));
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        createTask,
        deleteTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
