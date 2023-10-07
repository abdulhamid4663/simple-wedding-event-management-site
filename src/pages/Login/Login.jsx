import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import { toast } from "react-toastify";


const Login = () => {
    const { loginUser, googleLogin } = useContext(AuthContext)

    const handleOnSubmit = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const email = form.get("email")
        const password = form.get("password")
        console.log(email, password)
        loginUser(email, password)
            .then(() => {
                toast.success("User Logged in Successfully");
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
            <NavBar />
            <div className="flex min-h-[80vh] justify-center items-center">
                <div className="card flex-shrink-0 mx-auto w-full max-w-md border-2 border-[#FFC4AE]">
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
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn bg-orange-400 text-white">Login</button>
                            </div>
                        </form>
                        <div className="text-center mt-4">
                            <p className="text-sm font-semibold text-slate-700">Don&apos;t Have an Account? <Link to="/register" className="font-bold text-orange-400">Register</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;