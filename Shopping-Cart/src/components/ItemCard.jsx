import PropTypes from 'prop-types';
import styles from "../CSS/Card.module.css"
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import { addItemToCart } from '../utilites';
import { cart } from '../App';
import { useContext } from 'react';
import { Rating } from '@mui/material';

function ItemCard({product}) {
    const navigate = useNavigate();
    const [cartValue, setCartValue] = useContext(cart)
    return (
        <div className={styles.card} onClick={() => {
            navigate(`/${product.id - 1}/Description`)
        }}>
            <img src={product.image} alt={product.name} />
            <h2>{product.title}</h2>
            <p className={styles.category}>{product.category}</p>
            <p className={styles.price}>${product.price}</p>
            <FontAwesomeIcon icon={faShoppingBag} className={styles.addToCart} onClick={(e) => {
                e.stopPropagation()
                addItemToCart(product, cartValue, 1, setCartValue);
            }}/>
            <Rating name="half-rating" defaultValue={0} precision={0.5} />
        </div>
    );
}

ItemCard.propTypes = {
    product: PropTypes.object,
    discount: PropTypes.bool,
}

export default ItemCard;