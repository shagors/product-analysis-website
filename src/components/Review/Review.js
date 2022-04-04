import React from 'react';

const Review = ({review}) => {
    const {img, name, reviews, ratings} = review;
    return (
        <div className='h-60 border-2 rounded-xl shadow-lg bg-slate-300'>
            <img className='w-12 h-12' src={img} alt="" />
            <h4>{name}</h4>
            <p>{reviews}</p>
            <h6><small>Rating: {ratings}</small></h6>
        </div>
    );
};

export default Review;