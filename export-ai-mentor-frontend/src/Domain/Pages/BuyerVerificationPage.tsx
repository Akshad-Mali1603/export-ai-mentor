import { useState } from "react";
import BuyersListCards from "../BuyerVerification/BuyersListCards";
import BuyerVerificationFrom from "../BuyerVerification/BuyerVerificationFrom";
import Header from "../Header/Header";
import Footer from "../LandingPage/Footer";

const BuyerVerificationPage = () => {
const[buyer, setBuyer] =  useState<any | null>(null);
    return (
        <div className="min-h-[100vh] bg-slate-100 font-['poppins']">
                <Header/>
                <BuyerVerificationFrom onVerifySuccess={setBuyer} />
                <BuyersListCards buyer={buyer}/>
                <Footer/>
            </div>
    );
}
export default BuyerVerificationPage;