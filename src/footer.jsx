import { Link } from "react-router-dom";

const Footer = () => {

    return ( 
        <div className="footer">
            <ul>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/'>Pricing</Link></li>
                <li><Link to='/contact'>Contact Us</Link></li>
                <li><Link to='/signIn'>Sign In</Link></li>
            </ul>
            <ul>
            <li><Link to='/'><i className="fab fa-facebook fa-xl"></i></Link></li>
            <li><Link to='/'><i className="fab fa-linkedin fa-xl"></i></Link></li>
            <li><Link to='/'><i className="fab fa-twitter fa-xl"></i></Link></li>
            <li><Link to='/'><i className="fab fa-github fa-xl"></i></Link></li>
            </ul>
            {/* <FontAwesomeIcon  icon='/> */}
        </div>
     );
}
 
export default Footer;