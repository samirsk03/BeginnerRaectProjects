import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, createRoutesFromElements,Route,  RouterProvider} from 'react-router-dom'
import Home from './pages/Home.jsx'
import Cart from './pages/Cart.jsx'
import AllProducts from './pages/AllProducts.jsx'
import ProductDetails from './pages/ProductDetails.jsx'
import Product from './pages/Product.jsx'

import { Provider } from 'react-redux'
import store from './store/store'
import CartPage from './pages/Cart.jsx'




const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />} >
      <Route path='' element={<Home/>} />
      <Route path='/allproducts' element={<AllProducts/>} />
      <Route path='/cart' element={<CartPage/>} />
      <Route path='/allproducts/:id' element={<ProductDetails/>} />
      <Route path='/cart' element={<Cart/>} />
    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store} >
   <RouterProvider router={router} />

    </Provider>
  </StrictMode>,
)
