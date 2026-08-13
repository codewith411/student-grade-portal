import courses from "../data/courses";

function UnitsTable({ limit }) {
  const displayedCourses = limit ? courses.slice(0, limit) : courses;

  return (
    <section className="units-section">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Current Semester</p>
          <h2>Registered Units</h2>
        </div>

        <span className="semester-badge">Semester 1</span>
      </div>

      <div className="table-wrapper">
        <table className="units-table">
          <thead>
            <tr>
              <th>Code</th>
              <th>Course Unit</th>
              <th>Lecturer</th>
              <th>Credits</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {displayedCourses.map((course) => (
              <tr key={course.code}>
                <td>
                  <strong>{course.code}</strong>
                </td>
                <td>{course.name}</td>
                <td>{course.lecturer}</td>
                <td>{course.credits}</td>
                <td>
                  <span className="unit-status">{course.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default UnitsTable;