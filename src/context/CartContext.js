import React from "react";
import {useState} from "react";


export const CartContext = React.createContext(); //Aca creamos nuestro contexto de CartContext

export const CartProvider = ({children})=> {
    const {productCartList, setProductCartList} = useState([]);

    // const cartWithoutDuplicates = [...new ]
    // cartWithoutDuplicates.forEach((item)) =>{
    
    // }
    
    
    const addItem = (item, quantity) => {
        const newProduct = {
            ...item,
            quantity: quantity
        }
        
        const  newProductList = [...productCartList]; //acá tenemos un nuevo arreglo con los productos que ya existian + el nuevo producto de la siguiente linea:
        newProductList.push(newProduct);
        setProductCartList(newProductList); //acá actualizamos la variable productCartList con los productos nuevos que agrego el usuario. Con esta función actualizamos la variable de la linea 6.
    }

    const removeItem = (itemId) => {
        // console.log("itemId",itemId);
        const  newProductList = productCartList.filter(product =>product.id !== itemId);
        setProductCartList(newProductList);
    }

    const clearProducts = (productCartList) => { //creo la funcion clear para limpiar el carrito de compras, y le paso como parametro el carrito con los productos
        const clear = []; //declaro un array vacio
        setProductCartList(clear); //a la variable del state le paso el arrary "clear" que está vacio
        console.log("limpiar", clearProducts);
    }

    const isInCart = (itemId) => {
        const newProductList = productCartList.some();
        setProductCartList(newProductList);
    }
    
    return (
        <CartContext.Provider value={(productCartList, addItem, removeItem, clearProducts)}>  {/* //Aca creamos un componente que retorna el proveedor del contexto // */}
        {children}
        </CartContext.Provider> 
    )
}

