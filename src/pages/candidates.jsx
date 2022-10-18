import { useCallback, useEffect, useState } from "react";
import CandidateCard from "../components/cards/CandidateCard";
import LocationsFilter from "../components/cards/LocationsFilter";
import SkillsFilter from "../components/cards/SkillsFilter";
import { useCandidatesStore, useModalStore } from "../store";

export default function Candidates() {
    const [candidates, setCandidates] = useState([]);
    const [skillsChecked, setSkillsChecked] = useState([]);
    const [locationsChecked, setLocationsChecked] = useState([]);
    const setInterviewModal = useModalStore((state) => state.setShow);

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

    useEffect(() => {
        console.log(
            "Adding candidates:",
            useCandidatesStore.getState().candidates
        );
        setCandidates(useCandidatesStore.getState().candidates);
    }, []);

    useEffect(() => {
        if (skillsChecked.length > 0) {
            setCandidates(
                useCandidatesStore
                    .getState()
                    .candidates.filter((candidate) =>
                        candidate.skills
                            .split(" ")
                            .some((skill) => skillsChecked.includes(skill))
                    )
            );
        } else {
            setCandidates(useCandidatesStore.getState().candidates);
        }
    }, [skillsChecked]);

    useEffect(() => {
        if (locationsChecked.length > 0) {
            setCandidates(
                useCandidatesStore
                    .getState()
                    .candidates.filter((candidate) =>
                        locationsChecked.includes(candidate.location)
                    )
            );
        } else {
            setCandidates(useCandidatesStore.getState().candidates);
        }
    }, [locationsChecked]);

    useEffect(() => {
        return () => setInterviewModal(false);
    }, [setInterviewModal]);

    return (
        <div className="bg-gray-100 p-4">
            <h1 className="text-2xl font-bold text-center text-blue-500">
                Hire your best candidates
            </h1>
            <div className="flex">
                <div className="w-[80%] mt-4">
                    {candidates.map((candidate, i) => (
                        <CandidateCard
                            key={i}
                            {...{
                                ...candidate,
                            }}
                        />
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
                </div>
            </div>
        </div>
    );
}
