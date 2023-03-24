import { Routes, Route } from "react-router-dom";
import Homepage from "./assets/Pages/Homepage";
import Error404 from "./assets/Pages/Error404";
import Testing from "./assets/Pages/Testing";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/testing" element={<Testing />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}

export default App;
