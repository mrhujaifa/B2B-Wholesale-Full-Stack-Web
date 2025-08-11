import React, { use } from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import { AuthContext } from "../../Contexts/AuthContext";
import NavbarSwitcher from "../../Components/ScrollNavbar/NavbarSwicher";
import Navbar from "../../Components/Navbar/Navbar";

const AddProductPage = () => {
  const { user } = use(AuthContext);
  const handleAddProducts = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newProduct = Object.fromEntries(formData.entries());
    const userEmail = user.email;

    const products = {
      name: newProduct.name,
      image: newProduct.image,
      brandName: newProduct.brandName,
      category: newProduct.category,
      description: newProduct.description,
      price: Number(newProduct.price),
      mainQuantity: Number(newProduct.mainQuantity),
      minimumSellingQuantity: Number(newProduct.minimumSellingQuantity),
      rating: Number(newProduct.rating),
    };

    const productData = {
      userEmail: userEmail,
      ...products,
    };

    fetch(`${import.meta.env.VITE_API_URL}/add-product`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to add product");
        }
        return res.json();
      })
      .then((data) => {
        console.log("Product added successfully:", data);
        form.reset();
      })
      .catch((error) => {
        console.error("Error adding product:", error);
      });
  };

  return (
    <div>
      <header  className=" text-black top-0 right-0 left-0 z-20">
        <Navbar></Navbar>
        <NavbarSwitcher></NavbarSwitcher>
      </header>

      <div className="max-w-5xl mx-auto py-10 mt-10 px-6 border rounded-2xl mb-20">
        <h1 className="text-3xl font-bold mb-8 text-center">Add New Product</h1>

        <form
          onSubmit={handleAddProducts}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Product Image */}
          <div>
            <label className="block mb-2 font-semibold">
              Product Image URL
            </label>
            <input
              type="url"
              name="image"
              placeholder="Enter image URL"
              className="border p-2 w-full rounded"
            />
          </div>

          {/* Product Name */}
          <div>
            <label className="block mb-2 font-semibold">Product Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter product name"
              className="border p-2 w-full rounded"
            />
          </div>

          {/* Main Quantity */}
          <div>
            <label className="block mb-2 font-semibold">Main Quantity</label>
            <input
              type="number"
              name="mainQuantity"
              placeholder="Available product quantity"
              className="border p-2 w-full rounded"
            />
          </div>

          {/* Minimum Selling Quantity */}
          <div>
            <label className="block mb-2 font-semibold">
              Minimum Selling Quantity
            </label>
            <input
              type="number"
              name="minimumSellingQuantity"
              placeholder="Minimum order quantity"
              className="border p-2 w-full rounded"
            />
          </div>

          {/* Brand Name */}
          <div>
            <label className="block mb-2 font-semibold">Brand Name</label>
            <input
              type="text"
              name="brandName"
              placeholder="Enter brand name"
              className="border p-2 w-full rounded"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block mb-2 font-semibold">Category</label>
            <select name="category" className="border p-2 w-full rounded">
              <option value="">Select Category</option>
              <option value="Electronics & Gadgets">
                Electronics & Gadgets
              </option>
              <option value="Home & Kitchen Appliances">
                Home & Kitchen Appliances
              </option>
              <option value="Fashion & Apparel">Fashion & Apparel</option>
              <option value="Industrial Machinery & Tools">
                Industrial Machinery & Tools
              </option>
              <option value="Health & Beauty">Health & Beauty</option>
              <option value="Automotive Parts & Accessories">
                Automotive Parts & Accessories
              </option>
              <option value="Office Supplies & Stationery">
                Office Supplies & Stationery
              </option>
            </select>
          </div>

          {/* Price */}
          <div>
            <label className="block mb-2 font-semibold">Price (per unit)</label>
            <input
              type="number"
              name="price"
              placeholder="Price per unit (BDT/USD)"
              className="border p-2 w-full rounded"
            />
          </div>

          {/* Rating */}
          <div>
            <label className="block mb-2 font-semibold">Rating (1-5)</label>
            <input
              type="number"
              name="rating"
              placeholder="Product rating"
              className="border p-2 w-full rounded"
            />
          </div>

          {/* Short Description */}
          <div className="md:col-span-2">
            <label className="block mb-2 font-semibold">
              Short Description
            </label>
            <textarea
              name="description"
              placeholder="Brief product description"
              className="border p-2 w-full rounded h-28"
            ></textarea>
          </div>

          {/* Product Content */}
          <div className="md:col-span-2">
            <p className="text-gray-600 text-sm border p-3 rounded bg-gray-50">
              <strong>Note:</strong> Provide accurate product details. The
              minimum selling quantity ensures wholesale buyers meet your
              minimum order requirement.
            </p>
          </div>

          {/* Add Product Button */}
          <div className="md:col-span-2 flex justify-center">
            <button
              type="submit"
              className="bg-orange-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-md shadow"
            >
              Add Product
            </button>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default AddProductPage;
