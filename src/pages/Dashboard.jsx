import { Link } from "react-router-dom";

import StudentCard from "../components/StudentCard";
import SummaryCards from "../components/SummaryCards";
import QuickLinks from "../components/QuickLinks";
import UnitsTable from "../components/UnitsTable";

function Dashboard() {
  return (
    <main className="dashboard-page">

      <section className="dashboard-header">

        <div>

          <p className="eyebrow">
            Student Portal
          </p>

          <h1>
            Student Dashboard
          </h1>

          <p className="dashboard-subtitle">
            Welcome back. Here's an overview of your
            academic information.
          </p>

        </div>

        <Link
          to="/registered-units"
          className="dashboard-action"
        >
          View All Units →
        </Link>

      </section>

      <StudentCard />

      <SummaryCards />

      <QuickLinks />

      <UnitsTable limit={5} />

    </main>
  );
}

export default Dashboard;