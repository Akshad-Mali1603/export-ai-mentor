import { useState } from "react";
import Header from "../Header/Header";
import Footer from "../LandingPage/Footer";
import SmartDocsCards from "../SmartDocs/SmartDocsCards";
import DocumentPreview from "../SmartDocs/DocumentPreview";
import Commercial_Invoice from "../SmartDocs/Commercial_Invoice";
import CertificateOfOrigin from "../SmartDocs/CertificateOfOrigin";
import PhytosanitaryCertificate from "../SmartDocs/PhytosanitaryCertificate";

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
