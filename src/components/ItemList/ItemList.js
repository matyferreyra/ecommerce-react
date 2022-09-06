//Este componente creará una LISTA DE PRODUCTOS por medio de un MAP

import Item from "../Item/Item";

const ItemList = ({productsList}) => { //itemList es un objeto
    return (
        <>
            {productsList.map((producto) => { //ESTOY RETORNANDO UNA NUEVA LISTA DE ELEMENTOS JSX QUE ES CADA UNO DE MIS PRODUCTOS
                return (
                    <Item
                        key={producto.id}
                        image={producto.image}
                        name={producto.name}
                        description={producto.description}
                        price={producto.price}
                        stock={producto.stock}
                    />
                );
            })}        
        </>
    );
};

export default ItemList;