import ItemDetail from "../ItemDetail/ItemDetail";
import "./ItemDetailContainer.css"; 

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { db } from "../../utils/firebase";
import {doc, getDoc} from "firebase/firestore";


const ItemDetailContainer = ()=> {


    const {productId} = useParams(); 

    const [item, setItem] = useState({}); 
    
    const [isLoading, setIsLoading] = useState(true);

useEffect(()=>{
    const getProducto = async()=>{        
        const queryRef = doc(db,"Productos",productId);
        const response = await getDoc(queryRef);
        const newItem = {
            id: response.id,
            ...response.data(),
        }
        
        setItem(newItem)
        setIsLoading(false)
    }
    getProducto();
},[productId])

    return (
        <>
        <div className="detailContainer">
        {
            !isLoading ? (      
        <ItemDetail viewDetail={item} classname="detailContainer"/> 
                ) : (
                    <div id="loaderContainer"> Cargando Productos...</div>
                )
}</div>
        </>              
    );
}

export default ItemDetailContainer;