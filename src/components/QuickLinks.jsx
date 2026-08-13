import { Link } from "react-router-dom";

function QuickLinks() {
  const links = [
    {
      title: "Registered Units",
      description: "View your current semester units.",
      icon: "",
      path: "/registered-units",
    },
    {
      title: "View Grades",
      description: "Check your academic performance.",
      icon: "",
      path: "/grades",
    },
    {
      title: "Student Profile",
      description: "View your personal information.",
      icon: "",
      path: "/profile",
    },
  ];

  return (
    <section className="quick-links">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Navigation</p>
          <h2>Quick Access</h2>
        </div>
      </div>

      <div className="quick-link-grid">
        {links.map((link) => (
          <Link
            to={link.path}
            className="quick-link-card"
            key={link.title}
          >
            <span className="quick-link-icon">{link.icon}</span>

            <div>
              <h3>{link.title}</h3>
              <p>{link.description}</p>
            </div>

            <span className="quick-link-arrow">→</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default QuickLinks;