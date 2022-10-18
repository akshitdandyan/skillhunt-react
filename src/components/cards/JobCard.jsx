import { ImStack } from "react-icons/im";
import { GoLocation } from "react-icons/go";
import { useState } from "react";
import { useModalStore } from "../../store";

export default function JobCard({
    title,
    description,
    salary,
    jobType,
    skills,
    location,
    company,
}) {
    const [showMore, setShowMore] = useState(false);

    const apply = () => {
        console.log("apply");
        useModalStore.getState().setJob({ title, company, jobType });
        useModalStore.getState().setShow(true);
        useModalStore.getState().setChildrenType("jobApplyForm");
    };
    return (
        <div className="bg-white rounded-lg shadow-gray-100 hover:shadow-xl duration-200 cursor-pointer shadow-md p-4 mb-4 flex justify-between items-center">
            <div className="max-w-[70%]">
                <h1 className="text-sm uppercase text-blue-500">{jobType}</h1>
                <p className="text-2xl mt-4">{title}</p>
                <div className="flex mt-4">
                    <div className="flex justify-center items-center">
                        <div>
                            <ImStack />
                        </div>
                        <div className="text-sm ml-2 text-gray-500">
                            {company}
                        </div>
                    </div>
                    <div className="flex justify-center items-center ml-4">
                        <div>
                            <GoLocation />
                        </div>
                        <div className="text-sm ml-2 text-gray-500">
                            {location}
                        </div>
                    </div>
                </div>
                <div className="mt-4">
                    <p className="text-sm text-gray-500">
                        {showMore
                            ? description
                            : description.slice(0, 100) + "..."}
                        {description.length > 100 && (
                            <>
                                <br />
                                <span
                                    className="text-blue-500 cursor-pointer"
                                    onClick={() => setShowMore(!showMore)}
                                >
                                    {showMore ? " Show Less" : " Show More"}
                                </span>
                            </>
                        )}
                    </p>
                    {showMore && (
                        <div className="mt-4">
                            <h1 className="text-sm text-gray-500">
                                Skills required
                            </h1>
                            <div className="flex mt-2">
                                {skills.split(" ").map((skill, i) => (
                                    <div className="mr-2" key={i}>
                                        <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-md">
                                            {skill}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div
                onClick={apply}
                className="bg-blue-500 rounded-md px-4 py-2 text-white"
            >
                Apply Now
            </div>
        </div>
    );
}
