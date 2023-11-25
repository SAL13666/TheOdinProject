import { useContext, useEffect, useRef, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import { ProductsContext, cart } from "../../App";
import Styles from "../../CSS/PageDetails.module.css"
import { addItemToCart, getCategorizedItems } from "../../utilites";
function PageDetails() {
    let params = useParams();
    let [cartValue,setCartValue] = useContext(cart);
    let currentProduct = useContext(ProductsContext)[params.Details];
    const [product, setProduct] = useState();
    const [active, setActive] = useState(1)
    let quantity = useRef(0);
    const allProducts = useContext(ProductsContext);
    const catagory = allProducts[params.Details].category;
    useEffect(() => {
        setProduct(currentProduct);
    },[currentProduct])

    if(!product) {
        return (
            <h1>Loading</h1>
        );
    }
    return (
            <div className={Styles.container}>
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
                            addItemToCart(product, cartValue, quantity.current.value, setCartValue);
                        }}>Add to cart</button>
                    </form>
                </div>
            </div>
                <nav className={Styles.detailsNav}>
                    <Link to={"Description"} className={active == 1? Styles.active : null} onClick={() => {
                        setActive(1);
                    }}>Description</Link>
                    <Link to={"AdditionalInformation"} className={active == 2? Styles.active : null} onClick={() => {
                        setActive(2);
                    }}>Additional information</Link>
                    <Link to={"Reviews"} className={active == 3? Styles.active : null} onClick={() => {
                        setActive(3);
                    }}>Reviews</Link>
                </nav>
                <Outlet />
                <h2>Related products</h2>
                <div className={Styles.relatedProducts}>
                    {getCategorizedItems(allProducts,catagory)}
                </div>
        </div>
    );
}

export default PageDetails;