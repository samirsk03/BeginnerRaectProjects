import React, { useEffect, useState } from "react";
import ProductCard from "../Component/Card";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch products and categories from the FakeStore API
  useEffect(() => {
    const fetchProductsAndCategories = async () => {
      try {
        const productsResponse = await fetch("https://fakestoreapi.com/products");
        const categoriesResponse = await fetch("https://fakestoreapi.com/products/categories");
        const productsData = await productsResponse.json();
        const categoriesData = await categoriesResponse.json();
        setProducts(productsData);
        setCategories(categoriesData);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch data");
        setLoading(false);
      }
    };

    fetchProductsAndCategories();
  }, []);

  // Render loading, error, or homepage content
  return (
    <div className="homepage-container w-full h-full">
      {/* Hero Section */}
      <section className="hero bg-blue-500 text-white p-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to FakeStore</h1>
        <p className="text-xl mb-6">Shop the latest products at unbeatable prices</p>
        <button className="bg-white text-blue-500 px-6 py-2 rounded shadow hover:bg-gray-100">
          Shop Now
        </button>
      </section>

      {/* Categories Section */}
      <section className="categories my-8 p-4">
        <h2 className="text-2xl font-bold text-center mb-6">Browse Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div key={index} className="category-card bg-gray-100 p-6 rounded-lg shadow text-center">
              <h3 className="text-lg font-semibold">{category}</h3>
              <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Explore
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="featured-products my-8 p-4">
        <h2 className="text-2xl font-bold text-center mb-6">Featured Products</h2>
        {loading ? (
          <p className="text-center text-lg">Loading products...</p>
        ) : error ? (
          <p className="text-center text-red-600">{error}</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.slice(0, 8).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>

      {/* Footer Section */}
      <footer className="footer bg-gray-800 text-white p-6 text-center">
        <p>&copy; 2024 FakeStore. All Rights Reserved.</p>
        <div className="mt-4">
          <a href="#" className="text-gray-400 hover:text-white mx-2">Contact Us</a>
          <a href="#" className="text-gray-400 hover:text-white mx-2">Privacy Policy</a>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
