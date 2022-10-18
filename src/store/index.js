import create from "zustand";
import { faker } from "@faker-js/faker";
import KEYS from "./constants/localstorageKeys";

export const usePopupStore = create((set) => ({
    popup: {
        show: false,
        message: "",
        type: "",
    },
    setPopup: (popup) =>
        set(() => {
            setTimeout(() => {
                set({ popup: { show: false, message: "", type: "" } });
            }, 3000);
            return { popup };
        }),
}));

export const useModalStore = create((set) => ({
    show: false,
    candidate: null,
    setShow: (show) => set(() => ({ show })),
    setCandidate: (candidate) => set(() => ({ candidate })),
    childrenType: "",
    setChildrenType: (childrenType) => set(() => ({ childrenType })),
    job: null,
    setJob: (job) => set(() => ({ job })),
}));

export const useJobsStore = create((set) => ({
    jobs: [],
    setJobs: (jobs) => set({ jobs }),
    addNewJob: (job) =>
        set(() => {
            console.log("job", job);
            const jobWithUniqueId = {
                ...job,
                id: faker.datatype.uuid(),
                createdAt: new Date().getTime(),
            };
            const jobsInLocalStorage = JSON.parse(
                localStorage.getItem(KEYS.JOBS) || "[]"
            );
            const jobs = [jobWithUniqueId, ...jobsInLocalStorage];
            localStorage.setItem(KEYS.JOBS, JSON.stringify(jobs));
            console.log("jobs", jobs);
            usePopupStore.getState().setPopup({
                show: true,
                message: "Job added successfully",
                type: "success",
            });
            return { jobs };
        }),
    addFakeJobs: () =>
        set(() => {
            const jobs = Array.from({ length: 10 }, () => ({
                id: faker.datatype.uuid(),
                title: faker.name.jobTitle(),
                company: faker.company.name(),
                location: faker.address.city(),
                salary: faker.finance.amount(10000, 100000, 0, "$"),
                createdAt: faker.date.past(1).getTime(),
                skills: Array.from({ length: 5 }, () =>
                    faker.name.jobArea()
                ).join(" "),
                description: faker.lorem.paragraphs(3),
                jobType: faker.helpers.arrayElement([
                    "Full Time",
                    "Part Time",
                    "Contract",
                ]),
            }));
            console.table(jobs);
            localStorage.setItem(KEYS.JOBS, JSON.stringify(jobs));
            return { jobs };
        }),
}));

export const useCandidatesStore = create((set) => ({
    candidates: [],
    setCandidates: (candidates) => set({ candidates }),
    addNewCandidate: (candidate) =>
        set(() => {
            console.log("candidate", candidate);
            const candidateWithUniqueId = {
                ...candidate,
                id: faker.datatype.uuid(),
                createdAt: new Date().getTime(),
            };
            const candidatesInLocalStorage = JSON.parse(
                localStorage.getItem(KEYS.CANDIDATES) || "[]"
            );
            const candidates = [
                candidateWithUniqueId,
                ...candidatesInLocalStorage,
            ];
            localStorage.setItem(KEYS.CANDIDATES, JSON.stringify(candidates));
            console.log("candidates", candidates);
            usePopupStore.getState().setPopup({
                show: true,
                message: "Candidate added successfully",
                type: "success",
            });
            return { candidates };
        }),
    addFakeCandidates: () =>
        set(() => {
            const skills = useJobsStore
                .getState()
                .jobs.map((job) => job.skills)
                .flat();
            const candidates = Array.from({ length: 10 }, () => ({
                id: faker.datatype.uuid(),
                name: faker.name.fullName(),
                email: faker.internet.email(),
                phone: faker.phone.number(),
                createdAt: faker.date.past(1).getTime(),
                skills: faker.helpers.arrayElements(skills, 4).join(" "),
                location: faker.address.city(),
                lastActive: faker.date.past(1).getTime(),
                bio: faker.lorem.paragraphs(2),
                dp: faker.image.avatar(),
                experience: faker.helpers.arrayElement([
                    "fresher",
                    "1-2 years",
                    "2-3 years",
                    "3-4 years",
                    "4-5 years",
                ]),
                education: faker.helpers.arrayElement([
                    "B.Tech",
                    "M.Tech",
                    "B.E",
                    "M.E",
                    "B.Sc",
                    "M.Sc",
                    "B.Com",
                    "M.Com",
                    "B.A",
                    "M.A",
                    "B.B.A",
                    "M.B.A",
                ]),
            }));
            console.table(candidates);
            localStorage.setItem(KEYS.CANDIDATES, JSON.stringify(candidates));
            return { candidates };
        }),
}));

export const useInterviewStore = create((set) => ({
    interviews: [],
    setInterviews: (interviews) => set({ interviews }),
    addNewInterview: (interview) =>
        set(() => {
            const interviewWithUniqueId = {
                ...interview,
                id: faker.datatype.uuid(),
                createdAt: new Date().getTime(),
            };
            const interviewsInLocalStorage = JSON.parse(
                localStorage.getItem(KEYS.INTERVIEWS) || "[]"
            );
            const interviews = [
                interviewWithUniqueId,
                ...interviewsInLocalStorage,
            ];
            localStorage.setItem(KEYS.INTERVIEWS, JSON.stringify(interviews));
            console.log("interviews", interviews);
            usePopupStore.getState().setPopup({
                show: true,
                message: "Interview added successfully",
                type: "success",
            });
            return { interviews };
        }),
}));

export const useApplicationsStore = create((set) => ({
    applications: [],
    setApplications: (applications) => set({ applications }),
    addNewApplication: (application) =>
        set(() => {
            console.log("application", application);
            const applicationWithUniqueId = {
                ...application,
                id: faker.datatype.uuid(),
                createdAt: new Date().getTime(),
            };
            const applicationsInLocalStorage = JSON.parse(
                localStorage.getItem(KEYS.APPLICATIONS) || "[]"
            );
            const applications = [
                ...applicationsInLocalStorage,
                applicationWithUniqueId,
            ];
            localStorage.setItem(
                KEYS.APPLICATIONS,
                JSON.stringify(applications)
            );
            console.log("applications", applications);
            usePopupStore.getState().setPopup({
                show: true,
                message:
                    "Application added successfully by " +
                    application.candidateName,
                type: "success",
            });
            return { applications };
        }),
}));
