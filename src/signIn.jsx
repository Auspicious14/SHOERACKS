import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Signin = () => {
    const [NewAccount, setNewAccount] = useState(null)

    return ( 
        <div className="signIn">
            <div className="signIn-card">
                <h2>Welcome 😊</h2>
                <form action="">
                    <input type="email"  id="email" placeholder="Email" />
                    <input type="password"  id="password" placeholder="Password" />
                </form>
                <br />
                <button type="submit">Login</button>
                <p>New Here? <span><Link to='/createAccount'>Create Account</Link></span></p>
            </div>
        </div>
     );
}
 
export default Signin;