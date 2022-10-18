import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Pages from "./pages";
import {
    useApplicationsStore,
    useCandidatesStore,
    useInterviewStore,
    useJobsStore,
} from "./store";
import KEYS from "./store/constants/localstorageKeys";

function App() {
    const updateJobsInStore = useJobsStore((state) => state.setJobs);
    const addFakeJobs = useJobsStore((state) => state.addFakeJobs);
    const updateCandidatesInStore = useCandidatesStore(
        (state) => state.setCandidates
    );
    const addFakeCandidates = useCandidatesStore(
        (state) => state.addFakeCandidates
    );
    const updateInterviewsInStore = useInterviewStore(
        (state) => state.setInterviews
    );
    const updateApplicantsInStore = useApplicationsStore(
        (state) => state.setApplications
    );
    useEffect(() => {
        const jobsInLocalStorage = JSON.parse(
            localStorage.getItem(KEYS.JOBS) || "[]"
        );
        updateJobsInStore(jobsInLocalStorage);
        console.log("jobsInLocalStorage", jobsInLocalStorage);
        const candidatesInLocalStorage = JSON.parse(
            localStorage.getItem(KEYS.CANDIDATES) || "[]"
        );
        updateCandidatesInStore(candidatesInLocalStorage);
        console.log("candidatesInLocalStorage", candidatesInLocalStorage);
        if (jobsInLocalStorage.length === 0) {
            addFakeJobs();
            console.log("added fake jobs");
            addFakeCandidates();
            console.log("added fake candidates");
        }
        // interviews
        const interviewsInLocalStorage = JSON.parse(
            localStorage.getItem(KEYS.INTERVIEWS) || "[]"
        );
        updateInterviewsInStore(interviewsInLocalStorage);
        console.log("interviewsInLocalStorage", interviewsInLocalStorage);
        // applicants
        const applicantsInLocalStorage = JSON.parse(
            localStorage.getItem(KEYS.APPLICATIONS) || "[]"
        );
        updateApplicantsInStore(applicantsInLocalStorage);
        console.log("applicantsInLocalStorage", applicantsInLocalStorage);
    }, [
        updateJobsInStore,
        addFakeJobs,
        addFakeCandidates,
        updateCandidatesInStore,
        updateInterviewsInStore,
        updateApplicantsInStore,
    ]);
    return (
        <BrowserRouter>
            <Pages />
        </BrowserRouter>
    );
}

export default App;
