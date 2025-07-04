import { Link } from "react-router";

const Product = ({ product }) => {
  console.log(product._id);
  return (
    <div className="border rounded-2xl max-w-5xl  p-4 shadow-lg">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-56 object-cover rounded-lg mb-4"
      />
      <h3 className="text-2xl font-semibold mb-1">{product.name}</h3>
      <p className="text-sm text-gray-500 mb-1">Brand: {product.brandName}</p>
      <p className="text-sm text-gray-500 mb-1">Category: {product.category}</p>
      <p className="text-sm mb-1">Price: ${product.price}</p>
      <p className="text-sm mb-1">Rating: ⭐ {product.rating}</p>
      <p className="text-sm mb-1">Main Quantity: {product.mainQuantity}</p>
      <p className="text-sm mb-1">
        Min Order: {product.minimumSellingQuantity}
      </p>
      <p className="text-sm text-gray-600 mb-3">{product.description}</p>

      <Link to={`/products/${product._id}`} className="">
          <button className="w-full bg-orange-600 hover:bg-orange-400 cursor-pointer text-white py-2 rounded-lg">
            Detials
          </button>
        </Link>
    </div>
  );
};

export default Product;
