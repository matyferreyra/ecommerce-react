// import {productItem} from "../ItemListContainer/mock-data";
import { useEffect, useState } from "react";
// import ItemList from "../ItemList/ItemList";
import "./ItemDetailContainer.css"; 
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";


const ItemDetailContainer = ()=> {
    const {productId} = useParams(); ////acá estamos desestructurando un objeto y capturandolo (definiendo) en la variable "id" como una ruta dinámica

    const [item, setItem] = useState({}); //items seria una variable, y setItems el método por el cual se actualiza la variable
    
    const getData = (id) => {
        return new Promise ((resolve,reject) => { //EL SEGMENTO DE LINEA 15 A 21 EMULA UNA PETICIÓN A UNA API, QUE DEMORA 2SEG EN TRAER LOS DATOS. Esta es una función para retornar un producto.
            
            setTimeout(() => {
                const detail = item.find(item =>item.id === parseInt(id)); //aca estamos buscando dentro de nuestro arreglo cual seria el primer elemento que cumpla la condicion de que el id sea igual al parametro que yo le paso por la URL que estamos capturando en la variable id de la linea 10. Y una vez que lo encuentra ya lo podemos retornar dentro del siguiente resolve....
        resolve (detail); //Acá esta la DATA que devuelve la petición al API. productItem
    }, 2000);
})};

useEffect(() => {
    getData.then(result => { //EN ESTE USEEFFECT LEVANTAMOS LA DATA PARA QUE ESTE LA PASE AL STATE DEL COMPONENTE QUE ESTAMOS CREANDO EN LA LINEA 12
        setItem(result);        
    });

    getData.then(resol => setItem(resol));
}, [id]); //en esta dependencia pasamos el id

    return (
        <ItemDetail viewDetail={item}/>
    );
}

export default ItemDetailContainer;