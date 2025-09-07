import Header from "../Header/Header";
import Footer from "../LandingPage/Footer";
import SmartDocs from "../SmartDocs/SmartDocs";

const SmartDocsPage = () => {
  return (
    <div>
        <div className="min-h-[100vh] bg-slate-100 font-['poppins']">
        <Header />
        <SmartDocs />
        <Footer />
        </div>
    </div>
  );
};

export default SmartDocsPage;