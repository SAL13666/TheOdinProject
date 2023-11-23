import { Link, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import NavBarWhite from "../CSS/NavBarWhite.module.css";
import NavBarBlack from "../CSS/NavBarBlack.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import { useContext } from "react";
import { cart } from "../App";
import { getQuantity, getTotal } from "../utilites";

function NavBar() {
    let [cartValue,] = useContext(cart);
    let location = useLocation();
    let logo = location.pathname === "/" || location.pathname === "/About"  ? <img className={NavBarWhite.logo} src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/logo1-free-img-140x47.png" alt="" /> 
    : <img className={NavBarWhite.logo} src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/favicon-free-img-120x120.png" alt="" />;
    return (
        <header>
            <nav className={(() => {
                return location.pathname === "/"  || location.pathname === "/About" ? NavBarWhite.nav : NavBarBlack.nav
            })()}>
                <div className={NavBarWhite.navPages}>
                    <Link to="/" className={(() => {
                return location.pathname === "/" || location.pathname === "/About" ? (() => {
                return location.pathname === "/" || location.pathname === "/About" ? NavBarWhite.link : NavBarBlack.link
            })() : NavBarBlack.link
            })()}>
                        {logo}
                    </Link>
                    <Link to="/Shop/All" className={(() => {
                return location.pathname === "/" || location.pathname === "/About" ? NavBarWhite.link : NavBarBlack.link
            })()}>EVERYTHING</Link>
                
                </div>
                <div className={NavBarWhite.navInfo} >
                    <Link to="/About" className={(() => {
                return location.pathname === "/" || location.pathname === "/About" ? NavBarWhite.link : NavBarBlack.link
            })()}>ABOUT</Link>
                    <Link to="/Contact" className={(() => {
                return location.pathname === "/" || location.pathname === "/About" ? NavBarWhite.link : NavBarBlack.link
            })()}>CONTACT US</Link>
                    <div className={NavBarWhite.cart}>
                        <p className={(() => {
                return location.pathname === "/" || location.pathname === "/About" ? NavBarWhite.price : NavBarBlack.price
            })()}>${getTotal(cartValue)}</p>
                        <div className={NavBarWhite.cartContainer}>
                            <span className={(() => {
                return location.pathname === "/" || location.pathname === "/About" ? NavBarWhite.counter : NavBarBlack.counter
            })()}>{getQuantity(cartValue)}</span>
                            <FontAwesomeIcon icon={faShoppingBag} className={(() => {
                return location.pathname === "/" || location.pathname === "/About" ? NavBarWhite.bag : NavBarBlack.bag
            })()}/>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

NavBar.propTypes = {
    white: PropTypes.bool,
}
export default NavBar;