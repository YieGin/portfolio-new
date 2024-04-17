import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

interface StarRatingProps {
  onRating: (rating: number) => void;
}

const StarRating: React.FC<StarRatingProps> = ({ onRating }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, index) => {
        const starIndex = index + 1;
        return (
          <button
            type="button"
            key={starIndex}
            className={starIndex <= (hover || rating) ? "on" : "off"}
            onClick={() => { setRating(starIndex); onRating(starIndex); }}
            onMouseEnter={() => setHover(starIndex)}
            onMouseLeave={() => setHover(rating)}
          >
            <FaStar color={starIndex <= (hover || rating) ? "#FF6701" : "#e4e5e9"} size={24} />
          </button>
        );
      })}
    </div>
  );
};

export default StarRating;
