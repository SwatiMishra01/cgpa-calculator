// src/components/DownloadSection.jsx
export default function DownloadSection() {
    return (
      <div className="space-x-4 mt-4">
        <a href="/excels/sem6.xlsx" download className="btn">Download Excel</a>
        <a href="/svgs/sem6.svg" download className="btn">Download SVG</a>
      </div>
    );
  }
  