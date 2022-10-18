import { useEffect, useState } from "react";
import { useJobsStore } from "../../store";
import { BsSearch } from "react-icons/bs";

export default function SkillsFilter({ updateSkillsChecked }) {
    const jobs = useJobsStore((state) => state.jobs);
    const [skills, setSkills] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        jobs.map((job) => {
            const skills = job.skills.split(" ");
            setSkills((s) => [...new Set([...s, ...skills])]);
            return job;
        });
    }, [jobs]);

    return (
        <div className="ml-4 mt-4 bg-white p-4 rounded-md">
            <h1 className="text-lg my-2">Browse by skills</h1>
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
                    {skills
                        .filter((skill) =>
                            skill.toLowerCase().includes(search.toLowerCase())
                        )
                        .map((skill, i) => (
                            <div
                                key={i}
                                className="bg-gray-100 text-xs text-gray-500 rounded-lg p-2 mt-2"
                            >
                                <input
                                    type="checkbox"
                                    onChange={(e) =>
                                        updateSkillsChecked(e.target.value)
                                    }
                                    value={skill}
                                    className="mr-2 accent-yellow-400"
                                />
                                {skill}
                            </div>
                        ))}
                </div>
            )}
            {/* top skills */}
            {!search && (
                <div>
                    {skills
                        .filter((skill, i) => i < 6)
                        .map((skill, i) => (
                            <div
                                key={i}
                                className="bg-gray-100 text-xs text-gray-500 rounded-lg p-2 mt-2"
                            >
                                <input
                                    type="checkbox"
                                    onChange={(e) =>
                                        updateSkillsChecked(e.target.value)
                                    }
                                    value={skill}
                                    className="mr-2 accent-yellow-400"
                                />
                                {skill}
                            </div>
                        ))}
                </div>
            )}
        </div>
    );
}
