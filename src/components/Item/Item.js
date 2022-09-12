import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({id, image, name, description, price, stock}) => {
    return <div className="cardContainer">
        <img src={image} alt={name} className="sizeImg"/>
        <h1 className="title">{name}</h1>
        <p className="descript">{description}</p>
        <p className="price">{price}</p> 
        <p className="stock">{stock}</p>
        <Link to={""}>
            <button className="buttonDetail"> Ver detalle del producto</button>
        </Link>
    </div>;
}

export default Item;