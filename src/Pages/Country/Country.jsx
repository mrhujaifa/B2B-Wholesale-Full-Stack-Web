import { ArrowBigRight } from "lucide-react";
import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const suppliers = [
  { name: "Italy", flag: "https://flagcdn.com/w40/it.png" },
  { name: "Türkiye", flag: "https://flagcdn.com/w40/tr.png" },
  { name: "Malaysia", flag: "https://flagcdn.com/w40/my.png" },
  { name: "South Korea", flag: "https://flagcdn.com/w40/kr.png" },
  { name: "Vietnam", flag: "https://flagcdn.com/w40/vn.png" },
  { name: "Russia", flag: "https://flagcdn.com/w40/ru.png" },
  { name: "Thailand", flag: "https://flagcdn.com/w40/th.png" },
  { name: "Japan", flag: "https://flagcdn.com/w40/jp.png" },
  { name: "China", flag: "https://flagcdn.com/w40/cn.png" },
  { name: "India", flag: "https://flagcdn.com/w40/in.png" },
  { name: "Bangladesh", flag: "https://flagcdn.com/w40/bd.png" },
  { name: "Germany", flag: "https://flagcdn.com/w40/de.png" },
  { name: "France", flag: "https://flagcdn.com/w40/fr.png" },
  { name: "United Kingdom", flag: "https://flagcdn.com/w40/gb.png" },
  { name: "United States", flag: "https://flagcdn.com/w40/us.png" },
  { name: "Canada", flag: "https://flagcdn.com/w40/ca.png" },
];

const CountrySuppliers = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleSuppliers = showAll ? suppliers : suppliers.slice(0, 8);

  return (
    <div className="py-8 container mx-auto">
      <h2 className="text-2xl font-semibold mb-8 text-center">
        Find suppliers by country or region
      </h2>
      {suppliers.length > 8 && (
        <div className="mt-6 flex justify-end mb-5">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-5 flex items-center gap-1  py-2 font-semibold  transition"
          >
            {showAll ? "View Less" : "View More"}
            <FaArrowRight></FaArrowRight>
          </button>
        </div>
      )}

      <div className="grid grid-cols-4 mx-2 lg:mx-0 sm:grid-cols-4 lg:grid-cols-8 gap-6 justify-items-center">
        {visibleSuppliers.map((supplier) => (
          <div
            key={supplier.name}
            className="flex flex-col items-center space-y-2"
          >
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-100 shadow hover:shadow-lg transition">
              <img
                src={supplier.flag}
                alt={supplier.name}
                className="w-10 h-10 rounded-full object-cover"
              />
            </div>
            <span className="text-sm text-center">{supplier.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountrySuppliers;
