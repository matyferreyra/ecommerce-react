import "./ItemDetail.css";
import Item from "../Item/Item"
import ItemCount from '../../components/ItemCount/ItemCount';
import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";



const ItemDetail = ({viewDetail}) => {        
    // const {addItem} = useContext(CartContext);

    const onAdd = (counter) => {
        console.log(counter)   //PASO 1: Esta es una función que funciona con un evento "click" al accionar el boton que se que encuentra dentro del componente ItemCount. De esta manera acá recibimos un dato que viene de su componente hijo a través del parámetro de una función, y cuando la recibimos hacemos el PASO 2:
        // PASO 2: Entonces lo siguiente es tomar ese dato (que es el número de items a agregar al carrito) y guardarlo en una nueva variable dentro del actual componente, usando un useState. 
        // addItem(viewDetail, counter) //A través de esta función le pasamos el producto y la cantidad al CartContext para que al listado de productos del carrito le agregue un nuevo producto
    } // PASO 3: De esta manera ya podemos usar este contador en este componente ItemDetail o si este ItemDetail tuviera mas componenetes hijos, les puedo pasar la variable "count" a través de una propiedad. Asi vamos subiendo datos a sus padres por medio de funciones y bajando datos a sus hijos por medio de propiedades.

    return (
        <>        
        <img src={viewDetail.image} alt={viewDetail.name} className="sizeImgDetail"/>
        <h1 className="title">{viewDetail.name}</h1>
        <p className="descript">{viewDetail.description}</p>
        <p className="price">{viewDetail.price}</p> 
        <p className="stock">{viewDetail.stock}</p>
        <ItemCount stock={10} initial={1} onAdd={onAdd}/>         
        </>
    )
}

export default ItemDetail;