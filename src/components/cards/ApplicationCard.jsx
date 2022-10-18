export default function ApplicationCard({
    message,
    candidateName,
    candidateId,
    candidateExperience,
    candidateSkills,
    id,
    createdAt,
    jobTitle,
}) {
    return (
        <div
            style={{
                maxWidth: "200px",
            }}
            className="flex flex-col bg-gray-200 rounded-lg shadow-lg p-4 m-4 duration-200 hover:shadow-none cursor-pointer"
        >
            <div className="flex text-sm">
                <div>
                    <span className="text-blue-500">{candidateName} </span>wants
                    to apply for position{" "}
                    <span className="text-green-700">{jobTitle}</span>
                </div>
            </div>
            <div className="flex text-xs my-2">
                <div className="rounded-full bg-violet-300 text-violet-600 px-2">
                    {candidateExperience} Experience
                </div>
            </div>
            <div className="flex bg-white p-1 rounded-md mt-1 text-xs">
                <div>Message:</div>
                <div className=" text-gray-500 mt-1 ml-2">{message}</div>
            </div>
        </div>
    );
}
