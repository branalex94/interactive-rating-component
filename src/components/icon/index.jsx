import "./icon.css";

export default function Icon(props) {
  return (
    <div className="iconBadge roundedBackground">
      <img src={props.src} alt="" className="cardIcon" />
    </div>
  );
}
