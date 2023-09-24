import { NavLink, Outlet } from "react-router-dom";

const Data = () => {
  const navLinkStyles = ({ isActive }) => {
    return {
      color: isActive ? "white" : "black",
      textDecoration: isActive ? "none" : "none",
      opacity: isActive ? "100%" : "100%",
      fontWeight: isActive ? "bold" : "",
      backgroundColor: isActive ? "#212529" : "",
      borderRadius: isActive ? "5%" : "",
    };
  };
  return (
    <>
      <div className="bg-Education text-center">
        <h1>Data</h1>
        <NavLink
          to="/Data/AllData"
          className="m-2 p-1 hov-e"
          style={navLinkStyles}
        >
          Data User
        </NavLink>
        <NavLink
          to="/Data/DataMotivasi"
          className="m-2 p-1 hov-e"
          style={navLinkStyles}
        >
          Data Motivasi
        </NavLink>
        <Outlet />
      </div>
    </>
  );
};

export default Data;
