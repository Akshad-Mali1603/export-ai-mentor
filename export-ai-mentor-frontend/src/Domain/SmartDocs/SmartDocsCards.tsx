import { 
  IconBulb, 
  IconCertificate, 
  IconCreditCard, 
  IconFileText, 
  IconPackages, 
  IconShieldCheck, 
  IconTruckDelivery 
} from "@tabler/icons-react";
import { Group } from "@mantine/core";

type SmartDocsCardsProps = {
  setSelectedDoc: (docType: string) => void;
};

const SmartDocsCards = ({ setSelectedDoc }: SmartDocsCardsProps) => {
  return (
    <div id="modules" className="flex flex-col w-full items-start gap-3 px-20">
      
      {/* Intro Section */}
      <div className="flex flex-col text-left pb-6 pt-10">
        <div className="text-4xl font-bold flex items-center gap-2">
          <IconFileText className="w-12 h-12" />
          SmartDocs – Auto-generate Export Documents
        </div>
        <div className="text-lg text-slate-800 pt-3">
          Save time and reduce errors by generating export-compliant documents instantly.
        </div>
        <div className="text-base text-slate-600 pt-3 flex items-center gap-2">
          <IconBulb size={32} className="text-slate-600" />
          <span>Powered by AI + pre-filled data from your dashboard</span>
        </div>
      </div>

      {/* Step Title */}
      <div className="text-4xl font-bold pb-3">Step 1 :  Select Document Type</div>

      {/* Cards Section */}
      <div className="items-center justify-center p-4">
        <Group className="flex gap-8 pb-5 flex-wrap [&>button]:hover:-translate-y-2 [&>button]:transition [&>button]:duration-300 [&>button]:ease-in-out [&>button]:cursor-pointer">
          
          {/* Card 1 */}
          <button
            onClick={() => setSelectedDoc("invoice")}
            className="flex flex-col bg-slate-50 shadow-2xl shadow-slate-500 backdrop-blur-md 
                       text-slate-950 h-[11.25rem] w-[32rem] rounded-2xl px-8 pt-5 hover:bg-slate-200"
          >
            <div className="flex flex-row items-center gap-3 mb-2">
              <div className="w-16 h-16 rounded-full bg-slate-300 flex justify-center items-center">
                <IconFileText width={30} height={30} />
              </div>
              <div className="font-semibold text-lg">Commercial Invoice</div>
            </div>
            <div className="text-base text-slate-700">
              Standard document for international sales transactions
            </div>
          </button>

          {/* Card 2 */}
          <button
            onClick={() => setSelectedDoc("phytosanitary")}
            className="flex flex-col bg-slate-50 shadow-2xl shadow-slate-500 backdrop-blur-md 
                       text-slate-950 h-[11.25rem] w-[32rem] rounded-2xl px-8 pt-5 hover:bg-slate-200"
          >
            <div className="flex flex-row items-center gap-3 mb-2">
              <div className="w-16 h-16 rounded-full bg-slate-300 flex justify-center items-center">
                <IconPackages width={30} height={30} />
              </div>
              <div className="font-semibold text-lg">Phytosanitary Certificate</div>
            </div>
            <div className="text-base text-slate-700">
              Confirm goods are inspected and pest-free
            </div>
          </button>

          {/* Card 3 */}
          <button
            onClick={() => setSelectedDoc("origin")}
            className="flex flex-col bg-slate-50 shadow-2xl shadow-slate-500 backdrop-blur-md 
                       text-slate-950 h-[11.25rem] w-[32rem] rounded-2xl px-8 pt-5 hover:bg-slate-200"
          >
            <div className="flex flex-row items-center gap-3 mb-2">
              <div className="w-16 h-16 rounded-full bg-slate-300 flex justify-center items-center">
                <IconCertificate width={30} height={30} />
              </div>
              <div className="font-semibold text-lg">Certificate of Origin</div>
            </div>
            <div className="text-base text-slate-700">
              Confirms goods are manufactured in specific country
            </div>
          </button>
        </Group>

        {/* Second Row */}
        <Group className="flex gap-8 pt-5 flex-wrap [&>button]:hover:-translate-y-2 [&>button]:transition [&>button]:duration-300 [&>button]:ease-in-out [&>button]:cursor-pointer">

          {/* Card 4 */}
          <button
            onClick={() => setSelectedDoc("billOfLading")}
            className="flex flex-col bg-slate-50 shadow-2xl shadow-slate-500 backdrop-blur-md 
                       text-slate-950 h-[11.25rem] w-[32rem] rounded-2xl px-8 pt-5 hover:bg-slate-200"
          >
            <div className="flex flex-row items-center gap-3 mb-2">
              <div className="w-16 h-16 rounded-full bg-slate-300 flex justify-center items-center">
                <IconTruckDelivery width={30} height={30} />
              </div>
              <div className="font-semibold text-lg">Bill of Lading</div>
            </div>
            <div className="text-base text-slate-700">
              Receipt for shipped goods and title document
            </div>
          </button>

          {/* Card 5 */}
          <button
            onClick={() => setSelectedDoc("letterOfCredit")}
            className="flex flex-col bg-slate-50 shadow-2xl shadow-slate-500 backdrop-blur-md 
                       text-slate-950 h-[11.25rem] w-[32rem] rounded-2xl px-8 pt-5 hover:bg-slate-200"
          >
            <div className="flex flex-row items-center gap-3 mb-2">
              <div className="w-16 h-16 rounded-full bg-slate-300 flex justify-center items-center">
                <IconCreditCard stroke={1.2} width={30} height={30} />
              </div>
              <div className="font-semibold text-lg">Letter of Credit</div>
            </div>
            <div className="text-base text-slate-700">
              Bank guarantee of payment for shipped goods
            </div>
          </button>

          {/* Card 6 */}
          <button
            onClick={() => setSelectedDoc("insurance")}
            className="flex flex-col bg-slate-50 shadow-2xl shadow-slate-500 backdrop-blur-md 
             text-slate-950 h-[11.25rem] w-[32rem] rounded-2xl px-8 pt-5 hover:bg-slate-200"
          >
            <div className="flex flex-row items-center gap-3 mb-2">
              <div className="w-16 h-16 rounded-full bg-slate-300 flex justify-center items-center">
                <IconShieldCheck width={30} height={30} />
              </div>
              <div className="font-semibold text-lg">AI Export Assistant</div>
            </div>
            <div className="text-base text-slate-700">
              Proof of insurance coverage for shipment
            </div>
          </button>
        </Group>
      </div>
    </div>
  );
};

export default SmartDocsCards;
