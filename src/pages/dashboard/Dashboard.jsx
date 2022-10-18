import { Route, Routes } from "react-router-dom";
import CandidateDashboard from "./CandidateDashboard";
import EmployeeDashboard from "./EmployeeDashboard";

export default function Dashboard() {
    return (
        <div>
            <Routes>
                <Route path="employee" element={<EmployeeDashboard />} />
                <Route path="candidate" element={<CandidateDashboard />} />
            </Routes>
        </div>
    );
}
