import { useEffect, useState } from "react";
import ItemCard from "../ItemCard";
import styles from "../../CSS/Shop.module.css"
function Shop() {
    let [allProducts, setAllProducts] = useState([]);
    useEffect( () => {
        async function  getAllProducts() {
        let result = await fetch('https://fakestoreapi.com/products');
        let data = await result.json();
        setAllProducts(data)
    }
    getAllProducts();
}, [])
    console.log(allProducts)
    return (
        <div className={styles.Cardscontainer}>
            {allProducts.map((product) => {
                return <ItemCard product={product} key={product.id}/>
            })}
        </div>
    );
}

export default Shop;