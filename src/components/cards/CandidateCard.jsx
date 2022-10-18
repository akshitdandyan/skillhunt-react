import { AiOutlineMail } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { useModalStore } from "../../store";

export default function CandidateCard({
    name,
    email,
    phone,
    skills,
    location,
    lastActive,
    bio,
    dp,
    experience,
    education,
    id,
}) {
    const scheduleInterview = () => {
        useModalStore.getState().setCandidate({ id, name });
        useModalStore.getState().setShow(true);
        useModalStore.getState().setChildrenType("scheduleInterviewForm");
    };

    return (
        <div className="bg-white rounded-lg shadow-gray-100 hover:shadow-xl duration-200 cursor-pointer shadow-md p-4 mb-4 flex">
            <div>
                <img
                    src={dp}
                    alt={name + " on SkillHunt"}
                    height={100}
                    width={100}
                    className="rounded-full object-cover m-auto"
                />
                <div className="ml-4 text-center">
                    <div className="text-gray-400 text-sm mt-2">{location}</div>
                    <h1 className="text-xl mt-2">{name}</h1>
                    <div className="flex justify-center">
                        <div className="bg-orange-200  mt-2 w-max text-orange-500 rounded-md px-2 py-1 text-sm">
                            {education}
                        </div>
                        <div className="bg-blue-200 ml-2  mt-2 w-max text-blue-500 rounded-md px-2 py-1 text-sm">
                            {experience}
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-between ml-4">
                <div className="flex flex-col">
                    <div className="text-sm">Skills</div>
                    <div className="flex items-center mt-1">
                        {skills
                            .split(" ")
                            .slice(1, 4)
                            .map((skill, i) => (
                                <div
                                    className="bg-blue-200 text-blue-500 rounded-md px-2 py-1 text-sm mr-2"
                                    key={i}
                                >
                                    {skill}
                                </div>
                            ))}
                    </div>
                    <div className="flex items-center mt-2">
                        <div className="bg-green-200 text-green-500 rounded-md px-2 py-1 text-sm mr-2 flex justify-center items-center">
                            <AiOutlineMail />{" "}
                            <span className="ml-2">{email}</span>
                        </div>
                        <div className="bg-green-200 text-green-500 rounded-md px-2 py-1 text-sm mr-2 flex justify-center items-center">
                            <BsFillTelephoneFill />{" "}
                            <span className="ml-2">{phone}</span>
                        </div>
                    </div>
                    <div className="flex items-center mt-2">
                        <div className="bg-yellow-200 text-yellow-500 rounded-md px-2 py-1 text-sm mr-2">
                            {new Date(lastActive).toDateString()}
                        </div>
                    </div>
                    {/* bio */}
                    <div className="mt-2">
                        <div className="text-gray-400 text-sm mt-2">
                            {bio.slice(0, 100)}
                        </div>
                    </div>
                    {/* schedule interview */}
                    <div className="mt-3">
                        <button
                            onClick={scheduleInterview}
                            className="bg-blue-500 text-white rounded-md px-2 py-1 text-sm mr-2 duration-200 hover:bg-slate-100 hover:text-blue-500 hover:shadow-md active:shadow-inner"
                        >
                            Schedule Interview
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
