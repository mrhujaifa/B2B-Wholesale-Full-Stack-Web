import React, { use, useState, useEffect } from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { useLoaderData, useNavigate } from "react-router";
import { Rating } from "react-simple-star-rating";
import { AuthContext } from "../../Contexts/AuthContext";
import CircularProgress from "@mui/material/CircularProgress"; 
import Navbar from "../../Components/Navbar/Navbar";
import NavbarSwitcher from "../../Components/ScrollNavbar/NavbarSwicher";

const ProductDetails = () => {
  const product = useLoaderData();
  const [quantityCount, setQuantityCount] = useState(1);
  const { user } = use(AuthContext);
  const [loading, setLoading] = useState(false);
  const [pageLoading, setPageLoading] = useState(true); 

  const navigate = useNavigate();

  useEffect(() => {
    if (product) {
      setPageLoading(false); 
    }
  }, [product]);

  const handleDecrease = () => {
    if (quantityCount > 1) {
      setQuantityCount(quantityCount - 1);
    }
  };

  const handleIncrease = () => {
    setQuantityCount(quantityCount + 1);
  };

  const handleBuy = () => {
    if (product.mainQuantity.length === 0) {
      alert("all product sold");
    }
    if (product.minimumSellingQuantity > quantityCount) {
      alert(`You must buy at least ${product.minimumSellingQuantity} units`);
      return;
    }

    setLoading(true);

    fetch(
      `${import.meta.env.VITE_API_URL}/products/decrease-quantity/${product._id}`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ quantity: quantityCount }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const orderData = {
          productId: product._id,
          name: product.name,
          image: product.image,
          brandName: product.brandName,
          category: product.category,
          quantity: quantityCount,
          price: product.price,
          userEmail: user.email,
          date: new Date().toLocaleDateString(),
          description: product.description,
        };

        return fetch(`${import.meta.env.VITE_API_URL}/add-to-cart`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(orderData),
        });
      })
      .then((res) => res.json())
      .then((result) => {
        alert("Purchase successful and added to your cart!");
        console.log(result);
        setLoading(false);
        navigate("/cart");
      })
      .catch((err) => {
        console.error("Failed to process order", err);
        setLoading(false);
      });
  };

  // ✅ If page is still loading, show full page spinner
  if (pageLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-white">
        <CircularProgress size={60} />
      </div>
    );
  }

  return (
    <div>
      <header className=" text-black top-0 right-0 left-0 z-20">
        <Navbar></Navbar>
        <NavbarSwitcher></NavbarSwitcher>
      </header>


      <div className="max-w-6xl mx-auto mt-20 p-8 border border-base-content rounded-2xl shadow-2xl relative z-10">
        <div className="flex flex-col md:flex-row gap-10">
          <div className="flex-1">
            <img
              src={product.image}
              alt={product.name}
              className="rounded-xl w-full"
            />
          </div>

          <div className="flex-1 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-lg font-semibold text-orange-600 bg-orange-100 px-3 py-1 rounded-full">
                  ${product.price}
                </span>
                <span className="text-sm font-medium bg-green-100 text-green-800 px-3 py-1 rounded-full">
                  {product.brandName}
                </span>
              </div>

              <h2 className="text-3xl font-bold mb-3">{product.name}</h2>

              <div className="flex items-center gap-2">
                <div className="flex">
                  <Rating
                    readonly
                    initialValue={product.rating}
                    allowFraction
                    size={28}
                    fillColor="#ffd700"
                    emptyColor="#ddd"
                  />
                </div>
                <span className=" text-sm">
                  ({product.rating} out of 5)
                </span>
              </div>

              <p className=" leading-relaxed mb-6">
                {product.description}
              </p>

              <div className="flex flex-wrap gap-3 mb-6">
                <span className="px-4 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                  Available: {product.mainQuantity}
                </span>
                <span className="px-4 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">
                  Min Order: {product.minimumSellingQuantity}
                </span>
              </div>
            </div>

            <div className="flex gap-4">
              <button
                onClick={() =>
                  document.getElementById("my_modal_2").showModal()
                }
                className="px-8 py-3 rounded-full bg-orange-600 text-white font-semibold hover:bg-orange-700 transition"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <input
            type="text"
            defaultValue={user?.email}
            className="input w-full"
            disabled
          />
          <input
            type="text"
            defaultValue={user?.name || "name not found"}
            className="input w-full mt-3"
            disabled
          />
          <div>
            <span className="flex items-center gap-3">
              Quantity:{" "}
              <button
                className="btn btn-sm bg-base-300"
                onClick={handleDecrease}
              >
                -
              </button>
              <div className="flex items-center">
                {product.mainQuantity} / {quantityCount}
              </div>
              <button
                className="btn btn-sm bg-base-300"
                onClick={handleIncrease}
              >
                +
              </button>
            </span>

            <div>
              <button
                onClick={handleBuy}
                className="btn border bg-orange-600 text-white mt-3"
              >
                {loading ? (
                  <CircularProgress size={20} sx={{ color: "#fff" }} />
                ) : (
                  "Add to Cart"
                )}
              </button>
            </div>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>

      <footer className="mt-16">
        <Footer />
      </footer>
    </div>
  );
};

export default ProductDetails;
