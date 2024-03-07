import ArrowBackIcon from "./../assets/icons/ArrowBackIcon";
import ArrowForwardIcon from "./../assets/icons/ArrowForwardIcon";
export function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div>
      <span
        className={className}
        style={{
          ...style,
          position: "absolute",
          right: "10px",
          top: "-65px",
        }}
        onClick={onClick}
      >
        <ArrowForwardIcon />
      </span>
    </div>
  );
}

export function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div>
      <span
        className={className}
        style={{
          ...style,
          position: "absolute",
          top: "-65px",
          left: "1270px",
        }}
        onClick={onClick}
      >
        <ArrowBackIcon />
      </span>
    </div>
  );
}
