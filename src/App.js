import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Dashboard from "./Components/Dashboard";
import Data from "./Components/Data";
import AllData from "./Components/AllData";
import DataMotivasi from "./Components/DataMotivasi";
import DeleteMotivasi from "./Components/DeleteMotivasi";
import About from "./Components/About";

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/Data" element={<Data />}>
            <Route path="/Data/AllData" element={<AllData />} />
            <Route path="/Data/DataMotivasi" element={<DataMotivasi />} />
            <Route path="/Data/DeleteMotivasi" element={<DeleteMotivasi />} />
          </Route>
          <Route path="/About" element={<About />}></Route>
        </Routes>
      </>
    </Router>
  );
}

export default App;
