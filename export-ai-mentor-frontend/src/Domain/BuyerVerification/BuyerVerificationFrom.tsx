import { IconBulbFilled } from "@tabler/icons-react";
import { useState } from "react";
import { verifyBuyer } from "../../Services/BuyerVerificationService";


const BuyerVerificationForm = ({ onVerifySuccess }: { onVerifySuccess: (data: any) => void }) => {

  const [companyName, setCompanyName] = useState('');
  const [websiteUrl, setwebsiteUrl] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');

  const buyerSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const buyer = { companyName, websiteUrl, email, country };
    console.log(buyer);

    verifyBuyer(buyer).then((response) => {
      onVerifySuccess(response.data);
    }).catch((error) => {
      console.error("Buyer verification failed:", error);
      alert("Buyer verification failed. Please check your input.");

    });
  };

  return (
    <div className="flex flex-col items-center justify-center px-4 py-8 backdrop-blur-md shadow-xl shadow-slate-500">
      <h1 className="text-3xl font-bold text-center">
        Buyer Verification / Scam Shield
      </h1>
      <p className="text-slate-700 mt-2 text-center">
        Check if your buyer is genuine before you send your first shipment.
      </p>
      <p className="flex items-center gap-2 text-slate-500 mt-1">
        <IconBulbFilled size={20} /> Powered by AI + Global Trade Databases
      </p>

      <form>
        <div className="w-full sm:w-[500px] md:w-[700px] lg:w-[600px] mt-6 border-2 border-slate-200 rounded-xl bg-white shadow-md p-6">

          <div className="flex flex-col gap-1.5 pt-3">
            <label className="font-medium text-slate-600">
              Buyer Company Name
            </label>
            <input
              type="text"
              name="companyName"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              placeholder="e.g. Google LLC"
              className="border-1 rounded-lg px-3 py-2 border-slate-950 text-slate-950 placeholder:text-gray-400"
            />
          </div>

          <div className="flex flex-col gap-1.5 pt-3">
            <label className="font-medium text-slate-600">
              Website URL (optional)
            </label>
            <input
              type="text"
              name="websiteUrl"
              value={websiteUrl}
              onChange={(e) => setwebsiteUrl(e.target.value)}
              placeholder="https://example.com"
              className="border-1 rounded-lg px-3 py-2 border-slate-950 text-slate-950 placeholder:text-gray-400"
            />
          </div>

          <div className="flex flex-col gap-1.5 pt-3">
            <label className="font-medium text-slate-600">
              Email (optional)
            </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="contact@company.com"
              className="border-1 rounded-lg px-3 py-2 border-slate-950 text-slate-950 placeholder:text-gray-400"
            />
          </div>

          <div className="flex flex-col gap-1.5 pt-3">
            <label className="font-medium text-slate-600">
              Country (optional)
            </label>
            <select
              name="country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="border-1 rounded-lg px-3 py-2 border-slate-950 text-slate-950"
            >
              <option value="">Select Country</option>
              <option value="United States">United States</option>
              <option value="United States">United States</option>
              <option value="China">China</option>
              <option value="India">India</option>
              <option value="United States">United States</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="Germany">Germany</option>
              <option value="Canada">Canada</option>
              <option value="Australia">Australia</option>
              <option value="Singapore">Singapore</option>
              <option value="France">France</option>
              <option value="Sweden">Sweden</option>
              <option value="Japan">Japan</option>
              <option value="Brazil">Brazil</option>
              <option value="Netherlands">Netherlands</option>
              <option value="Italy">Italy</option>
              <option value="Ireland">Ireland</option>
              <option value="South Africa">South Africa</option>
              <option value="New Zealand">New Zealand</option>
              <option value="Mexico">Mexico</option>

            </select>
          </div>

          <div className="pt-10">
            <button
              type="submit"
              className="bg-slate-950 shadow-2xl text-slate-50 w-full rounded-2xl p-2 hover:bg-slate-700"
              onClick={buyerSubmit}
            >
              Verify Buyer
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BuyerVerificationForm;
