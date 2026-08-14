import { useMemo, useState } from "react";

import GradesTable from "../components/GradesTable";

import grades from "../data/grades";
import student from "../data/student";
import courses from "../data/courses";

function Grades() {
  const [filter, setFilter] = useState("All");

  /* =========================================
     AUTOMATIC REGISTRATION CHECK
     ========================================= */

  const registeredUnits = courses.filter(
    (course) =>
      course.semester === student.currentSemester &&
      course.status === "Registered",
  );

  const isRegistered = registeredUnits.length > 0;

  /* =========================================
     FILTER GRADES
     ========================================= */

  const filteredGrades = useMemo(() => {
  if (filter === "All") return grades;
  return grades.filter((item) => item.status === filter);
}, [filter]);
  /* =========================================
     CALCULATE AVERAGE
     ========================================= */

  const averageMarks =
    grades.length > 0
      ? (
          grades.reduce((total, item) => total + Number(item.marks || 0), 0) /
          grades.length
        ).toFixed(1)
      : "0.0";

  /* =========================================
     CALCULATE GPA
     ========================================= */

  const gpa =
    grades.length > 0
      ? (
          grades.reduce((total, item) => total + Number(item.points || 0), 0) /
          grades.length
        ).toFixed(2)
      : "0.00";

  /* =========================================
     COUNT PASSED / ATTENTION
     ========================================= */

  const passedUnits = grades.filter((item) => item.status === "Passed").length;

  const attentionUnits = grades.filter(
    (item) => item.status !== "Passed",
  ).length;

  return (
    <main className="grades-page">
      <section className="page-header">
        <p className="eyebrow">Academic Performance</p>

        <h1>Grades</h1>

        <p>Review your marks, grades, GPA, and academic performance.</p>
      </section>

      {/* =====================================
          REGISTRATION STATUS
          ===================================== */}

      {isRegistered ? (
        <section className="grades-registration-notice grades-registration-notice--success">
          <div className="grades-notice-icon grades-notice-icon--registered">
            ✓
          </div>

          <div>
            <strong>Current registration active</strong>

            <p>You are currently registered for {student.currentSemester}.</p>
          </div>
        </section>
      ) : (
        <section className="grades-registration-notice grades-registration-notice--warning">
          <div className="grades-notice-icon grades-notice-icon--not-registered">
            ✕
          </div>

          <div>
            <strong>Current semester not registered</strong>

            <p>
              You are not registered for {student.currentSemester}. The grades
              shown below are from your previous academic record.
            </p>
          </div>
        </section>
      )}

      {/* =====================================
          SUMMARY
          ===================================== */}

      <section className="grades-summary">
        <article className="grades-card">
          <span className="summary-icon">📊</span>

          <div>
            <p>Average Marks</p>

            <h3>{averageMarks}%</h3>
          </div>
        </article>

        <article className="grades-card">
          <span className="summary-icon">🎓</span>

          <div>
            <p>Current GPA</p>

            <h3>{gpa}</h3>
          </div>
        </article>

        <article className="grades-card">
          <span className="summary-icon">✓</span>

          <div>
            <p>Passed Units</p>

            <h3>{passedUnits}</h3>
          </div>
        </article>

        <article className="grades-card">
          <span className="summary-icon">!</span>

          <div>
            <p>Needs Attention</p>

            <h3>{attentionUnits}</h3>
          </div>
        </article>
      </section>

      <section className="grades-controls">
        <div>
          <p className="eyebrow">Results Filter</p>

          <h2>Academic Record</h2>
        </div>

        <div className="grade-filters">
  {["All", "Passed", "Failed", "Incomplete", "Missing Mark"].map((item) => (
    <button
      key={item}
      type="button"
      className={`grade-filter grade-filter--${item
        .toLowerCase()
        .replace(" ", "-")} ${
        filter === item ? "grade-filter--active" : ""
      }`}
      onClick={() => setFilter(item)}
    >
      {item}
    </button>
  ))}
</div>
           
      </section>

      <GradesTable grades={filteredGrades} />
    </main>
  );
}

export default Grades;
