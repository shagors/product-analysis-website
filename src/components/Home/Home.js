import React from 'react';
import ReviewsFromUser from '../../hooks/reviewsFromUser';
import Review from '../Review/Review';
import './Home.css'

const Home = () => {
    const [reviews, setReviews] = ReviewsFromUser();
    return (
        <div>
            <div className='flex m-5 justify-center items-center'>
                <div className='p-5 home-body'>
                    <h1 className='text-6xl '>Your Next Monitor</h1>
                    <h1 className='text-6xl text-cyan-400'>Your Best Monitor</h1>
                    <p className='text-purple-800 my-3 mx-7'>This Monitor Our best Monitor Its coming recently and its sells growth too high.<br /> We can assure You can buy this product with out hesitation.</p>
                    <button className='rounded-xl border-2 bg-rose-100 text-cyan-400 text-xl p-2 shadow-lg font-semibold'>Live Demo</button>
                </div>
                <div className='home-img shadow-lg rounded ml-5 mb-5'>
                    <img className='' src="https://www.cnet.com/a/img/resize/dcec4d3d12fb0e4d39b1dc149ac2a671a2a17482/2021/05/12/0ad36336-efa0-4310-aff2-c268fec45350/samsung-lf27t350fhnxza-monitor.png?auto=webp&fit=crop&height=528&width=940" alt="" />
                </div>
            </div>
            <div className='mb-5'>
                <h1 className='text-5xl my-5'>Customer Reviews</h1>
                <div className='grid grid-cols-3 gap-4 mb-5 px-3'>
                    {
                        reviews?.slice(0,3).map(review => <Review key= {review.id} review={review}></Review>)
                    }
                </div>
                <button className='bg-cyan-400 text-white font-bold px-5 py-1 shadow-lg rounded-lg'>See All Reviews</button>
            </div>
        </div>
    );
};

export default Home;