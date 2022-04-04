import React from 'react';
import ReviewsFromUser from '../../hooks/reviewsFromUser';
import Review from '../Review/Review';

const Home = () => {
    const [reviews, setReviews] = ReviewsFromUser();
    console.log(reviews);
    return (
        <div>
            <div className='flex m-5'>
                <div className='p-5 text-center'>
                    <h1 className='text-6xl '>Your Next Monitor</h1>
                    <h1 className='text-6xl text-cyan-400'>Your Best Monitor</h1>
                    <p className='text-purple-800 my-3 mx-7'>This Monitor Our best Monitor Its coming recently and its sells growth too high. We can assure You can buy this product with out hesitation.</p>
                    <button className='rounded-xl border-2 bg-rose-100 text-cyan-400 text-xl p-2 shadow-lg font-semibold'>Live Demo</button>
                </div>
                <div>
                    <h1>This is Image</h1>
                    <img className='' src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" />
                </div>
            </div>
            <div>
                <h1 className='text-5xl my-4'>Users Reviews</h1>
                <div className='grid grid-cols-3 gap-4 mb-5'>
                    {
                        reviews?.slice(0,3).map(review => <Review key= {review.id} review={review}></Review>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;