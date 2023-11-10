import { Link } from "react-router-dom";
import Styles from "../../CSS/HomePage.module.css"
import "../../../node_modules/slick-carousel/slick/slick.css"; 
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";

function Home() {
    const slider = useRef(null);
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 4000,
        cssEase: "linear",

    };
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
        
        <section className={Styles.carousel}>
            <button onClick={() => slider?.current?.slickPrev()} className={Styles.carouselOptions}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <Slider ref={slider} {...settings} className={Styles.slick}>
                <img src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2021/03/client-logo-1.png" alt="logo1" className={Styles.carouselLogo}/>
                <img src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2021/03/client-logo-2.png" alt="logo2" className={Styles.carouselLogo}/>
                <img src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2021/03/client-logo-3.png" alt="logo3" className={Styles.carouselLogo}/>
                <img src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2021/03/client-logo-4.png" alt="logo4" className={Styles.carouselLogo}/>
                <img src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2022/08/client-logo-5.png" alt="logo5" className={Styles.carouselLogo}/>
            </Slider>
            <button onClick={() => slider?.current?.slickNext()} className={Styles.carouselOptions}>
                <FontAwesomeIcon icon={faChevronRight} />
            </button>
        </section>
        </>
    );
}

export default Home;