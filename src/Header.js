import logo from "./smartfixlogo.png";
import userlogo from "./userlogin.png";
import "./App.css";

function Header() {
  return (
    <nav className="bgcolor">
      <img src={logo} className="img-logo" alt="logo" />
      <img src={userlogo} className="user-logo" alt="logo" />
    </nav>
  );
}

export default Header;
