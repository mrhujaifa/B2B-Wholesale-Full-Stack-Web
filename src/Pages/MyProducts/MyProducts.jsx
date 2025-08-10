import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Contexts/AuthContext";
import MyProductCard from "../MyProductCard/MyProductCard";
import Header from "../../Components/Header/Header";
import Skeleton from "@mui/material/Skeleton";
import Navbar from "../../Components/Navbar/Navbar";
import NavbarSwitcher from "../../Components/ScrollNavbar/NavbarSwicher";

const MyProducts = () => {
  const { user } = useContext(AuthContext);
  const [myProducts, setMyProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.email) {
      fetch(`${import.meta.env.VITE_API_URL}/my-product/${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setMyProducts(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Failed to fetch products:", error);
          setLoading(false);
        });
    }
  }, [user]);

  return (
    <div>
      <header className=" text-black top-0 right-0 left-0 z-20">
        <Navbar></Navbar>
        <NavbarSwitcher></NavbarSwitcher>
      </header>

      <div className="container mx-auto px-4 py-28">
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-6">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="border rounded-xl p-3 bg-white shadow">
                <Skeleton
                  variant="rectangular"
                  width={"100%"}
                  height={180}
                  sx={{ bgcolor: "grey.300", borderRadius: "12px" }}
                />
                <Skeleton
                  variant="text"
                  width="80%"
                  sx={{ fontSize: "1.2rem", marginTop: "0.8rem" }}
                />
                <Skeleton
                  variant="text"
                  width="60%"
                  sx={{ fontSize: "1rem", marginTop: "0.5rem" }}
                />
              </div>
            ))}
          </div>
        ) : myProducts.length === 0 ? (
          <div className="text-center py-20">
            <h2 className="text-2xl font-bold text-gray-700">No Products Found</h2>
            <p className="text-gray-500 mt-2">You haven’t added any product yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-6">
            {myProducts.map((product) => (
              <MyProductCard key={product._id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyProducts;
