import "./App.css";
import AddPassword from "./components/AddPassword";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/passwordmanager/" element={<AddPassword />} />
          <Route path="/passwordmanager/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
