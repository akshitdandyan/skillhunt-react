import { Route, Routes } from "react-router-dom";
import Footer from "../components/Footer";
import JobApplyForm from "../components/forms/JobApplyForm";
import ScheduleInterviewForm from "../components/forms/ScheduleInterview";
import Header from "../components/Header";
import Modal from "../components/Modal";
import Popup from "../components/Popup";
import Auth from "./auth";
import Candidates from "./candidates";
import ContactPage from "./contact";
import Dashboard from "./dashboard/Dashboard";
import Home from "./home";
import Jobs from "./jobs";

export default function Pages() {
    return (
        <div>
            <Header />
            <div className="p-4 pt-28">
                <Routes>
                    <Route path="/" exact element={<Home />} />
                    <Route path="/auth" exact element={<Auth />} />
                    <Route path="/dashboard/*" element={<Dashboard />} />
                    <Route path="/jobs" element={<Jobs />} />
                    <Route path="/candidates" element={<Candidates />} />
                    <Route path="/contact" element={<ContactPage />} />
                </Routes>
            </div>
            <Footer />
            <Popup />
            <Modal
                InterviewForm={ScheduleInterviewForm}
                JobForm={JobApplyForm}
            ></Modal>
        </div>
    );
}
