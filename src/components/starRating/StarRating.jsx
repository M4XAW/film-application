import React, { useState } from "react";

const StarRating = ({ onRate }) => {
	const [rating, setRating] = useState(0);
	const [hover, setHover] = useState(0);

  	const handleClick = (star) => {
    	setRating(star);
    	if (onRate) onRate(star);
  	};

  	return (
		<div className="flex justify-between items-center w-full">
			<p>Note</p>
			<div>
				{Array.from({ length: 5 }, (_, index) => {
					const starValue = index + 1;
					return (
						<span
							key={starValue}
							className="text-2xl cursor-pointer"
							style={{
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
		</div>
  	);
};

export default StarRating;