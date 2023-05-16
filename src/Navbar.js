
import "./App.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div style={{ paddingLeft: "25px" }}>
        <h5 style={{ color: "blue" }}>APPLICATION</h5>
      </div>
      <div>
        <nav className="nav-link">
          <NavLink
            exact
            to="/dashboard"
            style={{ marginRight: "10px", textDecoration: "none" }}
          >
            Dashboard
          </NavLink>
          <NavLink exact to="/home" style={{ textDecoration: "none" }}>
            Home
          </NavLink>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
