function GradesTable({ grades = [] }) {
  if (grades.length === 0) {
    return (
      <section className="grades-table-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Academic Performance</p>
            <h2>Semester Grades</h2>
          </div>
        </div>

        <div className="grades-empty-state">
          <div className="grades-empty-icon">📊</div>

          <h3>No grades available</h3>

          <p>
            There are currently no grades available for the selected results.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="grades-table-section">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Academic Performance</p>
          <h2>Semester Grades</h2>
        </div>

        <span className="semester-badge">
          {grades[0]?.semester}
        </span>
      </div>

      <div className="table-wrapper">
        <table className="grades-table">
          <thead>
            <tr>
              <th>Code</th>
              <th>Course</th>
              <th>Marks</th>
              <th>Grade</th>
              <th>Points</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {grades.map((item) => (
              <tr key={`${item.semester}-${item.code}`}>
                <td>
                  <strong>{item.code}</strong>
                </td>

                <td>{item.course}</td>

                <td>
                  {item.marks == null
                    ? "—"
                    : `${item.marks}%`}
                </td>

                <td>
                  <span className="grade-value">
                    {item.grade}
                  </span>
                </td>

                <td>
                  {item.points == null
                    ? "—"
                    : Number(item.points).toFixed(1)}
                </td>

                <td>
                  <span
                    className={`grade-status grade-status--${item.status
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                  >
                    {item.status === "Passed" && "✓"}
                    {item.status === "Failed" && "✕"}
                    {item.status === "Incomplete" && "!"}
                    {item.status === "Missing Mark" && "?"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default GradesTable;
