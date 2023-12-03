import { Link, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import NavBarWhite from "../CSS/NavBarWhite.module.css";
import NavBarBlack from "../CSS/NavBarBlack.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import { useContext, useState } from "react";
import { cart } from "../App";
import { getQuantity, getTotal } from "../utilites";
import { Drawer } from "@mui/material";
import CartItem from "./pages/CartItem";

function NavBar() {
    let [cartValue,] = useContext(cart);
    let location = useLocation();
    const whiteHeader = location.pathname === "/" || location.pathname === "/About" || location.pathname === "/Contact";
    console.log(whiteHeader);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    let logo = whiteHeader  ? <img className={NavBarWhite.logo} src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/logo1-free-img-140x47.png" alt="" /> 
    : <img className={NavBarWhite.logo} src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/favicon-free-img-120x120.png" alt="" />;
    console.log(cartValue)
    return (
        <header>
            <nav className={(() => {
                return whiteHeader ? NavBarWhite.nav : NavBarBlack.nav
            })()}>
                <div className={NavBarWhite.navPages}>
                    <Link to="/" className={(() => {
                return whiteHeader ? (() => {
                return whiteHeader ? NavBarWhite.link : NavBarBlack.link
            })() : NavBarBlack.link
            })()}>
                        {logo}
                    </Link>
                    <Link to="/Shop/All" className={(() => {
                return whiteHeader ? NavBarWhite.link : NavBarBlack.link
            })()}>EVERYTHING</Link>
                
                </div>
                <div className={NavBarWhite.navInfo} >
                    <Link to="/About" className={(() => {
                return whiteHeader ? NavBarWhite.link : NavBarBlack.link
            })()}>ABOUT</Link>
                    <Link to="/Contact" className={(() => {
                return whiteHeader ? NavBarWhite.link : NavBarBlack.link
            })()}>CONTACT US</Link>
                    <div className={NavBarWhite.cart} onClick={() => setIsDrawerOpen(true)}>
                        <p  className={(() => {
                return whiteHeader ? NavBarWhite.price : NavBarBlack.price
            })()}>${getTotal(cartValue)}</p>
                        <div className={NavBarWhite.cartContainer}>
                            <span className={(() => {
                return whiteHeader ? NavBarWhite.counter : NavBarBlack.counter
            })()} >{getQuantity(cartValue)}</span>
                            <FontAwesomeIcon icon={faShoppingBag}  className={(() => {
                return whiteHeader ? NavBarWhite.bag : NavBarBlack.bag
            })()}/>
                        </div>
                    </div>
                </div>
            </nav>
            <Drawer anchor="right" open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} PaperProps={{sx:{width:"30%"}}}>
                {cartValue.map((cartItem) => {
                    return <CartItem cartItem={cartItem} key={cartItem.id}/>
                })}
            </Drawer>
        </header>
    );
}

NavBar.propTypes = {
    white: PropTypes.bool,
}
export default NavBar;