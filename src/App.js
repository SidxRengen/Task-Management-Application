import { Route, Routes } from "react-router-dom";
import "./App.css";
import Tasks from "./components/Tasks";
import { BrowserRouter } from "react-router-dom";
import CreateTask from "./components/Create Task/CreateTask";
import UpdateTask from "./components/Update Task/UpdateTask";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Tasks />} />
        <Route path="/Create" element={<CreateTask />} />
        <Route path="/edit/:index" element={<UpdateTask />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
