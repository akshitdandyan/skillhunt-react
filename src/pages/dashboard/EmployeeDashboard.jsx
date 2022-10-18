import ApplicationCard from "../../components/cards/ApplicationCard";
import InterviewCard from "../../components/cards/InterviewCard";
import NewPostForm from "../../components/forms/NewPost";
import { useApplicationsStore, useInterviewStore } from "../../store";

export default function EmployeeDashboard() {
    const interviews = useInterviewStore((state) => state.interviews);
    const applications = useApplicationsStore((state) => state.applications);
    return (
        <div className="flex justify-evenly">
            <NewPostForm />
            <div className="ml-4 bg-gray-100 p-4 rounded-md shadow-md">
                <div className="text-blue-500 text-xl">Upcoming Interviews</div>
                <div>
                    {interviews.map((interview) => (
                        <InterviewCard
                            key={interview.id}
                            {...{
                                ...interview,
                            }}
                        />
                    ))}
                </div>
            </div>
            <div className="ml-4 bg-blue-500  p-4 rounded-md shadow-md">
                <div className=" text-xl text-white">Job Applications</div>
                <div>
                    {applications.map((application) => (
                        <ApplicationCard
                            key={application.id}
                            {...{
                                ...application,
                            }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
