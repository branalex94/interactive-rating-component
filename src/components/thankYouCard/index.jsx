import "./thankYouCard.css";
import ThankYouImage from "../../assets/images/illustration-thank-you.svg";

export default function ThankYouCard({ rating }) {
  return (
    <main className="thankYouWrapper">
      <section className="bannerContainer">
        <img src={ThankYouImage} alt="" />
      </section>
      <section className="ratingResult">
        {/* <!-- Thank you state start --> */}
        <p className="ratingBox">
          You selected {rating} {/* <!-- Add rating here --> */}
          out of 5
        </p>
      </section>
      <section className="messageContainer">
        <h1>Thank you!</h1>
        <p>
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </p>
        {/* <!-- Thank you state end --> */}
      </section>
    </main>
  );
}
