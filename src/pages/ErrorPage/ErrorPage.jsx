import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error = useRouteError()

    console.log(error)
    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="text-center">
                <h1 className="text-9xl text-[#25447D] font-bold">{error.status}</h1>
                <h2 className="text-4xl font-semibold mt-2 mb-4">Page {error.statusText}</h2>
                <p className="text-xl text-slate-500">We&apos;re sorry the page you requested has been not found.<br />
                    Please go back to the homepage.
                </p>
                <div className="mt-5">
                    <Link to="/">
                        <button className="btn bg-[#25447D] text-white">Home</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;