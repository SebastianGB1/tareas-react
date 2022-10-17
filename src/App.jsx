import TaksForm from "./components/TaksForm";
import TaskList from "./components/TaskList";

function HolaMundo() {
  return (
    <main>
      <div className="container mx-auto p-10">
        <TaksForm />
        <TaskList />
      </div>
    </main>
  );
}

export default HolaMundo;
