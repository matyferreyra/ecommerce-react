import {productItem} from "../ItemListContainer/mock-data";
import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import "./ItemDetailContainer.css"; 
import ItemDetail from "../ItemDetail/ItemDetail";


const ItemDetailContainer = ()=> {
    const [item, setItem] = useState({}); //items seria una variable, y setItems el método por el cual se actualiza la variable

    const getData = new Promise ((resolve) => { //EL SEGMENTO DE LINEA 9 A 12 EMULA UNA PETICIÓN A UNA API, QUE DEMORA 2SEG EN TRAER LOS DATOS
    setTimeout(() => {
        resolve (productItem); //Acá esta la DATA que devuelve la petición al API.
    }, 2000);
});

useEffect(() => {
    getData.then(result => { //EN ESTE USEEFFECT LEVANTAMOS LA DATA PARA QUE ESTE LA PASE AL STATE DEL COMPONENTE QUE ESTAMOS CREANDO EN LA LINEA 6
        setItem(result);
        // console.log(result);
    });

    getData.then(resol =>setItem(resol));
}, []);

    return (
        <ItemDetail viewDetail={item}/>
    );
}

export default ItemDetailContainer;