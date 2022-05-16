import { Link } from "react-router-dom";

const NewAccount = () => {
    return ( 
        <div className="create-account">
            <div className="signIn-card">
                <h2>Welcome 😊</h2>
                <form action="">
                    <input type="name"  id="name" placeholder="Name" />
                    <input type="email"  id="email" placeholder="Email" />
                    <input type="password"  id="password" placeholder="Password" />
                </form>
                <br />
                <button type="submit">SIgn in</button>
                <p>Already have an account with us? <span><Link to='/signIn'>Login</Link></span></p>
            </div>
        </div>
     );
}
 
export default NewAccount;