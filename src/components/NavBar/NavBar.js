import logo from "../../logo.svg";
import "./NavBar.css";
import cart from "../../assets/img/icon_cart_32px_f4c3b4.png";

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
            <div classname="margenDerecho">
                <ul>
                <li><a href="#"><img classname="cart" src={cart} alt="cart"/></a></li>
                <li><button> loggin </button></li>
                </ul>
            </div>
        </div>
        
    )
}

export default NavBar;