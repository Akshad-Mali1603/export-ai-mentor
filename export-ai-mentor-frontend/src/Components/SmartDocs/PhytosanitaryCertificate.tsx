const PhytosanitaryCertificate = () => {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-10 backdrop-blur-md shadow-xl shadow-slate-500">
      <h1 className="text-3xl font-bold text-center">Phytosanitary Certificate</h1>
      <p className="text-slate-700 mt-2 text-center">
        Please fill out the certificate details carefully.
      </p>

      <div className="w-full max-w-6xl mt-6 border-2 border-slate-200 rounded-xl bg-white shadow-md p-6">
        {/* Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-1.5">
            <label className="font-medium text-slate-600">1. From</label>
            <input
              type="text"
              placeholder="Plant Protection Organisation of India"
              className="border rounded-lg px-3 py-2 border-slate-950 shadow-sm"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="font-medium text-slate-600">2. To</label>
            <input
              type="text"
              placeholder="Plant Protection Organisation of ..."
              className="border rounded-lg px-3 py-2 border-slate-950 shadow-sm"
            />
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="flex flex-col gap-1.5">
            <label className="font-medium text-slate-600">3. Name & Address of Exporter</label>
            <textarea
              rows={3}
              placeholder="Enter Exporter Details"
              className="border rounded-lg px-3 py-2 border-slate-950 shadow-sm"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="font-medium text-slate-600">4. Name & Address of Consignee</label>
            <textarea
              rows={3}
              placeholder="Enter Consignee Details"
              className="border rounded-lg px-3 py-2 border-slate-950 shadow-sm"
            />
          </div>
        </div>

        {/* Row 3 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="flex flex-col gap-1.5">
            <label className="font-medium text-slate-600">5. Means of Conveyance</label>
            <input
              type="text"
              placeholder="By Sea / By Air"
              className="border rounded-lg px-3 py-2 border-slate-950 shadow-sm"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="font-medium text-slate-600">6. Place of Origin</label>
            <input
              type="text"
              placeholder="Enter Origin"
              className="border rounded-lg px-3 py-2 border-slate-950 shadow-sm"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="font-medium text-slate-600">7. Point of Entry</label>
            <input
              type="text"
              placeholder="Enter Point of Entry"
              className="border rounded-lg px-3 py-2 border-slate-950 shadow-sm"
            />
          </div>
        </div>

        {/* Row 4 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="flex flex-col gap-1.5">
            <label className="font-medium text-slate-600">8. Distinguishing Marks</label>
            <input
              type="text"
              placeholder="As per Invoice"
              className="border rounded-lg px-3 py-2 border-slate-950 shadow-sm"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="font-medium text-slate-600">
              9. Number & Description of Packages
            </label>
            <input
              type="text"
              placeholder="e.g. 1540 Boxes"
              className="border rounded-lg px-3 py-2 border-slate-950 shadow-sm"
            />
          </div>
        </div>

        {/* Row 5 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="flex flex-col gap-1.5">
            <label className="font-medium text-slate-600">
              10. Name of Produce / Botanical Name of Plants
            </label>
            <textarea
              rows={2}
              placeholder="e.g. Banana-Fruits, Green G9 Cavendish Banana"
              className="border rounded-lg px-3 py-2 border-slate-950 shadow-sm"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="font-medium text-slate-600">11. Quantity Declared</label>
            <input
              type="text"
              placeholder="e.g. 20790.000 Kg"
              className="border rounded-lg px-3 py-2 border-slate-950 shadow-sm"
            />
          </div>
        </div>

        {/* Row 6 - Treatment Info */}
        <h2 className="text-xl font-semibold mt-8 mb-4">
          Disinfestation / Disinfection Treatment
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-1.5">
            <label className="font-medium text-slate-600">12. Date</label>
            <input
              type="date"
              className="border rounded-lg px-3 py-2 border-slate-950 shadow-sm"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="font-medium text-slate-600">13. Treatment</label>
            <input
              type="text"
              placeholder="Enter Treatment"
              className="border rounded-lg px-3 py-2 border-slate-950 shadow-sm"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="font-medium text-slate-600">14. Chemical</label>
            <input
              type="text"
              placeholder="Enter Chemical"
              className="border rounded-lg px-3 py-2 border-slate-950 shadow-sm"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="font-medium text-slate-600">15. Duration & Temperature</label>
            <input
              type="text"
              placeholder="Enter Duration & Temperature"
              className="border rounded-lg px-3 py-2 border-slate-950 shadow-sm"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="font-medium text-slate-600">16. Concentration</label>
            <input
              type="text"
              placeholder="Enter Concentration"
              className="border rounded-lg px-3 py-2 border-slate-950 shadow-sm"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="font-medium text-slate-600">17. Additional Information</label>
            <textarea
              rows={2}
              placeholder="Enter Additional Information"
              className="border rounded-lg px-3 py-2 border-slate-950 shadow-sm"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhytosanitaryCertificate;
