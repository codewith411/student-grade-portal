import { Link } from "react-router-dom";

function Home() {
  const features = [
    {
      title: "Registered Units",
      description: "View all your registered course units for the current semester.",
      icon: "📚",
      link: "/registered-units",
    },
    {
      title: "View Grades",
      description: "Check your grades and academic performance instantly.",
      icon: "📊",
      link: "/grades",
    },
    {
      title: "Student Profile",
      description: "View your personal and academic information.",
      icon: "👤",
      link: "/profile",
    },
  ];

  return (
    <main className="home">
      {/* Hero Section */}
      <section className="hero">
        <h1>🎓 Student Grade Portal</h1>

        <p>
          Welcome to <strong>UniReg</strong>, a simple platform that allows
          students to access their registered course units, grades, and profile
          information from one place.
        </p>

        <div className="hero-buttons">
          <Link to="/login" className="btn btn-primary">
            Login
          </Link>

          <Link to="/dashboard" className="btn btn-secondary">
            View Dashboard
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="features">
        <h2>Portal Features</h2>

        <div className="feature-grid">
          {features.map((feature) => (
            <div className="feature-card" key={feature.title}>
              <div className="feature-icon">{feature.icon}</div>

              <h3>{feature.title}</h3>

              <p>{feature.description}</p>

              <Link to={feature.link} className="feature-link">
                Explore →
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;