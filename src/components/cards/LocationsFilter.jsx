import { useEffect, useState } from "react";
import { useJobsStore } from "../../store";
import { BsSearch } from "react-icons/bs";

export default function LocationsFilter({ updateLocationsChecked }) {
    const jobs = useJobsStore((state) => state.jobs);
    const [locations, setLocations] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        jobs.map((job) => {
            setLocations((s) => [...new Set([...s, job.location])]);
            return job;
        });
    }, [jobs]);

    return (
        <div className="ml-4 mt-4 bg-white p-4 rounded-md">
            <h1 className="text-lg my-2">Browse by Location</h1>
            <div className="relative">
                <input
                    className="focus:shadow-md border border-gray-300 rounded-lg p-2 w-full outline-none placeholder:text-xs  text-gray-500"
                    type="text"
                    value={search}
                    placeholder="Search..."
                    onChange={(e) => setSearch(e.target.value)}
                />
                <BsSearch className="absolute right-2 top-[30%]" color="gray" />
            </div>
            {/* search drop down */}
            {search && (
                <div>
                    {locations
                        .filter((location) =>
                            location
                                .toLowerCase()
                                .includes(search.toLowerCase())
                        )
                        .map((location, i) => (
                            <div
                                key={i}
                                className="bg-gray-100 text-xs text-gray-500 rounded-lg p-2 mt-2"
                            >
                                <input
                                    type="checkbox"
                                    onChange={(e) =>
                                        updateLocationsChecked(e.target.value)
                                    }
                                    value={location}
                                    className="mr-2 accent-yellow-400"
                                />
                                {location}
                            </div>
                        ))}
                </div>
            )}
            {/* top locations */}
            {!search && (
                <div>
                    {locations
                        .filter((location, i) => i < 6)
                        .map((location, i) => (
                            <div
                                key={i}
                                className="bg-gray-100 text-xs text-gray-500 rounded-lg p-2 mt-2"
                            >
                                <input
                                    type="checkbox"
                                    onChange={(e) =>
                                        updateLocationsChecked(e.target.value)
                                    }
                                    value={location}
                                    className="mr-2 accent-yellow-400"
                                />
                                {location}
                            </div>
                        ))}
                </div>
            )}
        </div>
    );
}
