import "../NavBar/NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import {Link} from "react-router-dom";

const NavBar = ()=> {
    return (
        <>
        <div className="navBar_container">
            
                <ul className="navBar">                    
                    <Link to="/">INICIO</Link>           
                    <Link to="/category/shampoo">SHAMPOO</Link>                
                    <Link to="/category/acondicionador">ACONDICIONADOR</Link> 
                    <Link to="/category/jabon">JABON</Link> 
                    <Link to="/category/labial">LABIAL</Link> 
                    <Link to="/category/desodorante">DESODORANTE</Link>
                    <Link to="/category/pasta_dental">PASTA DENTAL</Link>                    
                </ul>               
            <CartWidget/>
        </div>
        </>                
    )
}

export default NavBar;