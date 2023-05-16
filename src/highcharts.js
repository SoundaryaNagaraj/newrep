import React, { useEffect, useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import data_1 from "./data_file5.csv";
// import data_1 from "./data_file6.csv";
// import data_1 from "./data_file7.csv";
import Papa from "papaparse";

function Showchart() {
  const [dataone, setdataone] = useState();
  const [datatwo, setdatatwo] = useState();
  const [datathree, setdatathree] = useState();

  useEffect(() => {
    Papa.parse(data_1, {
      download: true,
      header: true,
      complete: handleChart,
    });
  }, []);

  const handleChart = (results) => {
    console.log(results, "----");

    let a = [];
    let b = [];
    let c = [];

    for (let i = 0; i < results.data.length; i++) {
      a.push(parseInt(results.data[i]["SFXFNGCU2003_vibration_1"]));
      b.push(parseInt(results.data[i]["SFXFNGCU2003_vibration_2"]));
      c.push(results.data[i]["resample_timestamp"]);
    }
    // console.log(a);
    // console.log(b);
    setdataone(a);
    setdatatwo(b);
    setdatathree(c);
  };

  const options = {
    title: {
      text: "My chart",
    },
    xAxis: {
      categories: datathree,
    },
    series: [
      {
        data: dataone,
      },
      {
        data: datatwo,
      },
    ],
  };
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}

export default Showchart;
