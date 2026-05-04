import "../App.css";

export default function StudentCard({ name, email, address }) {
  return (
    <div className="card">
      <h3 className="name">{name}</h3>
      <p className="email">{email}</p>
      <p className="city">{address.city}</p>
    </div>
  );
}