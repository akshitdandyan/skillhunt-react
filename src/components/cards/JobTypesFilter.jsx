export default function JobTypesFilter({ updateJobTypesChecked }) {
    return (
        <div className="ml-4 mt-4 bg-white p-4 rounded-md">
            <h1 className="text-lg my-2">Job Type</h1>
            <div>
                {["Full Time", "Part Time", "Contract"].map((jobType, i) => (
                    <div
                        key={i}
                        className="bg-gray-100 text-xs text-gray-500 rounded-lg p-2 mt-2"
                    >
                        <input
                            type="checkbox"
                            onChange={(e) =>
                                updateJobTypesChecked(e.target.value)
                            }
                            value={jobType}
                            className="mr-2 accent-yellow-400"
                        />
                        {jobType}
                    </div>
                ))}
            </div>
        </div>
    );
}
