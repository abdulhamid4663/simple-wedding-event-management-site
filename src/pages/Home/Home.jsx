import AwesomeWork from "../../components/AwesomeWork/AwesomeWork";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import NavBar from "../../components/NavBar/NavBar";
import Services from "../../components/Services/Services";


const Home = () => {
    return (
        <div>
            <Header />
            <NavBar />
            <Hero />
            <Services />
            <AwesomeWork />
        </div>
    );
};

export default Home;