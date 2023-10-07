import { useEffect, useState } from "react";
import Service from "../Service/Service";
import Aos from 'aos';
import "aos/dist/aos.css"
import { BsDashLg } from "react-icons/bs";

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        async function loadServices() {
            const res = await fetch('../service.json');
            const data = await res.json();
            setServices(data)
        }

        loadServices()

        Aos.init()
    }, [])

    return (
        <div className="bg-[#FFF2ED] my-28 py-16">
            <div className="container mx-auto px-4">
                <div data-aos="fade-right">
                    <h1 className="text-center text-3xl font-bold lg:text-5xl lg:font-semibold text-orange-400 mb-5 uppercase">Our Services</h1>
                    <div className="flex gap-4 justify-center items-center">
                        <BsDashLg className="text-orange-400 text-6xl font-bold" />
                        <div>
                            <img src="https://i.ibb.co/J3t9d1j/flower.png" alt="" className="w-14 mx-auto" />
                        </div>
                        <BsDashLg className="text-orange-400 text-6xl font-bold" />
                    </div>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-12">
                    {
                        services.map(service => <Service key={service.id} service={service} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;