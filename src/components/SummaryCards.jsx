import courses from "../data/courses";

function SummaryCards() {
  const totalCredits = courses.reduce(
    (total, course) => total + Number(course.credits || 0),
    0
  );

  return (
    <section className="summary-grid">
      <article className="summary-card">
        <div className="summary-icon">📚</div>
        <div>
          <p>Registered Units</p>
          <h3>{courses.length}</h3>
        </div>
      </article>

      <article className="summary-card">
        <div className="summary-icon">🎓</div>
        <div>
          <p>Total Credits</p>
          <h3>{totalCredits}</h3>
        </div>
      </article>

      <article className="summary-card">
        <div className="summary-icon">📈</div>
        <div>
          <p>Academic Status</p>
          <h3>Good</h3>
        </div>
      </article>

      <article className="summary-card">
        <div className="summary-icon">⭐</div>
        <div>
          <p>Current GPA</p>
          <h3>3.72</h3>
        </div>
      </article>
    </section>
  );
}

export default SummaryCards;