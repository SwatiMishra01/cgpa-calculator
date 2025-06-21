export default function InputBox({ rollNo, setRollNo, onSearch }) {
    return (
      <div className="flex flex-col gap-4">
        <input
          type="text"
          className="px-4 py-2 rounded border focus:outline-none"
          placeholder="Enter Roll No (eg. 2K21/IT/176)"
          value={rollNo}
          onChange={(e) => setRollNo(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={onSearch}
        >
          Show
        </button>
      </div>
    );
  }
  