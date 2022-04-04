import React from 'react';
import ReviewsFromUser from '../../hooks/reviewsFromUser';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = ReviewsFromUser();
    return (
        <div>
            <h1 className='text-4xl mb-5'>See Our Customers Review</h1>
            <div div className = 'md:grid grid-cols-3 gap-4 mb-5 px-3'>
                {
                    reviews?.map(review => <Review key= {review.id} review={review}></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;