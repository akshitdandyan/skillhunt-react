import { useState } from "react";
import { useJobsStore } from "../../store";

export default function NewPostForm() {
    const [title, setTitle] = useState("");
    const [skills, setSkills] = useState("");
    const [description, setDescription] = useState("");
    const [company, setCompany] = useState("");
    const [location, setLocation] = useState("");
    const [salary, setSalary] = useState("");
    const [jobType, setJobType] = useState("");
    const [errors, setErrors] = useState({
        title: "",
        skills: "",
        description: "",
        company: "",
        location: "",
        salary: "",
        jobType: "",
    });

    const addNewJob = useJobsStore((state) => state.addNewJob);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(title, description, company, location, salary, jobType);

        // TODO: Validate form
        if (!title) {
            setErrors({ ...errors, title: "Enter a job title" });
            return;
        }
        if (!description) {
            setErrors({ ...errors, description: "Tell more about this job" });
            return;
        }
        if (!company) {
            setErrors({ ...errors, company: "Enter a company name" });
            return;
        }
        if (!location) {
            setErrors({ ...errors, location: "Enter location of the job" });
            return;
        }
        if (!salary) {
            setErrors({ ...errors, salary: "Salary is required" });
            return;
        }
        if (!jobType) {
            setErrors({ ...errors, jobType: "Job Type is required" });
            return;
        }
        addNewJob({
            title,
            description,
            company,
            location,
            salary,
            jobType,
            skills,
        });

        // clear form
        setTitle("");
        setDescription("");
        setCompany("");
        setLocation("");
        setSalary("");
        setJobType("");
    };

    return (
        <div className="pl-12 bg-gray-100 rounded-md pr-6 py-4">
            <h2 className="text-2xl text-gray-600">Post a new job!</h2>
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col">
                    <label
                        className="text-lg text-gray-500 mt-4"
                        htmlFor="title"
                    >
                        Title
                    </label>
                    <input
                        style={{ width: "500px" }}
                        className="px-4 py-2 outline-none rounded-md"
                        type="text"
                        name="title"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <p className="text-red-500 text-sm ml-2">{errors.title}</p>
                </div>
                <div className="flex flex-col">
                    <label
                        className="text-lg text-gray-500 mt-4"
                        htmlFor="skills"
                    >
                        Skills Required
                    </label>
                    <input
                        style={{ width: "500px" }}
                        className="px-4 py-2 outline-none rounded-md placeholder:text-sm placeholder:text-gray-300"
                        type="text"
                        name="skills"
                        id="skills"
                        placeholder="HTML CSS JavaScript (Separate with space)"
                        value={skills}
                        onChange={(e) => setSkills(e.target.value)}
                    />
                    <p className="text-red-500 text-sm ml-2">{errors.skills}</p>
                </div>
                <div className="flex flex-col">
                    <label
                        className="text-lg text-gray-500 mt-4"
                        htmlFor="description"
                    >
                        Description
                    </label>
                    <textarea
                        className="px-4 py-2 outline-none rounded-md"
                        name="description"
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <p className="text-red-500 text-sm ml-2">
                        {errors.description}
                    </p>
                </div>
                <div className="flex flex-col">
                    <label
                        className="text-lg text-gray-500 mt-4"
                        htmlFor="company"
                    >
                        Company
                    </label>
                    <input
                        style={{ width: "500px" }}
                        className="px-4 py-2 outline-none rounded-md"
                        type="text"
                        name="company"
                        id="company"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                    />
                    <p className="text-red-500 text-sm ml-2">
                        {errors.company}
                    </p>
                </div>
                <div className="flex flex-col">
                    <label
                        className="text-lg text-gray-500 mt-4"
                        htmlFor="location"
                    >
                        Location
                    </label>
                    <input
                        style={{ width: "500px" }}
                        className="px-4 py-2 outline-none rounded-md"
                        type="text"
                        name="location"
                        id="location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    />
                    <p className="text-red-500 text-sm ml-2">
                        {errors.location}
                    </p>
                </div>
                <div className="flex flex-col">
                    <label
                        className="text-lg text-gray-500 mt-4"
                        htmlFor="salary"
                    >
                        Salary
                    </label>
                    <input
                        style={{ width: "500px" }}
                        className="px-4 py-2 outline-none rounded-md"
                        type="text"
                        name="salary"
                        id="salary"
                        value={salary}
                        onChange={(e) => {
                            // check if a number is entered
                            if (isNaN(e.target.value)) {
                                return;
                            }
                            setSalary(e.target.value);
                        }}
                    />
                    <p className="text-red-500 text-sm ml-2">{errors.salary}</p>
                </div>

                <div className="flex flex-col">
                    <label
                        className="text-lg text-gray-500 mt-4"
                        htmlFor="jobType"
                    >
                        Job Type
                    </label>
                    <select
                        className="px-4 py-2 outline-none rounded-md"
                        name="jobType"
                        id="jobType"
                        value={jobType}
                        onChange={(e) => setJobType(e.target.value)}
                    >
                        <option value="full-time">Full Time</option>
                        <option value="part-time">Part Time</option>
                        <option value="contract">Contract</option>
                    </select>
                    <p className="text-red-500 text-sm ml-2">
                        {errors.jobType}
                    </p>
                </div>

                <button
                    className="bg-blue-500 text-white px-4 py-2  rounded-md mt-4 hover:opacity-50 active:scale-95"
                    type="submit"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}
