import React, { useEffect, useState } from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Product from "../Product/Product";
import Skeleton from "@mui/material/Skeleton";
import { Link } from "react-router";
import { motion } from "framer-motion";
import NavbarSwitcher from "../../Components/ScrollNavbar/NavbarSwicher";
import Navbar from "../../Components/Navbar/Navbar";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState([]);
  const [quantity, setQuantity] = useState("All");
  const [viewType, setViewType] = useState("card");

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/products`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFilter(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (quantity === "All") {
      setFilter(products);
    } else {
      const filteredProducts = products.filter(
        (item) => item.minimumSellingQuantity >= parseInt(quantity)
      );
      setFilter(filteredProducts);
    }
  }, [quantity, products]);

  return (
    <div>
      <header className=" text-black top-0 right-0 left-0 z-20">
        <Navbar />
        <NavbarSwitcher />
      </header>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex container justify-between mt-10 mx-auto items-center">
          <div className=" rounded-2xl mx-5 lg:mx-0     ">
            <label className="font-semibold">Filter by Minimum Quantity:</label> <br />
            <select
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="border  px-3 py-1 rounded w-40"
            >
              <option className="text-black" value="All">All</option>
              <option className="text-black" value="100">100+</option>
              <option className="text-black" value="50">50+</option>
              <option className="text-black" value="30">30+</option>
            </select>
          </div>

          <div className=" w-60 p-4 rounded-2xl">
            <label className="font-semibold">View Type:</label>
            <select
              value={viewType}
              onChange={(e) => setViewType(e.target.value)}
              className="border px-3 py-1 rounded mt-2 w-full"
            >
              <option className="text-black" value="card">Card View</option>
              <option className="text-black" value="table">Table View</option>
            </select>
          </div>
        </div>

        <div className="container mx-auto mt-12">
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[...Array(6)].map((_, index) => (
                <div key={index} className="border rounded-lg p-2">
                  <Skeleton
                    variant="rectangular"
                    width={"100%"}
                    height={180}
                    sx={{ bgcolor: "grey.300", borderRadius: "8px" }}
                  />
                  <Skeleton
                    variant="text"
                    width="80%"
                    sx={{ fontSize: "1.2rem", marginTop: "0.5rem" }}
                  />
                  <Skeleton
                    variant="text"
                    width="60%"
                    sx={{ fontSize: "0.9rem", marginY: "0.3rem" }}
                  />
                </div>
              ))}
            </div>
          ) : filter.length === 0 ? (
            <div className="text-center py-20">
              <h2 className="text-2xl font-bold ">
                No Products Found
              </h2>
              <p className="text-gray-500 mt-2">
                No products available for this quantity range.
              </p>
            </div>
          ) : viewType === "card" ? (
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.15,
                  },
                },
              }}
            >
              {[...filter]
                .sort((a, b) => a.price - b.price) // price ছোট থেকে বড় ক্রমে সাজানো
                .map((product) => (
                  <motion.div
                    key={product._id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className=" border rounded-xl shadow-xl p-6 flex flex-col justify-between h-[380px] w-full max-w-xs mx-auto cursor-pointer 
                 hover:shadow-2xl hover:scale-[1.03] transition-transform duration-300"
                  >
                    <div className="overflow-hidden rounded-2xl mb-4 h-48">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        loading="lazy"
                      />
                    </div>

                    <div className="flex flex-col flex-grow">
                      <h3
                        className="text-lg font-extrabold  truncate mb-2"
                        title={product.name}
                      >
                        {product.name}
                      </h3>

                      <div className="flex justify-between items-center mb-2 text-sm font-medium">
                        <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded-full">
                          ${product.price}
                        </span>
                        <span className="italic">{product.category}</span>
                      </div>

                      <hr className="border-gray-300 mb-3" />

                      <p className=" text-sm">
                        Min Qty:{" "}
                        <span className="font-semibold">
                          {product.minimumSellingQuantity}
                        </span>
                      </p>
                    </div>

                    <div className="mt-4">
                      <Link to={`/products/${product._id}`}>
                        <button
                          className="w-full bg-orange-600 hover:bg-orange-500 text-white font-semibold py-2 rounded-xl shadow-md transition-colors duration-300"
                          aria-label={`View details of ${product.name}`}
                        >
                          Details
                        </button>
                      </Link>
                    </div>
                  </motion.div>
                ))}
            </motion.div>
          ) : (
            <div className="overflow-x-auto mt-10 mb-20">
              <table className="min-w-[700px] w-full border-collapse text-left">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="p-3 border">Image</th>
                    <th className="p-3 border">Name</th>
                    <th className="p-3 border">Price</th>
                    <th className="p-3 border">Category</th>
                    <th className="p-3 border">Min Qty</th>
                    <th className="p-3 border">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product._id} className="hover:bg-gray-50">
                      <td className="p-3 border">
                        <motion.img
                          src={product.image}
                          alt={product.name}
                          className="w-14 h-14 object-cover rounded"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      </td>
                      <td className="p-3 border whitespace-nowrap">
                        {product.name}
                      </td>
                      <td className="p-3 border whitespace-nowrap">
                        ${product.price}
                      </td>
                      <td className="p-3 border whitespace-nowrap">
                        {product.category}
                      </td>
                      <td className="p-3 border whitespace-nowrap">
                        {product.minimumSellingQuantity}
                      </td>
                      <td className="p-3 border">
                        <Link to={`/products/${product._id}`}>
                          <button className="bg-orange-600 hover:bg-orange-500 text-white py-1.5 px-4 rounded-lg">
                            Details
                          </button>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        <footer className="mt-20">
          <Footer />
        </footer>
      </motion.div>
    </div>
  );
};

export default AllProducts;
