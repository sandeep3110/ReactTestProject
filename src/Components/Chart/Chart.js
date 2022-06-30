import "./Chart.css";
import { ChartBar } from "./ChartBar";

export const Chart = (props) => {
  const valueMap = props.dataPoints.map((dataPoint) => dataPoint.value);
  const maxValue = Math.max(...valueMap);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => {
        return (
          <ChartBar
            maxValue={maxValue}
            label={dataPoint.label}
            key={dataPoint.label}
            value={dataPoint.value}
          />
        );
      })}
    </div>
  );
};
