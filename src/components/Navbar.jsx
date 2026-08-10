import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">🎓 UniReg</Link>
      </div>

      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>

        <li>
          <Link to="/registered-units">Registered Units</Link>
        </li>

        <li>
          <Link to="/grades">Grades</Link>
        </li>

        <li>
          <Link to="/profile">Profile</Link>
        </li>

        <li>
          <Link to="/login">Logout</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;