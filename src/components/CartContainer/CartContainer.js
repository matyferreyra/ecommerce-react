import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

export const CartContainer = ()=> {
    const {productCartList, removeItem, totalProductsPriceInCart} = useContext(CartContext); 
    
    return(
        <>
            <h3> CartContainer </h3> 
            {productCartList.length < 1
                ? 
                
                <>
                    <p> No te vayas sin comprar!</p>  
                    <Link to="/">
                        <button>COMPRAR PRODUCTOS</button> 
                    </Link>
                </> 
                
                : 
                <>
                    {
                        productCartList.map((item) => {
                        return (
                            <div key={item.id}>  
                                <ul className="itemFinal" 
                                    
                                    >
                                    <li> Producto: {item.name} </li> 
                                    <li>    Categoria: {item.category} </li>  
                                    <li>    Cantidad: {item.quantity} </li>  
                                    <li>    Precio: $ {item.price}</li> 
                                    
                                    <li>
                                        <button 
                                            onClick={()=>removeItem(item.id)}
                                        >
                                            eliminar producto
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        )
                    })}
                    <h6>Total de la compra: { totalProductsPriceInCart() } </h6>
                    <button>Finalizar mi compra</button>
                    {/* LLAMAR FUnCION PARA VACIAR CARRITO */}
                </>
            }
        
        </>
    )
}

export default CartContainer;

