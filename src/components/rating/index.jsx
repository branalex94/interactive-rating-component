import "./rating.css";
import { useState, useEffect } from "react";

export default function Rating({
  rating,
  setRating,
  setIsRatingSelected,
  selectedRating,
}) {
  const [isActive, setIsActive] = useState(false);

  const handleClick = (e) => {
    setRating(e.currentTarget.textContent);
    setIsRatingSelected(true);
  };

  useEffect(() => {
    if (rating === selectedRating) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [selectedRating]);
  return (
    <span
      className={`rating roundedBackground grayText ${
        isActive ? "activeRating" : ""
      }`}
      onClick={handleClick}
    >
      {rating}
    </span>
  );
}
