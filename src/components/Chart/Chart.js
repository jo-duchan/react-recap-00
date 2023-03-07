import React from "react";

import ChartBar from "components/Chart/ChartBar";
import "components/Chart/Chart.css";

function Chart({ dataPoints }) {
  const dataPointValues = dataPoints.map((dataPoints) => dataPoints.value);
  const totalMaximum = Math.max(...dataPointValues);
  return (
    <div className="chart">
      {dataPoints.map((dataPoints) => (
        <ChartBar
          key={dataPoints.label}
          value={dataPoints.value}
          maxValue={totalMaximum}
          label={dataPoints.label}
        />
      ))}
    </div>
  );
}

export default Chart;
