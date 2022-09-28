import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

export const CartContainer = ()=> {
    const {productCartList, removeItem} = useContext(CartContext); 
    
    return(
        <>
        <div>
        CartContainer
        <div> 
            {/* el total es (acá va una comparación entre el acumulador total de productos)<1
            ? <p> No te vayas sin comprar! <Link to={``} <button onClick=()>PRODUCTOS</button> </Link> </p> 
            : 
             */}
            {value.productCartList.map{item=>(
                <>
                <ul className="itemFinal">
                    <li> {item.name} - {item.category} - {item.quantity} - {item.price}</li>
                    <li><button onClick={()=>removeItem(item.id)}>eliminar producto</button></li>
                </ul>
                </>
            )}}
        </div>
        {/* <Link to={``}> */}
            <button onClick={()=>removeItem(item.id)}>Finalizar mi compra</button>
        {/* </Link> */}
        </div>
        
        </>
    )
}

export default CartContainer;