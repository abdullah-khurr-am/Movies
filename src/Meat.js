import Card from "./cards";
import List, { List_Big } from "./List";
import "./Movies.css";
import Astra from "./posters/Astra.png";
import Joker from "./posters/Joker.png";
import Totoro from "./posters/Totoro.png";

const Meat = () => {
  return (
    <div className="Meat">
      <div>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <h5 style={{ fontWeight: "400" }}>Trending</h5>
          <h5 style={{ fontWeight: "400" }} className="more">
            More
          </h5>
        </div>
        <div className="CardRow">
          <Card cardStyle="card-big" image={Astra} />
          <Card cardStyle="card-big" image={Joker} />
          <Card cardStyle="card-big" image={Totoro} />
        </div>
      </div>

      <div className="show-container">
        <div className="ShowTime">
          <div className="header">
            <h5
              style={{
                fontWeight: "400",
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              Recently Playing
            </h5>
          </div>
          <div className="list">
            <List_Big image={Astra} />
            <List_Big image={Astra} />
            <List_Big image={Astra} />
          </div>
        </div>
        <div className="show">
        </div>
      </div>
    </div>
  );
};

export default Meat;
