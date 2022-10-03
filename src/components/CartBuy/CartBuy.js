import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

import FormPurchaseOrder from "..//FormPurchaseOrder/FormPurchaseOrder";

import { db } from "../../utils/firebase";
import { collection, addDoc, doc, updateDoc } from "firebase/firestore";
import { contains } from "@firebase/util";

export const CartBuy = ()=> {
    const {productCartList, removeItem, totalProductsPriceInCart,clearProducts} = useContext(CartContext);
    const [idOrder, setIdOrder]  = useState(""); //en este state vamos a almacenar el ID que obtendremos al guardar la orden de compra generada en Fireabase.
    
    const purchaseOrder = (event)=> { //cada vez que el usuario haga click en "confirmar comprar", se va a ejecutar esta funcion y por medio del event vamos a recibir los valores del formulario, a través del cual se creará un objeto que recibirá: datos del comprador; datos de los productos que se agregaron al carrito, y el precio total de los productos.
        const order = {
        buyer: { //los valores que el usuario cargue en el formulario se iran guardando en las siguientes variables:
            name:  event.target[0].value,   
            lastName: event.target[1].value,
            phone: event.target[2].value,
            email: event.target[3].value
        },
        items: productCartList, 
        total: totalProductsPriceInCart()
    }   
    
    // luego de eso se creará esta referencia del lugar en donde se va guardar este documento con la orden de compra en una colecction de Firebase
    const queryReference = collection(db, "orders");

    // y finalmente acá vamos a crear el documento con el método addDoc en donde le pasamos la referencia de donde vamos a guardar la orden de compra(queryReference), y como segundo parámetro le pasamos la información que queremos guardar (order).- (aclaración, esto mismo también lo podriamos hacer con un Async) 
    addDoc (queryReference, order).then(response=>{
        setIdOrder(response.id)
    })
}
    
    // const updateOrderPurchase = () => { //Esta funcion la creamos para actualizar una orden de compra que fue modificada por el usuario.
        
    //     // luego de eso se creará esta referencia del lugar en donde se va guardar este documento con la orden de compra en una colecction de Firebase, usando para eso el método "doc" de Firebase.
    //     const queryReference = doc(db, "orders");
    //     //Luego pasamos el documento que hay que actualizar en la collecction alojada en Firebase, usando el método "updateDoc" de Firebase.
    //     updateDoc(queryReference, {

    //     })
    // }
    
    
    return(
        <>
        {/* si {idOrder} existe muestre estonces solo el mensaje con la orden de compra, sino tiene que muestrar el listado de los productos. Para eso entiendo que previamente debería declarar una variable que almacene el resultado true or false segun el usuario haya presionado o no el boton de confirmar compra dentro del componente FormPurchaseOrder. Una vez hecho eso deberia hacer el renderizado ternario siguiente del siguiente comentario: */}        
        {/* const filterOrNotFilter = idOrder ? true : false; */}
        {/* {idOrder && ? (<span>Su orden de compra se encuentra confirmada bajo el número {idOrder}</span>) : ()}             */}
            {productCartList.length < 1
                ? 
                
                <>
                    <p> ¡ESPERA! No te vayas sin probar nuestros productos</p>  
                    <Link to="/">
                        <button>COMPRAR PRODUCTOS</button> 
                    </Link>
                </> 
                
                : 
                <>
                    {
                        productCartList.map((item) => { //Acá estamos mapeando la lista de items que el usuario eligio comprar.
                        return (
                            <div key={item.id}>  
                                <ul className="itemFinal">
                                    <li>    Producto: {item.name} </li> 
                                    <li>    Categoria: {item.category} </li>  
                                    <li>    Cantidad: {item.quantity} </li>  
                                    <li>    Precio unitario: $ {item.price}</li> 
                                    <li>    Precio total producto: $ {item.price * item.quantity}</li> 
                                    
                                    <li>
                                        {/* BOTON PARA ELIMINAR DETERMINADO ITEM */}
                                        <button onClick={()=>removeItem(item.id)}>
                                            eliminar producto
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        )
                    })}
                    <h6>Total de la compra: { totalProductsPriceInCart() } </h6>
                    
                    {/* Acá estamos creando invocando el componente del formulario de orden de compra del usuario en donde se le piden sus datos personales, y al mismo le pasamos la función creada más arriba de purchaseOrder para que pueda funcionar el componente*/}
                    < FormPurchaseOrder onSubmit={purchaseOrder}/>
                    
                    {/* BOTON PARA VACIAR EL CARRITO */}
                    <button onClick={()=>clearProducts()}>
                        VACIAR CARRITO
                    </button>
                    
                </>
            }   
        
        </>
    )
}

export default CartBuy;

