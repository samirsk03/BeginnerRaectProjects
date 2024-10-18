import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "../Component/Card";

const AllProducts = () => {
  const navigate = useNavigate();
  const [products, setproducts] = useState([]);
  const [filteredProducts, setfilteredProducts] = useState([])
  const [catogory, setcatogory] = useState('all') 

  const URL = `https://fakestoreapi.com/products`;

  useEffect(() => {
   const fetchData = async() => {
    try {
    const res = await fetch(URL)
    const data = await res.json()
    setproducts(data);
    setfilteredProducts(data)
  } catch (error) {
      console.error("cannot fetch Data", error)
  }
   }
   fetchData()
  }, []);

  // making sorting system
  const handleFilter =  async(catogory) => {
    const catogoryUrl = `/category/${catogory}`;
    console.log( `${URL+catogoryUrl}`);
    
    const res = await fetch( URL + catogoryUrl )
    const data = await res.json()
    setfilteredProducts(data)
    console.log(data, filteredProducts);
    console.log(URL + catogoryUrl);
    
    
  }

  

  return (
    <div className="container mx-auto p-8">
      
    <h1 className="text-4xl text-center font-bold mb-8">Products</h1>

     {/* Buttons to filter by category */}
     <div className="my-4 flex gap-4">
        <button onClick={() => handleFilter('all')}>All</button>
        <button onClick={() => handleFilter("men's clothing")}>Men's Clothing</button>
        <button onClick={() => handleFilter("women's clothing")}>Women's Clothing</button>
        <button onClick={() => handleFilter('jewelery')}>Jewelery</button>
        <button onClick={() => handleFilter('electronics')}>Electronics</button>
      </div>



    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {/* Loop through the products array and render a ProductCard for each item */}
      
    

      { 
       filteredProducts.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}

    </div>
  </div>
  );
};

export default AllProducts;
