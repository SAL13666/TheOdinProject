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

function App() {
    const [allProducts, setAllProducts] = useState([]);
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
      <ProductsContext.Provider value={allProducts}>
        <NavBar/>
        <Outlet />
        <Footer/>
      </ProductsContext.Provider>
    </>
  )
}

export default App
