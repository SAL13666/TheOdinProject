import PropTypes from 'prop-types';
import styles from "../CSS/Card.module.css"
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ItemCard({name, category, price, discount=false, img}) {
    return (
        <div className={styles.card}>
            <img src={img} alt={name} />
            <h2>{name}</h2>
            <p className={styles.category}>{category}</p>
            <p className={styles.price}>{price}</p>
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
    name: PropTypes.string,
    category: PropTypes.string,
    price: PropTypes.string,
    discount: PropTypes.bool,
    img: PropTypes.string,
}

export default ItemCard;