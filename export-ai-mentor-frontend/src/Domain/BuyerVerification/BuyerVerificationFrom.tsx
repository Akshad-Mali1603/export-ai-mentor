import { IconBulbFilled } from "@tabler/icons-react";


const BuyerVerificationFrom = () => (
    <div className="flex flex-col items-center justify-center px-4 py-8 backdrop-blur-md shadow-xl shadow-slate-500 ">
        <h1 className="text-3xl font-bold text-center">Buyer Verification / Scam Shield</h1>
        <p className="text-slate-700 mt-2 text-center">
            Check if your buyer is genuine before you send your first shipment.
        </p>
        <p className="flex items-center gap-2 text-slate-500 mt-1">
            <IconBulbFilled size={20} /> Powered by AI + Global Trade Databases
        </p>

        <div className="w-full max-w-xl mt-6 border-2 border-slate-200 rounded-xl bg-white shadow-md p-6">
            <div className="flex flex-col gap-1.5 pt-3">
                <label className="font-medium text-slate-600">Buyer Company Name</label>
                <input type="text" placeholder="e.g. Google LLC" className="border-1 rounded-lg px-3 py-2 shadow-slate-800 border-slate-950  text-slate-950 focus:border-slate-800 focus:outline-slate-700 placeholder:text-gray-400" />
            </div>
            <div className="flex flex-col gap-1.5 pt-3">
                <label className="font-medium text-slate-600">Website URL (optional)</label>
                <input type="text" placeholder="e.g. Google LLC" className="border-1 rounded-lg px-3 py-2 shadow-slate-800 border-slate-950  text-slate-950 focus:border-slate-800 focus:outline-slate-700 placeholder:text-gray-400" />
            </div>
            <div className="flex flex-col gap-1.5 pt-3">
                <label className="font-medium text-slate-600">Email (optional)</label>
                <input type="text" placeholder="e.g. Google LLC" className="border-1 rounded-lg px-3 py-2 shadow-slate-800 border-slate-950  text-slate-950 focus:border-slate-800 focus:outline-slate-700 placeholder:text-gray-400" />
            </div>
            <div className="flex flex-col gap-1.5 pt-3">
                <label className="font-medium text-slate-600">Country (optional)</label>
                <select className="border-1 rounded-lg px-3 py-2 shadow-slate-800 border-slate-950 text-slate-950 focus:border-slate-800 focus:outline-slate-700 placeholder:text-gray-400">
                    <option value="default">Select Country</option>
                    <option value="USA">USA</option>
                    <option value="India">India</option>
                    <option value="UK">United Kingdom</option>
                    <option value="Germany">Germany</option>
                    <option value="China">China</option>
                </select>
            </div>
            <div className="pt-10">
                <button className="bg-slate-950 shadow-2xl shadow-slate-950 text-slate-50 h-13 w-full rounded-2xl p-2 hover:bg-slate-700">Verify Buyer</button>
            </div>
        </div>
    </div>
)
export default BuyerVerificationFrom;