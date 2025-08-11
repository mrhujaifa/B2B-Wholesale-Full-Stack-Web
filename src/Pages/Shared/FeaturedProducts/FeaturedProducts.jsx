import React, { useEffect, useState } from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { Link } from "react-router";
import Skeleton from "@mui/material/Skeleton";

const renderStars = (rating) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  for (let i = 0; i < fullStars; i++) {
    stars.push(<FaStar key={"full-" + i} className="text-yellow-400" />);
  }
  if (halfStar) {
    stars.push(<FaStarHalfAlt key="half" className="text-yellow-400" />);
  }
  const emptyStars = 5 - stars.length;
  for (let i = 0; i < emptyStars; i++) {
    stars.push(<FaRegStar key={"empty-" + i} className="text-yellow-400" />);
  }
  return stars;
};

const FeaturedProducts = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/products`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);

  return (
    <section className="py-16 px-3 md:px-12 lg:px-0 ">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold  mb-6 text-center">
          Featured Products
        </h2>
        <p className="text-center mb-12 max-w-2xl mx-auto">
          Explore our handpicked products, designed to meet the demands of
          modern businesses.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {loading
            ? // Show 4 skeleton cards as placeholders
              [...Array(4)].map((_, index) => (
                <div
                  key={index}
                  className="flex rounded-xl shadow-lg overflow-hidden animate-pulse"
                >
                  {/* Image Skeleton */}
                  <div className="w-1/3 p-4">
                    <Skeleton
                      variant="rectangular"
                      width="100%"
                      height={120}
                      sx={{ borderRadius: 8 }}
                    />
                  </div>

                  {/* Text Skeleton */}
                  <div className="w-2/3 p-5 flex flex-col justify-between space-y-4">
                    <Skeleton variant="text" width="60%" height={30} />
                    <Skeleton variant="text" width="40%" height={20} />
                    <Skeleton variant="text" width="50%" height={20} />
                    <Skeleton variant="text" width="80%" height={40} />
                    <div className="flex justify-between items-center mt-4">
                      <Skeleton variant="text" width="30%" height={30} />
                      <Skeleton
                        variant="rectangular"
                        width={100}
                        height={36}
                        sx={{ borderRadius: 1 }}
                      />
                    </div>
                  </div>
                </div>
              ))
            : // Show actual products
              products.slice(0, 4).map((product) => (
                <div
                  key={product.id}
                  className="flex border border-base-content     rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden"
                >
                  {/* Product Image */}
                  <div className="w-1/3 relative group overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {product.discount ? `${product.discount}% OFF` : "Hot"}
                    </span>
                  </div>

                  {/* Product Details */}
                  <div className="w-2/3 p-5 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-semibold     hover:text-orange-500 transition">
                        {product.name}
                      </h3>
                      <p className="text-sm mb-3">{product.dealer}</p>
                      <div className="flex items-center space-x-1 mb-2">
                        {renderStars(product.rating)}
                        <span className="ml-2  text-sm">
                          {product.rating.toFixed(1)}
                        </span>
                      </div>
                      <p className=" text-sm line-clamp-2">
                        {product.description}
                      </p>
                    </div>

                    {/* Price & CTA */}
                    <div className="flex items-center justify-between mt-4">
                      <p className="text-xl font-bold     -900">
                        ${product.price}
                      </p>
                      <Link to={`/products/${product._id}`}>
                        <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-red-600 hover:to-orange-600 text-white px-4 py-2 rounded-md font-semibold shadow-md transition-transform duration-300 hover:scale-105">
                          Add to Cart
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
