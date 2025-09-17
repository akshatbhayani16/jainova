import { useState } from "react";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import { ProductData } from "./ProductData";

export default function TableWithPDF({product_id}) {
    console.log("Product ID:", product_id);

    const [data] = useState(
        ProductData[product_id] || [{ text: "No data available for this product." }]
    );
  const [search, setSearch] = useState("");

  const filtered = data.filter((item) =>
    item.text.toLowerCase().includes(search.toLowerCase())
  );

  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text("Medicines", 14, 15);

    autoTable(doc, {
      head: [["S.No", "Medicines"]],
      body: filtered.map((row, i) => [i + 1, row.text]),
      startY: 20,
      styles: { halign: "center" },
      headStyles: { fillColor: [230, 230, 230] },
    });

    doc.save("table-data.pdf");
  };

  return (
  <div className="bg-white rounded-xl shadow-lg p-6 w-[70vw] mx-auto border border-gray-200">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 w-full md:w-2/3 focus:outline-none focus:ring-2 focus:ring-[#E85B2C] transition"
        />
        <button
          onClick={handleDownloadPDF}
          className="bg-[#E85B2C] hover:bg-[#c94a1f] text-white px-6 py-2 rounded-lg font-semibold shadow transition"
        >
          Download PDF
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-400 rounded-xl overflow-hidden shadow-sm">
          <thead className="bg-gradient-to-r from-[#f3f4f6] to-[#e0e7ef]">
            <tr>
              <th className="border border-gray-400 px-6 py-3 text-left text-xs font-bold text-[#1E3A5F] uppercase tracking-wider">S.No</th>
              <th className="border border-gray-400 px-6 py-3 text-left text-xs font-bold text-[#1E3A5F] uppercase tracking-wider">Medicines</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((row, index) => (
              <tr key={index} className="hover:bg-[#f8fafc] transition">
                <td className="border border-gray-400 px-6 py-3 text-sm text-gray-700">{index + 1}</td>
                <td className="border border-gray-400 px-6 py-3 text-gray-900 font-medium">{row.text}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-gray-500 mt-4">No results found</p>
      )}
    </div>
  );
}
