import "./ratings.css";
import Rating from "../rating";

const RATINGS = ["1", "2", "3", "4", "5"];

export default function Ratings({
  setRating,
  setIsRatingSelected,
  selectedRating,
}) {
  return (
    <section className="cardRatings">
      {RATINGS.map((rating, i) => (
        <Rating
          selectedRating={selectedRating}
          key={i}
          rating={rating}
          setRating={setRating}
          setIsRatingSelected={setIsRatingSelected}
        />
      ))}
    </section>
  );
}
