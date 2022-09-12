import "./Header.css";
import logo from "../../assets/Logo Tiendita Pausa 400px SVG.svg";
// import CartWidget from "../CartWidget/CartWidget";

const Header = ()=> {
    return (
        <div className="header">
            <div id="logo">
                <img src={logo} alt="logotipo" id="logo"/>
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