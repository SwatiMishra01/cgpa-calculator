// src/components/StudentTable.jsx
import { useEffect, useState } from "react";

export default function StudentTable() {
  const [students, setStudents] = useState({});

  useEffect(() => {
    fetch("/data/cgpa.json")
      .then((res) => res.json())
      .then(setStudents);
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">All Student CGPAs</h2>
      <table className="min-w-full border">
        <thead>
          <tr>
            <th>Roll</th>
            <th>Name</th>
            <th>CGPA</th>
            {Array.from({ length: 8 }, (_, i) => (
              <th key={i}>Sem {i + 1}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Object.entries(students).map(([roll, { name, cgpa, semGPA }]) => (
            <tr key={roll}>
              <td>{roll}</td>
              <td>{name}</td>
              <td>{cgpa}</td>
              {semGPA.map((sgpa, i) => (
                <td key={i}>{sgpa ?? "-"}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
