
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";
import Item from "../Item/Item";

import { useParams } from "react-router-dom";

import { useState, useEffect } from "react";

import {db} from "../../utils/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { async } from "@firebase/util";

const ItemListContainer = ()=> {
    const {categoryId} = useParams(); 
    
    const [items, setItems] = useState([]); 
    console.log(items)

useEffect( ()=>{ 

    const queryReference = !categoryId 
                    ?
                    collection(db, "Productos")
                    :
                    query(collection(db, "Productos"), where("category","==",categoryId)); 

    getDocs(queryReference)
        .then(resp => setItems(resp.docs.map(prod => ({id: prod.id, ...prod.data()}))))
        .catch(err => console.error(err))

}, [categoryId])   

    return (
        <>
        <div className="listContainer">
        {
            items.length>0 ? (     
        <ItemList productsList={items} classname="listContainer"/>
                ) : (
                    <div id="loaderContainer"> Cargando Productos...</div>
                )
}</div>
        </>               
    )
}

export default ItemListContainer;