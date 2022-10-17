import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaksForm() {
  const [tittle, setTittle] = useState("");
  const { createTask } = useContext(TaskContext);
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(tittle, description);
    setTittle("");
    setDescription("");
  };
  return (
    <div className="max-w-max mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4">
        <h1 className="text-2xl font-bold text-white">Crear nueva tarea</h1>
        <input
          placeholder="Escribe tu tarea"
          onChange={(e) => {
            setTittle(e.target.value);
          }}
          value={tittle}
          autoFocus
          className="bg-slate-300 p-3 w-full mb-2"
        />
        <input
          placeholder="Escribe una descripcion"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          value={description}
          className="bg-slate-300 p-3 w-full mb-2"
        />
        <button
        className="bg-indigo-500 px-3 py-1 text-white">Guardar</button>
      </form>
    </div>
  );
}

export default TaksForm;
