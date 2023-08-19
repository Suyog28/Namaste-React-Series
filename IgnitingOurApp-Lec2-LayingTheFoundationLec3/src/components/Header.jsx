import logo from "../../Assets/logo.png";

const Header = () => {
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
                    <li>Login</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;