import React from "react";
import {useState} from "react";


export const CartContext = React.createContext(); //Aca creamos nuestro contexto de CartContext

export const CartProvider = ({children})=> {
    
    const [ productCartList, setProductCartList ] = useState([]);
    console.log({productCartList})

    // const addItem = (item, quantity) => {
    //     const newProduct = {
    //         ...item,
    //         quantity: quantity
    //     }
        
    //     const  newProductList = [...productCartList]; //acá tenemos un nuevo arreglo con los productos que ya existian + el nuevo producto de la siguiente linea:
    //     newProductList.push(newProduct);
    //     setProductCartList(newProductList); //acá actualizamos la variable productCartList con los productos nuevos que agrego el usuario. Con esta función actualizamos la variable de la linea 6.
    // }

    const addItem = (item, quantity) => {
        console.log(item)
        // validar si el prod existe en el array -- true o false
        if (isInCart(item.id)) {// si (prod existe en el array)
            
            //no tengo generar duplicado y tengo que aumentar la cantidad de ese prod.
            const productInArray = findProductById(item.id)
            productInArray.quantity += quantity;
            
            const newCartArray = [ ...productCartList ]
            setProductCartList(newCartArray)

        } else {
            // quiere decir que es un prod nuevo
            const newProduct = { ...item, quantity: quantity } // genero un nuevo objeto, con todo lo que viene de item y creo la clave quantity
            setProductCartList([...productCartList, newProduct]) // actualizamos array con el método de state
        }
    }

    const removeItem = (itemId) => {
        const newProductList = productCartList.filter(product => product.id !== itemId);
        setProductCartList(newProductList);
    }

    const clearProducts = () => { //creo la funcion clear para limpiar el carrito de compras, y le paso como parametro el carrito con los productos
        //const clear = []; //declaro un array vacio
        //setProductCartList(clear); //a la variable del state le paso el arrary "clear" que está vacio
        setProductCartList([]);
    }

    const isInCart = (itemId) => {
        //const newProductList = productCartList.some(product => product.id === itemId);
        //return newProductList
        return productCartList.some(product => product.id === itemId);
    }
    
    const findProductById = (itemId) => {
        // separamos resposabilidades de la fn principal addItem
        return productCartList.find(x => x.id === itemId)
    }

    const totalProductsPriceInCart = () => {
        return productCartList.reduce((acc, item) => acc + (item.price * item.quantity), 0)
    }

    const productsInCart = () => {
        return productCartList.reduce((acc, item) => acc + item.quantity, 0)
    }
    
    return (
        <CartContext.Provider value={{productCartList, addItem, removeItem, clearProducts, totalProductsPriceInCart, productsInCart}}>  {/* //Aca creamos un componente que retorna el proveedor del contexto // */}
        {children}
        </CartContext.Provider> 
    )
}

