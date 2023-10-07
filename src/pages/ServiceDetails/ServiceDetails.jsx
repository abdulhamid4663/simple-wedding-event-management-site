import { useLoaderData, useParams } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import { BsDashLg } from "react-icons/bs";


const ServiceDetails = () => {
    const services = useLoaderData()
    const { id } = useParams()
    const idInt = Number.parseInt(id)

    const selectedService = services.find(service => service.id === idInt)
    const { name, image, details } = selectedService;

    console.log(image, details)

    return (
        <div>
            <NavBar />
            <div className="container mx-auto px-4 mb-32">
                <div className="mt-16 mb-12">
                    <h1 className="text-center text-2xl font-bold lg:text-5xl lg:font-semibold text-orange-400 mb-5 uppercase">{name}</h1>
                    <div className="flex gap-4 justify-center items-center">
                        <BsDashLg className="text-orange-400 text-6xl font-bold" />
                        <div>
                            <img src="https://i.ibb.co/J3t9d1j/flower.png" alt="" className="w-14 mx-auto" />
                        </div>
                        <BsDashLg className="text-orange-400 text-6xl font-bold" />
                    </div>
                </div>
                <div>
                    <div>
                        <img src={image} alt="" className="mx-auto rounded-xl w-full" />
                    </div>
                    <div className="my-12">
                        <p className="text-base md:text-xl lg:text-2xl font-semibold text-slate-700">{details}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;