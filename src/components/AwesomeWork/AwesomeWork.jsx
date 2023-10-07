import { BsDashLg } from "react-icons/bs";

const AwesomeWork = () => {

    return (
        <div className="container mx-auto px-4 mb-32">
            <div data-aos="fade-right">
                <h1 className="text-center text-3xl font-bold lg:text-5xl lg:font-semibold text-orange-400 mb-5 uppercase">Our Awesome Works</h1>
                <div className="flex gap-4 justify-center items-center">
                    <BsDashLg className="text-orange-400 text-6xl font-bold" />
                    <div>
                        <img src="https://i.ibb.co/J3t9d1j/flower.png" alt="" className="w-14 mx-auto" />
                    </div>
                    <BsDashLg className="text-orange-400 text-6xl font-bold" />
                </div>
            </div>
            <div className="awesome-work grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 gap-4 lg:h-[850px] mt-12">
                <div className="md:row-span-1">
                    <img src="https://i.ibb.co/dmvZqby/dd8a820f-7019-42d6-b986-ea7b627a3301.webp" alt="" className="max-w-full h-full rounded-lg hover:scale-105 duration-300 ease" />
                </div>
                <div className="md:row-span-2">
                    <img src="https://i.ibb.co/wy61FRt/2.jpg" alt="" className="max-w-full rounded-lg h-full w-full hover:scale-105 duration-300 ease" />
                </div>
                <div className="md:row-span-1">
                    <img src="https://i.ibb.co/R90y1Vj/image-asset.jpg" alt="" className="max-w-full h-full rounded-lg hover:scale-105 duration-300 ease" />
                </div>
                <div className="md:row-span-1">
                    <img src="https://i.ibb.co/PjxK6XC/man-and-woman-with-wedding-ring-young-married-couple-holding-hands-photo.jpg" alt="" className="max-w-full h-full rounded-lg hover:scale-105 duration-300 ease" />
                </div>
                <div className="md:row-span-1">
                    <img src="https://i.ibb.co/VSzvVd3/alvin-mahmudov-s-YIq-GW3huf-I-unsplash.jpg" alt="" className="max-w-full h-full rounded-lg w-full hover:scale-105 duration-300 ease" />
                </div>
                <div className="md:col-span-2">
                    <img src="https://i.ibb.co/6PKGjhc/10-tips-wedding-photography-lighting-profoto-jared-platt-3840px.jpg" alt="" className="max-w-full rounded-lg h-full w-full hover:scale-105 duration-300 ease" />
                </div>
            </div>
        </div>
    );
};

export default AwesomeWork;