import student from "../data/student";
import courses from "../data/courses";

function ProfileCard() {
  const registeredUnits = courses.filter(
    (course) =>
      course.semester === student.currentSemester &&
      course.status === "Registered"
  );

  const isRegistered = registeredUnits.length > 0;

  return (
    <section className="profile-card">

      <div className="profile-avatar">
        {student.name.charAt(0).toUpperCase()}
      </div>

      <div className="profile-info">

        <p className="eyebrow">
          Student Profile
        </p>

        <h2>
          {student.name}
        </h2>

        <p className="profile-program">
          {student.program}
        </p>

        <p className="profile-student-id">
          Student ID: {student.studentId}
        </p>

      </div>


      {/* AUTOMATIC REGISTRATION STATUS */}

      <div
        className={
          isRegistered
            ? "profile-registration profile-registration--active"
            : "profile-registration profile-registration--inactive"
        }
      >

        <span className="registration-dot"></span>

        <div>

          <strong>
            {isRegistered
              ? "Registered"
              : "Not Registered"}
          </strong>

          <p>
            {isRegistered
              ? `You are registered for ${student.currentSemester}.`
              : `You are not registered for ${student.currentSemester}.`}
          </p>

        </div>

      </div>


      <div className="profile-details">

        <div className="profile-item">
          <span className="profile-label">
            Email
          </span>

          <span className="profile-value">
            {student.email}
          </span>
        </div>


        <div className="profile-item">
          <span className="profile-label">
            Phone
          </span>

          <span className="profile-value">
            {student.phone}
          </span>
        </div>


        <div className="profile-item">
          <span className="profile-label">
            Year
          </span>

          <span className="profile-value">
            {student.year}
          </span>
        </div>


        <div className="profile-item">
          <span className="profile-label">
            Semester
          </span>

          <span className="profile-value">
            {student.semester}
          </span>
        </div>


        <div className="profile-item">
          <span className="profile-label">
            Academic Status
          </span>

          <span className="profile-value">
            {student.academicStatus}
          </span>
        </div>


        <div className="profile-item">
          <span className="profile-label">
            Current Academic Period
          </span>

          <span className="profile-value">
            {student.currentSemester}
          </span>
        </div>


        <div className="profile-item">
          <span className="profile-label">
            Registered Units
          </span>

          <span className="profile-value">
            {registeredUnits.length}
          </span>
        </div>

      </div>

    </section>
  );
}

export default ProfileCard;