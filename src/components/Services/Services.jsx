import { useEffect, useState } from "react";
import Service from "../Service/Service";

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        async function loadServices() {
            const res = await fetch('../service.json');
            const data = await res.json();
            setServices(data)
        }

        loadServices()
    }, [])

    return (
        <div className="bg-[#FFF2ED] my-28">
            <div className="container mx-auto px-4">
                <div className="pt-10">
                    <h1 className="text-center text-5xl font-semibold text-orange-400 mb-5">Our Services</h1>
                    <span className="w-20 h-1 bg-orange-400 mx-auto block mb-1"></span>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        services.map(service => <Service key={service.id} service={service} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;