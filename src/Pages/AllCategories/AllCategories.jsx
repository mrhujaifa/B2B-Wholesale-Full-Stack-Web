import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import Skeleton from "@mui/material/Skeleton";

const categoryImages = {
  "Automotive Parts & Accessories": "https://i.postimg.cc/brJ2dmqq/car.png",
  "Fashion & Apparel": "https://i.ibb.co.com/39ZLbQh0/merchandise.png",
  "Electronics & Gadgets": "https://i.ibb.co.com/kVrn0LcG/gadgets-1.png",
  "Health & Beauty": "https://i.ibb.co.com/Tq8CxBHr/products-1.png",
  "Home & Kitchen Appliances": "https://i.ibb.co.com/fYcHZxys/domestic.png",
  "Office Supplies & Stationery":
    "https://i.ibb.co.com/tpjfZK6N/stationery-1.png",
};

const AllCategories = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/products`)
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data);
        setLoading(false);
        setTimeout(() => {
          setLoading(false);
        }, 4000);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const categories = [...new Set(allProducts.map((p) => p.category))];

  return (
    <div className="mb-10 mt-25">
      <h2 className="text-3xl text-center mb-6 font-bold">All Categories</h2>

      {loading ? (
        <div className="grid grid-cols-2 px-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className="rounded-md border border-base-content p-2"
            >
              <Skeleton
                variant="rectangular"
                width={"100%"}
                height={120}
                sx={{ bgcolor: "grey.300", borderRadius: "8px" }}
              />
              <Skeleton
                variant="text"
                width="80%"
                sx={{ fontSize: "1rem", margin: "0.5rem auto" }}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 px-2 md:grid-cols-4 lg:grid-cols-5 gap-4 lg:mt-10">
          {categories.map((cat) => (
            <Link
              key={cat}
              to={`/products/category/${encodeURIComponent(cat)}`}
              className="rounded-md shadow border border-base-content hover:border-orange-500"
            >
              <div className="mx-auto border border-base-content hover:border-orange-600 m-2 rounded-full p-3 w-25 h-25">
                <img
                  src={categoryImages[cat] || "https://via.placeholder.com/150"}
                  alt={cat}
                  className="mx-auto"
                />
              </div>
              <div className="p-2 text-center  text-base-content  border-t   border-base-content font-semibold  ">
                {cat}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllCategories;
