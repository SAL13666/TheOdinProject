import { Rating } from "@mui/material";
import PropTypes from 'prop-types';
import styles from "../CSS/Review.module.css"
function Review({review}) {
    return (
        <div className={styles.review}>
            <img src="https://secure.gravatar.com/avatar/0eb178cec364c022a189c3814e5f7483?s=60&d=mm&r=g" alt="" />
            <div className={styles.reviewInfo}>
                <h3>{review.name}</h3>
                <Rating name="read-only" value={review.starRating} readOnly />
                <p>{review.reviewText}</p>
            </div>
        </div>
    );
}

Review.propTypes = {
    review: PropTypes.object,
}

export default Review;