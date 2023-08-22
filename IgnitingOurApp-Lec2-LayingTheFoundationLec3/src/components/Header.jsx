import { useState } from "react";
import logo from "../../Assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {

    const [loginBtn, setLoginBtn] = useState("Login")

    return (
        <div className='header'>
            <div className='logo'>
                <img src={logo}
                    alt='Logo'
                    className='logomain'></img>
            </div>
            <div className='nav-items'>
                <ul>
                    <li><Link to="/" className="link">Home</Link></li>
                    <li><Link to="/Aboutus" className="link">About</Link></li>
                    <li><Link to="/Contact" className="link">Contact</Link></li>
                    <li>Cart</li>
                    <button className="search-btn"
                        onClick={() => {
                            loginBtn === "Login" ? setLoginBtn("Logout") : setLoginBtn("Login")
                        }}
                    >{loginBtn}</button>
                </ul>
            </div >
        </div >
    )
}

export default Header;