import "./App.css";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import machinelogo from "./machinelogo.gif";
import noimagelogo from "./noimagelogo.jpg";

function Machinelogo(props) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/machine_details", { state: { name: props.name } });
  };
  return (
    <div className="map-machine">
      <div className="logo xyz">
      <div className="imagecontainer">
        <img src={noimagelogo} className="noimage-logo" alt="logo" />
        <img src={machinelogo} className="machine-logo" alt="logo" />
       </div>
        <button className="machine-title" onClick={(e) => handleClick()}>
          {props.name}
        </button>
    
        <button className="edit-button">Edit</button>
  
      <div className="machine-info">
        <div className="form-group">
          <label htmlFor="machine-name">Machine Name</label>
          <input id="machine-name" type="text" />
        </div>

        <div className="form-group">
          <label htmlFor="machine-id">Machine Id</label>
          <input id="machine-id" type="text" />
        </div>

        <div className="form-group">
          <label htmlFor="clamp-status">Clamp Status</label>
          <input id="clamp-status" type="text" />
        </div>

        <div className="form-group">
          <label htmlFor="machine-type">Machine Type</label>
          <input id="machine-type" type="text" />
        </div>
      </div>
    </div>
    </div>
    
  );
}

export default Machinelogo;
