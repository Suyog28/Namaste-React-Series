import { useState } from "react";
import logo from "../../Assets/logo.png";

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
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Call us</li>
                    <button className="search-btn"
                        onClick={() => {
                            loginBtn === "Login" ? setLoginBtn("Logout") : setLoginBtn("Login")
                        }}
                    >{loginBtn}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;