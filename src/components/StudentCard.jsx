import student from "../data/student";

function StudentCard() {
  return (
    <section className="student-card">
      <div className="student-avatar">
        {student.name?.charAt(0) || "S"}
      </div>

      <div className="student-card-info">
        <p className="eyebrow">Student Profile</p>

        <h2>{student.name}</h2>

        <p className="student-id">
          Student ID: {student.studentId}
        </p>

        <p className="student-program">
          {student.programme}
        </p>
      </div>

      <div className="student-status">
        <span className="status-dot"></span>
        Active Student
      </div>
    </section>
  );
}

export default StudentCard;