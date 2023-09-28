import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./Components/Navbar";
import Login from "./Components/Login";
import Daftar from "./Components/Daftar";
import DataUser from "./Components/DataUser";
import DataMotivasi from "./Components/DataMotivasi";
import UpdateData from "./Components/UpdateData";
import UpdateMotivasi from "./Components/UpdateMotivasi";

function App() {
  return (
    <Router>
      <>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/DataUser" element={<DataUser />} />
          <Route path="/DataMotivasi" element={<DataMotivasi />} />
          <Route path="/" element={<Login />} />
          <Route path="/Daftar" element={<Daftar />} />
          <Route path="/UpdateData" element={<UpdateData />} />
          <Route path="/UpdateMotivasi" element={<UpdateMotivasi />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
