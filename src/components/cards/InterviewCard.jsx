export default function InterviewCard({
    candidateId,
    candidateName,
    date,
    duration,
    id,
    notes,
    time,
}) {
    return (
        <div className="flex flex-col bg-gray-200 rounded-lg shadow-lg p-4 m-4 duration-200 hover:shadow-none cursor-pointer">
            <div className="flex flex-row justify-between">
                <div className="flex flex-col">
                    <div className="text-sm ">{candidateName}</div>
                    <div className="text-sm px-2 shadow-sm mt-4 rounded-full text-green-200 bg-green-600">
                        {date}
                    </div>
                    <div className="text-sm px-2 shadow-sm w-max mt-2 rounded-full text-green-200 bg-green-600">
                        {time}
                    </div>
                </div>
                <div className="flex flex-col ml-4">
                    <div className="text-sm">Duration</div>

                    <div className="text-sm mt-4 bg-yellow-100 text-yellow-700 rounded-full px-2">
                        {duration} mins
                    </div>
                </div>
            </div>
        </div>
    );
}
