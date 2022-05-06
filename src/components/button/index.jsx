import "./button.css";

export default function Button({ setIsRatingSent, isRatingSelected }) {
  const handleClick = () => {
    if (isRatingSelected) {
      setIsRatingSent(true);
    }
  };
  return (
    <button type="button" className="btn whiteText" onClick={handleClick}>
      Submit
    </button>
  );
}
