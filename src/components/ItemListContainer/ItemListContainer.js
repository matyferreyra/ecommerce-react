import data from "./mock-data";
import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";
import { useParams } from "react-router-dom";
import Item from "../Item/Item";

const ItemListContainer = ()=> {
    const {categoryId} = useParams(); //acá estamos desestructurando un objeto y capturandolo (definiendo) en la variable "categoryId" como una ruta dinámica
    const [items, setItems] = useState([]); //items seria una variable, que es donde se guardara finalmente toda la información que se traiga del MOCKDATA y setItems el método por el cual se actualiza la "variable". Se inicializa como un array vacio.

    const getData = new Promise ((resolve, reject) => { //EL SEGMENTO DE LINEA 16 A 21 EMULA UNA PETICIÓN A UNA API, QUE DEMORA 2SEG EN TRAER LOS DATOS
    setTimeout(() => {
        resolve (data); // 2DO PASO: En DATA, por medio de una PROMISE, se guarda la respuesta a la peticion de información que devuelve la API mock-data y que donde esta el array de productos.
    }, 2000);
});

    useEffect(() => {
        getData.then((result) => { // 1ER PASO: EN ESTE USEEFFECT SE HACE LA PETICION DE DATOS AL MODCKDATA PARA QUE ESTOS SE GUARDEN LUEGO EN EL STATE DEL COMPONENTE QUE ESTAMOS CREANDO EN LA LINEA 9.
        if (categoryId){ //6TO PASO: CREAMOS UNA VALIDACIÓN PARA QUE CUANDO HAYA UNA CATEGORIA QUE NO ESTE DEFINIDA NO MUESTRE NINGÚN PRODUCTO
            const filterItems = result.filter(item=>item.category === categoryId); //4TO PASO: FILTRAMOS TODOS LOS ELEMENTOS DE UN ARREGLO (DENTRO DE NUEVO ARREGLO) QUE CUMPLAN CON CIERTA CONDICION, ESA CONDICION ES LA DE "CATEGORY"
            setItems(filterItems); //3ER PASO: A PARTIR DEL GETDATA SE RESUELVE LA PETICIÓN AL API (DATA), QUE SE CAPTURE ESA RESPUESTA EN "RESULT"
        // console.log(result);
        } else {
                setItems(result);
        }

        });
    }, [categoryId]); // 5TO PASO: Para que el filtro se ejecute yo tengo que colocar dentro de las dependencias [] mi variable de categoryId. Acá paso la dependencia, es decir a lo que tiene que poner el ojo para que el componente se renderice las veces que esa dependencia se actualice.

    return (
        <>
        <div className="listContainer">
        {
            items.length>0 ? (     // aplicamos un ternario en donde la validación determina de que en caso de que no haya item alguno se muestre el mensaje de " cargando productos", y si los hay directamente renderiza el listado de productos  
        <ItemList productsList={items} classname="listContainer"/> //acá estoy enviando "items" (de la linea 10) como props 
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