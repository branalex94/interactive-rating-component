import "./ratingCard.css";
import Star from "../../assets/images/icon-star.svg";
import Icon from "../icon";
import Button from "../button";
import Ratings from "../ratings";

export default function RatingCard({
  selectedRating,
  setIsRatingSent,
  isRatingSelected,
  setRating,
  setIsRatingSelected,
}) {
  return (
    <>
      <main className="cardWrapper">
        {/* <!-- Rating state start --> */}
        <header className="iconContainer">
          <Icon src={Star} />
        </header>
        <h1 className="whiteText">How did we do?</h1>{" "}
        <p className="cardDescription grayText">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>{" "}
        <Ratings
          selectedRating={selectedRating}
          setRating={setRating}
          setIsRatingSelected={setIsRatingSelected}
        />
        <section className="submitBtn">
          <Button
            setIsRatingSent={setIsRatingSent}
            isRatingSelected={isRatingSelected}
          />
        </section>
        {/* <!-- Rating state end --> */}
      </main>
      <div className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="https://github.com/branalex94">Brandon Aray</a>.
      </div>
    </>
  );
}
