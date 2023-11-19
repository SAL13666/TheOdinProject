import { useContext, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductsContext, cart } from "../../App";
import Styles from "../../CSS/PageDetails.module.css"
import { addItemToCart } from "../../utilites";
function PageDetails() {
    let params = useParams();
    let [cartValue,setCartValue] = useContext(cart);
    let currentProduct = useContext(ProductsContext)[params.Details];
    let [product, setProduct] = useState();
    let quantity = useRef(0);
    useEffect(() => {
        setProduct(currentProduct);
    },[currentProduct])

    if(!product) {
        return (
            <h1>Loading</h1>
        );
    }
    return (
        <div className={Styles.details}>
            <img src={product.image} alt={product.title}/>
            <div className={Styles.info}>
                <p className={Styles.category}>{product.category}</p>
                <h2>{product.title}</h2>
                <p>Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit sed.</p>
                <div className={Styles.colors}>
                    <div className={Styles.color}></div>
                    <div className={Styles.color}></div>
                    <div className={Styles.color}></div>
                </div>
                <form className={Styles.addItemToCart} onSubmit={(e) => {
                    e.preventDefault();
                }}>
                    <h3>${product.price}</h3>
                    <input type="number" name="quantity" placeholder="0" min={1} step={1} defaultValue={1} ref={quantity}/>
                    <button type="submit" onClick={() => {
                        addItemToCart(product, cartValue, quantity, setCartValue);
                        console.log(cartValue)
                    }}>Add to cart</button>
                </form>
            </div>
        </div>
    );
}

export default PageDetails;