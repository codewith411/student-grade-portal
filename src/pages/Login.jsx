import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [studentId, setStudentId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Demo credentials
  const demoStudent = {
    studentId: "student01",
    password: "password123",
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (
      studentId === demoStudent.studentId &&
      password === demoStudent.password
    ) {
      setError("");
      navigate("/dashboard");
    } else {
      setError("Invalid Student ID or Password");
    }
  };

  return (
    <main className="login-page">
      <div className="login-card">
        <h1>🎓 UniReg</h1>
        <h2>Student Login</h2>

        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="studentId">Student ID</label>

            <input
              type="text"
              id="studentId"
              placeholder="Enter Student ID"
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>

            <input
              type="password"
              id="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {error && <p className="error-message">{error}</p>}

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>

        <div className="demo-credentials">
          <h3>Demo Credentials</h3>

          <p>
            <strong>Student ID:</strong> student01
          </p>

          <p>
            <strong>Password:</strong> password123
          </p>
        </div>
      </div>
    </main>
  );
}

export default Login;