import { useLocation } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Navbar from "./Navbar";
import Highcharts from "./highcharts";
import data_1 from "./data_file5.csv";
// import data_1 from "./data_file6.csv";
// import data_1 from "./data_file7.csv";
function Machine_Details(props) {
  const location = useLocation();
  const receivedData = location.state;

  return (
    <div className="mainbody">
      <Header />
      <div className="container">
        <Navbar />

        <div>
          <div className="machine_name">
            <h3 style={{ textDecorationStyle: "none" }}>{receivedData.name}</h3>
          </div>
          <div className="machine_head">
            <div>
              <ul>
                <li className="li_hover">SFXFNG_SmartFix</li>
                <li className="li_hover">Piechart</li>
                <li className="li_hover">OEE</li>
                <li className="li_hover">Historical</li>
                <li className="li_hover">Download CSV</li>
                <li className="li_hover">Anomaly Detection</li>
              </ul>
            </div>
          </div>
          <div className="boxContainer">
            <div className="boxleft">
              {/* <div
                style={{
                  borderBottomColor: "blue",
                  height: "30%",
                  borderWidth: "10px",
                }}
              ></div>
              <div
                style={{
                  borderBottomColor: "blue",
                  height: "70%",
                  width: "30%",
                  borderWidth: "10px",
                }}
              ><div className="box-left-head">SFXFNG2002</div>
            </div> */}
            </div>

            <div className="boxright">
              <div>
                <p class="header-wrapper">
                  <h2>Fixture Information</h2>
                  <h5 className="headerRight">
                    Battery status: No Data Available
                  </h5>
                </p>
              </div>
              <div>
                <table className="tablehead">
                  <tbody>
                    <tr>
                      <td className="tableside1">Vibration Analyzer </td>
                      <td className="tableside2"></td>
                      <td className="tableside3">
                        <div className="machining-status">
                          <label>Machining Status</label>
                        </div>
                        <div className="paddingdistance1"> </div>

                        <div className="sudden-drop">
                          <label>Sudden Drop In Vibration</label>
                        </div>
                        <div className="paddingdistance2"></div>

                        <div className="tool-breakage">
                          <label>Tool Breakage</label>
                        </div>
                        <div className="paddingdistance3"></div>

                        <div className="high-vibration">
                          <label>High Vibration</label>
                        </div>
                        <div className="paddingdistance4"></div>

                        <div className="clamping-defect">
                          <label>Clamping Defect</label>
                        </div>
                        <div className="paddingdistance5"></div>

                        <div className="work-support">
                          <label>Work Support Issues</label>
                        </div>
                        <div className="paddingdistance6"></div>

                        <div className="blunt-cutting">
                          <label>Blunt Cutting Tool</label>
                        </div>
                        <div className="paddingdistance7"></div>
                      </td>
                    </tr>

                    <tr>
                      <td className="tableside4">Pressure Analyzer </td>
                      <td className="tableside5"></td>
                      <td className="tableside6">
                        <div className="cylinder">
                          <label>Cylinder Failures</label>
                        </div>
                        <div className="paddingdistance8"></div>

                        <div className="line">
                          <label>Line Leakages</label>
                        </div>
                        <div className="paddingdistance9"></div>

                        <div className="accumulator">
                          <label>Accumulator Not Charged</label>
                        </div>
                        <div className="paddingdistance10"></div>

                        <div className="work-support">
                          <label>Work Support Issues</label>
                        </div>
                        <div className="paddingdistance11"></div>
                      </td>
                    </tr>

                    <tr>
                      <td className="component-present">Component Present</td>
                      <td>
                        <div className="compo"></div>
                        <div className="footerRight">No Data Available</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <Highcharts />
      </div>
      {/* <div className="">
        <Highcharts />
      </div>
      <div className="">
        <Highcharts />
      </div> */}
    </div>
  );
}

export default Machine_Details;
