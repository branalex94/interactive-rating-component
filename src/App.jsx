import "./App.css";
import { useState } from "react";
import RatingCard from "./components/ratingCard";
import ThankYouCard from "./components/thankYouCard";

function App() {
  const [isRatingSelected, setIsRatingSelected] = useState(false);
  const [rating, setRating] = useState("");
  const [isRatingSent, setIsRatingSent] = useState(false);

  return (
    <div className="App">
      {isRatingSent ? (
        <ThankYouCard rating={rating} />
      ) : (
        <RatingCard
          selectedRating={rating}
          setIsRatingSent={setIsRatingSent}
          isRatingSelected={isRatingSelected}
          setRating={setRating}
          setIsRatingSelected={setIsRatingSelected}
        />
      )}
    </div>
  );
}

export default App;
