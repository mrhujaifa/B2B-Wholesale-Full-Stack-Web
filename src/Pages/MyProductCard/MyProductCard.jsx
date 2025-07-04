import React from "react";
import { Star, Pencil, Trash } from "lucide-react";
import { Link } from "react-router";

const MyProductCard = ({ product }) => {
  const {
    name,
    image,
    brandName,
    category,
    description,
    price,
    mainQuantity,
    minimumSellingQuantity,
    rating,
  } = product;

  const handleDelete = () => {
    fetch(`${import.meta.env.VITE_API_URL}/delete-my-product/${product._id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(result => console.log(result))
  };
  return (
    <div className="relative bg-white/80 border border-gray-200 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition duration-300 backdrop-blur-sm">
      <div className="overflow-hidden group">
        <img
          src={image}
          alt={name}
          className="w-full h-56 object-cover group-hover:scale-105 transition duration-500"
        />
      </div>

      <div className="p-4 space-y-2">
        <h2 className="text-xl font-bold text-gray-800">{name}</h2>
        <p className="text-sm text-gray-500">
          {category} • {brandName}
        </p>

        <div className="flex items-center justify-between mt-3">
          <span className="text-2xl font-semibold text-green-600">
            $ {price}
          </span>
          <span className="flex items-center bg-yellow-400 text-black text-xs px-2 py-1 rounded-full">
            <Star size={14} className="mr-1" /> {rating}
          </span>
        </div>

        <div className="text-sm text-gray-700 mt-3 space-y-1">
          <p>
            Main Stock: <span className="font-medium">{mainQuantity}</span>
          </p>
          <p>
            Min Order:{" "}
            <span className="font-medium">{minimumSellingQuantity}</span>
          </p>
        </div>

        <p className="text-gray-600 text-sm mt-2">
          {description.slice(0, 80)}...
        </p>

        <div className="flex gap-2 mt-4">
          <Link
            to={`/update-product/${product._id}`}
            className="flex-1 flex items-center justify-center gap-1 bg-orange-600 text-white py-2 rounded-xl hover:bg-orange-600 transition"
          >
            <Pencil size={16} /> Update
          </Link>
          <button
            onClick={handleDelete}
            className="flex-1 flex items-center justify-center gap-1 bg-orange-600 text-white py-2 rounded-xl hover:bg-orange-600 transition"
          >
            <Trash size={16} /> Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyProductCard;
