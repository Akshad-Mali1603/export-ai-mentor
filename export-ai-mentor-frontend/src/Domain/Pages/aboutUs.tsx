import OurMission from "../AboutUs/OurMission";
import Header from "../Header/Header";
import Footer from "../LandingPage/Footer";
import OurStory from "../AboutUs/OurStory";
import OurVisions from "../AboutUs/OurVisions";

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