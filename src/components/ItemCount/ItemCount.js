import "./ItemCount.css";
import {useState} from "react";


const ItemCount = (props) =>{
    const [add,setAdd] = useState(props.stock); //función para sumar items
        const more = () => {
            setAdd (add + 1)
        }
    const [subtract,setSubtract] = useState(props.stock); //función para quitar items
        const less = () => {
            setSubtract (subtract - 1)
        }
    return (
        <>
            <div className="order">
                <button className="butt" onClick={more}>+</button>
                {/* <div>Cantidad de Items</div> */}
                <h1>{props.stock}</h1>
                <button className="butt" onClick={less}>-</button>
            </div>
        </>
);
};

export default ItemCount;