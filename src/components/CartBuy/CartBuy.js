import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "./CartBuy.css";

import FormPurchaseOrder from "..//FormPurchaseOrder/FormPurchaseOrder";

import { db } from "../../utils/firebase";
import { collection, addDoc, doc, updateDoc } from "firebase/firestore";
import { contains } from "@firebase/util";

export const CartBuy = ()=> {
    const {productCartList, removeItem, totalProductsPriceInCart,clearProducts} = useContext(CartContext);
    const [idOrder, setIdOrder]  = useState(""); //en este state vamos a almacenar el ID que obtendremos al guardar la orden de compra generada en Fireabase.
    
    const purchaseOrder = (event)=> { 
        const order = {
        buyer: { 
            name:  event.target[0].value,   
            lastName: event.target[1].value,
            phone: event.target[2].value,
            email: event.target[3].value
        },
        items: productCartList, 
        total: totalProductsPriceInCart()
    }    
    const queryReference = collection(db, "orders");
    
    addDoc (queryReference, order).then(response=>{
        setIdOrder(response.id)
    })
}    
    return(
        <>       
            {productCartList.length < 1
                ? 
                
                <>
                    <p> ¡ESPERA! No te vayas sin probar nuestros productos</p>  
                    <Link to="/">
                        <button id="backShop">COMPRAR PRODUCTOS</button> 
                    </Link>
                </>                 
                : 
                <>
                    <div className="styleCardBuy">
                    {
                        productCartList.map((item) => { 
                        return (
                            <div className="cardItemOrder" key={item.id}>  
                                <ul>
                                    <li>    Producto: {item.name} </li> 
                                    <li>    Tipo de producto: {item.category} </li>  
                                    <li>    Cantidad: {item.quantity} unidades </li>  
                                    <li>    Precio unitario: ${item.price}</li> 
                                    <li>    Precio total producto: ${item.price * item.quantity}</li> 
                                    
                                    <li>                                       
                                        <button className="removeProduct" onClick={()=>removeItem(item.id)}>
                                            eliminar producto
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        )
                    })}
                    <span id="priceFinal">Precio total de la compra: ${ totalProductsPriceInCart() } </span>                    
                    < FormPurchaseOrder onSubmit={purchaseOrder}/>                    
                    <button className="removeOrder" onClick={()=>clearProducts()}>
                        VACIAR CARRITO
                    </button>
                </div>
                </>
            }           
        </>
    )
}

export default CartBuy;

