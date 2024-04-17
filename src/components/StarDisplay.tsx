import React from "react";
import { FaStar } from "react-icons/fa";

interface StarDisplayProps {
  rating?: number; 
}

const StarDisplay: React.FC<StarDisplayProps> = ({ rating = 0 }) => { 
  const totalStars = 5;
  return (
    <div className="flex gap-1">
      {[...Array(totalStars)].map((_, index) => (
        <span key={index}>
          <FaStar color={index < rating ? "#FF6701" : "#e4e5e9"} />
        </span>
      ))}
    </div>
  );
};

export default StarDisplay;
