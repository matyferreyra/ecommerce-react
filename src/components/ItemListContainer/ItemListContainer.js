import data from "./mock-data";
import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";


const ItemListContainer = ({titulo})=> {
    const [items, setItems] = useState([]);

    const getData = new Promise ((resolve, reject) => { //EL SEGMENTO DE LINEA 8 A 12 EMULA UNA PETICIÓN A UNA API, QUE DEMORA 2SEG EN TRAER LOS DATOS
    setTimeout(() => {
        resolve (data); //Acá esta la DATA que devuelve la petición al API.
    }, 2000);
});

useEffect(() => {
    getData.then((result) => { //EN ESTE USEEFFECT LEVANTAMOS LA DATA PARA QUE ESTE LA PASE AL STATE DEL COMPONENTE QUE ESTAMOS CREANDO EN LA LINEA 6
        setItems(result);
        // console.log(result);
    });
}, []);

    return (
        <>
        {
            items.length>0 ? (        
        <ItemList productsList={items}/>
                ) : (
                    <div> Cargando Productos...</div>
                )
}
        </>
        // <div>
        //     <p>{titulo}</p>  
        // </div>                
    )
}

export default ItemListContainer;