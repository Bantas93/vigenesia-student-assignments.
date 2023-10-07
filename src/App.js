import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./Components/Navbar";
import Login from "./Components/Login";
import Daftar from "./Components/Daftar";
import Dashboard from "./Components/Dashboard";
import MotivasiUser from "./Components/MotivasiUser";
import DataUser from "./Components/DataUser";
import DataMotivasi from "./Components/DataMotivasi";
import UpdateData from "./Components/UpdateData";
import UpdateMotivasi from "./Components/UpdateMotivasi";
import PostMotivasi from "./Components/PostMotivasi";

function App() {
  return (
    <Router>
      <>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/MotivasiUser" element={<MotivasiUser />} />
          <Route path="/DataUser" element={<DataUser />} />
          <Route path="/DataMotivasi" element={<DataMotivasi />} />
          <Route path="/Daftar" element={<Daftar />} />
          <Route path="/UpdateData" element={<UpdateData />} />
          <Route path="/UpdateMotivasi" element={<UpdateMotivasi />} />
          <Route path="/PostMotivasi" element={<PostMotivasi />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
