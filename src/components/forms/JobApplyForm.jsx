import { useState } from "react";
import {
    useApplicationsStore,
    useCandidatesStore,
    useModalStore,
} from "../../store";

export default function JobApplyForm() {
    const [applicationDetails, setApplicationDetails] = useState({
        message: "",
    });

    const [errors, setErrors] = useState({
        message: "",
    });

    const addNewApplication = useApplicationsStore(
        (state) => state.addNewApplication
    );
    const showModal = useModalStore((state) => state.setShow);
    const job = useModalStore((state) => state.job);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!applicationDetails.message) {
            setErrors({ ...errors, date: "Message is required" });
            return;
        }
        const candidate = useCandidatesStore.getState().candidates[0];
        addNewApplication({
            ...applicationDetails,
            candidateName: candidate.name,
            candidateId: candidate.id,
            candidateExperience: candidate.experience,
            candidateSkills: candidate.skills,
            jobTitle: job.title,
        });
        showModal(false);
    };
    return (
        <div
            onClick={(e) => e.stopPropagation()}
            className="bg-gray-100 shadow-md px-10 py-4 p-4 rounded-md"
        >
            <h2>Apply Job at {job.company}</h2>
            <div className="flex">
                <div className="bg-yellow-100 p-1 text-sm my-1 block rounded-full px-2 text-yellow-500 w-max">
                    Job Type: {job.jobType}
                </div>
                <div className="bg-blue-100 text-sm ml-2 p-1 my-1 block rounded-full px-2 text-blue-500 w-max">
                    Designation: {job.title}
                </div>
            </div>
            <form>
                <div className="flex flex-col mt-2 mb-1">
                    <label className="text-blue-500" htmlFor="notes">
                        Message for recruiter
                    </label>
                    <textarea
                        className="outline-none"
                        name="notes"
                        id="notes"
                        cols="30"
                        rows="4"
                        onChange={(e) =>
                            setApplicationDetails((s) => ({
                                ...s,
                                message: e.target.value,
                            }))
                        }
                    ></textarea>
                </div>
                <button
                    className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:opacity-70 active:scale-95 "
                    onClick={handleSubmit}
                >
                    Apply
                </button>
            </form>
        </div>
    );
}
