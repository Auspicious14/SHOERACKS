import logo from "../images/logo.png"
import { Link } from "react-router-dom"

const Logo = () => {
	return (
		<div className="logo">
			<Link to='/'>
				<h3>SHOERACKS</h3>
				<div className="logo-img">
					<img src={logo} alt="" />
				</div>
			</Link>
		</div>
	)
}

export default Logo
