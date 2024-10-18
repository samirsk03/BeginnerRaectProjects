import { useDispatch, useSelector } from "react-redux";
import { removeFromCart , increaseQuantity, decreaseQuantity } from "../store/cartSlice";

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalPrice = useSelector((state) =>{ return state.cart.totalPrize});
  const tq = useSelector((state)=> state.cart.totalQuantity)
  console.log(tq, totalPrice, cartItems);
  
 
  
  const dispatch = useDispatch();

  return (
    <div className="cart-page w-full h-full p-4">
      <h2 className="text-2xl font-bold text-center mb-4">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-center text-gray-600">Your cart is empty.</p>
      ) : (
        <div>
          <div className="cart-items grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="cart-item p-4 border rounded-lg flex flex-col items-center shadow-lg"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-32 object-contain mb-2"
                />
                <h3 className="text-lg font-semibold text-center">{item.title}</h3>
                <p className="text-gray-700">Price: ${item.price}</p>
                <p className="text-gray-700">Quantity: {item.quantity}</p>
                {/* Buttons for increasing/decreasing quantity */}
                { <div className="flex space-x-2 mt-2">
                   <button onClick={() => dispatch(increaseQuantity(item.id))} className="bg-blue-500 text-white p-1 rounded">+</button>
                  <button onClick={() => dispatch(decreaseQuantity(item.id))} className="bg-blue-500 text-white p-1 rounded">-</button> 
                  <button onClick={() => dispatch(removeFromCart(item.id))} className="bg-red-500 text-white p-1 rounded">Remove</button>
                </div> }

                <p className="text-gray-700">Total Price: ${item.totalPrize}</p>
              </div>
            ))}
          </div>
          <div className="total-price mt-6 text-center">
            <h3 className="text-xl font-bold">Total Amount: ${totalPrice}</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
