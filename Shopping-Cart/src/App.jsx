import { Outlet } from 'react-router-dom'
import NavBar from './components/NavBar'
import './app.css'
import Footer from './components/Footer'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { createContext, useEffect, useState } from 'react';

export const ProductsContext = createContext();
export const cart = createContext();

function App() {
    const [allProducts, setAllProducts] = useState([]);
    const [cartValue, setCartValue] = useState([]);
    function fetchData() {
      fetch("https://fakestoreapi.com/products")
      .then(response => {
          return response.json()
      })
      .then(data => {
          setAllProducts(data)
      })
  }

  useEffect(() => {
      fetchData();
  }, [])

  return (
    <>
      <cart.Provider value={[cartValue, setCartValue]}>
        <ProductsContext.Provider value={allProducts}>
          <NavBar/>
          <Outlet />
          <Footer/>
        </ProductsContext.Provider>
      </cart.Provider>
    </>
  )
}

export default App
