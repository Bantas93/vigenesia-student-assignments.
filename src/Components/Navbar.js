import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinkStyles = ({ isActive }) => {
    return {
      color: isActive ? "black" : "black",
      textDecoration: isActive ? "none" : "none",
      fontWeight: isActive ? "bold" : "",
    };
  };
  function clearData() {
    localStorage.clear();
    window.location.href = "/";
  }
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container justify-content-center">
        <button
          className="navbar-toggler navbar-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav text-center">
            <NavLink
              to="/DataUser"
              style={navLinkStyles}
              className="m-1 p-1 hov-e"
            >
              Data User
            </NavLink>
            <NavLink
              to="/DataMotivasi"
              style={navLinkStyles}
              className="m-1 p-1 hov-e"
            >
              Data Motivasi
            </NavLink>
          </div>
        </div>
        <button onClick={clearData} className="btn btn-danger">
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
