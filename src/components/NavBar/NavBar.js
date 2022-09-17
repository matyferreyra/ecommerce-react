// import logo from "../../assets/Logo Tiendita Pausa 400px SVG.svg";
import "../NavBar/NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import {Link} from "react-router-dom";


const NavBar = ()=> {
    return (
        <>
        {/* <link to="/"></div></link> */}
        <div className="navBar_container">
        <div className="margenDerecho">
            <ul>
                {/* <li><a href="#">INICIO</a></li> */}
                <Link to="/">INICIO</Link>           
                <Link to="/category/shampoo">Shampoo</Link>                
                <Link to="/category/acondicionador">Acondicionador</Link> 
                <Link to="/category/jabon">Jabon</Link> 
                <Link to="/category/labial">Labial</Link> 
                <Link to="/category/desodorante">Desodorante</Link>
                <Link to="/category/pasta_dental">Pasta Dental</Link>
                {/* <li><a href="#">NOSOTROS</a></li> */}
                {/* <Link to="">NOSOTROS</Link>          */}
                {/* <li><a href="#">CONTACTO</a></li> */}
                {/* <Link to="">CONTACTO</Link>          */}
            </ul>   
        </div>
        <CartWidget/>
        </div>
        </>                
    )
}

export default NavBar;