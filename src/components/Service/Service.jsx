import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { BsDashLg } from "react-icons/bs";
import Aos from 'aos';
import "aos/dist/aos.css"
import { useEffect } from 'react';

const Service = ({ service }) => {
    const { name, image, description } = service;

    useEffect( () => {
        Aos.init();
    }, [])

    return (
        <div data-Aos="fade-up" className="card bg-[#fffcf9] p-6">
            <figure>
                <BsDashLg className='text-4xl text-orange-400 font-extrabold mx-4'/> <img src={image} alt={`image of ${name}`} className="w-10 text-white" /> <BsDashLg className='text-4xl text-orange-400 font-extrabold mx-4'/>
            </figure>
            <div className="flex flex-col gap-4 items-center text-center mt-6">
                <Link to="/"><h2 className="card-title font-semibold hover:text-orange-400 duration-200">{name}</h2></Link>
                <p className='text-base font-normal px-2 text-slate-500'>{description}</p>
            </div>
        </div>
    );
};

Service.propTypes = {
    service: PropTypes.object
}

export default Service;