import * as StudentModule from "../data/student";

const student = StudentModule.default ?? StudentModule.student ?? {
  name: "John Doe",
  registrationNumber: "SCT221-0123/2023",
  studentId: "SCT221-0123/2023",
  programme: "Bachelor of Computer Science",
};

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
          Student ID:{" "}
          {student.registrationNumber || student.studentId || student.id || "—"}
        </p>

        <p className="student-program">
          {student.programme || student.program || "—"}
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