import React from "react";

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
//   { name: "Spain", flag: "https://flagcdn.com/w40/es.png" },
];

const CountrySuppliers = () => {
  return (
    <div className="py-8">
      <h2 className="text-2xl font-semibold mb-8">
        Find suppliers by country or region
      </h2>

      <div className="flex justify-center gap-9">
        {suppliers.map((supplier) => (
          <div
            key={supplier.name}
            className="flex flex-col items-center space-y-2"
          >
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-100 shadow">
              <img
                src={supplier.flag}
                alt={supplier.name}
                className="w-10 h-10 rounded-full object-cover"
              />
            </div>
            <span className="text-sm">{supplier.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountrySuppliers;
