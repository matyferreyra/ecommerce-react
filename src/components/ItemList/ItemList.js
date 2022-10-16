import Item from "../Item/Item";

const ItemList = ({productsList}) => {  
    return (
        <>
            {productsList.map((producto) => { 
                return (
                    <Item
                        key={producto.id}
                        id={producto.id}
                        image={producto.image}
                        name={producto.name}                        
                        price={producto.price}                        
                    />                    
                );
            })}        
        </>
    );
};

export default ItemList;