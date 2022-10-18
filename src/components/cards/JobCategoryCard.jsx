export default function JobCategoryCard({ name, openPositions }) {
    return (
        <div className="flex justify-center items-center flex-col bg-gray-50 py-4 shadow-sm hover:shadow-md hover:bg-orange-100 duration-200 rounded-lg cursor-pointer">
            <h2 className="text-xl my-2 text-blue-400">{name}</h2>
            <div>
                <span className="bg-yellow-400 rounded-md px-2 py-1 ">
                    {" "}
                    {openPositions}
                </span>{" "}
                Open positions
            </div>
        </div>
    );
}
