import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="flex justify-between items-center py-6 px-4 fixed w-screen shadow-md bg-white bg-opacity-50 backdrop-blur-sm z-20">
            <Link to="/">
                <div className="text-3xl text-sky-800 font-bold">SkillHunt</div>
            </Link>
            <div className="flex items-center">
                <Link to="/">
                    <div className="mr-4 cursor-pointer hover:opacity-40 active:scale-95 duration-200">
                        Home
                    </div>
                </Link>
                <Link to="/jobs">
                    <div className="mr-4 cursor-pointer hover:opacity-40 active:scale-95 duration-200">
                        Browse Jobs
                    </div>
                </Link>
                <Link to="/candidates">
                    <div className="mr-4 cursor-pointer hover:opacity-40 active:scale-95 duration-200">
                        Candidates
                    </div>
                </Link>

                <Link to="/contact">
                    <div className="mr-4 cursor-pointer hover:opacity-40 active:scale-95 duration-200">
                        Contact
                    </div>
                </Link>

                <Link to="/dashboard/employee">
                    <div className="mr-4 cursor-pointer hover:opacity-40 active:scale-95 duration-200 rounded-md bg-blue-600 px-4 py-2 text-white">
                        Post a Job
                    </div>
                </Link>

                <Link to="/jobs">
                    <div className="cursor-pointer hover:opacity-40 active:scale-95 duration-200 rounded-md bg-yellow-600 px-4 py-2 mr-4 text-white">
                        Want a Job
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Header;
