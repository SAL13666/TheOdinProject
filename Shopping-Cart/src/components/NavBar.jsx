import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'

function NavBar({white = false}) {
    let logo = white ? <img className="logo" src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/logo1-free-img-140x47.png" alt="" /> 
    : <img src="https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/favicon-free-img-120x120.png" alt="" />;
    return (
        <header>
            <nav className="nav">
                <div className="navPages">
                    <Link to="/" className="link">
                        {logo}
                    </Link>
                    <Link to="/Shop" className="link">EVERYTHING</Link>
                
                </div>
                <div className="navInfo" >
                    <Link to="/About" className="link">ABOUT</Link>
                    <Link to="/Contact" className="link">CONTACT US</Link>
                    <div className="cart">
                        <p className="price">$3000</p>
                        <div className="cartContainer">
                            <span className="counter">3</span>
                            <FontAwesomeIcon icon={faShoppingBag} className="bag"/>
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