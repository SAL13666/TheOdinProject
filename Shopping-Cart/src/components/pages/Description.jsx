import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductsContext } from "../../App";
import styles from "../../CSS/Description.module.css"
import { getCategorizedItems } from "../../utilites";

function Description() {
    let params = useParams();
    const allProducts = useContext(ProductsContext);
    const catagory = allProducts[params.Details].category;
    return (
        <div className={styles.itemInfo}>
            <h2>Product description</h2>
            <p>Since it’s creation lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
            <div className={styles.imgContainer}>
                <img src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2017/12/product-about-01.jpg" alt="product about 1" />
                <img src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2017/12/product-about-04.jpg" alt="product about 4" />
                <img src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2017/12/product-about-02.jpg" alt="product about 2" />
                <div className={styles.infoCard}>
                    <h3>Ut enim ad minim</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                    <h3>Quis nostrud</h3>
                    <p>Sed do eiusmod tempor incididunt ut labore.</p>
                    <h3>Duis aute irure</h3>
                    <p>Dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
                </div>
                <div className={styles.infoCard}>
                    <h3>More about the product</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in.</p>
                </div>
                <img src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2017/12/product-about-03.jpg" alt="product about 3" />
            </div>
            <h2>Related products</h2>
            <div className={styles.relatedProducts}>
                {getCategorizedItems(allProducts,catagory)}
            </div>
        </div>
    );
}

export default Description;