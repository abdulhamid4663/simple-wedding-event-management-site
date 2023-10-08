import { Link, useNavigate } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from "react-helmet-async";
// import { getAuth, updateProfile } from "firebase/auth";
// import app from "../../config/firebase.config";
// const auth = getAuth(app);


const Register = () => {
    const { createUser, googleLogin, userUpdateProfile } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleOnSubmit = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget);
        const name = form.get("name");
        const email = form.get("email");
        const password = form.get("password");

        if(password.length < 6) {
            toast.error("password must have at least 6 characters")
            return;
        }
        if(!/[A-Z]/.test(password)) {
            toast.error("password must have at lease one uppercase letter")
            return;
        }
        if(!/[#?!@$%^&*-]/.test(password)) {
            toast.error("password must have at least one special character")
            return;
        }

        createUser(email, password)
            .then(() => {
                userUpdateProfile(name)
                .then( () => {

                })
                
                toast.success("User created Successfully");

                navigate("/")
            })
            .catch(error => {
                toast.error(error.message)
            })
    }

    const handleGoogleLogin = () => {
        googleLogin()
            .then(() => {
                toast.success("User logged in with Google Successfully")
            })
            .catch(error => {
                toast.error(error.message)
            })
    }

    return (
        <div>
            <Helmet>
                <title>Mabrook || Register</title>
            </Helmet>
            <NavBar />
            <div className="flex min-h-[80vh] justify-center items-center">
                <div className="card flex-shrink-0 mx-auto w-full max-w-md border-2 border-[#FFC4AE] my-24">
                    <div className="card-body">
                        <div>
                            <button onClick={handleGoogleLogin} className="btn text-base text-blue-600 normal-case w-full">
                                <FcGoogle className="text-xl" />
                                Login with Google
                            </button>
                        </div>
                        <form onSubmit={handleOnSubmit}>
                            <div className="divider lg:divider-vertical">OR</div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn bg-orange-400 text-white">Register</button>
                            </div>
                        </form>
                        <div className="text-center mt-4">
                            <p className="text-sm font-semibold text-slate-700">Already Have an Account? <Link to="/login" className="font-bold text-orange-400">Login</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;