// Code MovieReviews Here
import React from "react";

const MovieReviews = (props) => {

  const {reviews} = props;

  const renderReviews = () => {
      return reviews.map(review => {
          return <div className="review">
                    <h1>{review.byline}</h1>
                    <h3>{review.publication_date}</h3>
                    <p>{review.summary_short}</p>
                    <a href={review.link.url}>{review.display_title}</a>
                </div>
          
      })
  };

  return (
        <div className="review-list">
            {console.log(reviews)}
            {reviews ? renderReviews() : null}
        </div>
  )
};

export default MovieReviews;
