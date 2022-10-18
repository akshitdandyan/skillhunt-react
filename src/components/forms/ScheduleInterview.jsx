import { useState } from "react";
import { useInterviewStore, useModalStore } from "../../store";

export default function ScheduleInterviewForm() {
    const [interviewDetails, setInterviewDetails] = useState({
        date: "",
        time: "",
        duration: "15",
        notes: "",
    });

    const [errors, setErrors] = useState({
        date: "",
        time: "",
        duration: "",
    });

    const addNewInterview = useInterviewStore((state) => state.addNewInterview);
    const showInterviewModal = useModalStore((state) => state.setShow);
    const candidate = useModalStore((state) => state.candidate);
    const setCandidate = useModalStore((state) => state.setCandidate);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(interviewDetails);
        if (!interviewDetails.date) {
            setErrors({ ...errors, date: "Date is required" });
            return;
        }
        if (!interviewDetails.time) {
            setErrors({ ...errors, time: "Time is required" });
            return;
        }
        if (!interviewDetails.duration) {
            setErrors({ ...errors, duration: "Duration is required" });
            return;
        }
        addNewInterview({
            ...interviewDetails,
            candidateName: candidate.name,
            candidateId: candidate.id,
        });
        showInterviewModal(false);
        setCandidate(null);
    };
    return (
        <div
            onClick={(e) => e.stopPropagation()}
            className="bg-gray-100 shadow-md px-10 py-4 p-4 rounded-md"
        >
            <h2>Schedule interview with {candidate.name}</h2>
            <form>
                <div className="flex flex-col mt-2 mb-1">
                    <label className="text-blue-500" htmlFor="date">
                        Date
                    </label>
                    <input
                        onChange={(e) =>
                            setInterviewDetails((s) => ({
                                ...s,
                                date: e.target.value,
                            }))
                        }
                        type="date"
                        name="date"
                        id="date"
                    />
                    <p className="text-red-500 text-sm ml-2">{errors.date}</p>
                </div>
                <div className="flex flex-col mt-2 mb-1">
                    <label className="text-blue-500" htmlFor="time">
                        Time
                    </label>
                    <input
                        onChange={(e) =>
                            setInterviewDetails((s) => ({
                                ...s,
                                time: e.target.value,
                            }))
                        }
                        type="time"
                        name="time"
                        id="time"
                    />
                    <p className="text-red-500 text-sm ml-2">{errors.time}</p>
                </div>
                <div className="flex flex-col mt-2 mb-1">
                    <label className="text-blue-500" htmlFor="duration">
                        Duration
                    </label>
                    <input
                        value={interviewDetails.duration}
                        min={15}
                        max={60}
                        step={15}
                        onChange={(e) =>
                            setInterviewDetails((s) => ({
                                ...s,
                                duration: e.target.value,
                            }))
                        }
                        type={"range"}
                        name="duration"
                        id="duration"
                        className="accent-blue-500"
                    />
                    <p className="text-blue-500 text-sm ">
                        {interviewDetails.duration} mins
                    </p>
                </div>
                <div className="flex flex-col mt-2 mb-1">
                    <label className="text-blue-500" htmlFor="notes">
                        Notes
                    </label>
                    <textarea
                        className="outline-none"
                        name="notes"
                        id="notes"
                        cols="30"
                        rows="4"
                        onChange={(e) =>
                            setInterviewDetails((s) => ({
                                ...s,
                                notes: e.target.value,
                            }))
                        }
                    ></textarea>
                </div>
                <button
                    className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:opacity-70 active:scale-95 "
                    onClick={handleSubmit}
                >
                    Schedule
                </button>
            </form>
        </div>
    );
}
