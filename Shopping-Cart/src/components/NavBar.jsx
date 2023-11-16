import { Link, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import NavBarWhite from "../CSS/NavBarWhite.module.css";
import NavBarBlack from "../CSS/NavBarBlack.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'

function NavBar() {
    let location = useLocation();
    let logo = location.pathname === "/" ? <img className={NavBarWhite.logo} src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/logo1-free-img-140x47.png" alt="" /> 
    : <img className={NavBarWhite.logo} src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/favicon-free-img-120x120.png" alt="" />;
    return (
        <header>
            <nav className={(() => {
                return location.pathname === "/" ? NavBarWhite.nav : NavBarBlack.nav
            })()}>
                <div className={NavBarWhite.navPages}>
                    <Link to="/" className={(() => {
                return location.pathname === "/" ? (() => {
                return location.pathname === "/" ? NavBarWhite.link : NavBarBlack.link
            })() : NavBarBlack.link
            })()}>
                        {logo}
                    </Link>
                    <Link to="/Shop/All" className={(() => {
                return location.pathname === "/" ? NavBarWhite.link : NavBarBlack.link
            })()}>EVERYTHING</Link>
                
                </div>
                <div className={NavBarWhite.navInfo} >
                    <Link to="/About" className={(() => {
                return location.pathname === "/" ? NavBarWhite.link : NavBarBlack.link
            })()}>ABOUT</Link>
                    <Link to="/Contact" className={(() => {
                return location.pathname === "/" ? NavBarWhite.link : NavBarBlack.link
            })()}>CONTACT US</Link>
                    <div className={NavBarWhite.cart}>
                        <p className={(() => {
                return location.pathname === "/" ? NavBarWhite.price : NavBarBlack.price
            })()}>$3000</p>
                        <div className={NavBarWhite.cartContainer}>
                            <span className={(() => {
                return location.pathname === "/" ? NavBarWhite.counter : NavBarBlack.counter
            })()}>3</span>
                            <FontAwesomeIcon icon={faShoppingBag} className={(() => {
                return location.pathname === "/" ? NavBarWhite.bag : NavBarBlack.bag
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