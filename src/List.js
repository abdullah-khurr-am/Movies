import "./List.css"


const List_Small = ({image}) => {

    return ( 
        <div className="list-small">
            <div className="image" style={{ backgroundImage: `url(${image})` }}></div>
            <div className="Info">
                <p id="title">Notting Hill</p>
                <p id="premiere">Premiere In</p>
                <p id="date">20 April 2020</p>
            </div>
        </div>
     );
}
const List_Big = ({image}) => {

    return ( 
        <div className="list-big">
            <div className="image-container" style={{width: "4%"}}>
                <div className="image" style={{ backgroundImage: `url(${image})` }}></div>
            </div>
            <div className="Info">
                <p id="title">Notting Hill</p>
                <p id="date">20 April 2020</p>
            </div>
            <div className="timing">
                <p id="title">02:40 PM</p>
                <p id="date">50 mins</p>
            </div>
        </div>
     );
}
 
export  {List_Small,List_Big}; 
