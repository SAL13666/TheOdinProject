import { Rating } from "@mui/material";
import styles from "../../CSS/Reviews.module.css"
import { useContext, useRef, useState } from "react";
import { reviewsContext } from "./PageDetails";
import { useParams } from "react-router-dom";
import Review from "../Review";
function Reviews() {
    const [reviews, setReviews] = useContext(reviewsContext);
    let starRating = 0;
    let reviewText = useRef();
    const [ProductId] = useState(useParams().Details);
    let name = useRef();
    let email = useRef();
    return (
        <>
            <form onSubmit={(e) => {
                e.preventDefault();
                const oldReviews = reviews ? JSON.parse(reviews) : {};
                const reviewsArray = oldReviews[ProductId] ? oldReviews[ProductId] : [];
                setReviews(JSON.stringify({...oldReviews, [ProductId]: [...reviewsArray, {
                    starRating,
                    "reviewText": reviewText.current.value,
                    "name": name.current.value,
                    "email": email.current.value,
                }]}))
            }} className={styles.reviewForm}>
                <p>Your email address will not be published. Required fields are marked *</p>
                <label htmlFor="Stars">Your rating * </label>
                <Rating name="half-rating" defaultValue={0} precision={0.5} onChange={(e) => {
                    starRating = e.target.value;
                    console.log(starRating)
                }}/>
                <label htmlFor="Review">Your review *</label>
                <textarea name="" id="Review" cols="3" ref={reviewText}></textarea>
                <label htmlFor="Name">Name *</label>
                <input type="text" id="Name" ref={name}/>
                <label htmlFor="Email">Email *</label>
                <input type="email" id="Email" ref={email}/>
                <button>SUBMIT</button>
            </form>
            <div className={styles.reviews}>
                {(() => {
                    let parsedReviews = JSON.parse(reviews)[ProductId];
                    return parsedReviews ?  parsedReviews.map((review, index) => {
                        return <Review key={index} review={review} />
                    }) : null
                })()}
            </div>
        </>
    );
}

export default Reviews;