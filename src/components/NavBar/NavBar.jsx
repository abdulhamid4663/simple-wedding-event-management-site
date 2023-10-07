import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import { toast } from "react-toastify";


const NavBar = () => {
    const { user, logoutUser } = useContext(AuthContext);

    const navLinks = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/about'>About us</NavLink></li>
        <li><NavLink to='/contact'>Contact</NavLink></li>
        <li><NavLink to='/gallery'>Gallery</NavLink></li>
        {
            user && <>
                <li><NavLink to='/profile'>Profile</NavLink></li>
            </>
        }
    </>

    const handleLogout = () => {
        logoutUser()
            .then(() => {
                toast.success("User logged out successfully");
            })
            .catch(error => {
                toast.error(error.message)
            })
    }


    return (
        <div className="navbar bg-base-100 sticky top-0 z-50 lg:px-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl font-bold text-orange-400">Mabrook <span className="text-black">Events</span></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <div className="hidden md:block">
                    {
                        user &&
                        <div className="mr-2">
                            <p>{user.email}</p>
                        </div>
                    }
                </div>
                {
                    user
                        ?
                        <button onClick={handleLogout} className="btn bg-orange-400 text-white font-bold normal-case text-lg">Logout</button>
                        :
                        <Link to="/login">
                            <button className="btn bg-orange-400 text-white font-bold normal-case text-lg">Login</button>
                        </Link>
                }
            </div>
        </div>
    );
};

export default NavBar;