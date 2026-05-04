import { useState, useEffect } from "react";
import StudentCard from "./components/StudentCard";
import "./App.css";

export default function App() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setStudents(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="title">Loading...</p>;

  const filtered = students.filter((s) =>
    s.name.toLowerCase().includes(query.toLowerCase())
  );

  const handleSearch = () => setQuery(search);

  const handleClear = () => {
    setSearch("");
    setQuery("");
  };

  return (
    <div className="container">
      <div className="wrapper">
        <h1 className="title">🎓 Student Card</h1>

        <div className="controls">
          <input
            type="text"
            placeholder="Search students..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            className="input"
          />

          <button onClick={handleSearch} className="button">
            Search
          </button>

          {query && (
            <button onClick={handleClear} className="button">
              Clear
            </button>
          )}
        </div>

        <div className="grid">
          {filtered.map(({ id, name, email, address }) => (
            <StudentCard key={id} name={name} email={email} address={address} />
          ))}
        </div>
      </div>
    </div>
  );
}