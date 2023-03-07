import React from "react";

import ChartBar from "components/Chart/ChartBar";
import "components/Chart/Chart.css";

function Chart({ dataPoints }) {
  return (
    <div className="chart">
      {dataPoints.map((dataPoints) => (
        <ChartBar
          key={dataPoints.label}
          value={dataPoints.value}
          maxValue={null}
          label={dataPoints.label}
        />
      ))}
    </div>
  );
}

export default Chart;
