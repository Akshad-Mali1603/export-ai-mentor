import { useState } from "react";

const CertificateOfOrigin = () => {
  const [showPackagingDetails, setShowPackagingDetails] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center px-6 py-10 backdrop-blur-md shadow-xl shadow-slate-500">
      <h1 className="text-3xl font-bold text-center">Certificate of Origin</h1>
      <p className="text-slate-700 mt-2 text-center">
        Fill out the certificate details below before proceeding.
      </p>

      <div className="w-full max-w-6xl mt-6 border-2 border-slate-200 rounded-xl bg-white shadow-md p-6">
        {/* Section 1 - Exporter */}
        <h2 className="text-xl font-semibold mb-4">
          1. Goods Consigned From (Exporter&apos;s Details)
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col gap-1.5">
            <label className="font-medium text-slate-600">Business Name</label>
            <input
              type="text"
              placeholder="Enter Business Name"
              className="border-1 rounded-lg px-3 py-2 border-slate-950 shadow-sm placeholder:text-gray-400"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="font-medium text-slate-600">Address</label>
            <input
              type="text"
              placeholder="Enter Address"
              className="border-1 rounded-lg px-3 py-2 border-slate-950 shadow-sm placeholder:text-gray-400"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="font-medium text-slate-600">Country</label>
            <select className="border-1 rounded-lg px-3 py-2 border-slate-950 shadow-sm">
              <option value="">Select Country</option>
              <option>India</option>
              <option>USA</option>
              <option>UK</option>
              <option>Germany</option>
              <option>China</option>
            </select>
          </div>
        </div>

        {/* Section 2 - Consignee */}
        <h2 className="text-xl font-semibold mt-8 mb-4">
          2. Goods Consigned To (Consignee&apos;s Details)
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col gap-1.5">
            <label className="font-medium text-slate-600">Company Name</label>
            <input
              type="text"
              placeholder="Enter Company Name"
              className="border-1 rounded-lg px-3 py-2 border-slate-950 shadow-sm placeholder:text-gray-400"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="font-medium text-slate-600">Address</label>
            <input
              type="text"
              placeholder="Enter Address"
              className="border-1 rounded-lg px-3 py-2 border-slate-950 shadow-sm placeholder:text-gray-400"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="font-medium text-slate-600">Country</label>
            <select className="border-1 rounded-lg px-3 py-2 border-slate-950 shadow-sm">
              <option value="">Select Country</option>
              <option>India</option>
              <option>USA</option>
              <option>UK</option>
              <option>Germany</option>
              <option>China</option>
            </select>
          </div>
        </div>

        {/* Section 3 - Transport */}
        <h2 className="text-xl font-semibold mt-8 mb-4">
          3. Means of Transport and Route (As far as known)
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col gap-1.5">
            <label className="font-medium text-slate-600">Means of Transport</label>
            <select className="border-1 rounded-lg px-3 py-2 border-slate-950 shadow-sm">
              <option value="">Select Transport</option>
              <option>Air</option>
              <option>Sea</option>
              <option>Road</option>
            </select>
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="font-medium text-slate-600">Port of Landing</label>
            <input
              type="text"
              placeholder="Enter Port of Landing"
              className="border-1 rounded-lg px-3 py-2 border-slate-950 shadow-sm placeholder:text-gray-400"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="font-medium text-slate-600">Port of Discharge</label>
            <input
              type="text"
              placeholder="Enter Port of Discharge"
              className="border-1 rounded-lg px-3 py-2 border-slate-950 shadow-sm placeholder:text-gray-400"
            />
          </div>
        </div>

        {/* Section 4 - Product & Packaging */}
        <h2 className="text-xl font-semibold mt-8 mb-4">
          4. Product and Packaging Details
        </h2>
        <button
          onClick={() => setShowPackagingDetails(true)}
          className="bg-slate-950 text-white px-6 py-2 rounded-lg shadow hover:bg-slate-700"
        >
          Add Item
        </button>

        {showPackagingDetails && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="flex flex-col gap-1.5">
              <label className="font-medium text-slate-600">Marks and Number</label>
              <input
                type="text"
                placeholder="Enter Marks and Number"
                className="border-1 rounded-lg px-3 py-2 border-slate-950 shadow-sm"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="font-medium text-slate-600">Total Packages</label>
              <input
                type="number"
                placeholder="Enter Total Packages"
                className="border-1 rounded-lg px-3 py-2 border-slate-950 shadow-sm"
              />
            </div>
            <div className="flex flex-col gap-1.5 col-span-2">
              <label className="font-medium text-slate-600">Description of Goods</label>
              <textarea
                rows={3}
                placeholder="Enter Description"
                className="border-1 rounded-lg px-3 py-2 border-slate-950 shadow-sm"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="font-medium text-slate-600">Origin Criteria</label>
              <input
                type="text"
                placeholder="Enter Origin Criteria"
                className="border-1 rounded-lg px-3 py-2 border-slate-950 shadow-sm"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="font-medium text-slate-600">Gross Weight (kgs)</label>
              <input
                type="number"
                placeholder="Enter Gross Weight"
                className="border-1 rounded-lg px-3 py-2 border-slate-950 shadow-sm"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="font-medium text-slate-600">Net Weight (kgs)</label>
              <input
                type="number"
                placeholder="Enter Net Weight"
                className="border-1 rounded-lg px-3 py-2 border-slate-950 shadow-sm"
              />
            </div>
          </div>
        )}

        {/* Section 5 - Invoice Details */}
        <h2 className="text-xl font-semibold mt-8 mb-4">5. Invoice Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-1.5">
            <label className="font-medium text-slate-600">Invoice Number</label>
            <input
              type="text"
              placeholder="Enter Invoice Number"
              className="border-1 rounded-lg px-3 py-2 border-slate-950 shadow-sm placeholder:text-gray-400"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="font-medium text-slate-600">Invoice Date</label>
            <input
              type="date"
              className="border-1 rounded-lg px-3 py-2 border-slate-950 shadow-sm"
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default CertificateOfOrigin;
