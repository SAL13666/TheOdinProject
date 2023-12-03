import { useContext, useState } from "react";
import styles from "../../CSS/Shop.module.css"
import { Box, Rating, Slider, createTheme } from "@mui/material";
import { Link, Outlet, useParams } from "react-router-dom";
import { ProductsContext } from "../../App";
import { getPath } from "../../utilites";

function Shop() {
    const allProducts = useContext(ProductsContext)
    const [FilterByPricevalue, setValue] = useState([0, 999.99]);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const params = useParams();
    const theme = createTheme({
        palette: {
            primary: {
            main: '#212121',
            },
        },
    });

    return (
        <>
            <div className={styles.shop}>
                <nav className={styles.nav}>
                    <form>
                        <div className={styles.searchBar}>
                            <input type="search" placeholder="Search Products..."/>
                            <button type="button" className={styles.searchButton}> &#62; </button>
                        </div>
                        <div className={styles.priceFilter}>
                            <h2>Filter by Price</h2>
                            <Box sx={{ width: "100%" }} >
                                <Slider
                                    theme={theme}
                                    getAriaLabel={() => 'Temperature range'}
                                    value={FilterByPricevalue}
                                    onChange={handleChange}
                                    valueLabelDisplay="auto"
                                    min={0}
                                    max={999.99}
                                />
                            </Box>
                            <div className={styles.priceFilterlabel}>
                                <button type="button">FILTER</button>
                                <p>Price: <span>${FilterByPricevalue[0]}</span> - <span>${FilterByPricevalue[1]}</span> </p>
                            </div>
                        </div>
                    </form>
                    <div className={styles.categories}>
                        <h2>Categories</h2>
                        <div className={styles.links}>
                            <Link to={"Men"}>men&apos;s clothing</Link>
                            <span className={styles.count}>(7)</span>
                            <Link to={"Women"}>women&apos;s clothing</Link>
                            <span className={styles.count}>(20)</span>
                            <Link to={"Electronics"}>electronics</Link>
                            <span className={styles.count}>(15)</span>
                            <Link to={"jewelery"}>jewelery</Link>
                            <span className={styles.count}>(14)</span>
                        </div>
                    </div>
                    <div className={styles.bestSellers}>
                    <h2>Our Best Sellers</h2>
                        {allProducts ? allProducts.map((product,index) => {
                            if(index < 4) {
                                return <div className={styles.product} key={product.id}>
                                    <img src={product.image} alt={product.title} />
                                    <div className="info">
                                        <h3>{product.title}</h3>
                                        <Rating name="read-only" value={5} readOnly className={styles.stars} />

                                        <span>${product.price}</span>
                                    </div>
                                </div>
                            }
                        }) : null}
                    </div>
                </nav>
                <main>
                    {getPath(params)}
                    <div className={styles.Cardscontainer}>
                        <Outlet />
                    </div>
                </main>
            </div>
        </>
    );
}

export default Shop;