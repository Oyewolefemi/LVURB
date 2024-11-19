const CustomerReviews = ({ reviews }) => (
    <section className="customer-reviews">
        <h3>Customer Reviews</h3>
        <div className="reviews">
            {reviews.map((review, index) => (
                <div className="review" key={index}>
                    <p><strong>{review.name}</strong>: {review.text}</p>
                    <p>Rating: {review.rating} / 5</p>
                </div>
            ))}
        </div>
    </section>
);

export default CustomerReviews;
