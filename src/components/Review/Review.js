import React from 'react';

const Review = (props) => {
    const {img, name, review, ratings} = props.review;
    return (
        <div>
            <img src={img} alt="" />
        </div>
    );
};

export default Review;