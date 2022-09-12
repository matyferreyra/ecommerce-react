import data from "./mock-data";
import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";


const ItemListContainer = ()=> {
    
    const [items, setItems] = useState([]); //items seria una variable, que es donde se guardara finalmente toda la información que se traiga del MOCKDATA y setItems el método por el cual se actualiza la "variable". Se inicializa como un array vacio.

    const getData = new Promise ((resolve, reject) => { //EL SEGMENTO DE LINEA 16 A 21 EMULA UNA PETICIÓN A UNA API, QUE DEMORA 2SEG EN TRAER LOS DATOS
    setTimeout(() => {
        resolve (data); // 2DO PASO: En DATA, por medio de una PROMISE, se guarda la respuesta a la peticion de información que devuelve la API mock-data y que donde esta el array de productos.
    }, 2000);
});

    useEffect(() => {
        getData.then((result) => { // 1ER PASO: EN ESTE USEEFFECT SE HACE LA PETICION DE DATOS AL MODCKDATA PARA QUE ESTOS SE GUARDEN LUEGO EN EL STATE DEL COMPONENTE QUE ESTAMOS CREANDO EN LA LINEA 9.
        setItems(result); //3ER PASO: A PARTIR DEL GETDATA SE RESUELVE LA PETICIÓN AL API (DATA), QUE SE CAPTURE ESA RESPUESTA EN "RESULT"
        // console.log(result);
        });
    }, []);

    return (
        <>
        <div className="listContainer">
        {
            items.length>0 ? (     // aplicamos un ternario en donde la validación determina de que en caso de que no haya item alguno se muestre el mensaje de " cargando productos", y si los hay directamente renderiza el listado de productos  
        <ItemList productsList={items} classname="listContainer"/>
                ) : (
                    <div> Cargando Productos...</div>
                )
}</div>
        </>
        // <div>
        //     <p>{titulo}</p>  
        // </div>                
    )
}

export default ItemListContainer;