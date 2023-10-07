import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <div className="container mx-auto">
            <footer className="py-4 px-4 bg-[#FFF2ED]">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 xl:grid-cols-5 gap-6 border-2 border-[#FFC4AE] py-10 px-10 xl:px-20 xl:py-20">
                    <aside className="lg:col-span-2">
                        <div>
                            <Link to="/">
                                <h1 className="normal-case text-2xl font-bold text-orange-400">Mabrook <span className="text-black">Events</span></h1>
                            </Link>
                            <p className="text-base font-medium text-slate-600 max-w-xs mt-4 mb-6">Welcome and open yourself to your truest love this year with us! With the Release Process.</p>
                        </div>
                    </aside>
                    <nav className="flex flex-col">
                        <header className="text-base mb-2 lg:text-xl font-bold text-black uppercase">Services</header>
                        <Link className="link link-hover max-w-fit">Branding</Link>
                        <Link className="link link-hover max-w-fit">Design</Link>
                        <Link className="link link-hover max-w-fit">Marketing</Link>
                        <Link className="link link-hover max-w-fit">Advertisement</Link>
                    </nav>
                    <nav className="flex flex-col lg:col-span-2 xl:col-span-1">
                        <header className="text-base mb-2 lg:text-xl font-bold text-black uppercase">Contact</header>
                        <div className="flex text-orange-400 text-lg items-center gap-2">
                            <HiOutlineMail className="text-2xl" />
                            <Link className="link link-hover font-bold text-orange-400 max-w-fit">mabrook@gmail.com</Link>
                        </div>
                        <div className="flex text-orange-400 text-lg items-center gap-2">
                            <HiOutlinePhone className="text-2xl" />
                            <Link className="font-semibold link-hover">+880 1878221264</Link>
                        </div>
                    </nav>
                    <nav className="flex flex-col">
                        <header className="text-base mb-2 lg:text-xl font-bold text-black uppercase">Legal</header>
                        <Link className="link link-hover max-w-fit">Terms of use</Link>
                        <Link className="link link-hover max-w-fit">Privacy policy</Link>
                        <Link className="link link-hover max-w-fit">Cookie policy</Link>
                    </nav>
                </div>
            </footer>
            <div className="text-center my-4">
                <p className="text-sm font-bold text-orange-400">Copyright &copy; 2023 All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;