import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductsContext } from "../../App";
import Styles from "../../CSS/PageDetails.module.css"
function PageDetails() {
    let params = useParams();
    let product = useContext(ProductsContext)[params.Details]
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
                <h3>${product.price} <span>+ Free Shipping</span></h3>
                <p>Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit sed.</p>
                <div className={Styles.colors}>
                    <div className={Styles.color}></div>
                    <div className={Styles.color}></div>
                    <div className={Styles.color}></div>
                </div>
            </div>
        </div>
    );
}

export default PageDetails;