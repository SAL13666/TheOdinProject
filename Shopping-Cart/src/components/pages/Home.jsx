import { Link } from "react-router-dom";
import Styles from "../../CSS/HomePage.module.css"
function Home() {
    return (
        <>
        <section className={Styles.hero}>
        <div className={Styles.heroContent}>
            <h1 className={Styles.h1}>Raining Offers For Hot Summer!</h1>
            <div className={Styles.buttonContainer}>
                <h2 className={Styles.h2}>25% Off On All Products</h2>
                <Link to={"/shop"} className={Styles.a}>SHOP NOW</Link>
            </div>
        </div>
        </section>
        </>
    );
}

export default Home;