import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import Header from "../../Components/Header/Header";

const CategoryPage = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(
      `${import.meta.env.VITE_API_URL}/products/category/${encodeURIComponent(
        category
      )}`
    )
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching category products:", err));
  }, [category]);

  return (
    <div>
      <header className="bg-[#010100e9] shadow-2xl fixed top-0 right-0 left-0 z-20">
        <Header />
      </header>
      <div className="p-4 container mx-auto mt-30">
        <h2 className="text-2xl mb-4 font-bold">{category} Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {products.map((product) => (
            <div
              key={product._id}
              className="border p-4 rounded shadow flex flex-col"
            >
              <img
                src={
                  product.image ||
                  "https://via.placeholder.com/300x200?text=No+Image"
                }
                alt={product.name}
                className="mb-2 w-full h-48 object-cover rounded"
              />

              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-sm text-gray-600">
                Brand: {product.brandName}
              </p>
              <p className="text-sm text-gray-600">
                Category: {product.category}
              </p>
              <p className="text-sm text-gray-600">
                Min. Quantity: {product.minimumSellingQuantity}
              </p>
              <p className="text-sm mt-2">
                {product.description.length > 100
                  ? product.description.slice(0, 100) + "..."
                  : product.description}
              </p>

              <p className="font-bold mt-2">$ {product.price}</p>

              <div className="mt-2"></div>

              <Link
                to={`/products/${product._id}`}
                className="mt-auto text-center bg-orange-600 text-white py-2 rounded hover:bg-orange-500 transition"
              >
                Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
