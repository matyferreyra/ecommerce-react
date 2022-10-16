import React from "react";
import {useState} from "react";


export const CartContext = React.createContext(); 

export const CartProvider = ({children})=> {
    
    const [ productCartList, setProductCartList ] = useState([]); 

    const addItem = (item, quantity) => {
        
        if (isInCart(item.id)) {            
            
            const productInArray = findProductById(item.id)
            productInArray.quantity += quantity;

            productInArray.quantityFinal = productInArray.quantity * productInArray.price; //esta funcion lo que hace es calcular el precio total del producto de acuerdo a la cantidad de unidades que el usuario quiera comprar del mismo.    
            
            const newCartArray = [ ...productCartList ]
            setProductCartList(newCartArray)

        } else {
            
            const newProduct = { ...item, quantity: quantity } 
            setProductCartList([...productCartList, newProduct]) 
        }
    }

    const removeItem = (itemId) => {
        const newProductList = productCartList.filter(product => product.id !== itemId);
        setProductCartList(newProductList);
    }

    const clearProducts = () => { 
        setProductCartList([]);
    }

    const isInCart = (itemId) => {        
        return productCartList.some(product => product.id === itemId);
    }
    
    const findProductById = (itemId) => {        
        return productCartList.find(x => x.id === itemId)
    }

    const totalProductsPriceInCart = () => {
        return productCartList.reduce((acc, item) => acc + (item.price * item.quantity), 0)
    }

    const productsInCart = () => {
        return productCartList.reduce((acc, item) => acc + item.quantity, 0)
    }   

    return (
        <CartContext.Provider value={{productCartList, addItem, removeItem, clearProducts, totalProductsPriceInCart, productsInCart}}>  {}
        {children}
        </CartContext.Provider> 
    )
}

