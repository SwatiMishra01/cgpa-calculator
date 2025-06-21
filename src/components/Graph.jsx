import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

export default function Graph({ gpas }) {
  const data = {
    labels: ["Sem 1", "Sem 2", "Sem 3", "Sem 4", "Sem 5", "Sem 6", "Sem 7"],
    datasets: [
      {
        label: "GPA",
        data: gpas,
        borderColor: "#2563EB",
        backgroundColor: "#60A5FA",
        tension: 0.4,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        min: 0,
        max: 10,
      },
    },
  };

  return (
    <div className="mt-4">
      <Line data={data} options={options} />
    </div>
  );
}
