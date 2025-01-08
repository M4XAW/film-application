import React, { useState } from "react";

const StarRating = ({ maxStars = 5, onRate }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (star) => {
    setRating(star);
    if (onRate) onRate(star);
  };

  return (
    <div style={{ display: "flex", gap: "5px", cursor: "pointer" }}>

      	{Array.from({ length: maxStars }, (_, index) => {
        	const starValue = index + 1;
			return (
				<span
					key={starValue}
					style={{
					fontSize: "2rem",
					color: starValue <= (hover || rating) ? "#FFD700" : "#CCC",
					}}
					onClick={() => handleClick(starValue)}
					onMouseEnter={() => setHover(starValue)}
					onMouseLeave={() => setHover(0)}
				>
					★
				</span>
			);
      	})}
    </div>
  );
};

export default StarRating;