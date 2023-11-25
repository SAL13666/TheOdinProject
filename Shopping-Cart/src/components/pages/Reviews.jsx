import { Rating } from "@mui/material";

function Reviews() {
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
        }}>
            <p>Your email address will not be published. Required fields are marked *</p>
            <label htmlFor="Stars">Your rating * </label>
            <Rating name="half-rating" defaultValue={0} precision={0.5} />
            <label htmlFor="Review">Your review *</label>
            <textarea name="" id="Review" rows="3"></textarea>
            <label htmlFor="Name">Name *</label>
            <input type="text" id="Name" />
            <label htmlFor="Email">Email *</label>
            <input type="email" id="Email" />
            <button>SUBMIT</button>
        </form>
    );
}

export default Reviews;