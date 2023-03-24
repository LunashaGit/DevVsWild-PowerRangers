import { Routes, Route } from "react-router-dom";
import Homepage from "./assets/Pages/Homepage";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
    </Routes>
  );
}

export default App;
