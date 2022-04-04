import React from 'react';
import ReviewsFromUser from '../../hooks/reviewsFromUser';

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
                    <img src={'./src/Asset/images/home.jpg'} alt="" />
                </div>
            </div>
            <div>
                <h1 className='text-5xl'>Users Reviews</h1>
                <p>{reviews?.length}</p>
            </div>
        </div>
    );
};

export default Home;