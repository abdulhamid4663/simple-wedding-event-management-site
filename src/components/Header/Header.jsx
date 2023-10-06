import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { BiLogoFacebook, BiLogoTwitter, BiLogoInstagram, BiLogoLinkedin } from "react-icons/bi";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="bg-orange-400 text-center">
            <div className="container mx-auto py-4 lg:py-2">
                <div className="flex items-center justify-center flex-wrap lg:justify-between gap-6">
                    <div className="flex items-center gap-6">
                        <div className="flex text-base text-white items-center gap-1">
                            <HiOutlineMail className="text-xl" />
                            <h2 className="font-semibold">mabrook@gmail.com</h2>
                        </div>
                        <div className="flex text-base text-white items-center gap-1">
                            <HiOutlinePhone className="text-xl" />
                            <h2 className="font-semibold">+880 1878221264</h2>
                        </div>
                    </div>
                    <div className="flex items-center gap-6 text-xl text-white">
                        <Link to="/">
                            <BiLogoFacebook />
                        </Link>
                        <Link to="/">
                            <BiLogoTwitter />
                        </Link>
                        <Link to="/">
                            <BiLogoInstagram />
                        </Link>
                        <Link to="/">
                            <BiLogoLinkedin />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;