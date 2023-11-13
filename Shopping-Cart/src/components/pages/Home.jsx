import { Link } from "react-router-dom";
import Styles from "../../CSS/HomePage.module.css"
import "../../../node_modules/slick-carousel/slick/slick.css"; 
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";
import ItemCard from "../ItemCard";

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
                    <Link to={"/shop"} className={Styles.shopNow}>SHOP NOW</Link>
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
        <section className={Styles.shoppingCardsLinks}>
            <div className={Styles.cardOne}>
                <div className={Styles.info}>
                    <h2>20% Off On Tank Tops</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum.</p>
                    <Link to="Shop" className={Styles.shopNow}>SHOP NOW</Link>
                </div>
            </div>
            <div className={Styles.cardTwo}>
                <div className={Styles.info}>
                    <h2>Latest Eyewear For You</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum.</p>
                    <Link to="Shop" className={Styles.shopNow}>SHOP NOW</Link>
                </div>
            </div>
            <div className={Styles.cardThree}>
                <div className={Styles.info}>
                    <h2>Let&apos;s Lorem Suit Up!</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum.</p>
                    <Link to="Shop" className={Styles.shopNow}>SHOP NOW</Link>
                </div>
            </div>
        </section>
        <section className={Styles.featuredProducts}>
            <h2 className={Styles.title}>Featured Products</h2>
            <div className={Styles.Cardscontainer}>
                <ItemCard name={"DNK Yellow Shoes"} category={"Men"} price={"$120.00"} discount={true} img={"https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2021/03/sports-shoe3-300x300.jpg"}/>
                <ItemCard name={"DNK Yellow Shoes"} category={"Men"} price={"$120.00"} discount={true} img={"https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2021/03/sports-shoe3-300x300.jpg"}/>
                <ItemCard name={"DNK Yellow Shoes"} category={"Men"} price={"$120.00"} discount={true} img={"https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2021/03/sports-shoe3-300x300.jpg"}/>
                <ItemCard name={"DNK Yellow Shoes"} category={"Men"} price={"$120.00"} discount={true} img={"https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2021/03/sports-shoe3-300x300.jpg"}/>
                <ItemCard name={"DNK Yellow Shoes"} category={"Men"} price={"$120.00"} discount={true} img={"https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2021/03/sports-shoe3-300x300.jpg"}/>
                <ItemCard name={"DNK Yellow Shoes"} category={"Men"} price={"$120.00"} discount={true} img={"https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2021/03/sports-shoe3-300x300.jpg"}/>
                <ItemCard name={"DNK Yellow Shoes"} category={"Men"} price={"$120.00"} discount={true} img={"https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2021/03/sports-shoe3-300x300.jpg"}/>
                <ItemCard name={"DNK Yellow Shoes"} category={"Men"} price={"$120.00"} discount={true} img={"https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2021/03/sports-shoe3-300x300.jpg"}/>
                <ItemCard name={"DNK Yellow Shoes"} category={"Men"} price={"$120.00"} discount={true} img={"https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2021/03/sports-shoe3-300x300.jpg"}/>
                <ItemCard name={"DNK Yellow Shoes"} category={"Men"} price={"$120.00"} discount={true} img={"https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2021/03/sports-shoe3-300x300.jpg"}/>
            </div>
            <section className={Styles.offer}>
                <div className={Styles.info}>
                    <h3>Limited Time Offer</h3>
                    <h2>Special Edition</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    <h3>Buy This T-shirt At 20% Discount, Use Code OFF20</h3>
                    <Link to="Shop" className={Styles.shopNow}>SHOP NOW</Link>
                </div>
            </section>
            <section className={Styles.features}>
                <div className={Styles.feature}>
                    <img src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/globe-free-img.png" alt="" />
                    <h2>Worldwide Shipping</h2>
                    <p>It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                </div>
                <div className={Styles.feature}>
                    <img src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/quality-free-img.png" alt="" />
                    <h2>Best Quality</h2>
                    <p>It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                </div>
                <div className={Styles.feature}>
                    <img src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/tag-free-img.png" alt="" />
                    <h2>Best Offers</h2>
                    <p>It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                </div>
                <div className={Styles.feature}>
                    <img src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/lock-free-img.png" alt="" />
                    <h2>Secure Payments</h2>
                    <p>It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                </div>
            </section>
        </section>
        </>
    );
}

export default Home;