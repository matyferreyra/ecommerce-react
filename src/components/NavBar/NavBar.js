import logo from "../../logo.svg";
import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = ()=> {
    return (
        <div className="navBar_container">
            <div>
                <img src={logo} alt="logo"/>
            </div> 
            <div>
                <ul>
                    <li><a href="#">HOME</a></li>           
                    <li><a href="#">CONTACT</a></li>
                    <li><a href="#">ABOUT</a></li>
                </ul>            
            </div>
            <CartWidget/>
        </div>        
    )
}

export default NavBar;