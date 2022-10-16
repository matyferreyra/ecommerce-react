import "./Header.css";
import logo from "../../assets/Logo Tiendita Pausa 400px SVG.svg";
import {Link} from "react-router-dom";

const Header = ()=> {
    return (
        <div className="header">
            <div id="logo">
                <Link to="/">
                <img src={logo} alt="logotipo" id="logo"/>
                </Link>
            </div>
            <div className="brandContainer">
                <p id="pausa">
                    Pausa
                </p>
                <p id="tiendita">
                    Tiendita de Cosas
                </p>
            </div>           
        </div>
    )
}

export default Header;