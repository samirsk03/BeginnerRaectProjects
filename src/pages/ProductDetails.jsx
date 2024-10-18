import React, { useEffect ,useState } from 'react'
import { useParams } from 'react-router-dom'
const ProductDetails = () => {
  const {id } = useParams()
  const [product, setproduct] = useState([])

  useEffect(() => {
    const fetchData = async() => {
   try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`)
    const data = await res.json()
    setproduct(data)
   } catch (error) {
    console.log('cannot fetch the data ', error);
   }
    }
    fetchData()
  }, [id])
  
  if (product.length === 0) {
    return (<div className=""> loading.... </div>)}

  return (
    <div className="max-w-7xl mx-auto p-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Image Section */}
      <div className="flex justify-center">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-auto max-w-xs md:max-w-md object-cover rounded-lg shadow-md"
        />
      </div>

      {/* Product Details Section */}
      <div className="space-y-4">
        <h1 className="text-3xl font-bold text-gray-800">{product.title}</h1>

        <p className="text-gray-500 text-sm">
          Category: <span className="font-semibold">{product.category}</span>
        </p>

        <p className="text-2xl font-bold text-gray-900">${product.price}</p>

        <p className="text-gray-600">{product.description}</p>

        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition">
          Add to Cart
        </button>
      </div>
    </div>
  </div>
  )
}

export default ProductDetails