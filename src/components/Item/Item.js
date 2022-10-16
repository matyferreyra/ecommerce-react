import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({id, image, name, description, price, stock}) => {
    return <div className="cardContainer">
        <div>
            <img src={image} alt={name} className="sizeImg"/>
            <h1 className="title">{name}</h1>
            <p className="descript">{description}</p>
            <p className="price">Precio unitario: {price}</p> 
            <p className="stock">{stock}</p>
        </div>
        <div>
        <Link to={`/item/${id}`}>
            <button className="buttonViewDetail"> Ver detalle del producto</button>
        </Link>
        </div>
        </div>;
}

export default Item;