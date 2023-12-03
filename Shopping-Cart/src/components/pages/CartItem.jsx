import { useContext } from "react";
import { ProductsContext, cart } from "../../App";
import PropTypes from 'prop-types';
import styles from "../../CSS/CartItem.module.css";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { deleteItemFromCart } from "../../utilites";

function CartItem({cartItem}) {
    const [cartValue, setCartValue] = useContext(cart);
    const Product = useContext(ProductsContext)[cartItem.id - 1]
    const title = Product.title.split(" ")[0];
    return (
        <div className={styles.cartItem}>
            <img src={Product.image} alt="product image" />
            <div className={styles.info}>
                <p>{title}</p>
                <span>{cartItem.quantity} x $ {cartItem.price}</span>
            </div>
            <HighlightOffIcon className={styles.delete} onClick={() => {
                deleteItemFromCart(cartItem.id, cartValue, setCartValue)
            }}></HighlightOffIcon>
        </div>
    );
}

CartItem.propTypes = {
    cartItem: PropTypes.object,
}

export default CartItem;