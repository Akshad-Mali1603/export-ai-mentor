import BuyersListCards from "../BuyerVerification/BuyersListCards";
import BuyerVerificationFrom from "../BuyerVerification/BuyerVerificationFrom";
import Header from "../Header/Header";
import Footer from "../LandingPage/Footer";

const BuyerVerificationPage = () => {
    return (
        <div className="min-h-[100vh] bg-slate-100 font-['poppins']">
                <Header/>
                <BuyerVerificationFrom/>
                <BuyersListCards/>
                <Footer/>
            </div>
    );
}
export default BuyerVerificationPage;