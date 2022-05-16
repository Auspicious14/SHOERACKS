import Logo from "./logo";
import { Link } from "react-router-dom";

const Navbar = () => {
    // const setCurrentNav = () => {
    //     const styles = {
    //         borderBottom : '1px solid white'
    //     }
    //     return styles
    // }

    return ( 
        <div className="navbar">
            <Logo />
            <div className="nav-links">
                <Link to="/about">about</Link>
                <Link to="/service">service</Link>
                <Link to="/contact">contact</Link>
            </div>
            <div className="sign-in">
                <Link to="/signIn">sign in</Link>
            </div>
        </div>
     );
}
 
export default Navbar;