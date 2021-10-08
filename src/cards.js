import "./cards.css";

const STYLE = ["card-big", "card-small"];

const Card = ({ cardStyle, image }) => {
  const checkCardStyle = STYLE.includes(cardStyle) ? cardStyle : STYLE[0];
  return (
    <div className={checkCardStyle} style={{ backgroundImage: `url(${image})` }}>
      <i
        id="play"
        class="fa fa-play-circle-o"
        style={{
          fontSize: "48px",
          color: "white",
          width: "fit-content",
        }}
      ></i>
    </div>
  );
};

export default Card;
