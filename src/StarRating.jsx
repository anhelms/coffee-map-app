import React, { useState } from 'react';

const StarRating = ({ onUpdateRating }) => {
  const [rating, setRating] = useState(0);

  const handleStarClick = (value) => {
    setRating(value);
    onUpdateRating(value);
  };

  return (
    <div>
      {[1, 2, 3, 4, 5].map((value) => (
        <span key={value} onClick={() => handleStarClick(value)}>
          {value <= rating ? '★' : '☆'}
        </span>
      ))}
    </div>
  );
};

export default StarRating;