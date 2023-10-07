import { useContext } from "react";
import NavBar from "../../components/NavBar/NavBar";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import { BsDashLg } from "react-icons/bs";


const Profile = () => {
    const { user } = useContext(AuthContext)
    console.log(user)

    const handleOnSubmit = e => {
        e.preventDefault();
    }

    return (
        <div>
            <NavBar />
            <div className="container mx-auto px-4 mb-52">
                <div className="mt-16 mb-12">
                    <h1 className="text-center text-2xl font-bold lg:text-5xl lg:font-semibold text-orange-400 mb-5 uppercase">Profile</h1>
                    <div className="flex gap-4 justify-center items-center">
                        <BsDashLg className="text-orange-400 text-6xl font-bold" />
                        <div>
                            <img src="https://i.ibb.co/J3t9d1j/flower.png" alt="" className="w-14 mx-auto" />
                        </div>
                        <BsDashLg className="text-orange-400 text-6xl font-bold" />
                    </div>
                </div>
                <div className="bg-[#FFF2ED] p-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 py-20 border-2 border-[#FFC4AE]">
                        <div className="text-center">
                            <h1 className="text-2xl font-semibold mb-5">Profile Image</h1>
                            {
                                user?.photoURL ?
                                    <div className="w-3/4 xl:w-1/2 mx-auto border-2 border-[#FFC4AE] p-3 lg:p-6">
                                        <img src={`${user.photoURL}`} alt="" className="w-full h-full" />
                                    </div>
                                    :
                                    <div className="w-3/4 xl:w-1/2 mx-auto border-2 border-[#FFC4AE] p-3 lg:p-6">
                                        <img src="https://i.ibb.co/tMy0bd5/pngwing-com.png" alt="" className="w-full h-full" />
                                    </div>
                            }
                        </div>
                        <div>
                            <div className="card flex-shrink-0 mx-auto lg:mx-0 w-full max-w-xl">
                                <form onSubmit={handleOnSubmit} className="card-body">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">name</span>
                                        </label>
                                        <input type="text" placeholder="name" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Photo URL</span>
                                        </label>
                                        <input type="text" placeholder="photo url" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Current Password</span>
                                        </label>
                                        <input type="password" placeholder="current password" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">New Password</span>
                                        </label>
                                        <input type="password" placeholder="current password" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Repeat Password</span>
                                        </label>
                                        <input type="password" placeholder="repeat password" className="input input-bordered" />
                                    </div>
                                    <div className="form-control mt-10">
                                        <button className="btn bg-orange-400 text-white">Update</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;