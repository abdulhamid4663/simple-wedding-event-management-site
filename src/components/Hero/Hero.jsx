import { Link } from "react-router-dom";


const Hero = () => {
    return (
        <div className="container mx-auto mt-12">
            <div className="hero min-h-[80vh] lg:rounded-xl" style={{ backgroundImage: 'url(https://i.ibb.co/wYn0KrH/alvaro-cvg-m-W8-IZd-X7n8-E-unsplash.jpg)' }}>
                <div className="hero-overlay bg-opacity-60 lg:rounded-xl"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-5xl">
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-white">Let&apos;s Create Your Perfect <span className="text-orange-400">Wedding</span></h1>
                        <p className="text-xl font-medium max-w-3xl mx-auto text-white mt-4 mb-6">Welcome and open yourself to your truest love this year with us! With the Release Process.</p>
                        <Link to="/about">
                            <button className="btn border-none rounded-none text-base lg:text-lg font-bold normal-case text-white bg-orange-400 rounded-tl-xl rounded-br-xl">Discover More</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;