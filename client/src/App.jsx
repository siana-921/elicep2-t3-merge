import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Register from "./pages/Register";
import Error from "./pages/Error";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
