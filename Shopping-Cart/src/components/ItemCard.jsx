import PropTypes from 'prop-types';
import styles from "../CSS/Card.module.css"
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ItemCard({product}, discount) {
    return (
        <div className={styles.card}>
            <img src={product.image} alt={product.name} />
            <h2>{product.title}</h2>
            <p className={styles.category}>{product.category}</p>
            <p className={styles.price}>${product.price}</p>
            <p className={styles.sale}>{(() => {
                return discount ? <span>sale!</span> : null
            })()}</p>
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