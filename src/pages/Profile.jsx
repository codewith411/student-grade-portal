import ProfileCard from "../components/ProfileCard";
import student from "../data/student";
import courses from "../data/courses";

function Profile() {
  const registeredUnits = courses.filter(
    (course) =>
      course.semester === student.currentSemester &&
      course.status === "Registered"
  );

  const isRegistered = registeredUnits.length > 0;

  return (
    <main className="profile-page">

      <section className="page-header">

        <p className="eyebrow">
          Student Information
        </p>

        <h1>
          Profile
        </h1>

        <p>
          View your personal information, academic
          status, and current registration details.
        </p>

      </section>


      {isRegistered ? (

        <section className="profile-alert profile-alert--success">

          <div className="profile-alert-icon">
            ✓
          </div>

          <div>

            <strong>
              Registration Active
            </strong>

            <p>
              You are registered for{" "}
              {student.currentSemester} with{" "}
              {registeredUnits.length}{" "}
              {registeredUnits.length === 1
                ? "registered unit."
                : "registered units."}
            </p>

          </div>

        </section>

      ) : (

        <section className="profile-alert profile-alert--warning">

          <div className="profile-alert-icon">
            !
          </div>

          <div>

            <strong>
              Registration Required
            </strong>

            <p>
              You are not registered for{" "}
              {student.currentSemester}.
              Please complete semester registration.
            </p>

          </div>

        </section>

      )}


      <ProfileCard />

    </main>
  );
}

export default Profile;