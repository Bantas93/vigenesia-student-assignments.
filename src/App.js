import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Dashboard from "./Components/Dashboard";
import Data from "./Components/Data";
import Login from "./Components/Login";
import AllData from "./Components/AllData";
import DataMotivasi from "./Components/DataMotivasi";
import UpdateData from "./Components/UpdateData";
import UpdateMotivasi from "./Components/UpdateMotivasi";
import About from "./Components/About";

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Data" element={<Data />}>
            <Route path="/Data/AllData" element={<AllData />} />
            <Route path="/Data/DataMotivasi" element={<DataMotivasi />} />
            <Route path="/Data/Login" element={<Login />} />
          </Route>
          <Route path="/UpdateData" element={<UpdateData />} />
          <Route path="/UpdateMotivasi" element={<UpdateMotivasi />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
