import "./ItemDetail.css";
import Item from "../Item/Item"
import ItemCount from '../../components/ItemCount/ItemCount';


const ItemDetail = ({viewDetail}) => {
    
    const onAdd = (counter) => {
        console.log(counter);
    }

    return (
        <>
        <img src={viewDetail.image} alt={viewDetail.name} className="sizeImgDetail"/>
        <h1 className="title">{viewDetail.name}</h1>
        <p className="descript">{viewDetail.description}</p>
        <p className="price">{viewDetail.price}</p> 
        <p className="stock">{viewDetail.stock}</p>
        <ItemCount stock={10} initial={1} onAdd={onAdd}/>  
        </>
    )
}

export default ItemDetail;