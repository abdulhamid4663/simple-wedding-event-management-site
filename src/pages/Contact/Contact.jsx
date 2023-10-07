import { BsDashLg } from "react-icons/bs";
import NavBar from "../../components/NavBar/NavBar";
import { HiOutlineMail, HiOutlinePhone, HiLocationMarker } from "react-icons/hi";


const Contact = () => {
    return (
        <div>
            <NavBar />
            <div className="container mx-auto px-4">
                <div className="mt-16 mb-12">
                    <h1 className="text-center text-2xl font-bold lg:text-5xl lg:font-semibold text-orange-400 mb-5 uppercase">Contact Us</h1>
                    <div className="flex gap-4 justify-center items-center">
                        <BsDashLg className="text-orange-400 text-6xl font-bold" />
                        <div>
                            <img src="https://i.ibb.co/J3t9d1j/flower.png" alt="" className="w-14 mx-auto" />
                        </div>
                        <BsDashLg className="text-orange-400 text-6xl font-bold" />
                    </div>
                </div>
                <div className="text-base lg:text-xl font-medium text-slate-700 p-6 lg:p-10 border-2 border-[#FFC4AE] mb-52 flex flex-col lg:flex-row gap-6 justify-center lg:justify-around">
                    <div className="text-center">
                        <HiOutlineMail className="text-4xl mx-auto mb-2" />
                        <h1 className="text-2xl font-semibold text-slate-800 mb-3">Email:</h1>
                        <h2 className="text-orange-400 font-bold text-xl">mabrook@gmail.com</h2>
                    </div>
                    <div className="text-center">
                        <HiOutlinePhone className="text-4xl mx-auto mb-2" />
                        <h1 className="text-2xl font-semibold text-slate-800 mb-3">Phone:</h1>
                        <h2 className="text-orange-400 font-bold text-xl">+880 1878221264</h2>
                    </div>
                    <div className="text-center">
                        <HiLocationMarker className="text-4xl mx-auto mb-2" />
                        <h1 className="text-2xl font-semibold text-slate-800 mb-3">Address:</h1>
                        <h2 className="text-orange-400 font-bold text-xl">New York, NY</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;