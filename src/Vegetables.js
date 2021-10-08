import Card from "./cards";
import {List_Small} from "./List";
import Meat from "./Meat";
import "./Movies.css";
import Popeye from "./posters/Popeye.png";



const Vegetables = () => {
    return (       <div className="Vegetables">
    <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          paddingRight:"38px",
          height:"fit-content"
        }}
      >
        <h5 style={{ fontWeight: "400" }}>Coming Soon</h5>
        <h5 style={{ fontWeight: "400" }} className="more">
          More
        </h5>
      </div>
      <div style={{marginTop:"29px"}}>
        <List_Small image={Popeye}/>
        <List_Small image={Popeye}/>
        <List_Small image={Popeye}/>
        <List_Small image={Popeye}/>
      </div>
    </div> );
}
 
export default Vegetables;