import { useLoaderData, useParams } from "react-router";
import Header from "../../Components/Header/Header";
import Swal from "sweetalert2";
import { useEffect } from "react";
import { useState } from "react";

const UpdateProduct = () => {
 
  const { id } = useParams();
  const [product, setProduct] = useState([])
useEffect(() => {
  fetch(`${import.meta.env.VITE_API_URL}/products/${id}`)
    .then(res => res.json())
    .then(data => setProduct(data));
}, [id]);
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newProduct = Object.fromEntries(formData.entries());
    const updatedProduct = {
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

    fetch(`${import.meta.env.VITE_API_URL}/update-product/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        Swal.fire({
          icon: "success",
          title: "Product updated successfully!",
        });
      })
      .catch((err) => console.error("Update failed", err));
  };


  return (
    <div>
      <header className="bg-[#010100e9] shadow-2xl fixed top-0 right-0 left-0 z-20">
        <Header />
      </header>

      <div className="max-w-3xl mx-auto p-6 mt-20 lg:mt-29">
        <h2 className="text-3xl font-bold mb-6 text-center ">Update Product</h2>

        <form
          onSubmit={handleUpdate}
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
              defaultValue={product?.image}
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
             defaultValue={product?.name}
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
              defaultValue={product?.mainQuantity}
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
              defaultValue={product?.minimumSellingQuantity}
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
              defaultValue={product?.brandName}
              placeholder="Enter brand name"
              className="border p-2 w-full rounded"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block mb-2 font-semibold">Category</label>
            <select name="category"  className="border p-2 w-full rounded">
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
              defaultValue={product?.price}
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
              defaultValue={product?.rating}
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
              defaultValue={product?.description}
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
    </div>
  );
};

export default UpdateProduct;
