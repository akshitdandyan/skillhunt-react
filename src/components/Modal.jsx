import { createPortal } from "react-dom";
import { useModalStore } from "../store";

export default function Modal({ InterviewForm, JobForm }) {
    const showModal = useModalStore((state) => state.show);
    const childrenType = useModalStore((state) => state.childrenType);

    const closeModal = () => {
        useModalStore.getState().setShow(false);
        useModalStore.getState().setCandidate(null);
        useModalStore.getState().setChildrenType("");
        useModalStore.getState().setJob(null);
    };

    if (!showModal) return null;

    if (childrenType === "scheduleInterviewForm") {
        return createPortal(
            <div
                onClick={closeModal}
                className="fixed w-screen h-screen top-0 left-0 bg-white bg-opacity-40 backdrop-blur-sm flex justify-center items-center pt-28"
            >
                <InterviewForm />
            </div>,
            document.getElementById("modal-portal")
        );
    } else if (childrenType === "jobApplyForm") {
        return createPortal(
            <div
                onClick={closeModal}
                className="fixed w-screen h-screen top-0 left-0 bg-white bg-opacity-40 backdrop-blur-sm flex justify-center items-center pt-28"
            >
                <JobForm />
            </div>,
            document.getElementById("modal-portal")
        );
    }
}
