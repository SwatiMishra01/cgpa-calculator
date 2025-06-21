import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
import "./App.css";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

export default function App() {
  const [rollNo, setRollNo] = useState("");
  const [batch, setBatch] = useState("2026");
  const [data, setData] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await fetch(`/data/cgpa${batch}.json`);
      const allData = await response.json();

      const found = allData[rollNo.trim()];
      if (found) {
        setData({ ...found, roll: rollNo.trim() });
      } else {
        alert("Student not found");
        setData(null);
      }
    } catch (err) {
      console.error("Failed to load data", err);
      alert("Error loading data");
    }
  };

  const chartData = {
    labels: ["Sem 1", "Sem 2", "Sem 3", "Sem 4", "Sem 5", "Sem 6", "Sem 7", "Sem 8"],
    datasets: [
      {
        label: "GPA",
        data: data?.semGPA || [],
        backgroundColor: "skyblue",
        borderColor: "blue",
        fill: false,
        tension: 0.3,
      },
    ],
  };

  const chartOptions = {
    scales: {
      y: {
        min: 0,
        max: 10,
      },
    },
  };

  return (
    <div className="page-wrapper">
      {/* Header */}
      <header className="header">
        <h1>IGDTUW Batch-wise Marks</h1>
      </header>

      {/* Input Form */}
      <main className="main-content">
        <div className="container">
          <div className="header-box">
            <h2>Result Analysis</h2>
            <select value={batch} onChange={(e) => setBatch(e.target.value)}>
              <option value="2025">Batch 2025</option>
              <option value="2026">Batch 2026</option>
              <option value="2027">Batch 2027</option>
              <option value="2028">Batch 2028</option>

            </select>

            <input
              type="text"
              placeholder="Enter Roll No"
              value={rollNo}
              onChange={(e) => setRollNo(e.target.value)}
            />
            <button onClick={handleSearch}>Show</button>
          </div>

          {/* Result Box */}
          {data && (
            <div className="result-box">
              <h3>Result</h3>
              <div className="result-flex">
                <div className="info-grid">
                  <div className="info blue">Name: {data.name}</div>
                  <div className="info blue">Roll No: {data.roll}</div>

                  {data.semGPA.map((gpa, i) => (
                    <div key={i} className="info purple">
                      Sem {i + 1} GPA: {gpa}
                    </div>
                  ))}

                  <div className="info dark">CGPA: {data.cgpa}</div>
                </div>

                <div className="chart">
                  <Line data={chartData} options={chartOptions} />
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>
          Designed & Implemented by <strong>Swati Mishra</strong> | Credit: <em>~gsg__mks</em>
        </p>
      </footer>
    </div>
  );
}
