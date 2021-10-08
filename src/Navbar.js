import "./Navbar.css";

const Navbar = () => {
    return ( 
    <>
    <div className="navbar">
        <h2 style={{fontWeight:"700"}}>IVISION+</h2>
        <ul>
            <li><a href="">Shows</a></li>
            <li><a href="">Movies</a></li>
            <li><a href="">Live TV</a></li>
            <li><a href="">Songs</a></li>
        </ul>
    </div>
    </> );
}
 
export default Navbar;