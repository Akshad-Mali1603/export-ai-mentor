import { useState } from "react";
import SmartDocsCards from "../Components/SmartDocs/SmartDocsCards";
import DocumentPreview from "../Components/SmartDocs/DocumentPreview";
import Commercial_Invoice from "../Components/SmartDocs/Commercial_Invoice";
import CertificateOfOrigin from "../Components/SmartDocs/CertificateOfOrigin";
import PhytosanitaryCertificate from "../Components/SmartDocs/PhytosanitaryCertificate";
import Header from "../Components/Header/Header";
import Footer from "../Components/LandingPage/Footer";

const SmartDocsPage = () => {
  const [selectedDoc, setSelectedDoc] = useState<string | null>(null);

  return (
    <div className="min-h-[100vh] bg-slate-100 font-['poppins']">
      <Header />
      <SmartDocsCards setSelectedDoc={setSelectedDoc} />

      {/* Conditional Rendering */}
      {selectedDoc === "invoice" && <Commercial_Invoice />}
      {selectedDoc === "phytosanitary" && <PhytosanitaryCertificate />}
      {selectedDoc === "origin" && <CertificateOfOrigin />}

      {selectedDoc && <DocumentPreview />}

      <Footer />
    </div>
  );
};

export default SmartDocsPage;
