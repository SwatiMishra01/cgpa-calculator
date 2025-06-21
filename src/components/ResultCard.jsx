export default function ResultCard({ data }) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center mb-6">
        <div className="bg-cyan-400 rounded-lg py-2 font-semibold">Name: {data.name}</div>
        <div className="bg-cyan-400 rounded-lg py-2 font-semibold">Roll No: {data.roll}</div>
        {data.semGPA.map((gpa, idx) => (
          <div
            key={idx}
            className="bg-gradient-to-r from-pink-600 to-purple-700 text-white rounded-lg py-2"
          >
            Sem {idx + 1} GPA: {gpa}
          </div>
        ))}
        <div className="bg-slate-800 text-white rounded-lg py-2 col-span-2 md:col-span-1">
          Branch Rank: {data.branchRank}
        </div>
        <div className="bg-slate-800 text-white rounded-lg py-2 col-span-2 md:col-span-1">
          College Rank: {data.collegeRank}
        </div>
        <div className="bg-black text-white rounded-lg py-2 col-span-2">
          GPA: {data.cgpa}
        </div>
      </div>
    );
  }
  