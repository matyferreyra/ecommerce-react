
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";
import Item from "../Item/Item";

import { useParams } from "react-router-dom";

import { useState, useEffect } from "react";

import data from "./mock-data";
import {db} from "../../utils/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { async } from "@firebase/util";





const ItemListContainer = ()=> {
    const {categoryId} = useParams(); //acá estamos desestructurando un objeto y capturandolo (definiendo) en la variable "categoryId" como una ruta dinámica
    const [items, setItems] = useState([]); //items seria una variable, que es donde se guardara finalmente toda la información que se traiga del MOCKDATA y setItems el método por el cual se actualiza la "variable". Se inicializa como un array vacio.

    const getData = new Promise ((resolve, reject) => { //EL SEGMENTO DE LINEA 16 A 21 EMULA UNA PETICIÓN A UNA API, QUE DEMORA 2SEG EN TRAER LOS DATOS
    setTimeout(() => {
        resolve (data); // 2DO PASO: En DATA, por medio de una PROMISE, se guarda la respuesta a la peticion de información que devuelve la API mock-data y que donde esta el array de productos.
    }, 2000);
});

    useEffect(()=>{ //este useEffect es una peticion a una base de datos creada en FIREBASE. (Esta peticion se puede hacer con un ASYNC o con un THEN o CATCH).

        // const queryReference = !categoryId ? collection (db, "Productos") : query(collection(db,"productos"), where("category","==","categoryId")); //esta es la manera optimizada y simplificada de hacer lo siguiente:

        if (!categoryId){ //ES DECIR QUE SI NO ESTAMOS PASANDO UN FILTRO (POR MEDIO DEL CategoryId) TIENE QUE MOSTRAR TODOS LOS PRODUCTOS.
            const getData = async()=>{
                //1) creamos la referencia al elemento de la base de datos por medio de un query. En este caso devuelve el listado de ITEMS SIN FILTRAR.
                const queryReference = query(db, "Productos");

                // 2) solicitud y le pasamos al metódo nuestra referencia anterior
                const response = await getDocs(queryReference);
                // console.log(response);

                //por cada producto dentro del arreglo de docs de firebase estamos creando un nuevo objeto uniendo con un spread operator tanto la información del producto como el ID del producto 
                const productos = response.docs.map(item =>{ //Acá el RESPONSE.DOCS es una ARRAY DE DOCUMENTOS, y con el método de arrays MAP, el parametro que tenemos que pasar es el elemento que se está iterando en ese momento, que es el ITEM en este caso, y entonces por cada uno de esos ITEMS que vamos a ir iterando vamos a crear un nuevo objeto que es el ITEM en si que debe tener tanto la información del producto como la ID del producto mismo, ya que ambos datos llegan por separado por la propia estructura tipada que tiene FIREBASE. Los unimos en un único objeto usando un SPREAD OPERATOR.
                    const newItem = {
                        id: item.id,
                        ...item.data(),                    
                    }                
                    return newItem; //este return equivale a hacer un "Push" que irá guardando los items en el nuevo array mapeado y queda almacenado en la variable "productos" de la linea 40.
                });
                // console.log(productos);
                setItems(productos); //Ahora sí, luego de toda la promesa anterior, estamos en condiciones de renderizar los productos obtenidos del Firebase, para eso usamos el state creado "setItems" y como parámetro le pasamos el nuevo objeto mapeado de items llamado "productos" de la linea 40.
                
                getData();
            }
    } else {
        const queryReference = query(collection(db, "Productos"), where("category","==","categoryId")); //Creamos un regundo return condiciional con la referencia al elemento de la base de datos por medio de un query. En este caso devuelve el listado de ITEMS FILTRADO. El filtro es dinámico y se lo estamos pasando por medio de "categoryId", como tercer parametro dentro del método where.
        
        const response = await getDocs(queryReference);
                // console.log(response);

                //por cada producto dentro del arreglo de docs de firebase estamos creando un nuevo objeto uniendo con un spread operator tanto la información del producto como el ID del producto 
                const productos = response.docs.map(item =>{ //Acá el RESPONSE.DOCS es una ARRAY DE DOCUMENTOS, y con el método de arrays MAP, el parametro que tenemos que pasar es el elemento que se está iterando en ese momento, que es el ITEM en este caso, y entonces por cada uno de esos ITEMS que vamos a ir iterando vamos a crear un nuevo objeto que es el ITEM en si que debe tener tanto la información del producto como la ID del producto mismo, ya que ambos datos llegan por separado por la propia estructura tipada que tiene FIREBASE. Los unimos en un único objeto usando un SPREAD OPERATOR.
                    const newItem = {
                        id: item.id,
                        ...item.data(),                    
                    }                
                    return newItem; //este return equivale a hacer un "Push" que irá guardando los items en el nuevo array mapeado y queda almacenado en la variable "productos" de la linea 40.
                });
                // console.log(productos);
                setItems(productos); //Ahora sí, luego de toda la promesa anterior, estamos en condiciones de renderizar los productos obtenidos del Firebase, para eso usamos el state creado "setItems" y como parámetro le pasamos el nuevo objeto mapeado de items llamado "productos" de la linea 57.
    }        // getData();
    }, [categoryId])

    
    // useEffect(() => { //Este useEffect es una petición a una base de datos ficticia creada localmente que emula una peticion a una base externa.

    //     getData.then((result) => { // 1ER PASO: EN ESTE USEEFFECT SE HACE LA PETICION DE DATOS AL MODCKDATA PARA QUE ESTOS SE GUARDEN LUEGO EN EL STATE DEL COMPONENTE QUE ESTAMOS CREANDO EN LA LINEA 9.

    //     if (categoryId){ //6TO PASO: CREAMOS UNA VALIDACIÓN PARA QUE CUANDO HAYA UNA CATEGORIA QUE NO ESTE DEFINIDA NO MUESTRE NINGÚN PRODUCTO
    //         const filterItems = result.filter(item=>item.category === categoryId); //4TO PASO: FILTRAMOS TODOS LOS ELEMENTOS DE UN ARREGLO (DENTRO DE NUEVO ARREGLO) QUE CUMPLAN CON CIERTA CONDICION, ESA CONDICION ES LA DE "CATEGORY"

    //         setItems(filterItems); //3ER PASO: A PARTIR DEL GETDATA SE RESUELVE LA PETICIÓN AL API (DATA), QUE SE CAPTURE ESA RESPUESTA EN "RESULT"
    //     // console.log(result);
    //     } else {
    //             setItems(result);
    //     }

    //     });
    // }, [categoryId]); // 5TO PASO: Para que el filtro se ejecute yo tengo que colocar dentro de las dependencias [] mi variable de categoryId. Acá paso la dependencia, es decir a lo que tiene que poner el ojo para que el componente se renderice las veces que esa dependencia se actualice.

    return (
        <>
        <div className="listContainer">
        {
            items.length>0 ? (     // aplicamos un ternario en donde la validación determina de que en caso de que no haya item alguno se muestre el mensaje de " cargando productos", y si los hay directamente renderiza el listado de productos  
        <ItemList productsList={items} classname="listContainer"/> //acá estoy enviando "items" (de la linea 21) como props 
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