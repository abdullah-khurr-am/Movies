import Card from "./cards";
import "./wonderwoman.css";
import Inception from "./posters/Inception.png"
import Cars from "./posters/Cars.png"
import Beauty from "./posters/Beauty.png"


const Wonder = () => {
    return ( 
    <div className="contain">
        <div className="poster">
            <div className="info-poster">
                <div className="wonder-info">
                    <h3>Premiere Now</h3>
                    <h1>Wonder Woman</h1>
                    <h5 style={{fontWeight:"400",marginBottom:"20px"}}>Action</h5>
                    <button className ="watch-now">Watch Now</button>
                </div>
                <div className="cards">
                    <Card cardStyle="card-small" image={Inception}/>
                    <Card cardStyle="card-small" image={Cars}/>
                    <Card cardStyle="card-small" image={Beauty}/>
                </div>
            </div>
        </div>
    </div> );
}
 
export default Wonder;