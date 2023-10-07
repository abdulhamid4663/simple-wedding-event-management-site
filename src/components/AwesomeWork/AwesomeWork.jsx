import { BsDashLg } from "react-icons/bs";
import './AwesomeWork.css';

const AwesomeWork = () => {
    
    return (
        <div className="container mx-auto px-4">
            <div data-aos="fade-right">
                <h1 className="text-center text-3xl font-bold lg:text-5xl lg:font-semibold text-orange-400 mb-5 uppercase">Our Awesome Works</h1>
                <div className="flex gap-4 justify-center items-center">
                    <BsDashLg className="text-orange-400 text-6xl font-bold"/>
                    <div>
                        <img src="https://i.ibb.co/J3t9d1j/flower.png" alt="" className="w-14 mx-auto" />
                    </div>
                    <BsDashLg className="text-orange-400 text-6xl font-bold"/>
                </div>
            </div>  
        </div>
    );
};

export default AwesomeWork;