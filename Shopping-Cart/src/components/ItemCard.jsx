import PropTypes from 'prop-types';
import styles from "../CSS/Card.module.css"
import { faShoppingBag, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import { addItemToCart } from '../utilites';
import { cart } from '../App';
import { useContext } from 'react';

function ItemCard({product}) {
    const navigate = useNavigate();
    const [cartValue, setCartValue] = useContext(cart)
    return (
        <div className={styles.card} onClick={() => {
            console.log(product.id);
            navigate(`/${product.id - 1}`)
        }}>
            <img src={product.image} alt={product.name} />
            <h2>{product.title}</h2>
            <p className={styles.category}>{product.category}</p>
            <p className={styles.price}>${product.price}</p>
            <FontAwesomeIcon icon={faShoppingBag} className={styles.addToCart} onClick={(e) => {
                e.stopPropagation()
                addItemToCart(product, cartValue, 1, setCartValue);
            }}/>
            <p>
                <FontAwesomeIcon icon={faStar} className={styles.star}/>
                <FontAwesomeIcon icon={faStar} className={styles.star}/>
                <FontAwesomeIcon icon={faStar} className={styles.star}/>
                <FontAwesomeIcon icon={faStar} className={styles.star}/>
                <FontAwesomeIcon icon={faStar} className={styles.star}/>
            </p>
        </div>
    );
}

ItemCard.propTypes = {
    product: PropTypes.object,
    discount: PropTypes.bool,
}

export default ItemCard;