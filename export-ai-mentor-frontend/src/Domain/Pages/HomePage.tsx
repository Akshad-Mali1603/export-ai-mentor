import Header from "../Header/Header";
import DisplayPage from "../LandingPage/DisplayPage";
import ExploreModules from "../LandingPage/ExploreModules";
import Footer from "../LandingPage/Footer";
import HowItWorks from "../LandingPage/HowItWorks";
import SuccessStories from "../LandingPage/SuccessStories";
import WhyChooseUs from "../LandingPage/WhyChooseUs";

export const HomePage = () => {
  return (
    <div id="home" className="min-h-[100vh] bg-slate-100 font-['poppins']">
      <Header />
      <DisplayPage />
      <ExploreModules />
      <HowItWorks />
      <WhyChooseUs />
      <SuccessStories />
      <Footer />
    </div>
  );
};

export default HomePage;
