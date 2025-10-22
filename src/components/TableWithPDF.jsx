import { useState } from "react";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import { ProductData } from "./ProductData";

export default function TableWithPDF({product_id, tableData}) {

    console.log("Product ID:" ,product_id);
    
    // Normalize strings for comparison (handles kebab-case, title case, etc.)
    const normalizeString = (str) => {
        if (!str) return '';
        return str
            .toLowerCase()
            .replace(/[^a-z0-9]/g, '') // Remove spaces, hyphens, and special characters
            .trim();
    };

    const rawData = tableData?.data || [];
    const validData = Array.isArray(rawData) ? rawData : [];
    const cleanData = validData.filter(item => {
        const normalizedItemType = normalizeString(item?.type);
        const normalizedProductId = normalizeString(product_id);
        
        console.log("Item:", item?.type, "->", normalizedItemType, "| Product ID:", product_id, "->", normalizedProductId);
        
        return (
            item &&
            typeof item === 'object' &&
            item['product-name'] &&
            item['product-name'].trim() !== '' &&
            item['product-name'] !== 'Product Name' &&
            (!product_id || !item.type || normalizedItemType === normalizedProductId)
        );
    });

    const [data] = useState(cleanData);
    const [search, setSearch] = useState("");
    const [typeFilter, setTypeFilter] = useState("all");

    const uniqueTypes = [...new Set(data.map(item => item.type).filter(type => type && type.trim() !== ''))];

    const filtered = data.filter((item) => {
        const matchesSearch = 
            (item['product-name'] && item['product-name'].toLowerCase().includes(search.toLowerCase())) ||
            (item.type && item.type.toLowerCase().includes(search.toLowerCase()));
        
        const matchesType = typeFilter === "all" || item.type === typeFilter;
        
        return matchesSearch && matchesType;
    });
  
  const handleDownloadPDF = () => {
    if (filtered.length === 0) {
      return;
    }

    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text("Products", 14, 15);

    // Add filter information
    let filterInfo = `Product ID: ${normalizeString(product_id).toLowerCase() || 'All'}`;
    if (typeFilter !== "all") {
      filterInfo += ` | Type: ${typeFilter}`;
    }
    if (search) {
      filterInfo += ` | Search: ${search}`;
    }
    
    doc.setFontSize(10);
    doc.text(filterInfo, 14, 25);

    autoTable(doc, {
      head: [["S.No", "Type", "Product Name"]],
      body: filtered.map((row, i) => [i + 1, row.type || 'N/A', row['product-name'] || 'N/A']),
      startY: 30,
      styles: { halign: "center" },
      headStyles: { fillColor: [230, 230, 230] },
    });

    const fileName = `products_${product_id || 'all'}_${new Date().getTime()}.pdf`;
    doc.save(fileName);
  };

  return (
  <div className="bg-white rounded-xl shadow-lg p-6 w-[70vw] mx-auto border border-gray-200">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div className="flex flex-col md:flex-row gap-4 w-full md:w-2/3">
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 flex-1 focus:outline-none focus:ring-2 focus:ring-[#E85B2C] transition"
          />
          {/* <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#E85B2C] transition"
          >
            <option value="all">All Types</option>
            {uniqueTypes.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select> */}
        </div>
        <button
          onClick={handleDownloadPDF}
          disabled={filtered.length === 0}
          className="bg-[#E85B2C] hover:bg-[#c94a1f] disabled:bg-gray-400 disabled:cursor-not-allowed text-white px-6 py-2 rounded-lg font-semibold shadow transition"
        >
          Download PDF
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-400 rounded-xl overflow-hidden shadow-sm">
          <thead className="bg-gradient-to-r from-[#f3f4f6] to-[#e0e7ef]">
            <tr>
              <th className="border border-gray-400 px-6 py-3 text-left text-xs font-bold text-[#1E3A5F] uppercase tracking-wider">S.No</th>
              <th className="border border-gray-400 px-6 py-3 text-left text-xs font-bold text-[#1E3A5F] uppercase tracking-wider">Product Name</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length > 0 ? (
              filtered.map((row, index) => (
                <tr key={index} className="hover:bg-[#f8fafc] transition">
                  <td className="border border-gray-400 px-6 py-3 text-sm text-gray-700">{index + 1}</td>
                  <td className="border border-gray-400 px-6 py-3 text-gray-900 font-medium">{row["product-name"] || 'N/A'}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="border border-gray-400 px-6 py-4 text-center">
                  <div className="text-gray-500">
                    {data.length === 0 ? (
                      <div>
                        <p className="text-lg font-medium mb-2">No data available</p>
                      </div>
                    ) : (
                      <div>
                        <p className="text-lg font-medium mb-2">No matching results</p>
                      </div>
                    )}
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Remove the old empty state message since it's now handled in the table */}
    </div>
  );
}
