import { useCallback, useEffect, useState } from "react";
import JobCard from "../components/cards/JobCard";
import JobTypesFilter from "../components/cards/JobTypesFilter";
import LocationsFilter from "../components/cards/LocationsFilter";
import SkillsFilter from "../components/cards/SkillsFilter";
import { useJobsStore } from "../store";

export default function Jobs() {
    const [jobs, setJobs] = useState([]);
    const [skillsChecked, setSkillsChecked] = useState([]);
    const [locationsChecked, setLocationsChecked] = useState([]);
    const [jobTypesChecked, setJobTypesChecked] = useState([]);

    const updateSkillsChecked = useCallback(
        (skill) => {
            console.log(skill);
            if (skillsChecked.includes(skill)) {
                setSkillsChecked((s) => s.filter((s) => s !== skill));
            } else {
                setSkillsChecked((s) => [...s, skill]);
            }
        },
        [skillsChecked]
    );

    const updateLocationsChecked = useCallback(
        (location) => {
            console.log(location);
            if (locationsChecked.includes(location)) {
                setLocationsChecked((s) => s.filter((s) => s !== location));
            } else {
                setLocationsChecked((s) => [...s, location]);
            }
        },
        [locationsChecked]
    );

    const updateJobTypesChecked = useCallback(
        (jobType) => {
            console.log(jobType);
            if (jobTypesChecked.includes(jobType)) {
                setJobTypesChecked((s) => s.filter((s) => s !== jobType));
            } else {
                setJobTypesChecked((s) => [...s, jobType]);
            }
        },
        [jobTypesChecked]
    );

    useEffect(() => {
        setJobs(useJobsStore.getState().jobs);
    }, []);

    useEffect(() => {
        if (skillsChecked.length > 0) {
            setJobs(
                useJobsStore
                    .getState()
                    .jobs.filter((job) =>
                        job.skills
                            .split(" ")
                            .some((skill) => skillsChecked.includes(skill))
                    )
            );
        } else {
            setJobs(useJobsStore.getState().jobs);
        }
    }, [skillsChecked]);

    useEffect(() => {
        if (locationsChecked.length > 0) {
            setJobs(
                useJobsStore
                    .getState()
                    .jobs.filter((job) =>
                        locationsChecked.includes(job.location)
                    )
            );
        } else {
            setJobs(useJobsStore.getState().jobs);
        }
    }, [locationsChecked]);

    useEffect(() => {
        if (jobTypesChecked.length > 0) {
            setJobs(
                useJobsStore
                    .getState()
                    .jobs.filter((job) => jobTypesChecked.includes(job.jobType))
            );
        } else {
            setJobs(useJobsStore.getState().jobs);
        }
    }, [jobTypesChecked]);

    return (
        <div className="bg-gray-100 p-4">
            <h1 className="text-2xl font-bold text-center text-blue-500">
                Browse Jobs
            </h1>
            <div className="flex">
                <div className="w-[80%] mt-4">
                    {jobs.map((job) => (
                        <JobCard key={job.id} {...{ ...job }} />
                    ))}
                </div>
                <div>
                    <SkillsFilter
                        {...{
                            updateSkillsChecked,
                        }}
                    />
                    <LocationsFilter
                        {...{
                            updateLocationsChecked,
                        }}
                    />
                    <JobTypesFilter
                        {...{
                            updateJobTypesChecked,
                        }}
                    />
                </div>
            </div>
        </div>
    );
}
