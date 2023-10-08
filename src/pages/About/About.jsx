import { BsDashLg } from "react-icons/bs";
import NavBar from "../../components/NavBar/NavBar";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";


const About = () => {
    return (
        <div>
            <Helmet>
                <title>Mabrook || About</title>
            </Helmet>
            <NavBar />
            <div className="container mx-auto px-4">
                <div className="mt-16 mb-12">
                    <h1 className="text-center text-2xl font-bold lg:text-5xl lg:font-semibold text-orange-400 mb-5 uppercase">About Us</h1>
                    <div className="flex gap-4 justify-center items-center">
                        <BsDashLg className="text-orange-400 text-6xl font-bold" />
                        <div>
                            <img src="https://i.ibb.co/J3t9d1j/flower.png" alt="" className="w-14 mx-auto" />
                        </div>
                        <BsDashLg className="text-orange-400 text-6xl font-bold" />
                    </div>
                </div>
                <div className="text-base lg:text-xl font-medium text-slate-700 p-6 lg:p-10 border-2 border-[#FFC4AE] mb-32">
                    <p className="mb-8">
                        Established in 2010, <Link to="/" className="text-orange-400 font-bold">Mabrook</Link> has been a trusted name in the wedding industry for 13 years. We were founded with a vision to create exceptional and memorable wedding experiences for couples in search of perfection on their special day.
                    </p>
                    <h1 className="text-2xl font-semibold text-slate-800 mb-2">Our Beginnings:</h1>
                    <p>
                        <Link to="/" className="text-orange-400 font-bold">Mabrook</Link> was founded by <span className="text-black link-hover font-semibold cursor-pointer">Abdulhamid</span> with a passion for turning wedding dreams into reality. With a background in Wedding Planning experience, <span className="text-black link-hover font-semibold cursor-pointer">Abdulhamid</span> envisioned a company that would provide couples with a one-stop solution for all their wedding needs. Over the years, our dedication to excellence and attention to detail have made us a top choice for brides and grooms looking to create the perfect wedding day.

                    </p>
                    <p className="mb-6">At <Link to="/" className="text-orange-400 font-bold">Mabrook</Link>, we are dedicated to making your wedding day an unforgettable and magical experience. With a passion for excellence and a commitment to detail, we specialize in providing a range of services that will transform your dream wedding into a reality.
                    </p>
                    <p className="mb-6">
                        Our team of professionals, from skilled florists to gourmet chefs, talented photographers to passionate musicians, are here to ensure that every aspect of your special day is perfect. We understand that your wedding is a celebration of love, and we take pride in being a part of it.
                    </p>
                    <p className="mb-6">
                        With years of experience in the wedding industry, we know that every wedding is unique. That&apos;s why we work closely with you to customize our services to match your vision and style. Whether you&apos;re planning an intimate gathering or a grand affair, we have the expertise and creativity to bring your ideas to life.
                    </p>
                    <p className="mb-6">
                        From breathtaking floral arrangements that add a touch of romance to exquisite custom wedding cakes that delight the senses, we pay attention to every detail. Our professional photographers capture the moments you&apos;ll treasure forever, and our live music ensemble sets the perfect mood for your celebration.
                    </p>
                    <p className="mb-6">
                        Arrive in style with our luxury transportation service, making a grand entrance and exit that will leave a lasting impression on your guests. We believe that your wedding day should be a reflection of your love story, and we&apos;re here to ensure that it&apos;s a day filled with joy, love, and beautiful memories.
                    </p>
                    <p className="mb-6">

                    </p>
                    <p className="mb-6">
                        Thank you for considering <Link to="/contact" className="text-orange-400 font-bold">Mabrook</Link> for your wedding services. We look forward to being a part of your special day and making it a truly magical experience.
                    </p>
                    <p>
                        <Link to="/contact" className="text-orange-400 font-bold">Contact us</Link> today to discuss how we can make your wedding dreams come true.

                    </p>
                </div>
            </div>
        </div >
    );
};

export default About;