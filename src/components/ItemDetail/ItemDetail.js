import "./ItemDetail.css";
import ItemCount from '../../components/ItemCount/ItemCount';
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";



const ItemDetail = ({viewDetail}) => {        
    const { addItem } = useContext(CartContext);

    const onAdd = (counter) => {
        console.log(counter)   
        addItem(viewDetail, counter) 
    } 

    return (
        <>
        <div id="imageContainer">
        <img src={viewDetail.image} alt={viewDetail.name} className="sizeImgDetail"/>
        </div>                        
        <>
        <p id="titleProduct">{viewDetail.name}</p>
        <p id="descriptionProduct">{viewDetail.description}</p>
        <p id="priceProduct">Precio unitario: $ {viewDetail.price}</p> 
        <p id="stockProduct">Stock actual: {viewDetail.stock} unidades</p>
        <ItemCount stock={viewDetail.stock} initial={1} onAdd={onAdd}/>         
        </>
        </>
    )
}

export default ItemDetail;