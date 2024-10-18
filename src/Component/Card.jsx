import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../store/cartSlice";


const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div
      className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden"
      
    >
      {/* Product Image */}
      <img
        className="w-full h-48 object-cover"
        src={product.image}
        alt={product.title}
        onClick={() => {
          return navigate(`/allproducts/${product.id}`)
         }}
      />

      <div className="p-4">
        {/* Product Title */}
        <h2 className="text-xl font-bold mb-2">{product.title}</h2>

        {/* Product Category */}
        <p className="text-gray-500 mb-2">Category: {product.category}</p>

        {/* Product Description */}
        <p className="text-gray-700 text-base mb-4">
          {product.description.length > 100
            ? product.description.substring(0, 100) + "..."
            : product.description}
        </p>

        {/* Product Price */}
        <div className="flex justify-between items-center">
          <span className="text-lg font-semibold text-green-600">
            ${product.price}
          </span>

          {/* Add to Cart Button */}
          <button className="bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600"
          onClick={()=> dispatch(addToCart(product))}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
