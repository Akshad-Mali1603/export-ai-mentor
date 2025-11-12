const Commercial_Invoice = () => (
  <div className="flex flex-col items-center justify-center px-6 py-10 backdrop-blur-md shadow-xl shadow-slate-500">
    <h1 className="text-3xl font-bold text-center">Commercial Invoice</h1>
    <p className="text-slate-700 mt-2 text-center">
      Fill out the invoice details below before proceeding.
    </p>

    <div className="w-full max-w-5xl mt-6 border-2 border-slate-200 rounded-xl bg-white shadow-md p-6">
      {/* Row 1 - Invoice No & Date */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-1.5">
          <label className="font-medium text-slate-600">Invoice Number</label>
          <input
            type="text"
            placeholder="INV-001"
            className="border-1 rounded-lg px-3 py-2 border-slate-950 text-slate-950 shadow-sm 
              focus:border-slate-800 focus:outline-slate-700 placeholder:text-gray-400"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="font-medium text-slate-600">Date</label>
          <input
            type="date"
            className="border-1 rounded-lg px-3 py-2 border-slate-950 text-slate-950 shadow-sm 
              focus:border-slate-800 focus:outline-slate-700"
          />
        </div>
      </div>

      {/* Row 2 - Exporter & Destination */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div className="flex flex-col gap-1.5">
          <label className="font-medium text-slate-600">Exporter Name</label>
          <input
            type="text"
            placeholder="Enter Exporter Name"
            className="border-1 rounded-lg px-3 py-2 border-slate-950 text-slate-950 shadow-sm 
              focus:border-slate-800 focus:outline-slate-700 placeholder:text-gray-400"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="font-medium text-slate-600">Destination Country</label>
          <input
            type="text"
            placeholder="Enter Country"
            className="border-1 rounded-lg px-3 py-2 border-slate-950 text-slate-950 shadow-sm 
              focus:border-slate-800 focus:outline-slate-700 placeholder:text-gray-400"
          />
        </div>
      </div>

      {/* Row 3 - Consignee & Buyer */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div className="flex flex-col gap-1.5">
          <label className="font-medium text-slate-600">Consignee Name</label>
          <input
            type="text"
            placeholder="Enter Consignee Name"
            className="border-1 rounded-lg px-3 py-2 border-slate-950 text-slate-950 shadow-sm 
              focus:border-slate-800 focus:outline-slate-700 placeholder:text-gray-400"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="font-medium text-slate-600">Buyer (if other than Consignee)</label>
          <input
            type="text"
            placeholder="Enter Buyer Name"
            className="border-1 rounded-lg px-3 py-2 border-slate-950 text-slate-950 shadow-sm 
              focus:border-slate-800 focus:outline-slate-700 placeholder:text-gray-400"
          />
        </div>
      </div>

      {/* Row 4 - Product Description */}
      <div className="flex flex-col gap-1.5 mt-6">
        <label className="font-medium text-slate-600">Product Description</label>
        <textarea
          placeholder="Enter Product Details"
          rows={4}
          className="border-1 rounded-lg px-3 py-2 border-slate-950 text-slate-950 shadow-sm 
            focus:border-slate-800 focus:outline-slate-700 placeholder:text-gray-400"
        />
      </div>

      {/* Row 5 - Quantity & Unit */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div className="flex flex-col gap-1.5">
          <label className="font-medium text-slate-600">Quantity</label>
          <input
            type="number"
            placeholder="Enter Quantity"
            className="border-1 rounded-lg px-3 py-2 border-slate-950 text-slate-950 shadow-sm 
              focus:border-slate-800 focus:outline-slate-700 placeholder:text-gray-400"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="font-medium text-slate-600">Unit</label>
          <input
            type="text"
            placeholder="e.g. Kg, Pieces"
            className="border-1 rounded-lg px-3 py-2 border-slate-950 text-slate-950 shadow-sm 
              focus:border-slate-800 focus:outline-slate-700 placeholder:text-gray-400"
          />
        </div>
      </div>

      {/* Row 6 - Price & Currency */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div className="flex flex-col gap-1.5">
          <label className="font-medium text-slate-600">Price per Unit</label>
          <input
            type="number"
            placeholder="Enter Price"
            className="border-1 rounded-lg px-3 py-2 border-slate-950 text-slate-950 shadow-sm 
              focus:border-slate-800 focus:outline-slate-700 placeholder:text-gray-400"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="font-medium text-slate-600">Currency</label>
          <select
            className="border-1 rounded-lg px-3 py-2 border-slate-950 text-slate-950 shadow-sm 
              focus:border-slate-800 focus:outline-slate-700"
          >
            <option value="">Select Currency</option>
            <option value="USD">USD - US Dollar</option>
            <option value="EUR">EUR - Euro</option>
            <option value="INR">INR - Indian Rupee</option>
            <option value="GBP">GBP - British Pound</option>
          </select>
        </div>
      </div>

      {/* Row 7 - Port of Loading & Port of Discharge */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div className="flex flex-col gap-1.5">
          <label className="font-medium text-slate-600">Port of Loading</label>
          <input
            type="text"
            placeholder="Enter Port of Loading"
            className="border-1 rounded-lg px-3 py-2 border-slate-950 text-slate-950 shadow-sm 
              focus:border-slate-800 focus:outline-slate-700 placeholder:text-gray-400"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="font-medium text-slate-600">Port of Discharge</label>
          <input
            type="text"
            placeholder="Enter Port of Discharge"
            className="border-1 rounded-lg px-3 py-2 border-slate-950 text-slate-950 shadow-sm 
              focus:border-slate-800 focus:outline-slate-700 placeholder:text-gray-400"
          />
        </div>
      </div>

      {/* Row 8 - Final Destination */}
      <div className="flex flex-col gap-1.5 mt-6">
        <label className="font-medium text-slate-600">Final Destination</label>
        <input
          type="text"
          placeholder="Enter Final Destination"
          className="border-1 rounded-lg px-3 py-2 border-slate-950 text-slate-950 shadow-sm 
            focus:border-slate-800 focus:outline-slate-700 placeholder:text-gray-400"
        />
      </div>
    </div>
  </div>
);

export default Commercial_Invoice;
