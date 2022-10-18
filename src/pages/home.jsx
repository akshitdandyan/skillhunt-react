import {
    GiEarthAmerica,
    GiHealthCapsule,
    GiTeamIdea,
    GiPodiumWinner,
} from "react-icons/gi";
import { RiBuilding4Fill } from "react-icons/ri";
import { FaFileContract, FaGraduationCap, FaUserTie } from "react-icons/fa";
import { BiCodeAlt } from "react-icons/bi";
import { SiMaterialdesignicons } from "react-icons/si";
import { BsCalculatorFill } from "react-icons/bs";
import { ImProfile } from "react-icons/im";
import { MdFoodBank } from "react-icons/md";
import JOB_CATEGORIES from "../store/constants/jobCategories";
import JobCategoryCard from "../components/cards/JobCategoryCard";

export default function Home() {
    return (
        <div>
            <div className="relative h-64 ">
                <div className="absolute h-full w-full bg-black z-10 opacity-50"></div>

                <img
                    src="/assets/meeting.jpg"
                    alt="Find job on SkillHunt"
                    //change hue-rotate to change the color of the image
                    className="w-full h-64 object-cover absolute top-0 left-0"
                />
                <div className="absolute top-0 left-0 z-20 w-full pt-5">
                    <h1 className="text-4xl font-bold text-white text-center">
                        Easiest way to find jobs
                    </h1>
                    <p className="text-center text-white mt-4">
                        Find job, employment and new career opportunities
                    </p>
                    <div className="flex justify-evenly items-center mt-8">
                        <div className="flex flex-col justify-center items-center text-white">
                            <div>
                                <GiEarthAmerica size={50} />
                            </div>
                            <div>46 Countries</div>
                        </div>
                        <div className="flex flex-col justify-center items-center text-white">
                            <div>
                                <RiBuilding4Fill size={50} />
                            </div>
                            <div>246 Companies</div>
                        </div>
                        <div className="flex flex-col justify-center items-center text-white">
                            <div>
                                <FaFileContract size={50} />
                            </div>
                            <div>70,000 Active Employees</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-6 text-center m-auto relative -top-10 bg-white z-30 bg-opacity-50 w-[80%]">
                <div className="hover:bg-yellow-600 hover:text-white duration-200 cursor-pointer border-y-2  border-r-2 border-l-2">
                    <h2 className="text-xl my-2">Website & Software</h2>
                    <div className="flex justify-center">
                        <BiCodeAlt size={60} />
                    </div>
                    <div className="my-4">143 Open positions</div>
                </div>
                <div className="hover:bg-yellow-600 hover:text-white duration-200 cursor-pointer border-y-2  border-r-2">
                    <h2 className="text-xl my-2">Education & Training</h2>
                    <div className="flex justify-center">
                        <FaGraduationCap size={60} />
                    </div>
                    <div className="my-4">143 Open positions</div>
                </div>
                <div className="hover:bg-yellow-600 hover:text-white duration-200 cursor-pointer border-y-2  border-r-2">
                    <h2 className="text-xl my-2">
                        UI/UX <br /> Design
                    </h2>
                    <div className="flex justify-center">
                        <SiMaterialdesignicons size={60} />
                    </div>
                    <div className="my-4">143 Open positions</div>
                </div>
                <div className="hover:bg-yellow-600 hover:text-white duration-200 cursor-pointer border-y-2  border-r-2">
                    <h2 className="text-xl my-2">Accounting & Finance</h2>
                    <div className="flex justify-center">
                        <BsCalculatorFill size={60} />
                    </div>
                    <div className="my-4">143 Open positions</div>
                </div>
                <div className="hover:bg-yellow-600 hover:text-white duration-200 cursor-pointer border-y-2  border-r-2">
                    <h2 className="text-xl my-2">Restaurant & Food</h2>
                    <div className="flex justify-center">
                        <MdFoodBank size={60} />
                    </div>
                    <div className="my-4">143 Open positions</div>
                </div>
                <div className="hover:bg-yellow-600 hover:text-white duration-200 cursor-pointer border-y-2  border-r-2">
                    <h2 className="text-xl my-2">
                        Health &<br /> Hospital
                    </h2>
                    <div className="flex justify-center">
                        <GiHealthCapsule size={60} />
                    </div>
                    <div className="my-4">143 Open positions</div>
                </div>
            </div>
            <div className="pt-12">
                <p className="text-center text-blue-600 uppercase text-sm">
                    Job Categories
                </p>
                <h2 className="text-4xl text-center mt-4">Top Categories</h2>
                <div className="grid grid-cols-4 gap-4 mt-8">
                    {JOB_CATEGORIES.map((category, i) => (
                        <JobCategoryCard
                            {...{
                                key: i,
                                name: category.name,
                                openPositions: category.openPositions,
                            }}
                        />
                    ))}
                </div>
            </div>
            <div className="grid grid-cols-4 pl-20 bg-gradient-to-r from-blue-500 to-purple-500 py-20 items-center justify-center my-8">
                <div className="text-white">
                    <div>
                        <FaUserTie size={40} />
                    </div>
                    <h2 className="font-bold text-xl my-4">
                        Search Millions of Jobs
                    </h2>
                    <p>
                        Get to know the latest job openings from top companies
                    </p>
                </div>
                <div className="text-white">
                    <div>
                        <GiTeamIdea size={40} />
                    </div>
                    <h2 className="font-bold text-xl my-4">
                        Easy To Manage Jobs
                    </h2>
                    <p>
                        Get to know the latest job openings from top companies
                    </p>
                </div>
                <div className="text-white">
                    <div>
                        <GiPodiumWinner size={40} />
                    </div>
                    <h2 className="font-bold text-xl my-4">
                        Fastest Growing Jobs
                    </h2>
                    <p>
                        Get to know the latest job openings from top companies
                    </p>
                </div>
                <div className="text-white">
                    <div>
                        <ImProfile size={40} />
                    </div>
                    <h2 className="font-bold text-xl my-4">
                        Search Expert Candidates
                    </h2>
                    <p>
                        Get to know the latest job openings from top companies
                    </p>
                </div>
            </div>
            <div className="text-center py-8">
                <h2 className="text-4xl text-blue-500">
                    Subscribe to our Newsletter
                </h2>
                <p className="mt-4 text-gray-500">
                    Get latest updates and offers from SkillHunt in your inbox
                </p>
                <div
                    className="flex justify-center m-auto mt-4 bg-blue-500 rounded-lg"
                    style={{
                        width: "600px",
                    }}
                >
                    <input
                        type="text"
                        placeholder="Enter email address"
                        className="p-4 rounded-lg bg-gray-100 shadow-lg scale-105"
                        style={{
                            width: "400px",
                        }}
                    />
                    <button
                        style={{
                            width: "200px",
                        }}
                        className="bg-blue-500 text-white p-4 rounded-lg"
                    >
                        Subscribe
                    </button>
                </div>
            </div>
        </div>
    );
}
