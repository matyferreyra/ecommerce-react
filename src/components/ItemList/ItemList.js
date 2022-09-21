//Este componente creará una LISTA DE PRODUCTOS por medio de un MAP

import Item from "../Item/Item";
import "./ItemList.css";

const ItemList = ({productsList}) => { //HAY UN COMPONENTE (ITEMLIST) AL CUAL LE ESTOY PASANDO COMO ARGUMENTO UN OBJETO. 
    return (
        <>
            {productsList.map((producto) => { //AL OBJETO LO "MAPEO" PARA RETORNARLO (RENDERIZARLO) EN UNA NUEVA LISTA DE ELEMENTOS JSX (CARD LIST) QUE ES EN DEFINITICA CADA UNO DE MIS PRODUCTOS TOMANDO COMO PROPIEDADES LAS QUE ESTÁN DECLARADAS EN EL ELEMENTO "ITEM"
                return (
                    <Item
                        key={producto.id}
                        id={producto.id}
                        image={producto.image}
                        name={producto.name}
                        // description={producto.description}
                        price={producto.price}
                        // stock={producto.stock}
                    />                    
                );
            })}        
        </>
    );
};

export default ItemList;