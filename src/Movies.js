import Card from "./cards";
import List from "./List";
import Meat from "./Meat";
import "./Movies.css";
import Astra from "./posters/Astra.png";
import Joker from "./posters/Joker.png";
import Totoro from "./posters/Totoro.png";
import Vegetables from "./Vegetables";

const Movies = () => {
  return (
    <div className="movies">
      <Meat/>
      <Vegetables/>
    </div>
  );
};

export default Movies;
