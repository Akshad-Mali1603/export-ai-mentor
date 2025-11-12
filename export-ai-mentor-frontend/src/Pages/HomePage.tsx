import Header from "../Components/Header/Header";
import DisplayPage from "../Components/LandingPage/DisplayPage";
import ExploreModules from "../Components/LandingPage/ExploreModules";
import Footer from "../Components/LandingPage/Footer";
import HowItWorks from "../Components/LandingPage/HowItWorks";
import SuccessStories from "../Components/LandingPage/SuccessStories";
import WhyChooseUs from "../Components/LandingPage/WhyChooseUs";

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
