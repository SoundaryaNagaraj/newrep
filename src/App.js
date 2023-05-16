import "./App.css";
import { NavLink } from "react-router-dom";
import Header from "./Header";
import Navbar from "./Navbar";
import Machinelogo from "./Machinelogo";



function App() {
  // const machines = ["Machine 1", "Machine 2", "Machine 3","Machine 4","Machine 5","Machine 6"];
  const machines=[]
  for(let i=1;i<=10;i++){
    machines.push('machine'+i)
  }
  console.log(machines);
  return (
    <div className="mainbody">
      <Header />
      <div className="container">
        <Navbar />
        <div className="main">
        
          <div className="map-machine">
            {machines.map((m) => (
              <Machinelogo name={m} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
