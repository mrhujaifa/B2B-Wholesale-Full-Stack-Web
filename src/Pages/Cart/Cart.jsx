import React, { useContext, useEffect, useState } from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { AuthContext } from "../../Contexts/AuthContext";
import { Link } from "react-router";
import Navbar from "../../Components/Navbar/Navbar";
import NavbarSwitcher from "../../Components/ScrollNavbar/NavbarSwicher";

const CartPage = () => {
  const { user } = useContext(AuthContext);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`${import.meta.env.VITE_API_URL}/my-cart?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => setCartItems(data));
    }
  }, [user]);

  const handleRemove = (item) => {
    fetch(
      `${import.meta.env.VITE_API_URL}/products/increase-quantity/${
        item.productId
      }`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ quantity: item.quantity }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("Quantity increased successfully:", data);

        return fetch(
          `${import.meta.env.VITE_API_URL}/delete-cart/${item._id}`,
          {
            method: "DELETE",
          }
        );
      })
      .then((res) => res.json())
      .then((data) => {
        console.log("Cart item deleted successfully:", data);

        const updatedCart = cartItems.filter(
          (cartItem) => cartItem._id !== item._id
        );
        setCartItems(updatedCart);
      })
      .catch((error) => {
        console.error("Error removing item:", error);
      });
  };

  return (
    <div>
      <header className=" text-black top-0 right-0 left-0 z-20">
        <Navbar></Navbar>
        <NavbarSwitcher></NavbarSwitcher>
      </header>
      <div className="container mx-auto px-4 py-8 mt-15 lg:mt-10 md:mt-25">
        

        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center text-center py-20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-24 w-24        -400 mb-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m5-9v9m4-9v9m4-9l2 9"
              />
            </svg>
            <h2 className="text-3xl font-bold        -800 mb-2">
              Your cart is empty!
            </h2>
            <p className="       -600 mb-6">
              Looks like you haven’t added anything to your cart yet.
            </p>
            <Link to={'/'}
              href="/products"
              className="inline-block px-6 py-3 bg-orange-600 text-white font-medium rounded-lg shadow hover:bg-orange-700 transition"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cartItems.map((item) => (
              <div
                key={item._id}
                className="border rounded-xl shadow p-4 flex flex-col"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="rounded-xl h-40 object-cover mb-4"
                />
                <h2 className="text-xl font-semibold">{item.name}</h2>
                <p className="text-sm        -600">{item.description}</p>
                <div className="mt-2 flex flex-wrap gap-2 text-sm">
                  <span className="     px-2 py-1 rounded">
                    Brand: {item.brandName}
                  </span>
                  <span className="     px-2 py-1 rounded">
                    Category: {item.category}
                  </span>
                  <span className="     px-2 py-1 rounded">
                    Qty: {item.quantity}
                  </span>
                  <span className="     px-2 py-1 rounded">
                    Price: ${item.price}
                  </span>
                  <span className="     px-2 py-1 rounded">
                    Date: {item.date}
                  </span>
                </div>
                <button
                  onClick={() => handleRemove(item)}
                  className="mt-4 bg-red-600 text-white py-2 rounded hover:bg-red-700 transition"
                >
                  Cancel Order
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default CartPage;
