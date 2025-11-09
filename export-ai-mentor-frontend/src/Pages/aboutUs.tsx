import OurMission from "../Components/AboutUs/OurMission";
import Header from "../Components/Header/Header";
import Footer from "../Components/LandingPage/Footer";
import OurStory from "../Components/AboutUs/OurStory";
import OurVisions from "../Components/AboutUs/OurVisions";

const AboutUs = () => {
    return <div><div className="min-h-[100vh] bg-slate-100 font-['poppins']">
        <Header />
       <OurMission />
       <OurStory />
       <OurVisions />
        <Footer />
    </div>
    </div>;
}
export default AboutUs;