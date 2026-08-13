import courses from "../data/courses";

function RegisteredUnits() {
  const registeredUnits = courses.filter(
    (course) => course.status === "Registered"
  );

  const totalCredits = registeredUnits.reduce(
    (total, course) => total + course.credits,
    0
  );

  return (
    <main className="registered-units-page">
      <section className="page-header">
        <p className="eyebrow">Academic Registration</p>
        <h1>Registered Units</h1>
        <p>
          View the courses you are currently registered for this semester.
        </p>
      </section>

      <section className="registration-summary">
        <div className="registration-summary-card">
          <span className="summary-label">Registered Units</span>
          <strong className="summary-value">{registeredUnits.length}</strong>
        </div>

        <div className="registration-summary-card">
          <span className="summary-label">Total Credits</span>
          <strong className="summary-value">{totalCredits}</strong>
        </div>
      </section>

      {registeredUnits.length === 0 ? (
        <section className="empty-state">
          <div className="empty-state-icon">📚</div>
          <h2>No Registered Units</h2>
          <p>You are currently not registered for any courses.</p>
          <p>
            Please complete your semester registration to view your
            registered units.
          </p>
        </section>
      ) : (
        <section className="registered-units-section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Current Semester</p>
              <h2>Your Registered Courses</h2>
            </div>
          </div>

          <div className="registered-units-grid">
            {registeredUnits.map((course) => (
              <article className="registered-unit-card" key={course.code}>
                <div className="registered-unit-header">
                  <span className="course-code">{course.code}</span>
                  <span className="registration-status">Registered</span>
                </div>

                <h3>{course.name}</h3>

                <div className="registered-unit-details">
                  <div>
                    <span>Credits</span>
                    <strong>{course.credits}</strong>
                  </div>

                  <div>
                    <span>Lecturer</span>
                    <strong>{course.lecturer}</strong>
                  </div>

                  <div>
                    <span>Semester</span>
                    <strong>{course.semester}</strong>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}

export default RegisteredUnits;