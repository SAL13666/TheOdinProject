import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import NavBarCss from "../CSS/NavBarWhite.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'

function NavBar({white = false}) {
    let logo = white ? <img className={NavBarCss.logo} src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/logo1-free-img-140x47.png" alt="" /> 
    : <img src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/favicon-free-img-120x120.png" alt="" />;
    return (
        <header>
            <nav className={NavBarCss.nav}>
                <div className={NavBarCss.navPages}>
                    <Link to="/" className={NavBarCss.link}>
                        {logo}
                    </Link>
                    <Link to="/Shop" className={NavBarCss.link}>EVERYTHING</Link>
                
                </div>
                <div className={NavBarCss.navInfo} >
                    <Link to="/About" className={NavBarCss.link}>ABOUT</Link>
                    <Link to="/Contact" className={NavBarCss.link}>CONTACT US</Link>
                    <div className={NavBarCss.cart}>
                        <p className={NavBarCss.price}>$3000</p>
                        <div className={NavBarCss.cartContainer}>
                            <span className={NavBarCss.counter}>3</span>
                            <FontAwesomeIcon icon={faShoppingBag} className={NavBarCss.bag}/>
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