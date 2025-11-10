import Profile from "../Components/Profile/Profile";
import Footer from "../Components/LandingPage/Footer";
import Header from "../Components/Header/Header";

const ProfilePage =()=>{
    return(
        <div className="min-h-[90vh] bg-slate-200 font-['poppins']">
            <Header/>
            <Profile/>
            <Footer/>
        </div>
    )
}
export default ProfilePage;