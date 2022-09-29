import React, { useContext } from "react";
import { Link } from "react-router-dom";
import cart from "../../assets/icon_cart_32px_f4c3b4.png"
import "../CartWidget/CartWidget.css"
import { CartContext } from "../../context/CartContext";


const CartWidget = () => {
    const { productsInCart } = useContext(CartContext); 


    return(
        <div className="margenDerecho">
            {/* <p className="displayProd">{ItemCount}</p> */}
            <ul>
            <li>
                <span> { productsInCart() } </span>
                <Link to="/cart">
                    <img className="cart" src={cart} alt="cart"/>
                </Link>
            </li>                
            <li><button> loggin </button></li>
            </ul>                
        </div>
    )
}

export default CartWidget;