import React from "react";
import { TiStar } from "react-icons/ti";

interface StarDisplayProps {
  rating?: number; 
}

const StarDisplay: React.FC<StarDisplayProps> = ({ rating = 0 }) => { 
  const totalStars = 5;
  return (
    <div className="flex">
      {[...Array(totalStars)].map((_, index) => (
        <span key={index}>
          <TiStar className="text-2xl" color={index < rating ? "#FF6701" : "#e4e5e9"} />
        </span>
      ))}
    </div>
  );
};

export default StarDisplay;
