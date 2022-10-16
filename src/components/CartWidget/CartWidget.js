import React, { useContext } from "react";
import { Link } from "react-router-dom";
import cart from "../../assets/icon_cart_48px_454362.png"
import "../CartWidget/CartWidget.css"
import { CartContext } from "../../context/CartContext";


const CartWidget = () => {
    const { productsInCart } = useContext(CartContext); 


    return(
        <div className="margenDerecho">
            <ul>
                <li>
                    <span id="cartCounter"> { productsInCart() } </span>
                </li>
                <li>
                    <Link to="/cart">
                        <img className="cart" src={cart} alt="cart"/>
                    </Link>
                </li>                                
            </ul>                
        </div>
    )
}

export default CartWidget;