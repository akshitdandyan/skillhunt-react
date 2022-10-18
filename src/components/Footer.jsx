import {
    AiOutlineTwitter,
    AiFillInstagram,
    AiOutlineMail,
} from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";

const Footer = () => {
    return (
        <div className="p-14">
            <div className="grid grid-cols-5 gap-2">
                <div>
                    <h3 className="text-lg text-gray-600">
                        Skillhunt Jobboard
                    </h3>
                    <p className="text-gray-400 mt-4">
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
                    </p>
                    <div className="flex mt-4">
                        <AiOutlineTwitter
                            className=" rounded-full aspect-square bg-gray-200 p-2"
                            size={30}
                        />
                        <FaFacebookF
                            className="ml-4 rounded-full aspect-square bg-gray-200 p-2"
                            size={30}
                        />
                        <AiFillInstagram
                            className="ml-4 rounded-full aspect-square bg-gray-200 p-2"
                            size={30}
                        />
                    </div>
                </div>

                <div>
                    <h3 className="text-lg text-gray-600">Employers</h3>
                    <ul className="text-gray-400 mt-4">
                        <li className="list-none mt-2 hover:text-blue-500 cursor-pointer">
                            Browse Candidates
                        </li>
                        <li className="list-none mt-2 hover:text-blue-500 cursor-pointer">
                            Post a job
                        </li>
                        <li className="list-none mt-2 hover:text-blue-500 cursor-pointer">
                            Employee Listing
                        </li>
                        <li className="list-none mt-2 hover:text-blue-500 cursor-pointer">
                            Resume Page
                        </li>
                        <li className="list-none mt-2 hover:text-blue-500 cursor-pointer">
                            Dashboard
                        </li>
                        <li className="list-none mt-2 hover:text-blue-500 cursor-pointer">
                            Job Packages
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg text-gray-600">Candidate</h3>
                    <ul className="text-gray-400 mt-4">
                        <li className="list-none mt-2 hover:text-blue-500 cursor-pointer">
                            Browse Jobs
                        </li>
                        <li className="list-none mt-2 hover:text-blue-500 cursor-pointer">
                            Submit Resume
                        </li>
                        <li className="list-none mt-2 hover:text-blue-500 cursor-pointer">
                            Dashboard
                        </li>
                        <li className="list-none mt-2 hover:text-blue-500 cursor-pointer">
                            Browse Categories
                        </li>
                        <li className="list-none mt-2 hover:text-blue-500 cursor-pointer">
                            My Bookmarks
                        </li>
                        <li className="list-none mt-2 hover:text-blue-500 cursor-pointer">
                            Candidate Listing
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg text-gray-600">Account</h3>
                    <ul className="text-gray-400 mt-4">
                        <li className="list-none mt-2 hover:text-blue-500 cursor-pointer">
                            My Account
                        </li>
                        <li className="list-none mt-2 hover:text-blue-500 cursor-pointer">
                            Sign In
                        </li>
                        <li className="list-none mt-2 hover:text-blue-500 cursor-pointer">
                            Create Account
                        </li>
                        <li className="list-none mt-2 hover:text-blue-500 cursor-pointer">
                            Checkout
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg text-gray-600">Have Questions?</h3>
                    <div className="grid grid-cols-[1fr_5fr]">
                        <div className="mt-4 text-gray-500">
                            <MdLocationOn />
                        </div>
                        <div className="mt-2 text-gray-500">
                            203 Fake St. Mountain View, San Francisco,
                            California, USA
                        </div>
                        <div className=" text-gray-500 mt-4">
                            <BsFillTelephoneFill />
                        </div>
                        <div className="mt-2 text-gray-500">
                            +2 392 3929 210
                        </div>
                        <div className=" text-gray-500 mt-3">
                            <AiOutlineMail />
                        </div>
                        <div className="mt-2 text-gray-500">
                            info@skillhunt.us
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center pt-10 text-gray-600">
                Copyright ©2022 All rights reserved | This is a demo website
            </div>
        </div>
    );
};

export default Footer;
