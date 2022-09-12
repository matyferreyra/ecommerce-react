import "./ItemDetail.css";
import Item from "../Item/Item"

const ItemDetail = ({viewDetail}) => {
    console.log(viewDetail);
    return (
        <>
        <img src={viewDetail.image} alt={viewDetail.name} className="sizeImgDetail"/>
        <h1 className="title">{viewDetail.name}</h1>
        <p className="descript">{viewDetail.description}</p>
        <p className="price">{viewDetail.price}</p> 
        <p className="stock">{viewDetail.stock}</p>
        </>
    )
}

export default ItemDetail;