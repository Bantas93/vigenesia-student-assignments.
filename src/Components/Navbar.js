import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinkStyles = ({ isActive }) => {
    return {
      color: isActive ? "black" : "black",
      textDecoration: isActive ? "none" : "none",
      fontWeight: isActive ? "bold" : "",
    };
  };
  return (
    <nav class="navbar navbar-expand-lg">
      <div class="container justify-content-center">
        <button
          class="navbar-toggler navbar-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-center"
          id="navbarNavAltMarkup"
        >
          <div class="navbar-nav text-center">
            <NavLink to="/" style={navLinkStyles} className="m-1 p-1 hov-e">
              LandingPage
            </NavLink>
            <NavLink
              to="/Data/AllData"
              style={navLinkStyles}
              className="m-1 p-1 hov-e"
            >
              Data
            </NavLink>
            <NavLink
              to="/About"
              style={navLinkStyles}
              className="m-1 p-1 hov-e"
            >
              About
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
